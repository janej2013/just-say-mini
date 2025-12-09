// 机场关卡任务数据

export const cards = [
  /* ---------------------------------------------------------
    Card 1 — 找到入境口（Find Immigration）
  --------------------------------------------------------- */
  {
    cardId: "airport_c1",
    botHello: "Hi there, need any help?",
    botBye: "Alright, have a good one.",
    npc: { 
      animal: 'Panda', 
      role: 'Staff' 
    },
    tasks: [
      {
        taskId: "airport_c1_t1",
        desc: {
          en: "Ask where the immigration area is.",
          zh: "询问入境检查区域在哪里。"
        },
        bot: "You’ll find immigration straight ahead on your left.",
        user: "Hi, where can I find the immigration area?",
        tips: {
          simple: "Where is immigration?",
          natural: "Hey, where can I find immigration?",
          native: "Hi, where’s the immigration area located?"
        },
        pattern: "Where can I find ...?",
        keywords: ["find", "immigration area"]
      },
      {
        taskId: "airport_c1_t2",
        desc: {
          en: "Ask which line you should go to.",
          zh: "询问你应该排哪条队。"
        },
        bot: "Foreign passports should go to the line on the right.",
        user: "Which line should I go to?",
        tips: {
          simple: "Which line do I go to?",
          natural: "Which line am I supposed to be in?",
          native: "Which line should I be lining up in?"
        },
        pattern: "Which line should I ...?",
        keywords: ["line", "go to"]
      },
      {
        taskId: "airport_c1_t3",
        desc: {
          en: "Confirm if you're in the correct queue for visitors.",
          zh: "确认现在排的队是否是访客队伍。"
        },
        bot: "Yes, that’s the correct queue for visitors.",
        user: "Is this the right line for visitors?",
        tips: {
          simple: "Is this the visitor line?",
          natural: "Is this the right line for visitors?",
          native: "This is the visitor line, right?"
        },
        pattern: "Is this the right ...?",
        keywords: ["right line", "visitors"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 2 — 队伍确认（Queue Validation）
  --------------------------------------------------------- */
  {
    cardId: "airport_c2",
    botHello: "Hi, do you need help with the line?",
    botBye: "You're all set. Enjoy your trip.",
    npc: { 
      animal: 'Fox', 
      role: 'Guide' 
    },
    tasks: [
      {
        taskId: "airport_c2_t1",
        desc: {
          en: "Ask if you need to prepare any documents now.",
          zh: "询问现在是否需要准备任何文件。"
        },
        bot: "You'll need your passport and arrival info ready.",
        user: "Do I need to prepare any documents right now?",
        tips: {
          simple: "Do I need any documents?",
          natural: "Do I need to prepare anything now?",
          native: "Do I need to have any documents ready at this point?"
        },
        pattern: "Do I need to ...?",
        keywords: ["prepare", "documents"]
      },
      {
        taskId: "airport_c2_t2",
        desc: {
          en: "Ask if you need an arrival card.",
          zh: "询问是否需要入境卡。"
        },
        bot: "Some passengers need an arrival card depending on their visa.",
        user: "Do I need an arrival card?",
        tips: {
          simple: "Do I need arrival card?",
          natural: "Do I need to fill out an arrival card?",
          native: "Do I need to complete an arrival card for entry?"
        },
        pattern: "Do I need ...?",
        keywords: ["arrival card"]
      },
      {
        taskId: "airport_c2_t3",
        desc: {
          en: "Ask how long the wait is.",
          zh: "询问大概需要等待多久。"
        },
        bot: "It should take around 10 to 15 minutes.",
        user: "How long is the wait from here?",
        tips: {
          simple: "How long is the wait?",
          natural: "Any idea how long the wait is?",
          native: "Roughly how long is the wait from here?"
        },
        pattern: "How long ...?",
        keywords: ["wait", "how long"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 3 — 文件准备（Document Preparation）
  --------------------------------------------------------- */
  {
    cardId: "airport_c3",
    botHello: "Hello, need help with your documents?",
    botBye: "Great, you’re good to go.",
    npc: { 
      animal: 'Cat', 
      role: 'Officer Assistant' 
    },
    tasks: [
      {
        taskId: "airport_c3_t1",
        desc: {
          en: "Ask if you need to fill out the form.",
          zh: "询问是否需要填写这张表格。"
        },
        bot: "Yes, please fill it out before reaching the counter.",
        user: "Do I have to fill out this form?",
        tips: {
          simple: "Do I need to fill this?",
          natural: "Do I have to fill this form out?",
          native: "Am I required to fill out this form?"
        },
        pattern: "Do I have to ...?",
        keywords: ["fill out", "form"]
      },
      {
        taskId: "airport_c3_t2",
        desc: {
          en: "Ask where to submit the form.",
          zh: "询问表格应该提交到哪里。"
        },
        bot: "You can hand it to the officer at the desk.",
        user: "Where do I submit this form?",
        tips: {
          simple: "Where do I give this form?",
          natural: "Where do I turn in this form?",
          native: "Where am I supposed to submit this form?"
        },
        pattern: "Where do I ...?",
        keywords: ["submit", "form"]
      },
      {
        taskId: "airport_c3_t3",
        desc: {
          en: "Ask if this is the correct place to submit.",
          zh: "询问这里是否是提交表格的正确位置。"
        },
        bot: "Yep, this is the right spot.",
        user: "Is this where I'm supposed to hand it in?",
        tips: {
          simple: "Is this the right place?",
          natural: "Is this where I hand it in?",
          native: "This is the right place to submit it, right?"
        },
        pattern: "Is this where ...?",
        keywords: ["submit", "right place"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 4 — 表格求助（Form Assistance）
  --------------------------------------------------------- */
  {
    cardId: "airport_c4",
    botHello: "Hi! Need help with your form?",
    botBye: "No worries, you’re all set.",
    npc: { 
      animal: 'Rabbit', 
      role: 'Helper' 
    },
    tasks: [
      {
        taskId: "airport_c4_t1",
        desc: {
          en: "Ask for help filling out the form.",
          zh: "询问能否帮助你填写表格。"
        },
        bot: "Sure, I can help you with that.",
        user: "Could you help me fill this out?",
        tips: {
          simple: "Can you help me?",
          natural: "Could you help me fill this out?",
          native: "Mind giving me a hand with this form?"
        },
        pattern: "Could you help me ...?",
        keywords: ["help", "form"]
      },
      {
        taskId: "airport_c4_t2",
        desc: {
          en: "Ask which parts must be filled in.",
          zh: "询问哪些部分是必须填写的。"
        },
        bot: "Make sure you fill in the required fields.",
        user: "Which sections do I need to fill out?",
        tips: {
          simple: "Which parts do I fill?",
          natural: "Which sections do I need to fill out?",
          native: "Which sections are required to be filled in?"
        },
        pattern: "Which sections ...?",
        keywords: ["sections", "fill out"]
      },
      {
        taskId: "airport_c4_t3",
        desc: {
          en: "Ask if the form needs your signature.",
          zh: "询问表格是否需要签名。"
        },
        bot: "Yes, sign at the bottom.",
        user: "Do I need to sign this form?",
        tips: {
          simple: "Do I need to sign?",
          natural: "Do I need to sign this?",
          native: "Does this form need my signature?"
        },
        pattern: "Do I need to ...?",
        keywords: ["sign", "form"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 5 — 流程与时间判断（Flow & Time Management）
  --------------------------------------------------------- */
  {
    cardId: "airport_c5",
    botHello: "Hello! Are you checking the queue?",
    botBye: "Alright, take care.",
    npc: { 
      animal: 'Dog', 
      role: 'Security Guide' 
    },
    tasks: [
      {
        taskId: "airport_c5_t1",
        desc: {
          en: "Ask if there is a fast track line.",
          zh: "询问是否有快速通道。"
        },
        bot: "Yes, it’s for priority passengers.",
        user: "Do you have a fast track lane?",
        tips: {
          simple: "Is there fast track?",
          natural: "Do you guys have a fast track lane?",
          native: "Is there a fast-track lane available?"
        },
        pattern: "Do you have ...?",
        keywords: ["fast track", "lane"]
      },
      {
        taskId: "airport_c5_t2",
        desc: {
          en: "Ask if you should stay in this line.",
          zh: "询问是否应该继续排这条队。"
        },
        bot: "Yes, stay in this line until the end.",
        user: "Am I supposed to stay in this line?",
        tips: {
          simple: "Should I stay here?",
          natural: "Am I supposed to stay in this line?",
          native: "Should I remain in this line all the way?"
        },
        pattern: "Am I supposed to ...?",
        keywords: ["stay", "line"]
      },
      {
        taskId: "airport_c5_t3",
        desc: {
          en: "Ask where the immigration officers are.",
          zh: "询问入境官员在哪里。"
        },
        bot: "They’re right at the front of the line.",
        user: "Where can I find the immigration officer?",
        tips: {
          simple: "Where is the officer?",
          natural: "Where can I find the immigration officer?",
          native: "Where’s the immigration officer located?"
        },
        pattern: "Where can I find ...?",
        keywords: ["immigration officer"]
      }
    ]
  }
];

export default cards;
