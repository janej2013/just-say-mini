// 农贸市场关卡任务数据

export const cards = [
  /* ------------ Card 1: 找摊位 ------------- */
  {
    cardId: "market_c1",
    title: { zh: "寻找摊位", en: "Finding a Stall" },
    botHello: "Hi there, looking for something?",
    botBye: "Alright, hope you find what you need!",
    npc: { animal: "Goat", role: "Market Vendor" },
    tasks: [
      {
        taskId: "market_c1_t1",
        desc: {
          en: "Ask where the vegetable stalls are.",
          zh: "询问蔬菜摊位在哪里。"
        },
        bot: "The vegetable stalls are down that way on the left.",
        tips: {
          simple: "Where are the veggies?",
          natural: "Hi, where can I find the vegetable stalls?",
          native: "Hey, where are the veggie stalls at?"
        },
        user: "Hi, where can I find the vegetable stalls?",
        pattern: "Where can I find ...?",
        keywords: ["vegetable stalls", "where"]
      },
      {
        taskId: "market_c1_t2",
        desc: {
          en: "Ask where the seafood section is.",
          zh: "询问海鲜区在哪里。"
        },
        bot: "Seafood is at the back of the market.",
        tips: {
          simple: "Where’s the seafood?",
          natural: "Where can I find the seafood section?",
          native: "Hey, where’s the seafood section?"
        },
        user: "Where can I find the seafood section?",
        pattern: "Where can I find ...?",
        keywords: ["seafood", "section", "where"]
      },
      {
        taskId: "market_c1_t3",
        desc: {
          en: "Ask whether a specific vendor is here today.",
          zh: "询问某位摊主今天是否在。"
        },
        bot: "Yes, he’s over there near the fruit stalls.",
        tips: {
          simple: "Is the chicken guy here?",
          natural: "Is the chicken vendor here today?",
          native: "Hey, is the chicken guy around today?"
        },
        user: "Is the chicken vendor here today?",
        pattern: "Is ... here today?",
        keywords: ["vendor", "here today"]
      }
    ]
  },

  /* ------------ Card 2: 商品价格与称重 ------------- */
  {
    cardId: "market_c2",
    title: { zh: "价格与称重", en: "Price & Weight" },
    botHello: "Hello! Want to check a price?",
    botBye: "Sure thing, take your time!",
    npc: { animal: "Pig", role: "Vendor" },
    tasks: [
      {
        taskId: "market_c2_t1",
        desc: {
          en: "Ask how much something costs.",
          zh: "询问某样商品多少钱。"
        },
        bot: "It’s $3 per pound.",
        tips: {
          simple: "How much is this?",
          natural: "Hi, how much is this per pound?",
          native: "How much are these going for?"
        },
        user: "Hi, how much is this per pound?",
        pattern: "How much is ...?",
        keywords: ["price", "per pound"]
      },
      {
        taskId: "market_c2_t2",
        desc: {
          en: "Ask the vendor to weigh something.",
          zh: "让摊主帮忙称重。"
        },
        bot: "Sure, let me weigh that for you.",
        tips: {
          simple: "Can you weigh this?",
          natural: "Could you weigh this for me?",
          native: "Mind weighing this for me?"
        },
        user: "Could you weigh this for me?",
        pattern: "Could you ... for me?",
        keywords: ["weigh", "help"]
      },
      {
        taskId: "market_c2_t3",
        desc: {
          en: "Ask for a smaller or bigger amount.",
          zh: "询问有没有更小/更多的量。"
        },
        bot: "Sure, I can give you a smaller portion.",
        tips: {
          simple: "Can I get less?",
          natural: "Do you have a smaller portion?",
          native: "Could you do a smaller amount for me?"
        },
        user: "Do you have a smaller portion?",
        pattern: "Do you have a ... portion?",
        keywords: ["portion", "smaller", "bigger"]
      }
    ]
  },

  /* ------------ Card 3: 新鲜度与推荐 ------------- */
  {
    cardId: "market_c3",
    title: { zh: "新鲜度与推荐", en: "Freshness & Recommendations" },
    botHello: "Hi! Looking for something fresh?",
    botBye: "No problem, enjoy your shopping!",
    npc: { animal: "Chicken", role: "Vendor" },
    tasks: [
      {
        taskId: "market_c3_t1",
        desc: {
          en: "Ask if the item is fresh.",
          zh: "询问商品是否新鲜。"
        },
        bot: "Yes, it came in early this morning.",
        tips: {
          simple: "Is this fresh?",
          natural: "Hi, is this fresh?",
          native: "Hey, is this pretty fresh?"
        },
        user: "Hi, is this fresh?",
        pattern: "Is this ...?",
        keywords: ["fresh"]
      },
      {
        taskId: "market_c3_t2",
        desc: {
          en: "Ask when the item arrived.",
          zh: "询问商品是何时到货的。"
        },
        bot: "It arrived about an hour ago.",
        tips: {
          simple: "When did this come?",
          natural: "When did this arrive?",
          native: "Do you know when this came in?"
        },
        user: "When did this arrive?",
        pattern: "When did ... arrive?",
        keywords: ["when", "arrive"]
      },
      {
        taskId: "market_c3_t3",
        desc: {
          en: "Ask for the vendor’s recommendation.",
          zh: "询问摊主的推荐。"
        },
        bot: "I recommend the tomatoes today—they’re very sweet.",
        tips: {
          simple: "Which one is good?",
          natural: "What do you recommend?",
          native: "What would you recommend today?"
        },
        user: "What do you recommend?",
        pattern: "What do you recommend?",
        keywords: ["recommend"]
      }
    ]
  },

  /* ------------ Card 4: 讨价还价与优惠 ------------- */
  {
    cardId: "market_c4",
    title: { zh: "议价与优惠", en: "Bargaining & Discounts" },
    botHello: "Hey there, looking for a deal?",
    botBye: "Alright, hope that works for you!",
    npc: { animal: "Monkey", role: "Vendor" },
    tasks: [
      {
        taskId: "market_c4_t1",
        desc: {
          en: "Ask if the price can be cheaper.",
          zh: "询问能否便宜一点。"
        },
        bot: "Hmm… I can give you a small discount.",
        tips: {
          simple: "Can it be cheaper?",
          natural: "Could you do a better price?",
          native: "Any chance you could give me a better price?"
        },
        user: "Could you do a better price?",
        pattern: "Could you ...?",
        keywords: ["cheaper", "price"]
      },
      {
        taskId: "market_c4_t2",
        desc: {
          en: "Ask about discounts for buying more.",
          zh: "询问多买是否有优惠。"
        },
        bot: "If you buy two, I can give you 10% off.",
        tips: {
          simple: "More, cheaper?",
          natural: "Is there a discount if I buy more?",
          native: "Do you do discounts for buying in bulk?"
        },
        user: "Is there a discount if I buy more?",
        pattern: "Is there a discount if ...?",
        keywords: ["discount", "bulk", "buy more"]
      },
      {
        taskId: "market_c4_t3",
        desc: {
          en: "Ask if the price includes the bag.",
          zh: "询问价格是否包含袋子。"
        },
        bot: "No, the bag is 5 cents extra.",
        tips: {
          simple: "Bag included?",
          natural: "Does the price include the bag?",
          native: "Does that price include a bag?"
        },
        user: "Does the price include the bag?",
        pattern: "Does the price include ...?",
        keywords: ["bag", "include"]
      }
    ]
  },

  /* ------------ Card 5: 试吃与处理方式 ------------- */
  {
    cardId: "market_c5",
    title: { zh: "试吃与处理方式", en: "Samples & Prep Options" },
    botHello: "Hi, want to try a sample?",
    botBye: "Great, enjoy your day!",
    npc: { animal: "Duck", role: "Vendor" },
    tasks: [
      {
        taskId: "market_c5_t1",
        desc: {
          en: "Ask if you can taste a sample.",
          zh: "询问是否可以试吃。"
        },
        bot: "Sure, here you go.",
        tips: {
          simple: "Can I try?",
          natural: "Can I try a sample?",
          native: "Mind if I try a sample?"
        },
        user: "Can I try a sample?",
        pattern: "Can I try ...?",
        keywords: ["sample", "try"]
      },
      {
        taskId: "market_c5_t2",
        desc: {
          en: "Ask if the vendor can clean or cut the item.",
          zh: "询问摊主能否帮忙处理食材。"
        },
        bot: "Yes, I can clean and cut it for you.",
        tips: {
          simple: "Can you cut it?",
          natural: "Can you clean and cut this for me?",
          native: "Could you clean and cut this for me?"
        },
        user: "Can you clean and cut this for me?",
        pattern: "Can you ... for me?",
        keywords: ["cut", "clean", "prep"]
      },
      {
        taskId: "market_c5_t3",
        desc: {
          en: "Ask how to store or cook the item.",
          zh: "询问如何保存或烹饪该食材。"
        },
        bot: "You can keep it in the fridge for two days, and it's great stir-fried.",
        tips: {
          simple: "How to store this?",
          natural: "How should I store this?",
          native: "What’s the best way to store this?"
        },
        user: "How should I store this?",
        pattern: "How should I ...?",
        keywords: ["store", "cook", "how"]
      }
    ]
  }
];

export default cards;
