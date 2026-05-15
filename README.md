# 时文阅读 📰

面向中学生的英语时文阅读平台。精选时文，逐句翻译，重点词汇和句型解析，语法聚焦，以及 Unlock 风格的批判性思维训练。

## 功能特色

- **逐句翻译**：英文原文 + 中文翻译，一键切换显示/隐藏
- **重点词汇**：句内高亮 + 音标 + 释义 + 例句 + 中考/高考标签
- **重点句型**：句型结构拆解 + 实例应用
- **语法聚焦**：语法点详解 + 可折叠示例
- **读前思考**：Pre-reading 引导性问题
- **批判性思维**：Unlock 风格的分析、评价、判断训练
- **讨论与写作**：话题讨论题 + 写作任务

## 快速开始

### 在本地预览

```bash
# 进入项目目录
cd teen-news-reading

# 用 Python 启动本地服务器
python3 -m http.server 8000

# 浏览器打开
# http://localhost:8000
```

> ⚠️ 直接用 `file://` 打开 `index.html` 会导致 hash 路由无法正常工作，请务必使用本地服务器。

### 部署到 GitHub Pages

1. 在 GitHub 上创建一个新仓库（如 `teen-news-reading`）
2. 将项目文件推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/teen-news-reading.git
git push -u origin main
```

3. 在仓库 Settings > Pages 中，将 Source 设为 `main` 分支，目录选 `/ (root)`
4. 等待几分钟，访问 `https://你的用户名.github.io/teen-news-reading/`

## 如何添加新文章

打开 `js/data.js`，在 `articles` 数组末尾添加新对象。完整字段说明：

```javascript
{
  // 必填字段
  id: "unique-article-id",       // 用于URL，建议英文连字符格式
  title: "文章标题",              // 英文标题
  level: "中级",                  // 初级 / 中级 / 高级
  grade: "初二~高一",             // 适合年级
  wordCount: 200,                // 词数
  tags: ["教育", "科技"],         // 标签数组
  summary: "文章简介...",         // 中文简介

  // 读前思考（数组）
  preReading: ["问题1", "问题2"],

  // 正文段落
  paragraphs: [
    {
      id: "p1",
      sentences: [
        {
          id: "p1s1",
          en: "English sentence here.",
          cn: "中文翻译。",
          words: [
            { word: "example", phonetic: "/ɪɡˈzæmpl/", pos: "n.", meaning: "例子", example: "This is an example." }
          ],
          grammar: "语法讲解（可选）",
          patterns: [
            { pattern: "句型结构", meaning: "句型解释" }
          ]
        }
      ]
    }
  ],

  // 重点词汇总览
  keyWords: [
    { word: "example", phonetic: "/ɪɡˈzæmpl/", pos: "n.", meaning: "例子", level: "中考" }
  ],

  // 重点句型
  keyPatterns: [
    { pattern: "句型", meaning: "解释", example: "例句" }
  ],

  // 语法聚焦
  grammarFocus: [
    {
      title: "语法点标题",
      explanation: "讲解文字",
      examples: ["例1", "例2"]
    }
  ],

  // 批判性思维
  criticalThinking: [
    {
      type: "分析观点",      // 或 评价证据 / 做出判断 等
      question: "问题",
      hint: "思考提示"
    }
  ],

  // 讨论题
  discussionQuestions: ["问题1", "问题2"],

  // 写作任务（可选）
  writingTask: {
    title: "写作标题",
    prompt: "写作要求",
    tips: ["提示1", "提示2"]
  }
}
```

## 技术栈

- 纯静态 HTML + CSS + JavaScript（零依赖）
- SPA 架构，基于 URL hash 路由
- 数据驱动（`data.js`），无需后端
- GitHub Pages 友好部署

## 许可

MIT
