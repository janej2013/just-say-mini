// 农贸市场关卡任务数据

export const cards = [
  {
    cardId: "market_c1",
    title: { zh: "新鲜农产", en: "Fresh Produce" },
    botHello: "Good morning! Fresh produce today!",
    botBye: "Thanks for stopping by!",
    npc: { 
      animal: 'Owl', 
      role: 'Vendor' 
    },
    tasks: [
      {
        taskId: "market_c1_t1",
        desc: {
          en: "Ask about fresh strawberries.",
          zh: "询问新鲜草莓。"
        },
        bot: "These strawberries were picked this morning!",
        user: "Are these strawberries fresh?",
        tips: {
          simple: "Are strawberries fresh?",
          natural: "How fresh are these strawberries?",
          native: "These strawberries fresh?"
        },
        pattern: "Are ... fresh?",
        keywords: ["strawberries", "fresh", "fruit"]
      },
      {
        taskId: "market_c1_t2",
        desc: {
          en: "Ask for a price on tomatoes.",
          zh: "询问西红柿的价格。"
        },
        bot: "Tomatoes are $3 per pound today.",
        user: "How much are the tomatoes?",
        tips: {
          simple: "How much are tomatoes?",
          natural: "What's the price for tomatoes?",
          native: "What do tomatoes run?"
        },
        pattern: "How much are ...?",
        keywords: ["tomatoes", "price", "cost"]
      },
      {
        taskId: "market_c1_t3",
        desc: {
          en: "Ask if they have organic options.",
          zh: "询问是否有有机选择。"
        },
        bot: "Yes, everything on this table is organic.",
        user: "Do you have organic vegetables?",
        tips: {
          simple: "Do you have organic?",
          natural: "Are there any organic options?",
          native: "Got any organic stuff?"
        },
        pattern: "Do you have ...?",
        keywords: ["organic", "vegetables", "natural"]
      }
    ]
  },
  {
    cardId: "market_c2",
    title: { zh: "优惠询问", en: "Vendor Deals" },
    botHello: "Welcome to the market!",
    botBye: "See you next week!",
    npc: { 
      animal: 'Koala', 
      role: 'Vendor' 
    },
    tasks: [
      {
        taskId: "market_c2_t1",
        desc: {
          en: "Ask about bulk discounts.",
          zh: "询问批量折扣。"
        },
        bot: "If you buy 5 pounds or more, I'll give you 10% off.",
        user: "Do you offer bulk discounts?",
        tips: {
          simple: "Do you have bulk discount?",
          natural: "Are there discounts for buying in bulk?",
          native: "Any deals for buying more?"
        },
        pattern: "Do you offer ...?",
        keywords: ["bulk", "discount", "deal"]
      },
      {
        taskId: "market_c2_t2",
        desc: {
          en: "Ask what's in season.",
          zh: "询问什么是当季的。"
        },
        bot: "Right now, apples and pumpkins are in season.",
        user: "What's in season right now?",
        tips: {
          simple: "What is in season?",
          natural: "What produce is in season?",
          native: "What's seasonal now?"
        },
        pattern: "What's in season?",
        keywords: ["season", "seasonal", "fresh"]
      },
      {
        taskId: "market_c2_t3",
        desc: {
          en: "Request a sample.",
          zh: "要求试吃。"
        },
        bot: "Of course, try this peach!",
        user: "Can I try a sample?",
        tips: {
          simple: "Can I try sample?",
          natural: "Could I have a sample?",
          native: "Mind if I try one?"
        },
        pattern: "Can I try ...?",
        keywords: ["sample", "try", "taste"]
      }
    ]
  }
];

export default cards;
