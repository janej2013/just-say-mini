// 咖啡厅关卡任务数据

export const cards = [
  {
    cardId: "cafe_c1",
    botHello: "Welcome! What can I get you?",
    botBye: "Enjoy your coffee!",
    npc: { 
      animal: 'Squirrel', 
      role: 'Barista' 
    },
    tasks: [
      {
        taskId: "cafe_c1_t1",
        desc: {
          en: "Order a latte with oat milk.",
          zh: "点一杯燕麦奶拿铁。"
        },
        bot: "One oat milk latte coming right up!",
        user: "I'll have a latte with oat milk, please.",
        tips: {
          simple: "Latte with oat milk.",
          natural: "I'd like a latte with oat milk, please.",
          native: "Latte with oat milk, thanks."
        },
        pattern: "I'll have ...",
        keywords: ["latte", "oat milk", "order"]
      },
      {
        taskId: "cafe_c1_t2",
        desc: {
          en: "Ask for the Wi-Fi code.",
          zh: "询问 Wi-Fi 密码。"
        },
        bot: "The Wi-Fi password is Coffee2024.",
        user: "What's the Wi-Fi code?",
        tips: {
          simple: "What's Wi-Fi code?",
          natural: "Could I get the Wi-Fi code, please?",
          native: "What's the Wi-Fi password?"
        },
        pattern: "What's ...?",
        keywords: ["Wi-Fi", "code", "password"]
      },
      {
        taskId: "cafe_c1_t3",
        desc: {
          en: "Find a seat with a plug.",
          zh: "找一个有插座的座位。"
        },
        bot: "There's a table with outlets by the window.",
        user: "Is there a seat with a power outlet?",
        tips: {
          simple: "Is there seat with plug?",
          natural: "Could I find a seat with a power outlet?",
          native: "Got a seat near a plug?"
        },
        pattern: "Is there ...?",
        keywords: ["seat", "plug", "outlet"]
      }
    ]
  },
  {
    cardId: "cafe_c2",
    botHello: "Hi! Can I help you with anything?",
    botBye: "See you next time!",
    npc: { 
      animal: 'Panda', 
      role: 'Server' 
    },
    tasks: [
      {
        taskId: "cafe_c2_t1",
        desc: {
          en: "Order a slice of cake.",
          zh: "点一块蛋糕。"
        },
        bot: "Great choice! I'll bring that right out.",
        user: "I'll take a slice of cake.",
        tips: {
          simple: "I want slice of cake.",
          natural: "I'd like a slice of cake, please.",
          native: "Yeah, gimme a slice of cake."
        },
        pattern: "I'll take ...",
        keywords: ["cake", "slice", "order"]
      },
      {
        taskId: "cafe_c2_t2",
        desc: {
          en: "Ask to heat up a muffin.",
          zh: "要求加热松饼。"
        },
        bot: "Sure, I'll warm it up for you.",
        user: "Can you heat up this muffin?",
        tips: {
          simple: "Heat muffin please.",
          natural: "Could you heat up this muffin, please?",
          native: "Can you warm this muffin up?"
        },
        pattern: "Can you ...?",
        keywords: ["heat", "muffin", "warm"]
      },
      {
        taskId: "cafe_c2_t3",
        desc: {
          en: "Ask if they have soy milk.",
          zh: "询问是否有豆奶。"
        },
        bot: "Yes, we have soy, oat, and almond milk.",
        user: "Do you have soy milk?",
        tips: {
          simple: "Do you have soy milk?",
          natural: "Is soy milk available?",
          native: "You guys got soy milk?"
        },
        pattern: "Do you have ...?",
        keywords: ["soy milk", "milk", "alternative"]
      }
    ]
  }
];

export default cards;
