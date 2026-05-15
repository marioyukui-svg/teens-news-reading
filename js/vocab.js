/**
 * ============================================
 *  和小熊小企鹅背单词 🎮
 *  选择题闯关 + 角色成长系统
 * ============================================
 */

'use strict';

// ---------- 等级系统 ----------
const LEVELS = [
  { minScore: 0,    bear: '🥚',  penguin: '🥚',  title: '🥚 蛋',    desc: '快来学习第一个单词吧！' },
  { minScore: 30,   bear: '🧸',  penguin: '🐤',  title: '🐣 幼儿园',  desc: '小熊和小企鹅上幼儿园啦' },
  { minScore: 100,  bear: '🐻',  penguin: '🐧',  title: '🎒 小学生',  desc: '背起书包上学去' },
  { minScore: 300,  bear: '🦊',  penguin: '🦉',  title: '📚 中学生',  desc: '知识越来越丰富了' },
  { minScore: 600,  bear: '🦸',  penguin: '🧙',  title: '🎓 高中生',  desc: '学霸附体，越学越强' },
  { minScore: 1000, bear: '👑',  penguin: '👑',  title: '🏆 毕业啦',  desc: '单词大师！小熊和小企鹅毕业啦' },
];

// ---------- 游戏状态 ----------
let vocabState = {
  score: 0,
  streak: 0,
  bestStreak: 0,
  answered: 0,
  correct: 0,
  wrongWords: [],
  currentWord: null,
  options: [],
  mode: 'quiz',
  filterLevel: '', // '' = 全部, 或具体级别
  filterTopic: '', // '' = 全部, 或具体主题
};

// 可用级别和主题列表
const VOCAB_LEVELS = ['Pre A1', 'A1', 'A1-A2', 'A2', 'B1', 'B2', '未分级'];
const VOCAB_LEVEL_LABELS = {
  'Pre A1': 'Pre A1',
  'A1': 'A1',
  'A1-A2': 'A1→A2',
  'A2': 'A2',
  'B1': 'B1',
  'B2': 'B2',
  '未分级': '未分级'
};

function getUniqueTopics() {
  const topics = new Set();
  for (const w of vocabWords) {
    if (w.topic && w.topic !== '通用') topics.add(w.topic);
  }
  return ['全部', ...Array.from(topics).sort()];
}

function getFilteredWords() {
  return vocabWords.filter(w => {
    if (vocabState.filterLevel && w.level !== vocabState.filterLevel) return false;
    if (vocabState.filterTopic && w.topic !== vocabState.filterTopic) return false;
    return true;
  });
}

// ---------- 初始化 / 加载存档 ----------
function loadVocabState() {
  try {
    const saved = localStorage.getItem('vocabGame');
    if (saved) {
      const parsed = JSON.parse(saved);
      vocabState.score = parsed.score || 0;
      vocabState.streak = parsed.streak || 0;
      vocabState.bestStreak = parsed.bestStreak || 0;
      vocabState.answered = parsed.answered || 0;
      vocabState.correct = parsed.correct || 0;
      vocabState.wrongWords = parsed.wrongWords || [];
      vocabState.filterLevel = parsed.filterLevel || '';
      vocabState.filterTopic = parsed.filterTopic || '';
    }
  } catch(e) {}
}

function saveVocabState() {
  try {
    localStorage.setItem('vocabGame', JSON.stringify({
      score: vocabState.score,
      streak: vocabState.streak,
      bestStreak: vocabState.bestStreak,
      answered: vocabState.answered,
      correct: vocabState.correct,
      wrongWords: vocabState.wrongWords,
      filterLevel: vocabState.filterLevel,
      filterTopic: vocabState.filterTopic,
    }));
  } catch(e) {}
}

// ---------- 等级计算 ----------
function getLevel(score) {
  let level = LEVELS[0];
  for (const l of LEVELS) {
    if (score >= l.minScore) level = l;
  }
  return level;
}

function getNextLevelScore(score) {
  for (const l of LEVELS) {
    if (l.minScore > score) return l.minScore;
  }
  return score;
}

// ---------- 音效（简易 beep） ----------
function playBeep(freq, duration, type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

function playCorrectSound() {
  playBeep(523, 0.1, 'sine');
  setTimeout(() => playBeep(659, 0.1, 'sine'), 100);
  setTimeout(() => playBeep(784, 0.15, 'sine'), 200);
}

function playWrongSound() {
  playBeep(300, 0.2, 'square');
  setTimeout(() => playBeep(250, 0.3, 'square'), 150);
}

function playLevelUpSound() {
  playBeep(523, 0.1);
  setTimeout(() => playBeep(659, 0.1), 120);
  setTimeout(() => playBeep(784, 0.1), 240);
  setTimeout(() => playBeep(1047, 0.3), 360);
}

// ---------- 随机选取 ----------
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandomWords(count, exclude, sourcePool) {
  const src = sourcePool || vocabWords;
  const pool = src.filter(w => w.word !== exclude);
  return shuffleArray(pool).slice(0, count);
}

// ---------- 生成题目 ----------
function generateQuestion() {
  let pool = getFilteredWords();
  if (pool.length < 4) {
    // 筛选结果太少时用全部
    pool = vocabWords;
  }

  // 优先出答错的词
  if (vocabState.wrongWords.length > 0) {
    const wrongInPool = vocabState.wrongWords
      .map(id => pool.find(w => w.word === id))
      .filter(Boolean);
    if (wrongInPool.length > 3) {
      pool = shuffleArray(wrongInPool).slice(0, 20).concat(shuffleArray(pool).slice(0, 10));
    }
  }

  const word = pool[Math.floor(Math.random() * pool.length)];
  const wrongOptions = pickRandomWords(3, word.word, getFilteredWords());
  const options = shuffleArray([
    { text: word.meaning, correct: true },
    { text: wrongOptions[0].meaning, correct: false },
    { text: wrongOptions[1].meaning, correct: false },
    { text: wrongOptions[2].meaning, correct: false },
  ]);

  vocabState.currentWord = word;
  vocabState.options = options;
}

// ---------- 渲染游戏主页 ----------
function renderVocabGame(container) {
  loadVocabState();
  const level = getLevel(vocabState.score);
  const nextScore = getNextLevelScore(vocabState.score);
  const progress = nextScore > vocabState.score
    ? ((vocabState.score - level.minScore) / (nextScore - level.minScore)) * 100
    : 100;

  const filteredCount = getFilteredWords().length;
  const totalCount = vocabWords.length;

  container.innerHTML = `
    <div class="vocab-game">
      <!-- 筛选工具栏 -->
      <div class="vocab-filter-bar">
        <div class="vocab-filter-row">
          <span class="vocab-filter-label">难度</span>
          <div class="vocab-filter-btns">
            <button class="vocab-filter-btn ${!vocabState.filterLevel ? 'active' : ''}" onclick="setVocabLevelFilter('')">全部</button>
            ${VOCAB_LEVELS.map(l => `
              <button class="vocab-filter-btn ${vocabState.filterLevel === l ? 'active' : ''}" onclick="setVocabLevelFilter('${l}')">${VOCAB_LEVEL_LABELS[l]}</button>
            `).join('')}
          </div>
        </div>
        <div class="vocab-filter-row">
          <span class="vocab-filter-label">主题</span>
          <div class="vocab-filter-btns">
            <button class="vocab-filter-btn ${!vocabState.filterTopic ? 'active' : ''}" onclick="setVocabTopicFilter('')">全部</button>
            ${getUniqueTopics().filter(t => t !== '全部').slice(0, 15).map(t => `
              <button class="vocab-filter-btn ${vocabState.filterTopic === t ? 'active' : ''}" onclick="setVocabTopicFilter('${t}')">${t}</button>
            `).join('')}
          </div>
        </div>
        <div class="vocab-filter-count">当前词库：${filteredCount} / ${totalCount} 词</div>
      </div>

      <!-- 角色区域 -->
      <div class="vocab-characters">
        <div class="vocab-char-box">
          <div class="vocab-char-icon" id="vocabBearIcon">${level.bear}</div>
          <div class="vocab-char-name">小熊</div>
          <div class="vocab-level-title">${level.title}</div>
        </div>
        <div class="vocab-score-area">
          <div class="vocab-score">${vocabState.score}</div>
          <div class="vocab-score-label">积分</div>
          <div class="vocab-progress-bar">
            <div class="vocab-progress-fill" style="width:${Math.min(100, progress)}%"></div>
          </div>
          <div class="vocab-next-level">下一级：${nextScore}分</div>
        </div>
        <div class="vocab-char-box">
          <div class="vocab-char-icon" id="vocabPenguinIcon">${level.penguin}</div>
          <div class="vocab-char-name">小企鹅</div>
          <div class="vocab-level-title">${level.title}</div>
        </div>
      </div>

      <!-- 状态栏 -->
      <div class="vocab-stats">
        <span class="vocab-stat">✅ ${vocabState.correct}/${vocabState.answered}</span>
        <span class="vocab-stat">🔥 连对 ${vocabState.streak}</span>
        <span class="vocab-stat">🏆 最佳 ${vocabState.bestStreak}</span>
      </div>

      <!-- 描述 -->
      <div class="vocab-desc">${level.desc}</div>

      <!-- 游戏模式选择 -->
      <div class="vocab-mode-select">
        <button class="vocab-mode-btn vocab-mode-btn-primary" onclick="startVocabQuiz()">
          🎯 开始闯关
        </button>
        <button class="vocab-mode-btn vocab-mode-btn-secondary" onclick="startVocabFlashcard()">
          📖 快速浏览
        </button>
      </div>

      ${vocabState.answered > 0 ? `
        <div class="vocab-reset-area">
          <button class="vocab-reset-btn" onclick="resetVocabScore()">🔄 重置积分</button>
        </div>
      ` : ''}
    </div>
  `;
}

// ---------- 渲染答题界面 ----------
function startVocabQuiz() {
  vocabState.mode = 'quiz';
  generateQuestion();
  renderQuiz(document.getElementById('app'));
}

function startVocabFlashcard() {
  vocabState.mode = 'flashcard';
  vocabState.currentWord = vocabWords[Math.floor(Math.random() * vocabWords.length)];
  renderFlashcard(document.getElementById('app'));
}

// ---------- 答题界面 ----------
function renderQuiz(container) {
  const word = vocabState.currentWord;
  if (!word) { renderVocabGame(container); return; }

  container.innerHTML = `
    <div class="vocab-game">
      <!-- 角色（缩小版） -->
      <div class="vocab-characters vocab-characters-small">
        <div class="vocab-char-box">
          <div class="vocab-char-icon" id="vocabBearIcon">${getLevel(vocabState.score).bear}</div>
        </div>
        <div class="vocab-quiz-stats">
          <span class="vocab-stat">🌟 ${vocabState.score}</span>
          <span class="vocab-stat">🔥 ${vocabState.streak}</span>
          <span class="vocab-stat">✅ ${vocabState.correct}/${vocabState.answered}</span>
        </div>
        <div class="vocab-char-box">
          <div class="vocab-char-icon" id="vocabPenguinIcon">${getLevel(vocabState.score).penguin}</div>
        </div>
      </div>

      <!-- 单词卡片 -->
      <div class="vocab-quiz-card">
        ${word.level !== '未分级' ? `<div class="vocab-word-badges"><span class="vocab-badge vocab-badge-level">${word.level}</span>${word.topic !== '通用' ? `<span class="vocab-badge vocab-badge-topic">${word.topic}</span>` : ''}</div>` : ''}
        <div class="vocab-word-display">${word.word}</div>
        ${word.pos ? `<div class="vocab-word-pos">${word.pos}</div>` : ''}
      </div>

      <!-- 选项 -->
      <div class="vocab-options" id="vocabOptions">
        ${vocabState.options.map((opt, i) => `
          <button class="vocab-option" data-index="${i}" onclick="answerVocab(${i})">
            <span class="vocab-option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="vocab-option-text">${opt.text}</span>
          </button>
        `).join('')}
      </div>

      <!-- 反馈区 -->
      <div class="vocab-feedback" id="vocabFeedback"></div>

      <button class="vocab-back-btn" onclick="renderVocabGame(document.getElementById('app'))">← 返回首页</button>
    </div>
  `;
}

// ---------- 答题逻辑 ----------
function answerVocab(index) {
  const selected = vocabState.options[index];
  const correct = vocabState.options.find(o => o.correct);

  // 禁用所有按钮
  document.querySelectorAll('.vocab-option').forEach(b => b.disabled = true);

  if (selected.correct) {
    // 答对
    vocabState.score += 10;
    vocabState.streak += 1;
    if (vocabState.streak > vocabState.bestStreak) {
      vocabState.bestStreak = vocabState.streak;
    }

    // 连对奖励
    let bonusText = '';
    if (vocabState.streak >= 3 && vocabState.streak % 3 === 0) {
      const bonus = vocabState.streak;
      vocabState.score += bonus;
      bonusText = ` 🔥 连对 ${vocabState.streak} 题！奖励 +${bonus} 分！`;
    }

    vocabState.correct += 1;
    vocabState.answered += 1;

    // 从错词表中移除
    vocabState.wrongWords = vocabState.wrongWords.filter(w => w !== vocabState.currentWord.word);

    // 标记正确选项
    document.querySelectorAll('.vocab-option')[index].classList.add('correct');
    playCorrectSound();

    // 检查是否升级
    const oldLevel = getLevel(vocabState.score - 10 - (bonusText ? vocabState.streak : 0));
    const newLevel = getLevel(vocabState.score);
    let levelUpHtml = '';
    if (newLevel.title !== oldLevel.title) {
      playLevelUpSound();
      levelUpHtml = `<div class="vocab-levelup">🎉 升级啦！${newLevel.title}</div>`;
    }

    document.getElementById('vocabFeedback').innerHTML = `
      <div class="vocab-feedback-correct">
        ✅ 答对了！+10分${bonusText}
        ${vocabState.currentWord.example ? `<div class="vocab-feedback-example">📖 ${vocabState.currentWord.example}</div>` : ''}
      </div>
      ${levelUpHtml}
      <button class="vocab-next-btn" onclick="nextVocabQuestion()">下一题 →</button>
    `;

  } else {
    // 答错
    document.querySelectorAll('.vocab-option')[index].classList.add('wrong');
    document.querySelectorAll('.vocab-option').forEach((b, i) => {
      if (vocabState.options[i].correct) b.classList.add('correct');
    });
    vocabState.streak = 0;
    vocabState.answered += 1;

    // 记录错词
    if (!vocabState.wrongWords.includes(vocabState.currentWord.word)) {
      vocabState.wrongWords.push(vocabState.currentWord.word);
    }

    playWrongSound();

    document.getElementById('vocabFeedback').innerHTML = `
      <div class="vocab-feedback-wrong">
        ❌ 不对哦～正确答案是：<strong>${correct.text}</strong>
        ${vocabState.currentWord.example ? `<div class="vocab-feedback-example">📖 ${vocabState.currentWord.example}</div>` : ''}
      </div>
      <button class="vocab-next-btn" onclick="nextVocabQuestion()">下一题 →</button>
    `;
  }

  saveVocabState();
}

function nextVocabQuestion() {
  generateQuestion();
  renderQuiz(document.getElementById('app'));
}

// ---------- 闪卡模式 ----------
function renderFlashcard(container) {
  const word = vocabState.currentWord || vocabWords[0];
  container.innerHTML = `
    <div class="vocab-game">
      <div class="vocab-characters vocab-characters-small">
        <div class="vocab-char-box">
          <div class="vocab-char-icon">${getLevel(vocabState.score).bear}</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:14px;color:var(--text-muted);">📖 快速浏览</div>
        </div>
        <div class="vocab-char-box">
          <div class="vocab-char-icon">${getLevel(vocabState.score).penguin}</div>
        </div>
      </div>

      <div class="vocab-flashcard" id="vocabFlashcard">
        <div class="vocab-flashcard-word">${word.word}</div>
        <div class="vocab-flashcard-hidden" id="flashcardAnswer">
          ${word.pos ? `<div class="vocab-word-pos">${word.pos}</div>` : ''}
          <div class="vocab-flashcard-meaning">${word.meaning}</div>
          ${word.example ? `<div class="vocab-flashcard-example">📖 ${word.example}</div>` : ''}
        </div>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;">
        <button class="vocab-mode-btn vocab-mode-btn-secondary" onclick="flipFlashcard()">👁️ 显示答案</button>
        <button class="vocab-mode-btn vocab-mode-btn-primary" onclick="nextFlashcard()">下一个 →</button>
      </div>

      <button class="vocab-back-btn" onclick="renderVocabGame(document.getElementById('app'))" style="margin-top:30px;">← 返回首页</button>
    </div>
  `;
}

function flipFlashcard() {
  document.getElementById('flashcardAnswer').classList.toggle('show');
  document.getElementById('flashcardAnswer').style.display = 'block';
}

function nextFlashcard() {
  const next = vocabWords[Math.floor(Math.random() * vocabWords.length)];
  vocabState.currentWord = next;
  renderFlashcard(document.getElementById('app'));
}

// ---------- 筛选控制 ----------
function setVocabLevelFilter(level) {
  vocabState.filterLevel = level;
  saveVocabState();
  renderVocabGame(document.getElementById('app'));
}

function setVocabTopicFilter(topic) {
  vocabState.filterTopic = topic;
  saveVocabState();
  renderVocabGame(document.getElementById('app'));
}

// ---------- 重置 ----------
function resetVocabScore() {
  if (confirm('确定要重置所有积分和记录吗？')) {
    vocabState.score = 0;
    vocabState.streak = 0;
    vocabState.bestStreak = 0;
    vocabState.answered = 0;
    vocabState.correct = 0;
    vocabState.wrongWords = [];
    saveVocabState();
    renderVocabGame(document.getElementById('app'));
  }
}

// 初始化游戏
loadVocabState();
