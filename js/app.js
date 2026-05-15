/**
 * ============================================
 *  时文阅读 & 和小熊小企鹅学语法
 *  统一 SPA 入口
 * ============================================
 */

'use strict';

// =============================================
//  路由
// =============================================
function getRoute() {
  const hash = window.location.hash.slice(1) || '';
  if (!hash || hash === 'home') return { page: 'home' };

  if (hash === 'reading') return { page: 'reading' };

  const articleMatch = hash.match(/^reading\/article\/(.+)$/);
  if (articleMatch) return { page: 'article', id: articleMatch[1] };

  if (hash === 'grammar') return { page: 'grammar' };
  if (hash === 'grammar/book1') return { page: 'grammar-book', book: 'book1' };
  if (hash === 'grammar/book2') return { page: 'grammar-book', book: 'book2' };

  return { page: 'home' };
}

function navigateTo(hash) {
  window.location.hash = hash;
}

function updateNavTitle(title) {
  const el = document.getElementById('navTitle');
  if (el) el.textContent = title || '';
}

// =============================================
//  渲染入口
// =============================================
function render() {
  const route = getRoute();
  const app = document.getElementById('app');

  // 更新导航栏高亮
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const routeMap = {
    'home': 'nav-home',
    'reading': 'nav-reading',
    'article': 'nav-reading',
    'grammar': 'nav-grammar',
    'grammar-book': 'nav-grammar'
  };
  const activeNav = document.getElementById(routeMap[route.page]);
  if (activeNav) activeNav.classList.add('active');

  switch (route.page) {
    case 'home':
      renderHome(app);
      updateNavTitle('');
      break;
    case 'reading':
      renderReadingList(app);
      updateNavTitle('');
      break;
    case 'article':
      const article = articles.find(a => a.id === route.id);
      if (article) {
        renderArticle(app, article);
        updateNavTitle(article.title);
      } else {
        app.innerHTML = `<div class="empty-state"><h2>文章未找到</h2><a href="#reading" style="color:var(--primary);">← 返回列表</a></div>`;
        updateNavTitle('');
      }
      break;
    case 'grammar':
      renderGrammarHome(app);
      updateNavTitle('语法学习');
      break;
    case 'grammar-book':
      renderGrammarBook(app, route.book);
      updateNavTitle(route.book === 'book1' ? '基础篇' : '进阶篇');
      break;
  }
}

// =============================================
//  门户首页
// =============================================
function renderHome(app) {
  app.innerHTML = `
    <div class="portal">
      <div class="portal-hero">
        <h1>和小熊小企鹅一起学英语</h1>
        <p>时文阅读 · 语法学习 · 一个网站</p>
      </div>
      <div class="portal-cards">
        <div class="portal-card portal-card-reading" onclick="navigateTo('reading')">
          <div class="portal-card-icon">📰</div>
          <h2>时文阅读</h2>
          <p>精选时文，逐句翻译，重点词汇，语法聚焦，批判性思维训练</p>
          <span class="portal-card-btn">进入阅读 →</span>
        </div>
        <div class="portal-card portal-card-grammar" onclick="navigateTo('grammar')">
          <div class="portal-card-icon">📘</div>
          <h2>和小熊小企鹅学语法</h2>
          <p>两册完整语法教材，从基础到进阶，小熊和小企鹅陪你一起学</p>
          <span class="portal-card-btn">进入语法 →</span>
        </div>
      </div>
    </div>
  `;
}

// =============================================
//  时文阅读 - 文章列表
// =============================================
function renderReadingList(app) {
  app.innerHTML = `
    <div class="page-header">
      <h1>📰 时文阅读</h1>
      <p>精选时文 · 逐句翻译 · 重点词汇 · 语法聚焦 · 思维训练</p>
    </div>
    <div class="article-grid" id="articleGrid">
      ${articles.map((a, idx) => `
        <div class="article-card" data-id="${a.id}" style="animation-delay:${idx * 0.08}s">
          <div class="article-card-top">
            <span class="article-card-level ${a.level}">${a.level}</span>
            <div class="article-card-tags">
              ${a.tags.map(t => `<span class="article-card-tag">${t}</span>`).join('')}
            </div>
          </div>
          <h2>${a.title}</h2>
          <div class="article-card-meta">
            <span>🎯 ${a.grade}</span>
            <span>📝 ${a.wordCount} 词</span>
          </div>
          <p class="article-card-summary">${a.summary}</p>
        </div>
      `).join('')}
    </div>
    <div style="text-align:center;padding:20px;">
      <a href="#home" style="color:var(--text-muted);font-size:14px;">← 返回首页</a>
    </div>
  `;

  document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo('reading/article/' + card.dataset.id);
    });
  });
}

// =============================================
//  语法首页
// =============================================
function renderGrammarHome(app) {
  app.innerHTML = `
    <div class="grammar-home">
      <div class="grammar-home-header">
        <h1>📘 和小熊小企鹅学语法</h1>
        <p>选择你想学习的册次</p>
      </div>
      <div class="grammar-home-grid">
        <div class="grammar-home-card" onclick="navigateTo('grammar/book1')">
          <div class="ghc-icon">🐻</div>
          <h2>基础篇</h2>
          <p>适合初学者，从词性、句子成分等基础语法开始，小熊带你一步步入门。</p>
          <ul>
            <li>名词、代词、形容词</li>
            <li>动词时态入门</li>
            <li>简单句结构</li>
            <li>介词、连词</li>
          </ul>
          <span class="portal-card-btn">开始学习 →</span>
        </div>
        <div class="grammar-home-card" onclick="navigateTo('grammar/book2')">
          <div class="ghc-icon">🐧</div>
          <h2>进阶篇</h2>
          <p>适合有基础的学习者，深入复杂语法，小企鹅带你突破难点。</p>
          <ul>
            <li>复合句与从句</li>
            <li>非谓语动词</li>
            <li>虚拟语气</li>
            <li>特殊句式</li>
          </ul>
          <span class="portal-card-btn">开始学习 →</span>
        </div>
      </div>
      <div style="text-align:center;padding:20px;">
        <a href="#home" style="color:var(--text-muted);font-size:14px;">← 返回首页</a>
      </div>
    </div>
  `;
}

// =============================================
//  语法书内容
// =============================================
function renderGrammarBook(app, book) {
  const fileName = book === 'book1'
    ? 'books/和小熊小企鹅学语法_第一册.html'
    : 'books/和小熊小企鹅学语法_第二册.html';

  app.innerHTML = `
    <div style="padding:20px 0;text-align:center;">
      <a href="#grammar" style="color:var(--text-muted);font-size:14px;">← 返回语法选择</a>
    </div>
    <div id="grammar-view">
      <div class="empty-state">
        <div class="empty-state-icon">📖</div>
        <h2>加载中...</h2>
      </div>
    </div>
  `;

  fetch(fileName)
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(html => {
      // 提取 style 和 body 内容
      const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
      const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);

      if (!bodyMatch) {
        document.getElementById('grammar-view').innerHTML = '<p style="text-align:center;color:red;">加载失败：无法解析内容</p>';
        return;
      }

      let styleContent = '';
      if (styleMatch) {
        // 将 body 选择器替换为 #grammar-view，使样式只在容器内生效
        styleContent = styleMatch[1]
          .replace(/body\s*\{/g, '#grammar-view {')
          .replace(/body\s*,/g, '#grammar-view,')
          .replace(/,(\s*)body/g, ',$1#grammar-view')
          // 移除 @page 规则
          .replace(/@page\s*\{[\s\S]*?\}/g, '');
      }

      const bodyContent = bodyMatch[1];

      document.getElementById('grammar-view').innerHTML = `
        <style>${styleContent}</style>
        ${bodyContent}
      `;
    })
    .catch(err => {
      document.getElementById('grammar-view').innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <h2>加载失败</h2>
          <p>${err.message}</p>
          <p style="font-size:13px;color:var(--text-muted);margin-top:8px;">请确认语法书文件已上传到服务器</p>
        </div>
      `;
    });
}

// =============================================
//  文章阅读页（保持原有功能）
// =============================================
function renderArticle(app, article) {
  app.innerHTML = `
    <div class="article-view" id="articleView">
      <div style="padding: 16px 0 0;">
        <a href="#reading" class="navbar-back">← 返回文章列表</a>
      </div>

      <header class="article-header">
        <span class="article-header-level ${article.level}">${article.level}</span>
        <h1>${article.title}</h1>
        <div class="article-header-meta">
          <span>🎯 ${article.grade}</span>
          <span>📝 ${article.wordCount} 词</span>
          <span>🏷️ ${article.tags.join(' / ')}</span>
        </div>
        <p class="article-header-summary">${article.summary}</p>
      </header>

      <div class="pre-reading-section">
        <h3>💭 Pre-reading 读前思考</h3>
        <ul>
          ${article.preReading.map(q => `<li>${q}</li>`).join('')}
        </ul>
      </div>

      <section class="article-body" id="articleBody">
        ${article.paragraphs.map((para, pi) => `
          <div class="paragraph" id="para-${para.id}">
            <div class="paragraph-toolbar">
              <div class="paragraph-toolbar-left">
                <span class="paragraph-number">📖 第 ${pi + 1} 段</span>
              </div>
              <button class="toggle-translate-btn" data-para="${para.id}">显示翻译</button>
            </div>
            ${para.sentences.map((s, si) => `
              <div class="sentence" id="sent-${s.id}">
                <div class="sentence-en">
                  <span class="sentence-en-text">${renderSentenceHTML(s.en, s.words)}</span>
                  <button class="play-btn" data-sentence-id="${s.id}" title="朗读此句" aria-label="朗读">🔊</button>
                </div>
                <div class="sentence-cn" id="cn-${s.id}">${s.cn}</div>
                <button class="expand-sentence-btn" data-sent="${s.id}">📚 查看单词 & 语法解析</button>
                <div class="sentence-extras" id="extras-${s.id}">
                  ${s.words && s.words.length ? `
                    <div class="sentence-words">
                      ${s.words.map(w => `
                        <span class="sentence-word-item">
                          <span class="sentence-extras-label word">📖</span>
                          <strong>${w.word}</strong>
                          <span class="sentence-word-phonetic">${w.phonetic}</span>
                          <span class="sentence-word-meaning">${w.pos ? w.pos + ' ' : ''}${w.meaning}</span>
                          ${w.example ? `<br><span style="color:var(--text-muted);font-size:12px;">例: ${w.example}</span>` : ''}
                        </span>
                        <br>
                      `).join('')}
                    </div>
                  ` : ''}
                  ${s.grammar ? `
                    <div class="sentence-grammar">
                      <span class="sentence-extras-label grammar">📐 语法：</span>${s.grammar}
                    </div>
                  ` : ''}
                  ${s.patterns && s.patterns.length ? `
                    <div class="sentence-patterns">
                      <span class="sentence-extras-label pattern">🔗 句型：</span>
                      ${s.patterns.map(p => `<span style="display:block;">• <strong>${p.pattern}</strong> — ${p.meaning}</span>`).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </section>

      <section class="keywords-section">
        <h2 class="section-title"><span class="section-title-icon">📝</span> 重点词汇</h2>
        <table class="keywords-table">
          <thead>
            <tr>
              <th style="width:18%;">单词</th>
              <th style="width:22%;">音标</th>
              <th style="width:10%;">词性</th>
              <th style="width:32%;">释义</th>
              <th style="width:18%;">级别</th>
            </tr>
          </thead>
          <tbody>
            ${article.keyWords.map(w => `
              <tr>
                <td class="keyword-word">
                  ${w.word}
                  <button class="play-word-btn" data-word="${w.word.replace(/'/g, '\u0027')}" title="朗读单词">🔊</button>
                </td>
                <td class="keyword-phonetic">${w.phonetic}</td>
                <td>${w.pos || ''}</td>
                <td>${w.meaning}</td>
                <td><span class="keyword-level ${w.level || ''}">${w.level || ''}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <section class="patterns-section">
        <h2 class="section-title"><span class="section-title-icon">🔗</span> 重点句型</h2>
        ${article.keyPatterns.map(p => `
          <div class="pattern-card">
            <div class="pattern-card-pattern">${p.pattern}</div>
            <div class="pattern-card-meaning">${p.meaning}</div>
            <div class="pattern-card-example">${p.example}</div>
          </div>
        `).join('')}
      </section>

      <section class="grammar-section">
        <h2 class="section-title"><span class="section-title-icon">📐</span> 语法聚焦</h2>
        ${article.grammarFocus.map((g, i) => `
          <div class="grammar-card" id="grammar-${i}">
            <div class="grammar-card-header" data-grammar="${i}">
              <span class="grammar-card-title">${g.title}</span>
              <span class="grammar-card-toggle">▼</span>
            </div>
            <div class="grammar-card-body">
              <div class="grammar-card-body-inner">
                <p class="grammar-card-explanation">${g.explanation}</p>
                <ul class="grammar-card-examples">
                  ${g.examples.map(e => `<li>${e}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `).join('')}
      </section>

      <section class="thinking-section">
        <h2 class="section-title"><span class="section-title-icon">🧠</span> 批判性思维</h2>
        ${article.criticalThinking.map(t => `
          <div class="thinking-card">
            <span class="thinking-card-type">${t.type}</span>
            <p class="thinking-card-question">${t.question}</p>
            <p class="thinking-card-hint">${t.hint}</p>
          </div>
        `).join('')}
      </section>

      <section class="discussion-section">
        <h2 class="section-title"><span class="section-title-icon">🗣️</span> 讨论题</h2>
        <ul class="discussion-list">
          ${article.discussionQuestions.map(q => `<li>${q}</li>`).join('')}
        </ul>
      </section>

      ${article.writingTask ? `
        <section class="writing-section">
          <h2 class="section-title"><span class="section-title-icon">✍️</span> 写作任务</h2>
          <div class="writing-card">
            <h3>${article.writingTask.title}</h3>
            <p class="writing-card-prompt">${article.writingTask.prompt}</p>
            <ul class="writing-card-tips">
              ${article.writingTask.tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </section>
      ` : ''}
    </div>
  `;

  // ---------- 绑定交互事件 ----------
  document.querySelectorAll('.toggle-translate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const paraId = btn.dataset.para;
      const para = article.paragraphs.find(p => p.id === paraId);
      if (!para) return;
      const allShow = para.sentences.every(s => {
        const el = document.getElementById('cn-' + s.id);
        return el && el.classList.contains('show');
      });
      para.sentences.forEach(s => {
        const el = document.getElementById('cn-' + s.id);
        if (el) el.classList.toggle('show', !allShow);
      });
      btn.textContent = allShow ? '显示翻译' : '隐藏翻译';
      btn.classList.toggle('active', !allShow);
    });
  });

  article.paragraphs.forEach(para => {
    para.sentences.forEach(s => {
      const cnEl = document.getElementById('cn-' + s.id);
      const enEl = document.querySelector(`#sent-${s.id} .sentence-en-text`);
      if (cnEl && enEl) {
        enEl.addEventListener('click', (e) => {
          if (e.target.classList.contains('word-highlight')) return;
          if (e.target.classList.contains('play-btn')) return;
          cnEl.classList.toggle('show');
        });
        enEl.style.cursor = 'pointer';
      }
    });
  });

  document.querySelectorAll('.expand-sentence-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sentId = btn.dataset.sent;
      const extras = document.getElementById('extras-' + sentId);
      if (extras) {
        extras.classList.toggle('show');
        btn.textContent = extras.classList.contains('show')
          ? '🔼 收起解析'
          : '📚 查看单词 & 语法解析';
      }
    });
  });

  article.grammarFocus.forEach((_, i) => {
    const header = document.querySelector(`[data-grammar="${i}"]`);
    if (header) {
      header.addEventListener('click', () => {
        const card = document.getElementById('grammar-' + i);
        if (card) card.classList.toggle('open');
      });
    }
  });

  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sentenceId = btn.dataset.sentenceId;
      for (const para of article.paragraphs) {
        for (const s of para.sentences) {
          if (s.id === sentenceId) {
            speakText(s.en, btn);
            return;
          }
        }
      }
    });
  });

  document.querySelectorAll('.play-word-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakText(btn.dataset.word, btn);
    });
  });
}

// ---------- 渲染带高亮的句子 ----------
function renderSentenceHTML(text, words) {
  if (!words || !words.length) return text;
  const sorted = [...words].sort((a, b) => b.word.length - a.word.length);
  let result = text;
  for (const w of sorted) {
    const regex = new RegExp('\\b' + w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
    result = result.replace(regex, m => `<span class="word-highlight" title="${w.meaning}">${m}</span>`);
  }
  return result;
}

// =============================================
//  语音朗读（TTS）
// =============================================
function speakText(text, btn) {
  if (!window.speechSynthesis) {
    alert('您的浏览器不支持语音朗读');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.92;
  if (btn) {
    btn.classList.add('speaking');
    utterance.onend = () => btn.classList.remove('speaking');
    utterance.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(utterance);
}

// =============================================
//  初始化
// =============================================
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

// 使 navigateTo 全局可访问（用于 HTML onclick）
window.navigateTo = navigateTo;
