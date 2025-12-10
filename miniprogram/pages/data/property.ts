// 物业管理关卡任务数据

export const cards = [
  /* -----------------------------------------------------
    Card 1 — 搬入办理（Move-in Setup）
  ----------------------------------------------------- */
  {
    cardId: "pm_c1",
    title: { zh: "办理入住手续", en: "Move-in Setup" },
    npc: { animal: "Bear", role: "Property Manager" },
    botHello: "Welcome! What do you need help with today?",
    botBye: "Great, let me know if you need anything else.",
    tasks: [
      {
        taskId: "pm_c1_t1",
        desc: {
          en: "Ask where to pick up the apartment keys.",
          zh: "询问在哪里领取公寓钥匙。",
        },
        bot: "You can pick up your keys at the leasing office over there.",
        user: "Where can I pick up my apartment keys?",
        tips: {
          simple: "Where do I get my keys?",
          natural: "Where can I pick up my keys?",
          native: "Where do I grab my apartment keys?",
        },
        pattern: "Where can I pick up my ...?",
        keywords: ["pick up", "keys"]
      },
      {
        taskId: "pm_c1_t2",
        desc: {
          en: "Ask how to access the building entrance.",
          zh: "询问如何进入公寓大门。",
        },
        bot: "You’ll use this fob to enter the main gate.",
        user: "How do I access the building entrance?",
        tips: {
          simple: "How do I get into the building?",
          natural: "How do I access the entrance?",
          native: "How do I get through the main entrance?",
        },
        pattern: "How do I access ...?",
        keywords: ["access", "entrance"]
      },
      {
        taskId: "pm_c1_t3",
        desc: {
          en: "Ask if someone can show you around the building.",
          zh: "询问是否有人可以带你熟悉环境。",
        },
        bot: "Sure, I can give you a quick tour of the facilities.",
        user: "Could someone show me around the building?",
        tips: {
          simple: "Can someone show me around?",
          natural: "Could someone show me around the building?",
          native: "Could I get a quick tour of the building?",
        },
        pattern: "Could someone show me ...?",
        keywords: ["show me", "around"]
      }
    ]
  },

  /* -----------------------------------------------------
    Card 2 — 设施与公共区使用（Facilities & Common Areas）
  ----------------------------------------------------- */
  {
    cardId: "pm_c2",
    title: { zh: "使用公共设施", en: "Using Facilities" },
    npc: { animal: "Squirrel", role: "Property Front Desk" },
    botHello: "Hi! Need help with any building facilities?",
    botBye: "Alright, enjoy the facilities!",
    tasks: [
      {
        taskId: "pm_c2_t1",
        desc: {
          en: "Ask how to use the laundry room.",
          zh: "询问洗衣房如何使用。",
        },
        bot: "You’ll need to load money onto this card before using the machines.",
        user: "How do I use the laundry room?",
        tips: {
          simple: "How to use the laundry room?",
          natural: "How do I use the laundry room here?",
          native: "What’s the process for using the laundry room?",
        },
        pattern: "How do I use ...?",
        keywords: ["laundry room", "use"]
      },
      {
        taskId: "pm_c2_t2",
        desc: {
          en: "Ask how to book shared facilities (gym/room).",
          zh: "询问如何预约公共设施（健身房/公用房间）。",
        },
        bot: "You can book them through our resident app.",
        user: "How can I book the shared facilities?",
        tips: {
          simple: "How do I book the gym?",
          natural: "How can I book shared facilities?",
          native: "What’s the way to reserve the shared facilities?",
        },
        pattern: "How can I book ...?",
        keywords: ["book", "facilities"]
      },
      {
        taskId: "pm_c2_t3",
        desc: {
          en: "Ask about Wi-Fi in common areas.",
          zh: "询问公共区域是否有 Wi-Fi。",
        },
        bot: "Yes, there’s free Wi-Fi in the lobby and lounge.",
        user: "Is there Wi-Fi in the common areas?",
        tips: {
          simple: "Do common areas have Wi-Fi?",
          natural: "Is there Wi-Fi in the shared areas?",
          native: "Is Wi-Fi available in the common spaces?",
        },
        pattern: "Is there ... in ...?",
        keywords: ["Wi-Fi", "common areas"]
      }
    ]
  },

  /* -----------------------------------------------------
    Card 3 — 报修与问题反馈（Maintenance & Repair）
  ----------------------------------------------------- */
  {
    cardId: "pm_c3",
    title: { zh: "报修与问题反馈", en: "Maintenance Requests" },
    npc: { animal: "Beaver", role: "Maintenance Staff" },
    botHello: "Hello, any maintenance issues I can help with?",
    botBye: "Got it, we’ll send someone to fix it soon.",
    tasks: [
      {
        taskId: "pm_c3_t1",
        desc: {
          en: "Report something not working in the apartment.",
          zh: "报告公寓内某物坏了。",
        },
        bot: "Thanks for letting us know. We’ll check it today.",
        user: "The heater in my apartment isn’t working.",
        tips: {
          simple: "My heater doesn’t work.",
          natural: "The heater in my place isn’t working.",
          native: "My unit’s heater isn’t working at all.",
        },
        pattern: "The ... isn’t working.",
        keywords: ["heater", "not working"]
      },
      {
        taskId: "pm_c3_t2",
        desc: {
          en: "Ask when someone can come fix the issue.",
          zh: "询问什么时候能来修。",
        },
        bot: "We can send someone later this afternoon.",
        user: "When can someone come fix it?",
        tips: {
          simple: "When can you fix it?",
          natural: "When can someone come take a look?",
          native: "When could maintenance stop by to fix it?",
        },
        pattern: "When can someone ...?",
        keywords: ["when", "fix"]
      },
      {
        taskId: "pm_c3_t3",
        desc: {
          en: "Ask if you need to be home for the repair.",
          zh: "询问维修时是否需要在家。",
        },
        bot: "No need. You can give us permission to enter.",
        user: "Do I need to be home for the repair?",
        tips: {
          simple: "Do I need to be home?",
          natural: "Do I have to be home when they fix it?",
          native: "Do I need to be there during the repair?",
        },
        pattern: "Do I need to be home ...?",
        keywords: ["be home", "repair"]
      }
    ]
  },

  /* -----------------------------------------------------
    Card 4 — 包裹 / 信件（Packages & Mail）
  ----------------------------------------------------- */
  {
    cardId: "pm_c4",
    title: { zh: "邮件与包裹", en: "Mail & Packages" },
    npc: { animal: "Koala", role: "Front Desk" },
    botHello: "Hi! Are you here to pick up a package?",
    botBye: "No problem, come anytime during office hours.",
    tasks: [
      {
        taskId: "pm_c4_t1",
        desc: {
          en: "Ask where to pick up packages.",
          zh: "询问在哪里领取包裹。",
        },
        bot: "You can pick it up at the package room on the first floor.",
        user: "Where can I pick up my packages?",
        tips: {
          simple: "Where do I get my packages?",
          natural: "Where can I pick up my packages?",
          native: "Where’s the package pickup area?",
        },
        pattern: "Where can I pick up ...?",
        keywords: ["pick up", "packages"]
      },
      {
        taskId: "pm_c4_t2",
        desc: {
          en: "Ask how to get the mailbox key or code.",
          zh: "询问如何领取邮箱钥匙/密码。",
        },
        bot: "Your mailbox key is in your move-in folder.",
        user: "How do I get my mailbox key?",
        tips: {
          simple: "Where’s my mailbox key?",
          natural: "How do I get my mailbox key?",
          native: "How do I get access to my mailbox?",
        },
        pattern: "How do I get ...?",
        keywords: ["mailbox", "key"]
      },
      {
        taskId: "pm_c4_t3",
        desc: {
          en: "Ask what to do if a package is missing.",
          zh: "询问包裹丢失应该怎么办。",
        },
        bot: "Let us know the tracking number and we’ll check our logs.",
        user: "What should I do if my package is missing?",
        tips: {
          simple: "My package is missing. What do I do?",
          natural: "What should I do if my package is missing?",
          native: "What’s the process if a package goes missing?",
        },
        pattern: "What should I do if ...?",
        keywords: ["package", "missing"]
      }
    ]
  },

  /* -----------------------------------------------------
    Card 5 — 停车 & 出入权限（Parking & Access）
  ----------------------------------------------------- */
  {
    cardId: "pm_c5",
    title: { zh: "停车与门禁", en: "Parking & Access" },
    npc: { animal: "Panda", role: "Security" },
    botHello: "Hi, can I help you with parking or access?",
    botBye: "You’re all set. Drive safely!",
    tasks: [
      {
        taskId: "pm_c5_t1",
        desc: {
          en: "Ask how to apply for a parking spot.",
          zh: "询问如何申请停车位。",
        },
        bot: "Please fill out the parking request form at the office.",
        user: "How can I apply for a parking spot?",
        tips: {
          simple: "How do I get a parking spot?",
          natural: "How can I apply for a parking spot?",
          native: "What’s the process for getting a parking spot?",
        },
        pattern: "How can I apply for ...?",
        keywords: ["apply", "parking spot"]
      },
      {
        taskId: "pm_c5_t2",
        desc: {
          en: "Ask how to get the parking permit.",
          zh: "询问如何领取停车许可。",
        },
        bot: "You can pick it up at the security office once approved.",
        user: "Where do I get my parking permit?",
        tips: {
          simple: "Where do I get my permit?",
          natural: "Where can I pick up my parking permit?",
          native: "Where do I pick up the parking permit?",
        },
        pattern: "Where do I get ...?",
        keywords: ["parking permit"]
      },
      {
        taskId: "pm_c5_t3",
        desc: {
          en: "Ask how to access the parking garage.",
          zh: "询问如何进入停车场。",
        },
        bot: "You’ll use the same key fob to open the garage gate.",
        user: "How do I access the parking garage?",
        tips: {
          simple: "How do I enter the garage?",
          natural: "How do I access the parking garage?",
          native: "How do I get into the garage area?",
        },
        pattern: "How do I access ...?",
        keywords: ["access", "parking garage"]
      }
    ]
  }
];

export default cards;
