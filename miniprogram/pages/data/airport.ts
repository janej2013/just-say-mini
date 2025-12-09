// 机场关卡任务数据

export const cards = [
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
          en: "Ask where the baggage claim is.",
          zh: "询问行李提取处在哪里。"
        },
        bot: "The baggage claim is straight ahead, just follow the signs.",
        user: "Where is the baggage claim?",
        tips: {
          simple: "Where is baggage claim?",
          natural: "Could you tell me where the baggage claim is?",
          native: "Where can I pick up my luggage?"
        },
        pattern: "Where is ...?",
        keywords: ["baggage", "claim", "luggage"]
      },
      {
        taskId: "airport_c1_t2",
        desc: {
          en: "Find the taxi pickup point.",
          zh: "找到出租车上车点。"
        },
        bot: "The taxi stand is outside the main exit, turn left.",
        user: "Where is the taxi pickup point?",
        tips: {
          simple: "Where is taxi pickup?",
          natural: "Could you tell me where the taxi pickup is?",
          native: "Where do I grab a cab?"
        },
        pattern: "Where is ...?",
        keywords: ["taxi", "pickup", "stand"]
      },
      {
        taskId: "airport_c1_t3",
        desc: {
          en: "Buy a SIM card at the kiosk.",
          zh: "在小卖部买电话卡。"
        },
        bot: "You can find the SIM card kiosk near the arrival gate.",
        user: "Where can I buy a SIM card?",
        tips: {
          simple: "Where can I buy SIM card?",
          natural: "Could you show me where to buy a SIM card?",
          native: "Where's the best place to get a SIM card?"
        },
        pattern: "Where can I ...?",
        keywords: ["SIM card", "kiosk", "buy"]
      }
    ]
  },
  {
    cardId: "airport_c2",
    botHello: "Hello! How can I help you?",
    botBye: "You're all set. Enjoy your trip.",
    npc: { 
      animal: 'Fox', 
      role: 'Guide' 
    },
    tasks: [
      {
        taskId: "airport_c2_t1",
        desc: {
          en: "Ask for a map of the city.",
          zh: "询问城市地图。"
        },
        bot: "Sure, here's a free city map. Enjoy exploring!",
        user: "Where can I get a city map?",
        tips: {
          simple: "Where can I get map?",
          natural: "Could I get a map of the city?",
          native: "Where can I pick up a city map?"
        },
        pattern: "Where can I ...?",
        keywords: ["map", "city", "get"]
      },
      {
        taskId: "airport_c2_t2",
        desc: {
          en: "Report lost luggage.",
          zh: "报告行李丢失。"
        },
        bot: "Please fill out this form and we'll track your luggage.",
        user: "I need to report lost luggage.",
        tips: {
          simple: "I need to report lost luggage.",
          natural: "My luggage is missing, I'd like to report it.",
          native: "My bags didn't show up. I need to file a report."
        },
        pattern: "I need to ...",
        keywords: ["lost", "luggage", "report"]
      },
      {
        taskId: "airport_c2_t3",
        desc: {
          en: "Ask where the restroom is.",
          zh: "询问洗手间在哪里。"
        },
        bot: "The restroom is down the hall on your right.",
        user: "Where is the restroom?",
        tips: {
          simple: "Where is restroom?",
          natural: "Could you tell me where the restroom is?",
          native: "Where's the bathroom around here?"
        },
        pattern: "Where is ...?",
        keywords: ["restroom", "bathroom", "where"]
      }
    ]
  }
];

export default cards;
