// 超市关卡任务数据

export const cards = [ 
  /* ------------ Card 1: 寻找商品 ------------- */
  {
    cardId: "supermarket_c1",
    title: { zh: "寻找商品", en: "Finding Items" },
    botHello: "Hi there, need help finding anything?",
    botBye: "Sure, hope you find everything you need!",
    npc: { animal: "Squirrel", role: "Store Staff" },
    tasks: [
      {
        taskId: "supermarket_c1_t1",
        desc: {
          en: "Ask where a specific item is.",
          zh: "询问某个具体商品在哪里。"
        },
        bot: "You'll find it in aisle 5 on the right side.",
        tips: {
          simple: "Where is the milk?",
          natural: "Hi, where can I find the milk?",
          native: "Hey, do you know where the milk is?"
        },
        user: "Hi, where can I find the milk?",
        pattern: "Where can I find ...?",
        keywords: ["where", "find", "item", "milk"]
      },
      {
        taskId: "supermarket_c1_t2",
        desc: {
          en: "Ask if the store carries a specific product.",
          zh: "询问商店是否有某个商品。"
        },
        bot: "Yes, we do carry that. It's over near the dairy section.",
        tips: {
          simple: "Do you have almond milk?",
          natural: "Do you guys have almond milk?",
          native: "Do you happen to carry almond milk?"
        },
        user: "Do you guys have almond milk?",
        pattern: "Do you have ...?",
        keywords: ["have", "product", "almond milk"]
      },
      {
        taskId: "supermarket_c1_t3",
        desc: {
          en: "Ask if an item is out of stock.",
          zh: "询问某个商品是否缺货。"
        },
        bot: "Let me check… yeah, looks like we're out of stock today.",
        tips: {
          simple: "Is this sold out?",
          natural: "Hi, is this item out of stock?",
          native: "Hey, do you know if this is out of stock?"
        },
        user: "Hi, is this item out of stock?",
        pattern: "Is this ...?",
        keywords: ["sold out", "out of stock"]
      }
    ]
  },

  /* ------------ Card 2: 商品规格与替代品 ------------- */
  {
    cardId: "supermarket_c2",
    title: { zh: "规格与替代品", en: "Size & Substitutes" },
    botHello: "Hey there, need help choosing something?",
    botBye: "No problem, hope that helps!",
    npc: { animal: "Rabbit", role: "Store Staff" },
    tasks: [
      {
        taskId: "supermarket_c2_t1",
        desc: {
          en: "Ask if the item comes in another size.",
          zh: "询问商品是否有其他规格。"
        },
        bot: "Yes, we also have a larger size on the top shelf.",
        tips: {
          simple: "Is there a bigger one?",
          natural: "Do you have a larger size?",
          native: "Does this come in a bigger size?"
        },
        user: "Do you have a larger size?",
        pattern: "Do you have a ... size?",
        keywords: ["larger", "size"]
      },
      {
        taskId: "supermarket_c2_t2",
        desc: {
          en: "Ask for a substitute item.",
          zh: "询问是否有替代商品。"
        },
        bot: "You can try this one. It’s a good alternative.",
        tips: {
          simple: "Is there another one I can use?",
          natural: "Do you have an alternative for this?",
          native: "Is there a good substitute for this?"
        },
        user: "Do you have an alternative for this?",
        pattern: "Do you have an alternative ...?",
        keywords: ["alternative", "substitute"]
      },
      {
        taskId: "supermarket_c2_t3",
        desc: {
          en: "Ask which one is better.",
          zh: "询问哪个商品更好。"
        },
        bot: "Well, this one is fresher and more popular.",
        tips: {
          simple: "Which one is better?",
          natural: "Which one would you recommend?",
          native: "Which one do you think is better?"
        },
        user: "Which one would you recommend?",
        pattern: "Which one ...?",
        keywords: ["recommend", "better", "which"]
      }
    ]
  },

  /* ------------ Card 3: 生鲜与保质期 ------------- */
  {
    cardId: "supermarket_c3",
    title: { zh: "生鲜与保质期", en: "Fresh Food & Expiration" },
    botHello: "Hi, looking for something fresh?",
    botBye: "Anytime! Enjoy your shopping.",
    npc: { animal: "Owl", role: "Store Staff" },
    tasks: [
      {
        taskId: "supermarket_c3_t1",
        desc: {
          en: "Ask when the produce was stocked.",
          zh: "询问生鲜商品是什么时候上架的。"
        },
        bot: "These were stocked this morning.",
        tips: {
          simple: "When did this arrive?",
          natural: "When was this stocked?",
          native: "Do you know when these came in?"
        },
        user: "When was this stocked?",
        pattern: "When was ...?",
        keywords: ["when", "stocked", "fresh"]
      },
      {
        taskId: "supermarket_c3_t2",
        desc: {
          en: "Ask about the expiration date.",
          zh: "询问保质期。"
        },
        bot: "It expires next Wednesday.",
        tips: {
          simple: "When does it go bad?",
          natural: "What's the expiration date?",
          native: "Do you know when this expires?"
        },
        user: "What's the expiration date?",
        pattern: "What’s the expiration date?",
        keywords: ["expiration", "date"]
      },
      {
        taskId: "supermarket_c3_t3",
        desc: {
          en: "Ask if there are fresher items in the back.",
          zh: "询问仓库里是否有更新鲜的商品。"
        },
        bot: "Let me check… yes, we do have fresher ones. I'll bring them out.",
        tips: {
          simple: "Do you have fresher ones?",
          natural: "Are there any fresher ones in the back?",
          native: "Any chance you have fresher ones in the back?"
        },
        user: "Are there any fresher ones in the back?",
        pattern: "Are there any ... in the back?",
        keywords: ["fresher", "back"]
      }
    ]
  },

  /* ------------ Card 4: 结账付款问题 ------------- */
  {
    cardId: "supermarket_c4",
    title: { zh: "结账付款", en: "Checkout & Payment" },
    botHello: "Hi, checking out now?",
    botBye: "Great, have a good day!",
    npc: { animal: "Dog", role: "Cashier" },
    tasks: [
      {
        taskId: "supermarket_c4_t1",
        desc: {
          en: "Ask if a payment method is accepted.",
          zh: "询问是否接受某种付款方式。"
        },
        bot: "Yes, we accept that card.",
        tips: {
          simple: "Do you take this card?",
          natural: "Do you accept this card?",
          native: "Do you guys take this card?"
        },
        user: "Do you accept this card?",
        pattern: "Do you accept ...?",
        keywords: ["accept", "card", "payment"]
      },
      {
        taskId: "supermarket_c4_t2",
        desc: {
          en: "Ask for a bag.",
          zh: "询问是否有购物袋。"
        },
        bot: "Yes, a bag is 10 cents. Would you like one?",
        tips: {
          simple: "Can I get a bag?",
          natural: "Could I have a bag, please?",
          native: "Can I grab a bag too?"
        },
        user: "Could I have a bag, please?",
        pattern: "Could I have ...?",
        keywords: ["bag"]
      },
      {
        taskId: "supermarket_c4_t3",
        desc: {
          en: "Ask for splitting payment.",
          zh: "询问是否可以分开付款。"
        },
        bot: "Sure, we can split it however you like.",
        tips: {
          simple: "Can I pay split?",
          natural: "Can I split the payment?",
          native: "Is it okay to split the payment?"
        },
        user: "Can I split the payment?",
        pattern: "Can I split ...?",
        keywords: ["split", "payment"]
      }
    ]
  },

  /* ------------ Card 5: 客服协助问题 ------------- */
  {
    cardId: "supermarket_c5",
    title: { zh: "客服协助", en: "Customer Service Help" },
    botHello: "Hi, need any assistance?",
    botBye: "Alright, hope that helps!",
    npc: { animal: "Cat", role: "Customer Service" },
    tasks: [
      {
        taskId: "supermarket_c5_t1",
        desc: {
          en: "Ask about return policy.",
          zh: "询问退货政策。"
        },
        bot: "You can return items within 30 days with the receipt.",
        tips: {
          simple: "Can I return this?",
          natural: "What's your return policy?",
          native: "How do returns work here?"
        },
        user: "What's your return policy?",
        pattern: "What’s your ... policy?",
        keywords: ["return", "policy"]
      },
      {
        taskId: "supermarket_c5_t2",
        desc: {
          en: "Ask for price check.",
          zh: "询问商品价格。"
        },
        bot: "Let me scan it… it's $6.99.",
        tips: {
          simple: "How much is this?",
          natural: "Can you check the price for me?",
          native: "Mind checking the price on this?"
        },
        user: "Can you check the price for me?",
        pattern: "Can you check ...?",
        keywords: ["price", "check"]
      },
      {
        taskId: "supermarket_c5_t3",
        desc: {
          en: "Ask where the restroom is.",
          zh: "询问洗手间在哪里。"
        },
        bot: "It's at the back of the store on the left.",
        tips: {
          simple: "Where's the restroom?",
          natural: "Hi, where is the restroom?",
          native: "Hey, where’s the restroom at?"
        },
        user: "Hi, where is the restroom?",
        pattern: "Where is ...?",
        keywords: ["restroom", "where"]
      }
    ]
  }
];

export default cards;
