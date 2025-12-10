// 高级餐厅关卡任务数据

export const cards = [
  // ------------------------------------------------
  // Card 1 — 到店与预定 / Reservation & Seating
  // ------------------------------------------------
  {
    cardId: "finedine_c1",
    title: {
      en: "Reservation & Seating",
      zh: "预定与入座"
    },
    botHello: "Good evening, do you have a reservation?",
    botBye: "Please follow me to your table.",
    npc: { animal: "Swan", role: "Host" },
    tasks: [
      {
        taskId: "finedine_c1_t1",
        desc: {
          en: "Tell staff you have a reservation.",
          zh: "告知你已有预定。"
        },
        bot: "Let me check your reservation.",
        user: "Hi, I have a reservation under Chen.",
        tips: {
          simple: "I have a reservation under Chen.",
          natural: "Hi, I booked a table under Chen.",
          native: "Hi there, I have a reservation under the name Chen."
        },
        pattern: "I have a reservation under + name",
        keywords: ["reservation", "under"]
      },
      {
        taskId: "finedine_c1_t2",
        desc: {
          en: "Ask for a table without a reservation.",
          zh: "询问是否能无预定入座。"
        },
        bot: "Let me see if we have any available tables.",
        user: "Do you have a table for one?",
        tips: {
          simple: "A table for one?",
          natural: "Do you have a table for one available?",
          native: "Hi, is there any chance you have a table for one?"
        },
        pattern: "Do you have a table for + number?",
        keywords: ["table", "one"]
      },
      {
        taskId: "finedine_c1_t3",
        desc: {
          en: "Request a preferred seating area.",
          zh: "请求特定的座位偏好。"
        },
        bot: "Let me check if we can arrange that.",
        user: "Could I sit by the window, if possible?",
        tips: {
          simple: "Window seat, please.",
          natural: "Is it possible to sit by the window?",
          native: "Could I be seated by the window, if that's available?"
        },
        pattern: "Could I sit + location",
        keywords: ["sit", "window"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 2 — 点餐与推荐 / Ordering & Recommendations
  // ------------------------------------------------
  {
    cardId: "finedine_c2",
    title: {
      en: "Ordering & Recommendations",
      zh: "点餐与推荐"
    },
    botHello: "Can I get you started with something to drink?",
    botBye: "Great, I’ll put your order in.",
    npc: { animal: "Peacock", role: "Server" },
    tasks: [
      {
        taskId: "finedine_c2_t1",
        desc: {
          en: "Ask for menu recommendations.",
          zh: "询问推荐菜品。"
        },
        bot: "Our chef recommends the seared scallops tonight.",
        user: "What do you recommend here?",
        tips: {
          simple: "What's good here?",
          natural: "What would you recommend?",
          native: "Do you have any recommendations from the menu?"
        },
        pattern: "What do you recommend?",
        keywords: ["recommend", "menu"]
      },
      {
        taskId: "finedine_c2_t2",
        desc: {
          en: "Order a main dish politely.",
          zh: "礼貌点主餐。"
        },
        bot: "Excellent choice.",
        user: "I’d like the grilled salmon, please.",
        tips: {
          simple: "The grilled salmon, please.",
          natural: "I’d like the grilled salmon.",
          native: "I’ll go with the grilled salmon, please."
        },
        pattern: "I’d like + item",
        keywords: ["like", "salmon"]
      },
      {
        taskId: "finedine_c2_t3",
        desc: {
          en: "Ask how a dish is prepared.",
          zh: "询问菜品如何制作。"
        },
        bot: "It’s pan-seared and served with lemon butter.",
        user: "How is the duck prepared?",
        tips: {
          simple: "How is the duck made?",
          natural: "How do you prepare the duck?",
          native: "Could you tell me how the duck is prepared?"
        },
        pattern: "How is + dish + prepared?",
        keywords: ["prepared", "duck"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 3 — 过敏与特殊要求 / Allergies & Special Requests
  // ------------------------------------------------
  {
    cardId: "finedine_c3",
    title: {
      en: "Allergies & Special Requests",
      zh: "过敏与特殊需求"
    },
    botHello: "Let us know if you have any allergies.",
    botBye: "No worries, we'll take care of that.",
    npc: { animal: "Deer", role: "Server" },
    tasks: [
      {
        taskId: "finedine_c3_t1",
        desc: {
          en: "Inform staff about allergies.",
          zh: "告知员工你的过敏情况。"
        },
        bot: "Thanks for letting me know, we’ll make sure it’s safe.",
        user: "I’m allergic to shellfish.",
        tips: {
          simple: "I'm allergic to shellfish.",
          natural: "Just a heads-up, I'm allergic to shellfish.",
          native: "I should mention I'm allergic to shellfish."
        },
        pattern: "I'm allergic to + allergen",
        keywords: ["allergic", "shellfish"]
      },
      {
        taskId: "finedine_c3_t2",
        desc: {
          en: "Request to remove an ingredient.",
          zh: "请求不要某个配料。"
        },
        bot: "Of course, we can leave that out.",
        user: "Could you make it without cheese?",
        tips: {
          simple: "No cheese, please.",
          natural: "Can you make it without cheese?",
          native: "Could you make that without cheese?"
        },
        pattern: "Can you make it without + ingredient?",
        keywords: ["without", "cheese"]
      },
      {
        taskId: "finedine_c3_t3",
        desc: {
          en: "Ask if the dish can be made vegetarian.",
          zh: "询问菜品是否能做成素食版本。"
        },
        bot: "Let me check with the kitchen.",
        user: "Can this be made vegetarian?",
        tips: {
          simple: "Vegetarian version possible?",
          natural: "Can you make this vegetarian?",
          native: "Is it possible to have this prepared as a vegetarian option?"
        },
        pattern: "Can this be made + dietary option?",
        keywords: ["vegetarian", "made"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 4 — 餐中需求 / During the Meal
  // ------------------------------------------------
  {
    cardId: "finedine_c4",
    title: {
      en: "During the Meal",
      zh: "餐中需求"
    },
    botHello: "Is everything tasting alright?",
    botBye: "Absolutely, I’ll bring that right over.",
    npc: { animal: "Fox", role: "Server" },
    tasks: [
      {
        taskId: "finedine_c4_t1",
        desc: {
          en: "Ask for more water.",
          zh: "请求加水。"
        },
        bot: "Of course, I'll refill it for you.",
        user: "Could I have some more water?",
        tips: {
          simple: "More water, please.",
          natural: "Can I get some more water?",
          native: "Could I have a bit more water, please?"
        },
        pattern: "Could I have more + item?",
        keywords: ["more", "water"]
      },
      {
        taskId: "finedine_c4_t2",
        desc: {
          en: "Ask for new utensils.",
          zh: "请求额外的餐具。"
        },
        bot: "Sure, I’ll bring some right away.",
        user: "Could I get another spoon?",
        tips: {
          simple: "Another spoon, please.",
          natural: "Can I get another spoon?",
          native: "Could I get an extra spoon?"
        },
        pattern: "Could I get another + item?",
        keywords: ["another", "spoon"]
      },
      {
        taskId: "finedine_c4_t3",
        desc: {
          en: "Tell staff your food is undercooked.",
          zh: "说明食物没熟或有问题。"
        },
        bot: "I’m so sorry about that — I’ll take it back to the kitchen.",
        user: "I think this chicken is undercooked.",
        tips: {
          simple: "The chicken is undercooked.",
          natural: "Looks like the chicken’s undercooked.",
          native: "I believe the chicken is a bit undercooked."
        },
        pattern: "I think this + dish + is + issue",
        keywords: ["undercooked", "chicken"]
      }
    ]
  },

  // ------------------------------------------------
  // Card 5 — 买单 / 分账 / 小费
  // ------------------------------------------------
  {
    cardId: "finedine_c5",
    title: {
      en: "Paying & Tips",
      zh: "结账与小费"
    },
    botHello: "Whenever you're ready, I can bring the check.",
    botBye: "Thank you so much. Have a wonderful evening.",
    npc: { animal: "Owl", role: "Server" },
    tasks: [
      {
        taskId: "finedine_c5_t1",
        desc: {
          en: "Ask for the check.",
          zh: "请求买单。"
        },
        bot: "Of course, I’ll bring it right over.",
        user: "Could I get the check, please?",
        tips: {
          simple: "The check, please.",
          natural: "Can I get the check?",
          native: "Could I have the check, please?"
        },
        pattern: "Could I get the check?",
        keywords: ["check", "get"]
      },
      {
        taskId: "finedine_c5_t2",
        desc: {
          en: "Ask to split the bill.",
          zh: "请求分账。"
        },
        bot: "Sure, how would you like it split?",
        user: "Can we split the bill?",
        tips: {
          simple: "Split the bill?",
          natural: "Can we split the bill, please?",
          native: "Would it be possible to split the bill?"
        },
        pattern: "Can we split the bill?",
        keywords: ["split", "bill"]
      },
      {
        taskId: "finedine_c5_t3",
        desc: {
          en: "Ask how tipping works.",
          zh: "询问小费规则。"
        },
        bot: "Most guests usually leave around 15–20%.",
        user: "How does tipping work here?",
        tips: {
          simple: "How to tip here?",
          natural: "How does tipping work here?",
          native: "What’s the tipping etiquette here?"
        },
        pattern: "How does + topic + work?",
        keywords: ["tipping", "how"]
      }
    ]
  }
];

export default cards;
