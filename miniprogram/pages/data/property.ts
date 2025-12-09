// 物业管理关卡任务数据

export const cards = [
  {
    cardId: "property_c1",
    botHello: "Hello! What can I help you with today?",
    botBye: "Have a great day!",
    npc: { 
      animal: 'Hippo', 
      role: 'Manager' 
    },
    tasks: [
      {
        taskId: "property_c1_t1",
        desc: {
          en: "Request a maintenance check.",
          zh: "要求进行维修检查。"
        },
        bot: "I'll schedule a technician to come by this week.",
        user: "I need a maintenance check for my apartment.",
        tips: {
          simple: "I need maintenance check.",
          natural: "Could I request a maintenance check?",
          native: "Need someone to check out my unit."
        },
        pattern: "I need ...",
        keywords: ["maintenance", "check", "repair"]
      },
      {
        taskId: "property_c1_t2",
        desc: {
          en: "Report a leaky faucet.",
          zh: "报告水龙头漏水。"
        },
        bot: "I'll send a plumber over as soon as possible.",
        user: "My kitchen faucet is leaking.",
        tips: {
          simple: "Faucet is leaking.",
          natural: "I have a leaky faucet in my kitchen.",
          native: "My faucet's dripping."
        },
        pattern: "... is leaking",
        keywords: ["faucet", "leaking", "leak"]
      },
      {
        taskId: "property_c1_t3",
        desc: {
          en: "Ask about pool maintenance schedule.",
          zh: "询问泳池维护时间表。"
        },
        bot: "Pool maintenance is every Monday from 9 to 11 AM.",
        user: "When is the pool cleaned?",
        tips: {
          simple: "When is pool cleaned?",
          natural: "What's the pool maintenance schedule?",
          native: "When do you guys clean the pool?"
        },
        pattern: "When is ...?",
        keywords: ["pool", "maintenance", "cleaned"]
      }
    ]
  },
  {
    cardId: "property_c2",
    botHello: "Good afternoon! How may I assist?",
    botBye: "You're all set!",
    npc: { 
      animal: 'Parrot', 
      role: 'Assistant' 
    },
    tasks: [
      {
        taskId: "property_c2_t1",
        desc: {
          en: "Request a new parking pass.",
          zh: "要求新的停车证。"
        },
        bot: "Sure, I'll issue you a new pass right away.",
        user: "Can I get a new parking pass?",
        tips: {
          simple: "I need parking pass.",
          natural: "Could I request a new parking pass?",
          native: "Need a new parking pass."
        },
        pattern: "Can I get ...?",
        keywords: ["parking pass", "new", "request"]
      },
      {
        taskId: "property_c2_t2",
        desc: {
          en: "Ask about package delivery.",
          zh: "询问包裹投递。"
        },
        bot: "Packages are held at the front desk for pickup.",
        user: "Where do I pick up packages?",
        tips: {
          simple: "Where to pick up packages?",
          natural: "Where should I pick up my packages?",
          native: "Where do I grab my packages?"
        },
        pattern: "Where do I ...?",
        keywords: ["packages", "pick up", "delivery"]
      },
      {
        taskId: "property_c2_t3",
        desc: {
          en: "Report a noise complaint.",
          zh: "报告噪音投诉。"
        },
        bot: "I'll look into it and contact your neighbor about the noise.",
        user: "I'd like to report a noise issue.",
        tips: {
          simple: "I have noise complaint.",
          natural: "I'd like to file a noise complaint.",
          native: "Need to report some noise issues."
        },
        pattern: "I'd like to report ...",
        keywords: ["noise", "complaint", "loud"]
      }
    ]
  }
];

export default cards;
