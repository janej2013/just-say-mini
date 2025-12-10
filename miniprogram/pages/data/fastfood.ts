// 快餐店关卡任务数据

export const cards = [
  // ------------------------------------------------
  // Card 1 — 点餐基础 / Basic Ordering
  // ------------------------------------------------
  {
    cardId: "fastfood_c1",
    title: {
      en: "Basic Ordering",
      zh: "基础点餐"
    },
    botHello: "Hi there, ready to order?",
    botBye: "Thanks! Your order will be right out.",
    npc: { animal: "Dog", role: "Cashier" },
    tasks: [
      {
        taskId: "fastfood_c1_t1",
        desc: {
          en: "Order a main item.",
          zh: "点主食。"
        },
        bot: "Sure, anything else?",
        user: "Hi, can I get a cheeseburger?",
        tips: {
          simple: "One cheeseburger, please.",
          natural: "Hey, can I get a cheeseburger?",
          native: "Hi, could I grab a cheeseburger?"
        },
        pattern: "Can I get + item?",
        keywords: ["get", "cheeseburger"]
      },
      {
        taskId: "fastfood_c1_t2",
        desc: {
          en: "Order a drink.",
          zh: "点一杯饮料。"
        },
        bot: "What size would you like?",
        user: "Can I get a medium Coke?",
        tips: {
          simple: "Medium Coke, please.",
          natural: "Can I get a medium Coke?",
          native: "Could I have a medium Coke?"
        },
        pattern: "Can I get a + size + drink?",
        keywords: ["medium", "Coke"]
      },
      {
        taskId: "fastfood_c1_t3",
        desc: {
          en: "Order a side item.",
          zh: "点配餐（如薯条）。"
        },
        bot: "Absolutely.",
        user: "Can I add fries to that?",
        tips: {
          simple: "Add fries, please.",
          natural: "Can I add fries to that?",
          native: "Could I add an order of fries to that?"
        },
        pattern: "Can I add + item?",
        keywords: ["add", "fries"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 2 — 套餐选择 / Combo Options
  // ------------------------------------------------
  {
    cardId: "fastfood_c2",
    title: {
      en: "Combo Options",
      zh: "套餐选择"
    },
    botHello: "Hi! Want a combo today?",
    botBye: "Great choice, enjoy your meal!",
    npc: { animal: "Bear", role: "Cashier" },
    tasks: [
      {
        taskId: "fastfood_c2_t1",
        desc: {
          en: "Ask what’s included in a combo.",
          zh: "询问套餐包含什么。"
        },
        bot: "It comes with fries and a drink.",
        user: "What’s included in the combo?",
        tips: {
          simple: "What's in the combo?",
          natural: "What does the combo come with?",
          native: "What’s included in the combo meal?"
        },
        pattern: "What’s included in + item?",
        keywords: ["included", "combo"]
      },
      {
        taskId: "fastfood_c2_t2",
        desc: {
          en: "Choose drink size.",
          zh: "选择饮料尺寸。"
        },
        bot: "Sure, medium it is.",
        user: "Medium is fine, thanks.",
        tips: {
          simple: "Medium, please.",
          natural: "Medium works, thanks.",
          native: "Medium is perfect, thanks."
        },
        pattern: "Size + choice",
        keywords: ["medium", "size"]
      },
      {
        taskId: "fastfood_c2_t3",
        desc: {
          en: "Switch fries to a different side.",
          zh: "将薯条换成其他配餐。"
        },
        bot: "No problem, we can switch that.",
        user: "Can I switch fries to a salad?",
        tips: {
          simple: "Switch fries to salad?",
          natural: "Can I swap the fries for a salad?",
          native: "Could I switch out the fries for a salad?"
        },
        pattern: "Can I switch + item + to + item?",
        keywords: ["switch", "salad"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 3 — 过敏 / 口味偏好 / Dietary Requests
  // ------------------------------------------------
  {
    cardId: "fastfood_c3",
    title: {
      en: "Dietary Requests",
      zh: "饮食要求"
    },
    botHello: "Let me know if you have any dietary needs.",
    botBye: "Got it, we’ll prepare it just the way you like.",
    npc: { animal: "Squirrel", role: "Staff" },
    tasks: [
      {
        taskId: "fastfood_c3_t1",
        desc: {
          en: "Ask if an item contains an allergen.",
          zh: "询问食物是否含有过敏源。"
        },
        bot: "Let me check the ingredients for you.",
        user: "Does this contain nuts?",
        tips: {
          simple: "Any nuts in this?",
          natural: "Does this have nuts in it?",
          native: "Do you know if this contains any nuts?"
        },
        pattern: "Does this contain + allergen?",
        keywords: ["contain", "nuts"]
      },
      {
        taskId: "fastfood_c3_t2",
        desc: {
          en: "Request no specific ingredient.",
          zh: "请求不要某个配料。"
        },
        bot: "Sure, we can leave that out.",
        user: "Can you make it without onions?",
        tips: {
          simple: "No onions, please.",
          natural: "Can you make it without onions?",
          native: "Could you leave the onions out?"
        },
        pattern: "Can you make it without + ingredient?",
        keywords: ["without", "onions"]
      },
      {
        taskId: "fastfood_c3_t3",
        desc: {
          en: "Ask if there’s a vegetarian option.",
          zh: "询问是否有素食选择。"
        },
        bot: "Yes, we have a veggie burger.",
        user: "Do you have anything vegetarian?",
        tips: {
          simple: "Any vegetarian options?",
          natural: "Do you have anything vegetarian?",
          native: "Do you guys offer any vegetarian options?"
        },
        pattern: "Do you have anything + diet?",
        keywords: ["vegetarian", "option"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 4 — 等餐 / 拿餐 / Missing Items
  // ------------------------------------------------
  {
    cardId: "fastfood_c4",
    title: {
      en: "Order Pickup",
      zh: "取餐与缺失食品"
    },
    botHello: "Your order should be ready soon.",
    botBye: "Thanks for waiting!",
    npc: { animal: "Penguin", role: "Kitchen Staff" },
    tasks: [
      {
        taskId: "fastfood_c4_t1",
        desc: {
          en: "Ask if your order is ready.",
          zh: "询问订单是否准备好。"
        },
        bot: "Let me check on it.",
        user: "Hi, is my order ready?",
        tips: {
          simple: "Is my order ready?",
          natural: "Hey, is my order done?",
          native: "Hi, is my order ready to pick up?"
        },
        pattern: "Is my order + status?",
        keywords: ["order", "ready"]
      },
      {
        taskId: "fastfood_c4_t2",
        desc: {
          en: "Tell staff something is missing.",
          zh: "告知员工有东西漏给了你。"
        },
        bot: "Sorry about that, I’ll get it for you.",
        user: "I think my drink is missing.",
        tips: {
          simple: "My drink is missing.",
          natural: "Looks like my drink’s missing.",
          native: "I think my drink didn’t come with the order."
        },
        pattern: "My + item + is missing.",
        keywords: ["missing", "drink"]
      },
      {
        taskId: "fastfood_c4_t3",
        desc: {
          en: "Confirm your order number.",
          zh: "确认自己的订单号。"
        },
        bot: "Yep, that’s yours.",
        user: "Is order 57 mine?",
        tips: {
          simple: "Is 57 mine?",
          natural: "Hey, is order 57 mine?",
          native: "Just checking — is number 57 mine?"
        },
        pattern: "Is + number + mine?",
        keywords: ["order", "number"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 5 — 餐桌 / 餐具 / 酱料
  // ------------------------------------------------
  {
    cardId: "fastfood_c5",
    title: {
      en: "Condiments & Seating",
      zh: "餐具、调味酱和座位"
    },
    botHello: "Need anything else for your meal?",
    botBye: "Enjoy your food!",
    npc: { animal: "Parrot", role: "Staff" },
    tasks: [
      {
        taskId: "fastfood_c5_t1",
        desc: {
          en: "Ask for napkins/utensils.",
          zh: "索要纸巾/餐具。"
        },
        bot: "Here you go.",
        user: "Could I get some napkins?",
        tips: {
          simple: "Napkins, please.",
          natural: "Can I grab some napkins?",
          native: "Could I get a few napkins?"
        },
        pattern: "Could I get + item?",
        keywords: ["napkins", "get"]
      },
      {
        taskId: "fastfood_c5_t2",
        desc: {
          en: "Ask for extra sauce.",
          zh: "询问额外的酱料。"
        },
        bot: "Sure, what kind would you like?",
        user: "Can I get some extra ketchup?",
        tips: {
          simple: "Extra ketchup, please.",
          natural: "Can I get some extra ketchup?",
          native: "Could I get a little extra ketchup?"
        },
        pattern: "Can I get extra + item?",
        keywords: ["extra", "ketchup"]
      },
      {
        taskId: "fastfood_c5_t3",
        desc: {
          en: "Ask if a table is available.",
          zh: "询问是否有空桌。"
        },
        bot: "Let me check for you.",
        user: "Is there an empty table right now?",
        tips: {
          simple: "Any empty tables?",
          natural: "Do you know if there are any free tables?",
          native: "Is there an open table available right now?"
        },
        pattern: "Is there + availability?",
        keywords: ["empty table", "available"]
      }
    ]
  }
];

export default cards;
