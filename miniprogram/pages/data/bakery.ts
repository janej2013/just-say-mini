// 面包店关卡任务数据

export const cards = [
  {
    cardId: "bakery_c1",
    title: { zh: "买面包", en: "Buy Bread" },
    botHello: "Welcome to our bakery!",
    botBye: "Enjoy your treats!",
    npc: { 
      animal: 'Giraffe', 
      role: 'Baker' 
    },
    tasks: [
      {
        taskId: "bakery_c1_t1",
        desc: {
          en: "Order a fresh baguette.",
          zh: "点一根新鲜法棍。"
        },
        bot: "One baguette, fresh from the oven!",
        user: "I'll have a fresh baguette, please.",
        tips: {
          simple: "One baguette please.",
          natural: "I'd like a fresh baguette.",
          native: "Gimme a baguette."
        },
        pattern: "I'll have ...",
        keywords: ["baguette", "bread", "fresh"]
      },
      {
        taskId: "bakery_c1_t2",
        desc: {
          en: "Ask if croissants are made today.",
          zh: "询问可颂是否是今天做的。"
        },
        bot: "Yes, we bake fresh croissants every morning.",
        user: "Were these croissants made today?",
        tips: {
          simple: "Are croissants fresh?",
          natural: "Are these croissants made today?",
          native: "These croissants fresh today?"
        },
        pattern: "Were ... made today?",
        keywords: ["croissants", "fresh", "today"]
      },
      {
        taskId: "bakery_c1_t3",
        desc: {
          en: "Ask about gluten-free options.",
          zh: "询问无麸质选择。"
        },
        bot: "We have gluten-free bread and muffins on that shelf.",
        user: "Do you have gluten-free options?",
        tips: {
          simple: "Do you have gluten-free?",
          natural: "Are there any gluten-free options?",
          native: "Got anything gluten-free?"
        },
        pattern: "Do you have ...?",
        keywords: ["gluten-free", "options", "bread"]
      }
    ]
  },
  {
    cardId: "bakery_c2",
    title: { zh: "定制蛋糕", en: "Custom Cake" },
    botHello: "Hi! Looking for something sweet?",
    botBye: "Come back soon!",
    npc: { 
      animal: 'Beaver', 
      role: 'Counter Staff' 
    },
    tasks: [
      {
        taskId: "bakery_c2_t1",
        desc: {
          en: "Order a birthday cake.",
          zh: "订购生日蛋糕。"
        },
        bot: "Sure! What size and flavor would you like?",
        user: "I'd like to order a birthday cake.",
        tips: {
          simple: "I want birthday cake.",
          natural: "I'd like to order a birthday cake.",
          native: "Need a birthday cake."
        },
        pattern: "I'd like to order ...",
        keywords: ["birthday cake", "order", "cake"]
      },
      {
        taskId: "bakery_c2_t2",
        desc: {
          en: "Ask about custom cake designs.",
          zh: "询问定制蛋糕设计。"
        },
        bot: "Yes, we can do custom designs. What did you have in mind?",
        user: "Do you do custom cake designs?",
        tips: {
          simple: "Can you make custom cake?",
          natural: "Do you offer custom cake designs?",
          native: "You guys do custom cakes?"
        },
        pattern: "Do you do ...?",
        keywords: ["custom", "cake", "design"]
      },
      {
        taskId: "bakery_c2_t3",
        desc: {
          en: "Ask when fresh bread comes out.",
          zh: "询问新鲜面包什么时候出炉。"
        },
        bot: "We bake fresh bread every hour starting at 7 AM.",
        user: "When does fresh bread come out?",
        tips: {
          simple: "When is bread fresh?",
          natural: "What time does fresh bread come out?",
          native: "When's the bread fresh?"
        },
        pattern: "When does ... come out?",
        keywords: ["fresh bread", "when", "time"]
      }
    ]
  }
];

export default cards;
