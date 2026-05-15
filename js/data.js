/**
 * ============================================
 *  时文阅读 - 文章数据
 *  添加新文章：在 articles 数组里加一个对象即可
 *  字段说明见模板
 * ============================================
 */

const articles = [
// ---- 第五篇文章：用英语讲中国故事 ----
  {
    id: "guan-ning-cuts-the-mat",
    title: "Guan Ning Cuts the Mat",
    level: "中级",
    grade: "初二~中考",
    wordCount: 198,
    tags: ["中国故事", "友谊", "历史", "价值观"],
    summary: "东汉末年，管宁和华歆本是好朋友。但一件小事让管宁做出了一个惊人的决定——他割断了两人一同坐着的席子。这个故事告诉我们，真正的友谊需要共同的价值观。",
    preReading: [
      "What does true friendship mean to you?",
      "Do you know the story of Guan Ning cutting the mat?",
      "Would you stay friends with someone who has very different values?"
    ],
    paragraphs: [
      {
        id: "p1",
        sentences: [
          {
            id: "p1s1",
            en: "During the Eastern Han dynasty, there were two young students named Guan Ning and Hua Xin.",
            cn: "东汉时期，有两个年轻学生叫管宁和华歆。",
            words: [
              { word: "during", phonetic: "/ˈdʊrɪŋ/", pos: "prep.", meaning: "在……期间", example: "During the class, we read a story." },
              { word: "dynasty", phonetic: "/ˈdaɪnəsti/", pos: "n.", meaning: "王朝；朝代", example: "The Tang dynasty was a golden age." }
            ],
            grammar: "During + 时期，表示在某个时间段内。named 是过去分词作定语修饰 students，表示「名叫……的」。",
            patterns: [ { pattern: "There were... named...", meaning: "有名叫……的……" } ]
          },
          {
            id: "p1s2",
            en: "They were good friends and studied together every day.",
            cn: "他们是好朋友，每天一起学习。",
            words: [
              { word: "together", phonetic: "/təˈɡeðər/", pos: "adv.", meaning: "一起", example: "We play together after school." }
            ],
            grammar: "过去进行时或一般过去时描述过去的事情。together 表示「一起」，放在动词后面。",
            patterns: [ { pattern: "do sth. together", meaning: "一起做某事" } ]
          },
          {
            id: "p1s3",
            en: "They shared a mat and read books side by side.",
            cn: "他们共用一张席子，并排读书。",
            words: [
              { word: "share", phonetic: "/ʃer/", pos: "v.", meaning: "分享；共用", example: "I share my lunch with my friend." },
              { word: "mat", phonetic: "/mæt/", pos: "n.", meaning: "席子；垫子", example: "We sit on the mat." }
            ],
            grammar: "side by side 是固定短语，表示「并排地」。shared 和 read 是并列谓语。",
            patterns: [ { pattern: "side by side", meaning: "并排；一起" } ]
          }
        ]
      },
      {
        id: "p2",
        sentences: [
          {
            id: "p2s1",
            en: "One day, a wealthy official passed by in a grand carriage.",
            cn: "一天，一位富有的官员坐着华丽的马车经过。",
            words: [
              { word: "wealthy", phonetic: "/ˈwelθi/", pos: "adj.", meaning: "富有的", example: "A wealthy man lives in that big house." },
              { word: "official", phonetic: "/əˈfɪʃl/", pos: "n.", meaning: "官员", example: "The official wears a red robe." },
              { word: "carriage", phonetic: "/ˈkærɪdʒ/", pos: "n.", meaning: "马车", example: "People used carriages long ago." }
            ],
            grammar: "passed by 是动词短语，表示「经过」。in a grand carriage 是介词短语作方式状语。",
            patterns: [ { pattern: "pass by", meaning: "经过；路过" } ]
          },
          {
            id: "p2s2",
            en: "Hua Xin was very excited and ran out to watch.",
            cn: "华歆非常兴奋，跑出去看。",
            words: [
              { word: "excited", phonetic: "/ɪkˈsaɪtɪd/", pos: "adj.", meaning: "兴奋的", example: "The kids are excited about the trip." }
            ],
            grammar: "was excited 是系表结构。ran out 是动词短语，to watch 是不定式表目的。",
            patterns: [ { pattern: "be excited to do / about sth.", meaning: "对做某事感到兴奋" } ]
          },
          {
            id: "p2s3",
            en: "But Guan Ning stayed inside and kept reading.",
            cn: "但管宁留在里面继续读书。",
            words: [
              { word: "stay", phonetic: "/steɪ/", pos: "v.", meaning: "停留；保持", example: "Stay in your seat." }
            ],
            grammar: "kept reading: keep + doing 表示「继续做某事」。stayed inside 表示「留在里面」。",
            patterns: [ { pattern: "keep + doing", meaning: "继续做某事" } ]
          },
          {
            id: "p2s4",
            en: "He was disappointed in his friend.",
            cn: "他对他的朋友很失望。",
            words: [
              { word: "disappointed", phonetic: "/ˌdɪsəˈpɔɪntɪd/", pos: "adj.", meaning: "失望的", example: "I was disappointed with the result." }
            ],
            grammar: "be disappointed in + sb. 表示「对某人失望」。",
            patterns: [ { pattern: "be disappointed in sb.", meaning: "对某人失望" } ]
          }
        ]
      },
      {
        id: "p3",
        sentences: [
          {
            id: "p3s1",
            en: "After Hua Xin came back, Guan Ning took out a knife and cut the mat into two pieces.",
            cn: "华歆回来后，管宁拿出一把刀，把席子割成了两半。",
            words: [
              { word: "knife", phonetic: "/naɪf/", pos: "n.", meaning: "刀", example: "Be careful with the knife." },
              { word: "cut", phonetic: "/kʌt/", pos: "v.", meaning: "切；割", example: "Cut the paper into two parts." },
              { word: "piece", phonetic: "/piːs/", pos: "n.", meaning: "片；块；件", example: "Can I have a piece of cake?" }
            ],
            grammar: "After + 从句，表示时间顺序。took out 和 cut 是并列的过去式动作。into two pieces 表示「成两半」。",
            patterns: [ { pattern: "cut sth. into + 数量 + pieces", meaning: "把某物切成……块" } ]
          },
          {
            id: "p3s2",
            en: "He said, 'You are no longer my friend.'",
            cn: "他说：「你不再是我的朋友了。」",
            words: [
              { word: "no longer", phonetic: "/noʊ ˈlɔːŋɡər/", pos: "adv.", meaning: "不再", example: "I no longer play with that toy." }
            ],
            grammar: "no longer 表示「不再」，放在 be 动词之后、实义动词之前。引号内的内容是直接引语。",
            patterns: [ { pattern: "no longer + 动词", meaning: "不再……" } ]
          },
          {
            id: "p3s3",
            en: "He believed that true friends should share the same values.",
            cn: "他相信真正的朋友应该有共同的价值观。",
            words: [
              { word: "believe", phonetic: "/bɪˈliːv/", pos: "v.", meaning: "相信", example: "I believe you can do it." },
              { word: "value", phonetic: "/ˈvæljuː/", pos: "n.", meaning: "价值观；价值", example: "Honesty is an important value." }
            ],
            grammar: "that 引导宾语从句。should + 动词原形表示「应该」。the same 表示「同样的」。",
            patterns: [ { pattern: "believe that + 从句", meaning: "相信……" } ]
          }
        ]
      },
      {
        id: "p4",
        sentences: [
          {
            id: "p4s1",
            en: "This story teaches us an important lesson.",
            cn: "这个故事给我们上了重要的一课。",
            words: [
              { word: "teach", phonetic: "/tiːtʃ/", pos: "v.", meaning: "教；教导", example: "My mom teaches me to be kind." },
              { word: "lesson", phonetic: "/ˈlesn/", pos: "n.", meaning: "课；教训", example: "Learn your lesson from the mistake." }
            ],
            grammar: "teach sb. sth. 表示「教某人某事」。us 是间接宾语，lesson 是直接宾语。",
            patterns: [ { pattern: "teach sb. sth.", meaning: "教某人某事" } ]
          },
          {
            id: "p4s2",
            en: "A true friendship is built on shared values, not on wealth or status.",
            cn: "真正的友谊建立在共同的价值观上，而不是财富或地位。",
            words: [
              { word: "friendship", phonetic: "/ˈfrendʃɪp/", pos: "n.", meaning: "友谊", example: "Friendship is very important." },
              { word: "wealth", phonetic: "/welθ/", pos: "n.", meaning: "财富", example: "Health is more important than wealth." },
              { word: "status", phonetic: "/ˈsteɪtəs/", pos: "n.", meaning: "地位", example: "He cares too much about social status." }
            ],
            grammar: "be built on 是被动语态，表示「建立在……之上」。not...but... 是并列否定结构。",
            patterns: [ { pattern: "be built on sth.", meaning: "建立在……之上" } ]
          },
          {
            id: "p4s3",
            en: "What kind of friend do you want to be?",
            cn: "你想成为什么样的朋友？",
            words: [],
            grammar: "What kind of...? 是特殊疑问句，询问种类。want to be 表示「想成为」。",
            patterns: [ { pattern: "What kind of...?", meaning: "什么样的……？" } ]
          }
        ]
      }
    ],
    keyWords: [
      { word: "dynasty", phonetic: "/ˈdaɪnəsti/", pos: "n.", meaning: "朝代", level: "拓展" },
      { word: "share", phonetic: "/ʃer/", pos: "v.", meaning: "分享", level: "中考" },
      { word: "wealthy", phonetic: "/ˈwelθi/", pos: "adj.", meaning: "富有的", level: "中考" },
      { word: "official", phonetic: "/əˈfɪʃl/", pos: "n.", meaning: "官员", level: "拓展" },
      { word: "excited", phonetic: "/ɪkˈsaɪtɪd/", pos: "adj.", meaning: "兴奋的", level: "中考" },
      { word: "disappointed", phonetic: "/ˌdɪsəˈpɔɪntɪd/", pos: "adj.", meaning: "失望的", level: "中考" },
      { word: "believe", phonetic: "/bɪˈliːv/", pos: "v.", meaning: "相信", level: "中考" },
      { word: "friendship", phonetic: "/ˈfrendʃɪp/", pos: "n.", meaning: "友谊", level: "中考" },
      { word: "value", phonetic: "/ˈvæljuː/", pos: "n.", meaning: "价值观", level: "中考" },
      { word: "wealth", phonetic: "/welθ/", pos: "n.", meaning: "财富", level: "中考" }
    ],
    keyPatterns: [
      { pattern: "There were... named...", meaning: "有名叫……的……", example: "There was a king named Arthur." },
      { pattern: "keep + doing", meaning: "继续做某事", example: "Keep trying and you will succeed." },
      { pattern: "be disappointed in sb.", meaning: "对某人失望", example: "I am disappointed in myself." },
      { pattern: "be built on sth.", meaning: "建立在……之上", example: "Trust is built on honesty." },
      { pattern: "teach sb. sth.", meaning: "教某人某事", example: "The story teaches us a lesson." }
    ],
    grammarFocus: [
      {
        title: "一般过去时",
        explanation: "讲述历史故事时，用一般过去时描述过去发生的事情。动词要变成过去式（规则变化加 -ed，不规则变化需单独记忆）。",
        examples: [
          "They studied together. (他们一起学习)",
          "Guan Ning took out a knife. (管宁拿出一把刀)",
          "He said, You are no longer my friend. (他说)"
        ]
      },
      {
        title: "keep + doing 结构",
        explanation: "keep + 动词 -ing 表示「继续做某事」或「一直做某事」。这是一个常用结构。",
        examples: [
          "He kept reading. (他继续读书)",
          "Keep practicing and you will improve. (继续练习，你会进步的)"
        ]
      },
      {
        title: "被动语态 be built on",
        explanation: "be + 过去分词构成被动语态，表示「被……」。be built on 表示「被建立在……之上」。",
        examples: [
          "A true friendship is built on shared values. (真正的友谊建立在共同的价值观上)",
          "The house was built on a hill. (房子建在一座小山上)"
        ]
      }
    ],
    criticalThinking: [
      {
        type: "分析与评价",
        question: "管宁割席的做法，你觉得对吗？如果你是管宁，你会怎么做？",
        hint: "想想管宁为什么这么做。他想要的是什么样的朋友？如果你有朋友做了你不认同的事，你会直接断交还是先谈谈？"
      },
      {
        type: "比较与对比",
        question: "华歆和管宁有什么不同？从他们的行为和选择来分析。",
        hint: "对比两人面对同一个场景（官员经过）时的不同反应。这些反应暴露了他们什么样的价值观差异？"
      },
      {
        type: "联系现实",
        question: "在现代社会，你觉得选择朋友时最重要的三个品质是什么？为什么？",
        hint: "想想你身边的好朋友，你们为什么能成为朋友？是共同的爱好、相似的价值观，还是互相支持？"
      }
    ],
    discussionQuestions: [
      "Why did Guan Ning cut the mat?",
      "Do you think Guan Ning was too strict? Why or why not?",
      "What values are most important to you in a friendship?",
      "Have you ever had a friend who disappointed you? What happened?",
      "Can a rich person and a poor person be true friends?"
    ],
    writingTask: {
      title: "Write About Your View on Friendship",
      prompt: "Write a short essay (80-100 words) about what friendship means to you. Use the story of Guan Ning as an example.",
      tips: [
        "Start with 'Friendship is important because...'.",
        "Briefly retell the story of Guan Ning in one or two sentences.",
        "Say what you agree or disagree with in Guan Ning's decision.",
        "Describe what you look for in a friend.",
        "Use 'share', 'value', 'believe' and 'friendship' in your writing."
      ]
    }
  },

  // ---- 第二篇中国故事 ----
  {
    id: "zengzi-kills-the-pig",
    title: "Zengzi Kills the Pig",
    level: "中级",
    grade: "初二~中考",
    wordCount: 196,
    tags: ["中国故事", "诚信", "家庭", "价值观"],
    summary: "曾子的妻子为了哄孩子随口说了一句玩笑话，但曾子为了教孩子诚信，真的把家里的猪杀了。这个故事告诉我们：父母的一言一行都在教育孩子。",
    preReading: [
      "Have your parents ever made a promise to you? Did they keep it?",
      "What does 'honesty' mean to you?",
      "Is it okay to tell a white lie to a child? Why or why not?"
    ],
    paragraphs: [
      {
        id: "p1",
        sentences: [
          {
            id: "p1s1",
            en: "Zengzi was a student of Confucius and a strict father.",
            cn: "曾子是孔子的学生，也是一位严格的父亲。",
            words: [
              { word: "strict", phonetic: "/strɪkt/", pos: "adj.", meaning: "严格的", example: "My teacher is strict but kind." }
            ],
            grammar: "a student of Confucius 表示「孔子的学生」。a strict father 表示「一位严格的父亲」。",
            patterns: [ { pattern: "a student of + 人名", meaning: "某人的学生" } ]
          },
          {
            id: "p1s2",
            en: "He believed that parents should always set a good example for their children.",
            cn: "他相信父母应该始终为孩子树立好榜样。",
            words: [
              { word: "example", phonetic: "/ɪɡˈzæmpl/", pos: "n.", meaning: "例子；榜样", example: "Lead by example." }
            ],
            grammar: "that 引导宾语从句。set an example for sb. 表示「为某人树立榜样」。",
            patterns: [ { pattern: "set an example for sb.", meaning: "为某人树立榜样" } ]
          }
        ]
      },
      {
        id: "p2",
        sentences: [
          {
            id: "p2s1",
            en: "One day, Zengzi's wife was going to the market.",
            cn: "一天，曾子的妻子要去集市。",
            words: [
              { word: "market", phonetic: "/ˈmɑːrkɪt/", pos: "n.", meaning: "市场；集市", example: "We buy vegetables at the market." }
            ],
            grammar: "was going to 是过去进行时，表示「当时要去」。",
            patterns: []
          },
          {
            id: "p2s2",
            en: "Her son cried and wanted to go with her.",
            cn: "她的儿子哭着要跟她一起去。",
            words: [
              { word: "cry", phonetic: "/kraɪ/", pos: "v.", meaning: "哭；喊", example: "The baby cries when he is hungry." }
            ],
            grammar: "wanted to go 表示「想去」。cried 和 wanted 是并列谓语。",
            patterns: [ { pattern: "want to do sth.", meaning: "想做某事" } ]
          },
          {
            id: "p2s3",
            en: "To stop him from crying, she said, 'Be good, and I will kill the pig for you to eat when I come back.'",
            cn: "为了让他不哭，她说：「乖乖的，我回来杀猪给你吃。」",
            words: [
              { word: "kill", phonetic: "/kɪl/", pos: "v.", meaning: "杀", example: "They kill animals for food." },
              { word: "pig", phonetic: "/pɪɡ/", pos: "n.", meaning: "猪", example: "The pig is pink and fat." }
            ],
            grammar: "To stop him from crying 是不定式短语表目的。stop sb. from doing sth. 表示「阻止某人做某事」。",
            patterns: [
              { pattern: "stop sb. from doing sth.", meaning: "阻止某人做某事" },
              { pattern: "I will... when I...", meaning: "当我……的时候，我会……" }
            ]
          }
        ]
      },
      {
        id: "p3",
        sentences: [
          {
            id: "p3s1",
            en: "When Zengzi's wife returned, Zengzi was preparing to kill the pig.",
            cn: "曾子的妻子回来后，曾子正准备杀猪。",
            words: [
              { word: "return", phonetic: "/rɪˈtɜːrn/", pos: "v.", meaning: "返回", example: "I return home at 5 o'clock." },
              { word: "prepare", phonetic: "/prɪˈper/", pos: "v.", meaning: "准备", example: "Mom is preparing dinner." }
            ],
            grammar: "When + 从句，表示时间。was preparing to do 是过去进行时。",
            patterns: [ { pattern: "prepare to do sth.", meaning: "准备做某事" } ]
          },
          {
            id: "p3s2",
            en: "She stopped him and said, 'I was only joking!'",
            cn: "她拦住他说：「我只是开玩笑的！」",
            words: [
              { word: "joke", phonetic: "/dʒoʊk/", pos: "v.", meaning: "开玩笑", example: "I am just joking." }
            ],
            grammar: "was only joking 是过去进行时，表示「只是在开玩笑」。",
            patterns: []
          },
          {
            id: "p3s3",
            en: "But Zengzi replied, 'A child learns from his parents. If you lie to him, you are teaching him to lie. A mother who lies has lost her child' + String.fromCharCode(115) + ' trust.'",
            cn: "但曾子回答说：「孩子向父母学习。如果你对他撒谎，就是在教他撒谎。撒谎的母亲就失去了孩子的信任。」",
            words: [
              { word: "reply", phonetic: "/rɪˈplaɪ/", pos: "v.", meaning: "回答", example: "Please reply to my question." },
              { word: "lie", phonetic: "/laɪ/", pos: "v.", meaning: "撒谎", example: "Never lie to your parents." },
              { word: "trust", phonetic: "/trʌst/", pos: "n.", meaning: "信任", example: "Trust is hard to build." }
            ],
            grammar: "If 引导条件状语从句（主将从现）。who lies 是定语从句修饰 mother。has lost 是现在完成时。",
            patterns: [
              { pattern: "If you..., you are...", meaning: "如果你……，你就是在……" },
              { pattern: "learn from sb.", meaning: "向某人学习" }
            ]
          }
        ]
      },
      {
        id: "p4",
        sentences: [
          {
            id: "p4s1",
            en: "So he killed the pig and cooked it for his son.",
            cn: "于是他杀了猪，做给儿子吃。",
            words: [],
            grammar: "So 表示「于是、所以」，连接因果。killed 和 cooked 是并列的过去式动作。",
            patterns: []
          },
          {
            id: "p4s2",
            en: "He wanted to teach his son that keeping promises is very important.",
            cn: "他想教他的儿子，信守承诺非常重要。",
            words: [
              { word: "promise", phonetic: "/ˈprɑːmɪs/", pos: "n.", meaning: "承诺", example: "Keep your promise." }
            ],
            grammar: "that 引导宾语从句。keeping promises 是动名词短语作从句的主语。",
            patterns: [ { pattern: "keep a promise", meaning: "信守承诺" } ]
          },
          {
            id: "p4s3",
            en: "This story reminds us that honesty is the best policy.",
            cn: "这个故事提醒我们，诚实是最好的策略。",
            words: [],
            grammar: "remind sb. that + 从句 表示「提醒某人……」。",
            patterns: [ { pattern: "remind sb. that...", meaning: "提醒某人……" } ]
          }
        ]
      }
    ],
    keyWords: [
      { word: "strict", phonetic: "/strɪkt/", pos: "adj.", meaning: "严格的", level: "中考" },
      { word: "example", phonetic: "/ɪɡˈzæmpl/", pos: "n.", meaning: "榜样", level: "中考" },
      { word: "market", phonetic: "/ˈmɑːrkɪt/", pos: "n.", meaning: "市场", level: "中考" },
      { word: "kill", phonetic: "/kɪl/", pos: "v.", meaning: "杀", level: "中考" },
      { word: "return", phonetic: "/rɪˈtɜːrn/", pos: "v.", meaning: "返回", level: "中考" },
      { word: "prepare", phonetic: "/prɪˈper/", pos: "v.", meaning: "准备", level: "中考" },
      { word: "lie", phonetic: "/laɪ/", pos: "v.", meaning: "撒谎", level: "中考" },
      { word: "trust", phonetic: "/trʌst/", pos: "n.", meaning: "信任", level: "中考" },
      { word: "promise", phonetic: "/ˈprɑːmɪs/", pos: "n.", meaning: "承诺", level: "中考" },
      { word: "honesty", phonetic: "/ˈɑːnɪsti/", pos: "n.", meaning: "诚实", level: "中考" }
    ],
    keyPatterns: [
      { pattern: "set an example for sb.", meaning: "为某人树立榜样", example: "Teachers set an example for students." },
      { pattern: "stop sb. from doing sth.", meaning: "阻止某人做某事", example: "Nothing can stop me from learning." },
      { pattern: "keep a promise", meaning: "信守承诺", example: "A true friend always keeps their promise." },
      { pattern: "learn from sb.", meaning: "向某人学习", example: "We learn from our mistakes." }
    ],
    grammarFocus: [
      { title: "条件状语从句 if",
        explanation: "if 引导条件状语从句表示「如果」。当主句用将来时（will）或现在时，从句用一般现在时。",
        examples: [
          "If you lie to him, you are teaching him to lie. (如果你对他撒谎，就是在教他撒谎)",
          "If it rains, I will stay at home. (如果下雨，我就待在家里)"
        ]
      },
      { title: "现在完成时 have/has + 过去分词",
        explanation: "现在完成时表示过去的动作对现在造成的影响。has lost 表示「已经失去了」，强调现在的结果。",
        examples: [
          "A mother who lies has lost her child's trust. (撒谎的母亲已经失去了孩子的信任)",
          "I have finished my homework. (我已经做完作业了)"
        ]
      },
      { title: "动名词作主语",
        explanation: "动词-ing 形式可以作主语，表示一个动作或一件事。谓语动词用单数。",
        examples: [
          "Keeping promises is important. (信守承诺很重要)",
          "Reading makes us smart. (阅读让我们聪明)"
        ]
      }
    ],
    criticalThinking: [
      { type: "分析与评价",
        question: "你觉得曾子杀猪的做法对吗？为了一句玩笑话杀一头猪，值不值得？",
        hint: "从两个角度想：从经济角度看，一头猪很值钱。从教育角度看，孩子的信任比猪更值钱。你觉得哪个更重要？" },
      { type: "观点对比",
        question: "曾子的妻子说「我只是开玩笑」。你觉得大人可以对孩子开玩笑式地承诺吗？",
        hint: "想想孩子能不能分辨「玩笑」和「真话」。如果孩子发现大人说话不算数，会学到什么？" },
      { type: "联系现实",
        question: "你的父母有没有对你许过诺言？他们做到了吗？如果没做到，你有什么感受？",
        hint: "说说你自己的经历。如果你是父母，你会怎么处理曾子家的这种情况？" }
    ],
    discussionQuestions: [
      "Why did Zengzi kill the pig?",
      "Do you agree with Zengzi's decision? Why?",
      "Is it okay for parents to lie to children sometimes?",
      "How do you feel when someone breaks a promise to you?",
      "What is more important: money or trust?"
    ],
    writingTask: {
      title: "Write About Honesty",
      prompt: "Write a short essay (80-100 words) about why honesty is important. Use the story of Zengzi as an example.",
      tips: [
        "Start with 'Honesty is important because...'.",
        "Briefly retell the story of Zengzi.",
        "Explain what the story teaches us.",
        "Give an example from your own life.",
        "Use 'promise', 'trust', and 'lie' in your writing."
      ]
    }
  },

  // ---- 第三篇中国故事 ----
  {
    id: "fan-zhongyan-porridge",
    title: "Fan Zhongyan's Porridge",
    level: "中级",
    grade: "初二~中考",
    wordCount: 192,
    tags: ["中国故事", "自律", "励志", "价值观"],
    summary: "范仲淹年少时家境贫寒，每天只吃一碗粥就着腌菜坚持读书。他刻苦自律的精神最终让他成为了一代名臣。他的故事告诉我们：困难不是放弃的理由。",
    preReading: [
      "Have you ever studied very hard for something you wanted?",
      "What would you do if your family had very little money for food?",
      "What does self-discipline mean to you?"
    ],
    paragraphs: [
      {
        id: "p1", sentences: [
          { id: "p1s1", en: "Fan Zhongyan was a famous scholar and official in the Song dynasty.", cn: "范仲淹是宋朝一位著名的学者和官员。",
            words: [{ word: "scholar", phonetic: "/ˈskɑːlər/", pos: "n.", meaning: "学者", example: "Confucius was a great scholar." }],
            grammar: "a famous scholar and official 表示「一位著名的学者兼官员」。", patterns: [] },
          { id: "p1s2", en: "But when he was young, his family was very poor.", cn: "但他小时候家里非常穷。",
            words: [{ word: "poor", phonetic: "/pʊr/", pos: "adj.", meaning: "贫穷的", example: "The poor family had little food." }],
            grammar: "when 引导时间状语从句。was very poor 是系表结构。", patterns: [{ pattern: "when + 从句", meaning: "当……时" }] },
          { id: "p1s3", en: "They could not afford enough food.", cn: "他们买不起足够的食物。",
            words: [{ word: "afford", phonetic: "/əˈfɔːrd/", pos: "v.", meaning: "负担得起", example: "I can afford this book." }],
            grammar: "could not afford 表示「负担不起」。enough 放在名词前面。", patterns: [{ pattern: "cannot afford + n.", meaning: "负担不起……" }] }
        ]
      },
      {
        id: "p2", sentences: [
          { id: "p2s1", en: "Fan Zhongyan studied at a temple alone.", cn: "范仲淹独自在一座寺庙里学习。",
            words: [{ word: "temple", phonetic: "/ˈtempl/", pos: "n.", meaning: "寺庙", example: "There is an old temple on the hill." }],
            grammar: "at a temple 表示「在寺庙里」。alone 表示「独自地」。", patterns: [] },
          { id: "p2s2", en: "Every day, he cooked a pot of porridge and waited for it to cool.", cn: "每天他煮一锅粥，等着它凉。",
            words: [{ word: "porridge", phonetic: "/ˈpɔːrɪdʒ/", pos: "n.", meaning: "粥", example: "I eat porridge for breakfast." }],
            grammar: "waited for it to cool 表示「等它凉」。for it to cool 是不定式复合结构。", patterns: [] },
          { id: "p2s3", en: "Then he divided it into four pieces.", cn: "然后他把粥分成四块。",
            words: [{ word: "divide", phonetic: "/dɪˈvaɪd/", pos: "v.", meaning: "分开；分成", example: "Divide the cake into four parts." }],
            grammar: "divide sth. into + 数量 + pieces 表示「把某物分成……块」。", patterns: [{ pattern: "divide into", meaning: "分成" }] },
          { id: "p2s4", en: "He ate two pieces in the morning and two in the evening.", cn: "他早上吃两块，晚上吃两块。",
            words: [],
            grammar: "in the morning / in the evening 是时间介词短语。", patterns: [] },
          { id: "p2s5", en: "That was all he ate for the whole day.", cn: "那就是他一天吃的全部食物。",
            words: [],
            grammar: "That was all + 从句 表示「那就是全部」。", patterns: [] }
        ]
      },
      {
        id: "p3", sentences: [
          { id: "p3s1", en: "A friend saw how hard his life was and sent him some delicious food.", cn: "一个朋友看到他生活这么艰苦，给他送了一些好吃的。",
            words: [{ word: "delicious", phonetic: "/dɪˈlɪʃəs/", pos: "adj.", meaning: "美味的", example: "The cake is delicious." }],
            grammar: "how hard his life was 是宾语从句。sent him some food 是双宾语结构。", patterns: [{ pattern: "send sb. sth.", meaning: "送给某人某物" }] },
          { id: "p3s2", en: "But Fan Zhongyan refused.", cn: "但范仲淹拒绝了。",
            words: [{ word: "refuse", phonetic: "/rɪˈfjuːz/", pos: "v.", meaning: "拒绝", example: "He refused my help." }],
            grammar: "refuse 表示「拒绝」，后面可以接名词或不定式。", patterns: [] },
          { id: "p3s3", en: "He said, 'If I eat your food, I will not be able to enjoy my simple porridge anymore.'", cn: "他说：「如果我吃了你的食物，我就再也无法享受我的清粥了。」",
            words: [{ word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", pos: "v.", meaning: "享受", example: "I enjoy reading books." }],
            grammar: "If 引导条件状语从句。will not be able to 表示「将不能」。not... anymore 表示「不再」。",
            patterns: [
              { pattern: "not... anymore", meaning: "不再……" },
              { pattern: "be able to do", meaning: "能够做某事" }
            ] },
          { id: "p3s4", en: "He did not want to get used to a comfortable life.", cn: "他不想习惯于舒适的生活。",
            words: [{ word: "comfortable", phonetic: "/ˈkʌmfərtəbl/", pos: "adj.", meaning: "舒适的", example: "This bed is comfortable." }],
            grammar: "get used to + n./doing 表示「习惯于……」。", patterns: [{ pattern: "get used to sth.", meaning: "习惯于某事" }] }
        ]
      },
      {
        id: "p4", sentences: [
          { id: "p4s1", en: "Through years of hard work and self-discipline, Fan Zhongyan became a great man.", cn: "经过多年的努力和自律，范仲淹成为了一位伟大的人。",
            words: [{ word: "self-discipline", phonetic: "/ˌself ˈdɪsəplɪn/", pos: "n.", meaning: "自律", example: "Self-discipline is the key to success." }],
            grammar: "Through + 名词短语 表示「通过……」。years of 表示「多年的」。", patterns: [{ pattern: "through + n.", meaning: "通过……" }] },
          { id: "p4s2", en: "He wrote famous poems and helped many people.", cn: "他写下了著名的诗篇，帮助了很多人。",
            words: [{ word: "poem", phonetic: "/ˈpoʊəm/", pos: "n.", meaning: "诗", example: "I like reading Tang poems." }],
            grammar: "wrote 和 helped 是并列的过去式动作。", patterns: [] },
          { id: "p4s3", en: "His story teaches us that hardship can make us stronger.", cn: "他的故事告诉我们，困难可以让我们更坚强。",
            words: [{ word: "hardship", phonetic: "/ˈhɑːrdʃɪp/", pos: "n.", meaning: "困难；艰苦", example: "He overcame many hardships." }],
            grammar: "that 引导宾语从句。hardship 是抽象名词作主语。", patterns: [{ pattern: "teach sb. that...", meaning: "教会某人……" }] }
        ]
      }
    ],
    keyWords: [
      { word: "scholar", phonetic: "/ˈskɑːlər/", pos: "n.", meaning: "学者", level: "拓展" },
      { word: "poor", phonetic: "/pʊr/", pos: "adj.", meaning: "贫穷的", level: "中考" },
      { word: "afford", phonetic: "/əˈfɔːrd/", pos: "v.", meaning: "负担得起", level: "中考" },
      { word: "temple", phonetic: "/ˈtempl/", pos: "n.", meaning: "寺庙", level: "拓展" },
      { word: "divide", phonetic: "/dɪˈvaɪd/", pos: "v.", meaning: "分开", level: "中考" },
      { word: "refuse", phonetic: "/rɪˈfjuːz/", pos: "v.", meaning: "拒绝", level: "中考" },
      { word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", pos: "v.", meaning: "享受", level: "中考" },
      { word: "comfortable", phonetic: "/ˈkʌmfərtəbl/", pos: "adj.", meaning: "舒适的", level: "中考" },
      { word: "self-discipline", phonetic: "/ˌself ˈdɪsəplɪn/", pos: "n.", meaning: "自律", level: "拓展" },
      { word: "hardship", phonetic: "/ˈhɑːrdʃɪp/", pos: "n.", meaning: "困难", level: "拓展" }
    ],
    keyPatterns: [
      { pattern: "cannot afford + n.", meaning: "负担不起", example: "I cannot afford a new phone." },
      { pattern: "divide into", meaning: "分成", example: "Divide the class into groups." },
      { pattern: "send sb. sth.", meaning: "送给某人某物", example: "He sent me a gift." },
      { pattern: "get used to sth.", meaning: "习惯于", example: "I got used to the cold weather." },
      { pattern: "not... anymore", meaning: "不再", example: "I do not eat junk food anymore." }
    ],
    grammarFocus: [
      { title: "条件状语从句 if + will",
        explanation: "if 引导的条件状语从句中，从句用一般现在时，主句用 will + 动词原形（主将从现）。",
        examples: [
          "If I eat your food, I will not enjoy my porridge. (如果我吃了你的食物，我就无法享受我的粥)",
          "If you work hard, you will succeed. (如果你努力，你会成功)"
        ] },
      { title: "双宾语结构 send sb. sth.",
        explanation: "有些动词可以跟两个宾语：间接宾语（人）+ 直接宾语（物）。常见的还有 give, tell, show, teach 等。",
        examples: [
          "His friend sent him some food. (他的朋友送了他一些食物)",
          "My mom gave me a gift. (我妈妈给了我一份礼物)"
        ] },
      { title: "get used to 习惯于",
        explanation: "get used to + 名词/动名词，表示「逐渐习惯于……」。to 在这里是介词，后面接名词或动名词。",
        examples: [
          "He did not want to get used to a comfortable life. (他不想习惯于舒适的生活)",
          "I got used to waking up early. (我习惯了早起)"
        ] }
    ],
    criticalThinking: [
      { type: "分析与推理",
        question: "范仲淹为什么拒绝朋友送的美食？他的理由有道理吗？",
        hint: "他担心吃了好的就再也忍受不了简陋的生活。想想看，这反映了他什么样的远见和自制力？" },
      { type: "对比与评价",
        question: "如果换作是你，朋友送来好吃的，你会接受还是拒绝？为什么？",
        hint: "对比两种选择：接受=现在享受但可能失去自律；拒绝=现在吃苦但保持专注。你选哪个？" },
      { type: "联系现实",
        question: "在你的生活中，有没有什么「舒适」的东西让你很难专注于学习？（比如手机、游戏）",
        hint: "范仲淹刻意远离舒适来保持自律。你觉得现代生活中，我们可以怎么做到这一点？" }
    ],
    discussionQuestions: [
      "How did Fan Zhongyan eat his porridge every day?",
      "Why did Fan Zhongyan refuse his friend's food?",
      "Do you think he made the right choice? Why?",
      "What is one comfortable thing you would give up to focus on your studies?",
      "Is self-discipline more important than talent?"
    ],
    writingTask: {
      title: "Write About Self-Discipline",
      prompt: "Write a short essay (80-100 words) about the importance of self-discipline. Use the story of Fan Zhongyan as an example.",
      tips: [
        "Start with 'Self-discipline is important because...'.",
        "Briefly retell Fan Zhongyan's story.",
        "Explain what his story teaches us.",
        "Give one thing you can do to be more self-disciplined.",
        "Use 'hardship', 'refuse', and 'get used to' in your writing."
      ]
    }
  }
];
