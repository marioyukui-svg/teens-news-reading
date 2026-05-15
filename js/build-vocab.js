/**
 * ============================================
 *  词汇数据构建脚本
 *  合并：字典词库 + Power Up + 阅读文章
 *  标注：level (Pre A1/A1/A2/B1/B2) + topic
 * ============================================
 */
const fs = require('fs');
const path = require('path');

// ---------- 1. 读取现有字典词库 ----------
const oldData = fs.readFileSync(__dirname + '/vocab-data.js', 'utf-8');
const jsonStr = oldData.replace('const vocabWords =', '').replace(/;$/, '');
const oldWords = JSON.parse(jsonStr);

const dictWords = oldWords.map(w => ({
  word: w.word,
  meaning: w.meaning,
  pos: w.pos || '',
  level: '未分级',
  topic: '通用',
  example: w.example || '',
  exampleCn: w.exampleCn || '',
  source: '字典'
}));

console.log('📚 字典词库:', dictWords.length, '词');

// ---------- 2. 解析 Power Up 文件 ----------
const powerUpFile = '/Users/xuan/Desktop/OH-WorkSpace/Power Up 1-3级 学到A1结束 reading explorer A2 开始 think starter 也是 A1-A2之间_副本.md';
const content = fs.readFileSync(powerUpFile, 'utf-8');
const lines = content.split('\n');

// 提取不重复的单词（word_set 用于去重）
const wordSet = new Set(dictWords.map(w => w.word.toLowerCase()));
const powerUpWords = [];

let currentLevel = '';
let currentUnit = '';
let currentTopics = [];
let inPowerUpSection = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // 检测级别标题
  const levelMatch1 = line.match(/^第一级别.*(pre\s*A1|Pre A1)/i);
  const levelMatch2 = line.match(/^power\s*up\s*第二级别.*A1/i);
  const levelMatch3 = line.match(/^第三级别.*A1.A2/i);
  const levelMatch4 = line.match(/^第[四五六七八九十]+级别/);

  if (levelMatch1) {
    currentLevel = 'Pre A1';
    currentUnit = '';
    currentTopics = [];
    inPowerUpSection = true;
    continue;
  }
  if (levelMatch2) {
    currentLevel = 'A1';
    currentUnit = '';
    currentTopics = [];
    inPowerUpSection = true;
    continue;
  }
  if (levelMatch3) {
    currentLevel = 'A1-A2';
    currentUnit = '';
    currentTopics = [];
    inPowerUpSection = true;
    continue;
  }
  if (levelMatch4) {
    // 更高级别（Reading Explorer 部分）先跳过
    inPowerUpSection = false;
    continue;
  }

  // 检测"目录"部分（Reading Explorer 的内容）
  if (line.includes('目录') && (line.startsWith('第') || line.startsWith('第一级别目录'))) {
    inPowerUpSection = false;
    continue;
  }

  if (!inPowerUpSection) continue;

  // 检测单元标题
  const unitMatch = line.match(/^第([一二三四五六七八九十]+)单元\s*(.+?)(?:\s*词汇[：:]\s*(.+))?$/);
  if (unitMatch) {
    currentUnit = unitMatch[2].trim();
    currentTopics = unitMatch[3] ? unitMatch[3].split(/[／/、，,]/).map(t => t.trim()).filter(Boolean) : ['通用'];
    continue;
  }

  // 提取单词：处理 [[word]] 格式 和 word 格式
  // 匹配模式：[[word]] 释义  或  word 释义（word是英文单词）
  extractWordsFromLine(line, currentLevel, currentUnit, currentTopics, wordSet, powerUpWords);
}

console.log('📗 Power Up:', powerUpWords.length, '词');

// ---------- 从行中提取单词 ----------
function extractWordsFromLine(line, level, unit, topics, wordSet, result) {
  // 跳过元行
  if (line.startsWith('==') || line.startsWith('syn') || line.startsWith('```') || 
      line.startsWith('|') || line.startsWith('*') || line.match(/^[\d]+[\.、]/)) return;

  // 清理常见干扰模式
  let cleanLine = line
    .replace(/[*【】『』「」\[\]【】]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // 模式1: [[word]] 释义
  const wikiPattern = /\[\[([a-zA-Z\s'-]+)\]\]\s*([^\[]+)/g;
  let match;
  let found = false;
  while ((match = wikiPattern.exec(cleanLine)) !== null) {
    const word = match[1].trim().toLowerCase();
    const meaning = match[2].trim()
      .replace(/^[；;，,。.、\s]+/, '')
      .replace(/[；;，,。.、\s]+$/, '')
      .split(/[；;]/)[0].trim();

    if (word && word.length > 0 && word.length < 30 && !wordSet.has(word)) {
      const pos = extractPos(meaning);
      const cleanMeaning = meaning.replace(/#\s*(名词|动词|形容词|副词|代词|介词|连词|感叹词|数词|冠词|短语|限定词)/g, '').trim();
      result.push({
        word: word,
        meaning: cleanMeaning || word,
        pos: pos,
        level: level,
        topic: topics[0] || '通用',
        example: '',
        exampleCn: '',
        source: 'Power Up'
      });
      wordSet.add(word);
      found = true;
    }
  }
  if (found) return;

  // 模式2: word 释义（英文单词在前，中文在后）
  const wordPattern = /([a-zA-Z][a-zA-Z\s'-]+)\s+([\u4e00-\u9fff].+?)(?=\s+[a-zA-Z]|$)/;
  const m2 = cleanLine.match(wordPattern);
  if (m2) {
    const word = m2[1].trim().toLowerCase();
    const meaning = m2[2].trim().split(/[；;]/)[0].trim();
    if (word && word.length > 0 && word.length < 25 && !wordSet.has(word) && meaning.length < 30) {
      const pos = extractPos(meaning);
      const cleanMeaning = meaning.replace(/#\s*(名词|动词|形容词|副词|代词|介词|连词|感叹词|数词|冠词|短语|限定词)/g, '').trim();
      result.push({
        word: word,
        meaning: cleanMeaning,
        pos: pos,
        level: level,
        topic: topics[0] || '通用',
        example: '',
        exampleCn: '',
        source: 'Power Up'
      });
      wordSet.add(word);
    }
  }
}

function extractPos(text) {
  const match = text.match(/#\s*(名词|动词|形容词|副词|代词|介词|连词|感叹词|数词|冠词|短语|限定词)/);
  return match ? match[1] : '';
}

// ---------- 3. 阅读文章词汇 ----------
const readingWords = [
  { word: 'ban', meaning: '禁止', level: 'B1', topic: '教育', pos: '动词' },
  { word: 'distraction', meaning: '分心的事物', level: 'B2', topic: '教育', pos: '名词' },
  { word: 'major', meaning: '主要的', level: 'B1', topic: '通用', pos: '形容词' },
  { word: 'argue', meaning: '争论；主张', level: 'B1', topic: '社会', pos: '动词' },
  { word: 'valid', meaning: '合理的；有效的', level: 'B2', topic: '通用', pos: '形容词' },
  { word: 'focus on', meaning: '专注于', level: 'B1', topic: '学习', pos: '短语' },
  { word: 'point out', meaning: '指出', level: 'B1', topic: '学习', pos: '短语' },
  { word: 'instead of', meaning: '而不是', level: 'B1', topic: '通用', pos: '短语' },
  { word: 'balance', meaning: '平衡', level: 'B1', topic: '通用', pos: '名词' },
  { word: 'prepare', meaning: '准备', level: 'B1', topic: '学习', pos: '动词' },
];

let readingAdded = 0;
for (const w of readingWords) {
  if (!wordSet.has(w.word.toLowerCase())) {
    powerUpWords.push({
      word: w.word,
      meaning: w.meaning,
      pos: w.pos,
      level: w.level,
      topic: w.topic,
      example: '',
      exampleCn: '',
      source: '时文阅读'
    });
    wordSet.add(w.word.toLowerCase());
    readingAdded++;
  }
}
console.log('📰 阅读新增:', readingAdded, '词');

// ---------- 4. 合并输出 ----------
const allWords = [...dictWords, ...powerUpWords];

// 统计
const stats = {};
for (const w of allWords) {
  const lvl = w.level;
  stats[lvl] = (stats[lvl] || 0) + 1;
}
console.log('\n📊 级别分布:');
for (const [k, v] of Object.entries(stats)) {
  console.log(`  ${k}: ${v}词`);
}
console.log('📊 总数:', allWords.length, '词');

// 写入
const output = 'const vocabWords = ' + JSON.stringify(allWords, null, 2) + ';';
fs.writeFileSync(__dirname + '/vocab-data.js', output);
console.log('\n✅ 已写入 vocab-data.js');
