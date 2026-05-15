/**
 * ============================================
 *  时文阅读 - 文章数据
 *  添加新文章：在 articles 数组里加一个对象即可
 *  字段说明见模板
 * ============================================
 */

const articles = [
  {
    // ---- 基本信息 ----
    id: "should-schools-ban-smartphones",
    title: "Should Schools Ban Smartphones?",
    level: "中级",          // 初级 / 中级 / 高级
    grade: "初二~高一",
    wordCount: 192,
    tags: ["教育", "科技", "辩论"],
    summary: "越来越多的学校开始禁止学生在课堂使用手机。但这一做法真的合理吗？本文从正反两个角度探讨了校园手机禁令的利弊。",

    // ---- 封面图（可选，留空则显示默认样式） ----
    cover: "",

    // ---- 读前思考 ----
    preReading: [
      "Do you use your phone during class? What do you use it for?",
      "Imagine a school with no phones allowed. What would be different?",
      "Can phones ever be helpful for learning? Give an example."
    ],

    // ---- 正文（按段落组织，每段含逐句翻译） ----
    paragraphs: [
      {
        id: "p1",
        sentences: [
          {
            id: "p1s1",
            en: "In recent years, many schools around the world have started to ban smartphones in classrooms.",
            cn: "近年来，全球许多学校已经开始禁止在教室里使用智能手机。",
            words: [
              { word: "ban", phonetic: "/bæn/", pos: "v.", meaning: "禁止", example: "The school banned chewing gum in class." },
              { word: "smartphone", phonetic: "/ˈsmɑːrtfoʊn/", pos: "n.", meaning: "智能手机", example: "Most teenagers own a smartphone." }
            ],
            grammar: "现在完成时 have started 表示「已经开始」，强调动作对现在的影响。",
            patterns: [
              { pattern: "in recent years", meaning: "近年来（常用于现在完成时）" }
            ]
          },
          {
            id: "p1s2",
            en: "Some teachers say that phones are a major distraction and make it harder for students to learn.",
            cn: "一些老师表示，手机是主要的干扰源，让学生更难集中精力学习。",
            words: [
              { word: "major", phonetic: "/ˈmeɪdʒər/", pos: "adj.", meaning: "主要的；重大的", example: "Pollution is a major problem in big cities." },
              { word: "distraction", phonetic: "/dɪˈstrækʃn/", pos: "n.", meaning: "分心的事物；干扰", example: "The noise outside was a constant distraction." }
            ],
            grammar: "make it + adj. + for sb. + to do sth. 结构，it 是形式宾语，真正的宾语是后面的 to do 不定式。",
            patterns: [
              { pattern: "make it + adj. + for sb. + to do", meaning: "使某人做某事变得……" }
            ]
          },
          {
            id: "p1s3",
            en: "In France, for example, students are not allowed to use phones during school hours.",
            cn: "例如在法国，学生在校期间不允许使用手机。",
            words: [
              { word: "be allowed to", phonetic: "/bi əˈlaʊd tə/", pos: "phrase", meaning: "被允许做某事", example: "We are not allowed to eat in the library." }
            ],
            grammar: "被动语态 are not allowed to，表示「不被允许做某事」。",
            patterns: []
          },
          {
            id: "p1s4",
            en: "Supporters of the ban believe that removing phones helps students focus on their studies and talk to each other more.",
            cn: "禁令的支持者认为，移除手机能帮助学生专注于学习，并更多地与彼此交流。",
            words: [
              { word: "supporter", phonetic: "/səˈpɔːrtər/", pos: "n.", meaning: "支持者", example: "He is a strong supporter of the new policy." },
              { word: "focus on", phonetic: "/ˈfoʊkəs ɒn/", pos: "phrase", meaning: "专注于", example: "Please focus on your homework." }
            ],
            grammar: "动名词短语 removing phones 作主语，谓语动词用单数 helps。",
            patterns: [
              { pattern: "help sb. do sth.", meaning: "帮助某人做某事（省去 to）" }
            ]
          }
        ]
      },
      {
        id: "p2",
        sentences: [
          {
            id: "p2s1",
            en: "However, not everyone agrees with these bans.",
            cn: "然而，并非所有人都同意这些禁令。",
            words: [
              { word: "however", phonetic: "/haʊˈevər/", pos: "adv.", meaning: "然而（表转折）", example: "He was tired. However, he kept working." },
              { word: "agree with", phonetic: "/əˈɡriː wɪð/", pos: "phrase", meaning: "同意（某人/观点）", example: "I agree with your opinion." }
            ],
            grammar: "not everyone 是部分否定，意为「不是每个人都……」，而非「没有人……」。",
            patterns: []
          },
          {
            id: "p2s2",
            en: "Some parents argue that phones are important for safety.",
            cn: "一些家长辩称，手机对孩子的安全很重要。",
            words: [
              { word: "argue", phonetic: "/ˈɑːrɡjuː/", pos: "v.", meaning: "争论；主张", example: "Some people argue that homework is unnecessary." },
              { word: "safety", phonetic: "/ˈseɪfti/", pos: "n.", meaning: "安全", example: "Safety is the most important thing." }
            ],
            grammar: "argue that... 表示「主张/认为……」，常用于议论文表达观点。",
            patterns: []
          },
          {
            id: "p2s3",
            en: "They want their children to be able to contact them after school.",
            cn: "他们希望孩子放学后能够联系到他们。",
            words: [
              { word: "contact", phonetic: "/ˈkɒntækt/", pos: "v.", meaning: "联系", example: "You can contact me by email." }
            ],
            grammar: "want sb. to do sth. 结构，表示「想要某人做某事」。",
            patterns: [
              { pattern: "want sb. to do sth.", meaning: "想要某人做某事" }
            ]
          },
          {
            id: "p2s4",
            en: "Other people point out that smartphones can be useful learning tools.",
            cn: "另一些人指出，智能手机可以成为有用的学习工具。",
            words: [
              { word: "point out", phonetic: "/pɔɪnt aʊt/", pos: "phrase", meaning: "指出", example: "The teacher pointed out my mistakes." },
              { word: "useful", phonetic: "/ˈjuːsfəl/", pos: "adj.", meaning: "有用的", example: "This app is very useful for learning English." }
            ],
            grammar: "point out that... 引导宾语从句，表达「指出……」。",
            patterns: []
          },
          {
            id: "p2s5",
            en: "Students can use them to look up information, take notes, or practice language skills with apps.",
            cn: "学生可以用它们查资料、记笔记，或者用App练习语言技能。",
            words: [
              { word: "look up", phonetic: "/lʊk ʌp/", pos: "phrase", meaning: "查阅", example: "Look up the word in a dictionary." },
              { word: "take notes", phonetic: "/teɪk noʊts/", pos: "phrase", meaning: "记笔记", example: "She always takes notes in class." }
            ],
            grammar: "use sth. to do sth. 表示「用某物做某事」。三个并列不定式：to look up, take notes, or practice。注意 take 和 practice 前面省略了 to。",
            patterns: [
              { pattern: "use sth. to do sth.", meaning: "使用某物做某事" }
            ]
          },
          {
            id: "p2s6",
            en: "Instead of banning phones completely, they suggest teaching students how to use them wisely.",
            cn: "他们建议，与其完全禁止手机，不如教学生如何明智地使用手机。",
            words: [
              { word: "instead of", phonetic: "/ɪnˈsted əv/", pos: "prep.", meaning: "而不是；代替", example: "Let's walk instead of taking the bus." },
              { word: "wisely", phonetic: "/ˈwaɪzli/", pos: "adv.", meaning: "明智地", example: "Spend your time wisely." }
            ],
            grammar: "suggest doing sth. 表示「建议做某事」（suggest 后接动名词，不接不定式）。",
            patterns: [
              { pattern: "suggest doing sth.", meaning: "建议做某事" },
              { pattern: "instead of doing sth.", meaning: "而不是做某事" }
            ]
          }
        ]
      },
      {
        id: "p3",
        sentences: [
          {
            id: "p3s1",
            en: "Both sides raise valid points.",
            cn: "双方都提出了合理的观点。",
            words: [
              { word: "valid", phonetic: "/ˈvælɪd/", pos: "adj.", meaning: "有效的；合理的", example: "That's a valid question." },
              { word: "point", phonetic: "/pɔɪnt/", pos: "n.", meaning: "观点；论点", example: "You make a good point." }
            ],
            grammar: "raise 在这里作及物动词，意为「提出」。",
            patterns: []
          },
          {
            id: "p3s2",
            en: "Perhaps the real question is not whether to ban smartphones, but how to find a balance between using technology and staying focused.",
            cn: "也许真正的问题不是要不要禁止智能手机，而是如何在利用科技和保持专注之间找到平衡。",
            words: [
              { word: "whether", phonetic: "/ˈweðər/", pos: "conj.", meaning: "是否", example: "I don't know whether to go or stay." },
              { word: "balance", phonetic: "/ˈbæləns/", pos: "n.", meaning: "平衡", example: "It's important to keep a balance between work and play." },
              { word: "focused", phonetic: "/ˈfoʊkəst/", pos: "adj.", meaning: "专注的", example: "Stay focused during the exam." }
            ],
            grammar: "not...but... 结构，意为「不是……而是……」，连接两个并列的疑问词+不定式结构（whether to...和 how to...）。",
            patterns: [
              { pattern: "not...but...", meaning: "不是……而是……" },
              { pattern: "疑问词 + to do", meaning: "如 whether to do, how to do" }
            ]
          },
          {
            id: "p3s3",
            en: "The goal should be to prepare students for a world where technology is everywhere — not by hiding from it, but by learning to manage it.",
            cn: "目标应该是让学生为一个科技无处不在的世界做好准备——不是通过躲避它，而是通过学习管理它。",
            words: [
              { word: "prepare", phonetic: "/prɪˈper/", pos: "v.", meaning: "准备", example: "Prepare for the test." },
              { word: "manage", phonetic: "/ˈmænɪdʒ/", pos: "v.", meaning: "管理；应对", example: "Learn to manage your time." }
            ],
            grammar: "where 引导定语从句修饰 a world。not by... but by... 并列两个介词短语，表示方式。",
            patterns: [
              { pattern: "by doing sth.", meaning: "通过做某事（表示方式）" }
            ]
          }
        ]
      }
    ],

    // ---- 重点词汇总览 ----
    keyWords: [
      { word: "ban", phonetic: "/bæn/", pos: "v./n.", meaning: "禁止", level: "中考" },
      { word: "distraction", phonetic: "/dɪˈstrækʃn/", pos: "n.", meaning: "分心的事物", level: "拓展" },
      { word: "major", phonetic: "/ˈmeɪdʒər/", pos: "adj.", meaning: "主要的", level: "中考" },
      { word: "argue", phonetic: "/ˈɑːrɡjuː/", pos: "v.", meaning: "争论；主张", level: "高考" },
      { word: "valid", phonetic: "/ˈvælɪd/", pos: "adj.", meaning: "合理的；有效的", level: "高考" },
      { word: "focus on", phonetic: "/ˈfoʊkəs ɒn/", pos: "phrase", meaning: "专注于", level: "中考" },
      { word: "point out", phonetic: "/pɔɪnt aʊt/", pos: "phrase", meaning: "指出", level: "中考" },
      { word: "instead of", phonetic: "/ɪnˈsted əv/", pos: "prep.", meaning: "而不是", level: "中考" },
      { word: "balance", phonetic: "/ˈbæləns/", pos: "n./v.", meaning: "平衡", level: "高考" },
      { word: "prepare", phonetic: "/prɪˈper/", pos: "v.", meaning: "准备", level: "中考" }
    ],

    // ---- 重点句型 ----
    keyPatterns: [
      { pattern: "make it + adj. + for sb. + to do sth.", meaning: "使某人做某事变得……", example: "The loud music made it hard for me to concentrate." },
      { pattern: "not everyone agrees...", meaning: "部分否定：「并非所有人都同意……」", example: "Not everyone likes spicy food." },
      { pattern: "suggest doing sth.", meaning: "建议做某事（suggest 后接动名词）", example: "I suggest taking a break." },
      { pattern: "not...but...", meaning: "不是……而是……", example: "The problem is not the phone itself, but how we use it." },
      { pattern: "疑问词 + to do sth.", meaning: "whether to do, how to do, what to do 等", example: "I don't know whether to accept the offer." }
    ],

    // ---- 语法聚焦 ----
    grammarFocus: [
      {
        title: "部分否定",
        explanation: "当 not 与 all, every, everyone, both 等词连用时，表示「并非全都……」，而非「全都不……」。",
        examples: [
          "Not everyone agrees with these bans. (并非所有人都同意)",
          "Not all students have smartphones. (并非所有学生都有智能手机)"
        ]
      },
      {
        title: "动名词作主语",
        explanation: "动名词（-ing形式）可以在句中作主语，谓语动词用单数。",
        examples: [
          "Removing phones helps students focus. (移除手机有助于学生专注)",
          "Learning to manage technology is important. (学会管理科技很重要)"
        ]
      },
      {
        title: "suggest doing vs. suggest that...",
        explanation: "suggest 后接动名词（suggest doing）或 that 从句（suggest that sb. do，虚拟语气），但不接 suggest sb. to do。",
        examples: [
          "They suggest teaching students how to use phones wisely.",
          "I suggest that you (should) practice every day."
        ]
      }
    ],

    // ---- 批判性思维（Unlock 风格） ----
    criticalThinking: [
      {
        type: "分析观点",
        question: "文章提到了支持禁令和支持手机的两方观点。你认为哪一方的论据更强？为什么？",
        hint: "试着找出每个观点背后的假设（assumption）。支持者认为手机=干扰；反对者认为手机=工具。哪个更符合你的经历？"
      },
      {
        type: "评价证据",
        question: "文章举了法国作为例子来说明禁令的存在。这样的举例够有说服力吗？你还能想到其他支持或反对的例子吗？",
        hint: "一个例子不能代表所有情况。想想你身边的情况，或者你知道的其他国家的做法。"
      },
      {
        type: "做出判断",
        question: "如果你的学校正在考虑实施手机禁令，你会支持还是反对？请给出三条理由。",
        hint: "从学习、社交、安全等多个角度思考。如果实施禁令，可能带来哪些意想不到的后果？"
      }
    ],

    // ---- 讨论 / 写作题 ----
    discussionQuestions: [
      "Do you think your school should ban smartphones? Why or why not?",
      "Can you think of a rule about phone use that both sides would agree on?",
      "If phones were banned at school, what would you do during breaks?"
    ],

    // ---- 写作任务 ----
    writingTask: {
      title: "Write a Persuasive Essay",
      prompt: "Write a short essay (120-150 words) arguing for or against banning smartphones in schools. Use at least two of the sentence patterns you learned.",
      tips: [
        "Start with a clear statement of your opinion.",
        "Give two or three reasons with examples.",
        "Acknowledge the other side's view (让步).",
        "End with a strong conclusion."
      ]
    }
  }
];
