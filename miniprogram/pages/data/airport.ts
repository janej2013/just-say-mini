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
  },
  /* ---------------------------------------------------------
    Card 6 — 取行李（Baggage Claim）
  --------------------------------------------------------- */
  {
    cardId: "airport_c6",
    botHello: "Hi there, looking for your baggage?",
    botBye: "Alright, hope your bags show up soon.",
    npc: {
      animal: "Bear",
      role: "Baggage Staff"
    },
    tasks: [
      {
        taskId: "airport_c6_t1",
        desc: {
          en: "Ask where the baggage claim area is.",
          zh: "询问行李提取处在哪里。"
        },
        bot: "It’s downstairs, just follow the signs.",
        user: "Where can I find the baggage claim area?",
        tips: {
          simple: "Where is baggage claim?",
          natural: "Where can I find baggage claim?",
          native: "Where's the baggage claim area located?"
        },
        pattern: "Where can I find ...?",
        keywords: ["baggage claim", "find"]
      },
      {
        taskId: "airport_c6_t2",
        desc: {
          en: "Ask which carousel your luggage is on.",
          zh: "询问你的行李在哪个转盘。"
        },
        bot: "Check the screen—your flight should be on carousel 8.",
        user: "Which carousel is my luggage on?",
        tips: {
          simple: "Which carousel is my bag?",
          natural: "Which carousel is my luggage on?",
          native: "Do you know which belt my luggage is on?"
        },
        pattern: "Which carousel ...?",
        keywords: ["carousel", "luggage"]
      },
      {
        taskId: "airport_c6_t3",
        desc: {
          en: "Ask what to do if your luggage hasn’t arrived.",
          zh: "询问如果行李没到该怎么办。"
        },
        bot: "Go to the lost baggage counter over there.",
        user: "What should I do if my luggage hasn't arrived?",
        tips: {
          simple: "What do I do if my bag isn’t here?",
          natural: "What should I do if my luggage hasn't arrived?",
          native: "What’s the process if my luggage doesn’t show up?"
        },
        pattern: "What should I do if ...?",
        keywords: ["luggage", "hasn't arrived"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 7 — 海关申报（Customs Declaration）
  --------------------------------------------------------- */
  {
    cardId: "airport_c7",
    botHello: "Hello, need help with customs?",
    botBye: "Alright, safe travels.",
    npc: {
      animal: "Owl",
      role: "Customs Officer"
    },
    tasks: [
      {
        taskId: "airport_c7_t1",
        desc: {
          en: "Ask which line is for customs declaration.",
          zh: "询问哪个队伍是海关申报。"
        },
        bot: "The declaration line is to your right.",
        user: "Which line is for customs declaration?",
        tips: {
          simple: "Which line is for customs?",
          natural: "Which line is for customs declaration?",
          native: "Where’s the line for customs declaration?"
        },
        pattern: "Which line is for ...?",
        keywords: ["customs", "declaration"]
      },
      {
        taskId: "airport_c7_t2",
        desc: {
          en: "Ask if you need to declare your items.",
          zh: "询问是否需要申报物品。"
        },
        bot: "If you have over the limit or restricted items, yes.",
        user: "Do I need to declare these items?",
        tips: {
          simple: "Do I need to declare this?",
          natural: "Do I need to declare these items?",
          native: "Do these items need to be declared?"
        },
        pattern: "Do I need to ...?",
        keywords: ["declare", "items"]
      },
      {
        taskId: "airport_c7_t3",
        desc: {
          en: "Ask where to submit the customs form.",
          zh: "询问海关表格应该提交到哪里。"
        },
        bot: "Give it to the officer at the counter ahead.",
        user: "Where do I submit the customs form?",
        tips: {
          simple: "Where do I give the customs form?",
          natural: "Where do I submit the customs form?",
          native: "Where am I supposed to hand in the customs form?"
        },
        pattern: "Where do I ...?",
        keywords: ["submit", "customs form"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 8 — 安检/检查问题（Security / Inspection Questions）
  --------------------------------------------------------- */
  {
    cardId: "airport_c8",
    botHello: "Hi, do you have any questions about security?",
    botBye: "You're clear. Take care.",
    npc: {
      animal: "Hawk",
      role: "Security Staff"
    },
    tasks: [
      {
        taskId: "airport_c8_t1",
        desc: {
          en: "Ask what items need to be taken out for inspection.",
          zh: "询问哪些物品需要拿出来检查。"
        },
        bot: "Laptops and liquids should be taken out.",
        user: "What items do I need to take out for inspection?",
        tips: {
          simple: "What should I take out?",
          natural: "What items do I need to take out?",
          native: "What needs to be taken out for screening?"
        },
        pattern: "What items do I need to ...?",
        keywords: ["take out", "inspection"]
      },
      {
        taskId: "airport_c8_t2",
        desc: {
          en: "Ask if your bag needs to be checked again.",
          zh: "询问你的包是否需要重新检查。"
        },
        bot: "Yes, please place it on the belt again.",
        user: "Does my bag need to be checked again?",
        tips: {
          simple: "Check my bag again?",
          natural: "Does my bag need to be checked again?",
          native: "Do you need to run my bag through again?"
        },
        pattern: "Does my bag need to ...?",
        keywords: ["checked again", "bag"]
      },
      {
        taskId: "airport_c8_t3",
        desc: {
          en: "Ask what the officer needs you to do.",
          zh: "询问工作人员希望你做什么。"
        },
        bot: "Just step aside for a moment while we inspect.",
        user: "What do you need me to do?",
        tips: {
          simple: "What should I do?",
          natural: "What do you need me to do?",
          native: "What would you like me to do?"
        },
        pattern: "What do you need me to ...?",
        keywords: ["do"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 9 — 购买 SIM 卡 / WiFi（Buy SIM / WiFi）
  --------------------------------------------------------- */
  {
    cardId: "airport_c9",
    botHello: "Hi, looking for SIM cards or WiFi?",
    botBye: "Great, enjoy your stay.",
    npc: {
      animal: "Squirrel",
      role: "Store Clerk"
    },
    tasks: [
      {
        taskId: "airport_c9_t1",
        desc: {
          en: "Ask where to buy a SIM card.",
          zh: "询问哪里可以买到 SIM 卡。"
        },
        bot: "You can buy one at the shop over there.",
        user: "Where can I buy a SIM card?",
        tips: {
          simple: "Where can I buy SIM?",
          natural: "Where can I buy a SIM card?",
          native: "Where’s the best place to get a SIM card?"
        },
        pattern: "Where can I buy ...?",
        keywords: ["SIM card", "buy"]
      },
      {
        taskId: "airport_c9_t2",
        desc: {
          en: "Ask which mobile plan is best for short trips.",
          zh: "询问哪个套餐适合短期旅行。"
        },
        bot: "The 7-day plan is the most popular.",
        user: "Which plan is good for a short trip?",
        tips: {
          simple: "Which plan is good?",
          natural: "Which plan is good for a short trip?",
          native: "Which plan would you recommend for a short stay?"
        },
        pattern: "Which plan ...?",
        keywords: ["plan", "short trip"]
      },
      {
        taskId: "airport_c9_t3",
        desc: {
          en: "Ask if the SIM card includes mobile data.",
          zh: "询问 SIM 卡是否包含流量。"
        },
        bot: "Yes, it comes with data included.",
        user: "Does this SIM card include mobile data?",
        tips: {
          simple: "Does this have data?",
          natural: "Does this SIM card include mobile data?",
          native: "Does this SIM come with data included?"
        },
        pattern: "Does this ... include ...?",
        keywords: ["SIM card", "data"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 10 — 货币兑换（Currency Exchange）
  --------------------------------------------------------- */
  {
    cardId: "airport_c10",
    botHello: "Hi there, looking to exchange money?",
    botBye: "No problem, have a great day.",
    npc: {
      animal: "Koala",
      role: "Exchange Teller"
    },
    tasks: [
      {
        taskId: "airport_c10_t1",
        desc: {
          en: "Ask where to exchange currency.",
          zh: "询问哪里可以兑换货币。"
        },
        bot: "The exchange counter is right behind you.",
        user: "Where can I exchange money?",
        tips: {
          simple: "Where can I exchange money?",
          natural: "Where can I change money?",
          native: "Where's the currency exchange counter?"
        },
        pattern: "Where can I ...?",
        keywords: ["exchange", "money"]
      },
      {
        taskId: "airport_c10_t2",
        desc: {
          en: "Ask about the exchange rate.",
          zh: "询问汇率是多少。"
        },
        bot: "Today's rate is shown on the board.",
        user: "What's the exchange rate today?",
        tips: {
          simple: "What's the rate?",
          natural: "What's the exchange rate today?",
          native: "What rate are you offering today?"
        },
        pattern: "What's the ...?",
        keywords: ["exchange rate"]
      },
      {
        taskId: "airport_c10_t3",
        desc: {
          en: "Ask if there is a service fee.",
          zh: "询问是否有手续费。"
        },
        bot: "Yes, there's a small service fee.",
        user: "Is there a service fee?",
        tips: {
          simple: "Any fee?",
          natural: "Is there a service fee?",
          native: "Do you charge any service fee?"
        },
        pattern: "Is there ...?",
        keywords: ["service fee"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 11 — 寻找交通工具（Find Transportation）
  --------------------------------------------------------- */
  {
    cardId: "airport_c11",
    botHello: "Hi, are you trying to find transportation?",
    botBye: "Sure, travel safe.",
    npc: {
      animal: "Horse",
      role: "Transport Guide"
    },
    tasks: [
      {
        taskId: "airport_c11_t1",
        desc: {
          en: "Ask where the taxi stand is.",
          zh: "询问出租车站在哪里。"
        },
        bot: "The taxi stand is right outside the main exit.",
        user: "Where can I find the taxi stand?",
        tips: {
          simple: "Where is taxi?",
          natural: "Where can I find the taxi stand?",
          native: "Where’s the taxi stand located?"
        },
        pattern: "Where can I find ...?",
        keywords: ["taxi stand"]
      },
      {
        taskId: "airport_c11_t2",
        desc: {
          en: "Ask where the bus or shuttle stop is.",
          zh: "询问机场巴士或接驳车在哪里搭乘。"
        },
        bot: "The shuttle stop is on the first floor.",
        user: "Where can I catch the airport bus?",
        tips: {
          simple: "Where is the bus?",
          natural: "Where can I catch the airport bus?",
          native: "Where do the airport shuttles pick up passengers?"
        },
        pattern: "Where can I ...?",
        keywords: ["catch", "bus"]
      },
      {
        taskId: "airport_c11_t3",
        desc: {
          en: "Ask how to get to the train station.",
          zh: "询问如何前往机场火车站。"
        },
        bot: "Follow the signs to the train station downstairs.",
        user: "How do I get to the train station from here?",
        tips: {
          simple: "How to get to the train?",
          natural: "How do I get to the train station?",
          native: "What's the best way to get to the train station from here?"
        },
        pattern: "How do I get to ...?",
        keywords: ["get to", "train station"]
      }
    ]
  }
];

export default cards;
