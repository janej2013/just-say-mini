// 购物商场关卡任务数据

export const cards = [
  // ---------------------------------------
  // Card 1 — 找商品 / Asking for items
  // ---------------------------------------
  {
    cardId: "shopping_c1",
    title: {
      en: "Asking for Items",
      zh: "寻找商品"
    },
    botHello: "Hey there, looking for something?",
    botBye: "Hope you find everything you need!",
    npc: { animal: "Rabbit", role: "Store Staff" },
    tasks: [
      {
        taskId: "shopping_c1_t1",
        desc: {
          en: "Ask where to find a specific product.",
          zh: "询问某个商品在哪里。"
        },
        bot: "Sure, what exactly are you looking for?",
        user: "Hi, could you tell me where I can find phone chargers?",
        tips: {
          simple: "Where are the phone chargers?",
          natural: "Hey, do you know where the phone chargers are?",
          native: "Hi, could you point me to where the phone chargers are?"
        },
        pattern: "Where can I find + item?",
        keywords: ["find", "chargers"]
      },
      {
        taskId: "shopping_c1_t2",
        desc: {
          en: "Confirm availability of an item.",
          zh: "确认某商品是否有货。"
        },
        bot: "Let me check for you.",
        user: "Do you have this in stock?",
        tips: {
          simple: "Is this in stock?",
          natural: "Do you guys still have this?",
          native: "Do you happen to have this in stock?"
        },
        pattern: "Do you have + item + in stock?",
        keywords: ["have", "stock"]
      },
      {
        taskId: "shopping_c1_t3",
        desc: {
          en: "Ask if there's a different size/color/model.",
          zh: "询问是否有其他尺寸/颜色/型号。"
        },
        bot: "We might, what size or color are you after?",
        user: "Do you have this in another size?",
        tips: {
          simple: "Any other size?",
          natural: "Do you have this in a different size?",
          native: "Do you carry this in another size or fit?"
        },
        pattern: "Do you have this in another + option?",
        keywords: ["another", "size"]
      }
    ]
  },

  // ---------------------------------------
  // Card 2 — 试衣间 / Fitting room
  // ---------------------------------------
  {
    cardId: "shopping_c2",
    title: {
      en: "Fitting Room",
      zh: "试衣间相关"
    },
    botHello: "Hi! Need a fitting room?",
    botBye: "Take your time!",
    npc: { animal: "Cat", role: "Fitting Room Staff" },
    tasks: [
      {
        taskId: "shopping_c2_t1",
        desc: {
          en: "Ask where the fitting rooms are.",
          zh: "询问试衣间在哪里。"
        },
        bot: "They’re right over there.",
        user: "Excuse me, where are the fitting rooms?",
        tips: {
          simple: "Where's the fitting room?",
          natural: "Hey, where can I try this on?",
          native: "Excuse me, where are the fitting rooms located?"
        },
        pattern: "Where are the + place?",
        keywords: ["where", "fitting room"]
      },
      {
        taskId: "shopping_c2_t2",
        desc: {
          en: "Ask to try on clothing.",
          zh: "询问是否能试穿衣服。"
        },
        bot: "Sure, go ahead.",
        user: "Can I try this on?",
        tips: {
          simple: "Can I try this?",
          natural: "Is it okay if I try this on?",
          native: "Would it be alright if I tried this on?"
        },
        pattern: "Can I try + item + on?",
        keywords: ["try", "on"]
      },
      {
        taskId: "shopping_c2_t3",
        desc: {
          en: "Ask for a different size while inside.",
          zh: "试穿过程中请求不同尺寸。"
        },
        bot: "Of course, what size do you need?",
        user: "Do you have this in a bigger size?",
        tips: {
          simple: "Bigger size?",
          natural: "Do you have this one in a bigger size?",
          native: "Could I get this in a size up?"
        },
        pattern: "Do you have this in + size?",
        keywords: ["bigger", "size"]
      }
    ]
  },

  // ---------------------------------------
  // Card 3 — 价格 / 折扣 / 付款
  // ---------------------------------------
  {
    cardId: "shopping_c3",
    title: {
      en: "Price & Payment",
      zh: "价格与付款"
    },
    botHello: "Hi! Let me know if you have questions.",
    botBye: "Thanks for shopping with us!",
    npc: { animal: "Fox", role: "Cashier" },
    tasks: [
      {
        taskId: "shopping_c3_t1",
        desc: {
          en: "Ask for the price.",
          zh: "询问商品价格。"
        },
        bot: "The price is listed right here.",
        user: "Excuse me, how much is this?",
        tips: {
          simple: "How much is this?",
          natural: "Hey, how much does this cost?",
          native: "Excuse me, what’s the price on this?"
        },
        pattern: "How much is + item?",
        keywords: ["how much", "price"]
      },
      {
        taskId: "shopping_c3_t2",
        desc: {
          en: "Ask if there's a discount or promotion.",
          zh: "询问是否有折扣/促销。"
        },
        bot: "Let me check if there's any promotion on it.",
        user: "Is there any discount on this?",
        tips: {
          simple: "Any discount?",
          natural: "Do you know if this is on sale?",
          native: "Is there any promotion or discount available for this?"
        },
        pattern: "Is there any discount on + item?",
        keywords: ["discount", "sale"]
      },
      {
        taskId: "shopping_c3_t3",
        desc: {
          en: "Ask if they accept a certain payment method.",
          zh: "询问是否支持特定支付方式。"
        },
        bot: "Yes, we accept that.",
        user: "Do you take Apple Pay?",
        tips: {
          simple: "Do you take Apple Pay?",
          natural: "Can I pay with Apple Pay?",
          native: "Do you guys accept Apple Pay?"
        },
        pattern: "Do you accept + payment method?",
        keywords: ["accept", "Apple Pay"]
      }
    ]
  },

  // ---------------------------------------
  // Card 4 — 退货换货 / Returns & Exchanges
  // ---------------------------------------
  {
    cardId: "shopping_c4",
    title: {
      en: "Returns & Exchanges",
      zh: "退货换货"
    },
    botHello: "Hi there, how can I help you today?",
    botBye: "Hope we got everything sorted for you!",
    npc: { animal: "Koala", role: "Customer Service" },
    tasks: [
      {
        taskId: "shopping_c4_t1",
        desc: {
          en: "Ask how to return an item.",
          zh: "询问如何退货。"
        },
        bot: "Sure, I can explain our return policy.",
        user: "Hi, how do I return this?",
        tips: {
          simple: "How do I return this?",
          natural: "Hey, what's the process to return this?",
          native: "Hi, could you tell me how I can return this?"
        },
        pattern: "How do I return + item?",
        keywords: ["return", "how"]
      },
      {
        taskId: "shopping_c4_t2",
        desc: {
          en: "Ask if they can exchange for another item.",
          zh: "询问是否能换货。"
        },
        bot: "Yes, we can do an exchange.",
        user: "Can I exchange this for a different size?",
        tips: {
          simple: "Can I exchange this?",
          natural: "Is it possible to swap this for another size?",
          native: "Can I exchange this for a different size or color?"
        },
        pattern: "Can I exchange + item + for + option?",
        keywords: ["exchange", "size"]
      },
      {
        taskId: "shopping_c4_t3",
        desc: {
          en: "Ask about the return window or conditions.",
          zh: "询问退货期限或条件。"
        },
        bot: "Our return window is 30 days.",
        user: "How long do I have to return this?",
        tips: {
          simple: "How long to return this?",
          natural: "How long is the return period?",
          native: "How much time do I have to return this item?"
        },
        pattern: "How long do I have to + action?",
        keywords: ["how long", "return window"]
      }
    ]
  },

  // ---------------------------------------
  // Card 5 — 找厕所 / 找服务台 / 找出口
  // ---------------------------------------
  {
    cardId: "shopping_c5",
    title: {
      en: "Finding Facilities",
      zh: "寻找设施"
    },
    botHello: "Hi! Need directions?",
    botBye: "Hope that helps!",
    npc: { animal: "Owl", role: "Mall Staff" },
    tasks: [
      {
        taskId: "shopping_c5_t1",
        desc: {
          en: "Ask where the restroom is.",
          zh: "询问厕所在哪里。"
        },
        bot: "The restrooms are down the hall to your left.",
        user: "Excuse me, where's the restroom?",
        tips: {
          simple: "Where's the restroom?",
          natural: "Hey, where can I find the restroom?",
          native: "Excuse me, could you tell me where the restrooms are?"
        },
        pattern: "Where is the + place?",
        keywords: ["where", "restroom"]
      },
      {
        taskId: "shopping_c5_t2",
        desc: {
          en: "Ask where the customer service desk is.",
          zh: "询问服务台位置。"
        },
        bot: "It’s right on the first floor near the entrance.",
        user: "Where can I find the customer service desk?",
        tips: {
          simple: "Where's the service desk?",
          natural: "Hey, where's customer service?",
          native: "Where can I find the customer service desk?"
        },
        pattern: "Where can I find + place?",
        keywords: ["customer service", "find"]
      },
      {
        taskId: "shopping_c5_t3",
        desc: {
          en: "Ask how to get to the exit.",
          zh: "询问出口位置。"
        },
        bot: "Just keep walking straight and you'll see the signs.",
        user: "Excuse me, how do I get to the exit?",
        tips: {
          simple: "How do I get to the exit?",
          natural: "Which way is the exit?",
          native: "Excuse me, what's the best way to get to the exit?"
        },
        pattern: "How do I get to + place?",
        keywords: ["get to", "exit"]
      }
    ]
  }
];

export default cards;
