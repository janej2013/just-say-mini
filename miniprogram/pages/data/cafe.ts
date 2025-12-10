// 咖啡厅关卡任务数据

export const cards = [
  /* -----------------------------------------------------
   * Card 1：基础点单
   * ----------------------------------------------------- */
  {
    cardId: "cafe_c1",
    title: {
      en: "Ordering a Drink",
      zh: "点饮料"
    },
    npc: {
      animal: "Otter",
      role: "Barista"
    },
    botHello: "Hi there! What can I get for you?",
    botBye: "Great! Your drink will be ready soon.",
    tasks: [
      {
        taskId: "cafe_c1_t1",
        desc: {
          en: "Tell the barista what drink you want.",
          zh: "告诉咖啡师你想要的饮品。"
        },
        bot: "Sure! Anything else?",
        user: "Hi, can I get a latte, please?",
        tips: {
          simple: "Can I get a latte?",
          natural: "Could I have a latte, please?",
          native: "Hey, can I grab a latte?"
        },
        pattern: "Can I get a ___?",
        keywords: ["latte", "order", "drink"]
      },
      {
        taskId: "cafe_c1_t2",
        desc: {
          en: "Choose your cup size.",
          zh: "选择杯型。"
        },
        bot: "Got it. And what size?",
        user: "A medium, please.",
        tips: {
          simple: "Medium, please.",
          natural: "I’ll go with a medium.",
          native: "Medium’s great, thanks."
        },
        pattern: "I’ll go with ___ size.",
        keywords: ["medium", "cup size"]
      },
      {
        taskId: "cafe_c1_t3",
        desc: {
          en: "Specify whether it’s for here or to go.",
          zh: "说明堂食还是外带。"
        },
        bot: "Perfect!",
        user: "To go, please.",
        tips: {
          simple: "To go.",
          natural: "It’s to go.",
          native: "To go, thanks."
        },
        pattern: "For here or to go?",
        keywords: ["to go", "for here"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 2：定制饮品
   * ----------------------------------------------------- */
  {
    cardId: "cafe_c2",
    title: {
      en: "Customizing Your Drink",
      zh: "定制饮品"
    },
    npc: {
      animal: "Penguin",
      role: "Barista"
    },
    botHello: "Hi! How would you like it?",
    botBye: "Alright, I’ll make it just the way you like.",
    tasks: [
      {
        taskId: "cafe_c2_t1",
        desc: {
          en: "Ask for a non-dairy milk option.",
          zh: "询问非乳制奶品选项。"
        },
        bot: "Sure, we have soy, oat, and almond.",
        user: "Can I have it with oat milk?",
        tips: {
          simple: "Can I use oat milk?",
          natural: "Can I get oat milk with that?",
          native: "Could you make it with oat milk?"
        },
        pattern: "Can I get it with ___ milk?",
        keywords: ["oat milk", "non-dairy"]
      },
      {
        taskId: "cafe_c2_t2",
        desc: {
          en: "Ask for less sugar.",
          zh: "请求减少糖量。"
        },
        bot: "No problem!",
        user: "Could you make it less sweet?",
        tips: {
          simple: "Less sugar, please.",
          natural: "Could you make it less sweet?",
          native: "Can you cut the sweetness a bit?"
        },
        pattern: "Could you make it ___?",
        keywords: ["less sweet", "low sugar"]
      },
      {
        taskId: "cafe_c2_t3",
        desc: {
          en: "Ask for an extra shot.",
          zh: "请求增加一份浓缩。"
        },
        bot: "Sure thing.",
        user: "Can I add an extra shot of espresso?",
        tips: {
          simple: "Extra shot, please.",
          natural: "Can I add an extra shot of espresso?",
          native: "Could you throw in an extra shot?"
        },
        pattern: "Add an extra shot of ___?",
        keywords: ["espresso", "extra shot"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 3：排队、自取、订单确认
   * ----------------------------------------------------- */
  {
    cardId: "cafe_c3",
    title: {
      en: "Pickup & Queue Questions",
      zh: "排队与取饮"
    },
    npc: {
      animal: "Koala",
      role: "Staff"
    },
    botHello: "Hey! Need help with something?",
    botBye: "No worries! Enjoy your drink.",
    tasks: [
      {
        taskId: "cafe_c3_t1",
        desc: {
          en: "Ask where to pick up your drink.",
          zh: "询问在哪里取饮料。"
        },
        bot: "Pick-up is on the right counter.",
        user: "Where do I pick up my drink?",
        tips: {
          simple: "Where do I get my drink?",
          natural: "Where do I pick up my drink?",
          native: "Where’s the pickup counter?"
        },
        pattern: "Where do I pick up ___?",
        keywords: ["pick up", "counter"]
      },
      {
        taskId: "cafe_c3_t2",
        desc: {
          en: "Ask if you are in the right line.",
          zh: "确认自己是否在正确的队伍。"
        },
        bot: "Yep, you’re good.",
        user: "Is this the line for ordering?",
        tips: {
          simple: "Is this the order line?",
          natural: "Is this the line for ordering?",
          native: "Is this the line to order?"
        },
        pattern: "Is this the line for ___?",
        keywords: ["line", "order"]
      },
      {
        taskId: "cafe_c3_t3",
        desc: {
          en: "Confirm the name on the order.",
          zh: "确认订单是否叫你的名字。"
        },
        bot: "Yep, that's yours!",
        user: "Oh, is that order for Alex?",
        tips: {
          simple: "Is that mine?",
          natural: "Is that order for Alex?",
          native: "Is that one for Alex?"
        },
        pattern: "Is that order for ___?",
        keywords: ["order", "name"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 4：座位、WiFi 与店内设施
   * ----------------------------------------------------- */
  {
    cardId: "cafe_c4",
    title: {
      en: "Asking About Seating & WiFi",
      zh: "座位与WiFi"
    },
    npc: {
      animal: "Hedgehog",
      role: "Staff"
    },
    botHello: "Hi! Looking for something?",
    botBye: "Got it. Enjoy your time!",
    tasks: [
      {
        taskId: "cafe_c4_t1",
        desc: {
          en: "Ask if a seat is taken.",
          zh: "询问座位是否有人。"
        },
        bot: "No, go ahead!",
        user: "Excuse me, is this seat taken?",
        tips: {
          simple: "Is this seat taken?",
          natural: "Excuse me, is anyone sitting here?",
          native: "Hey, is this seat free?"
        },
        pattern: "Is this seat ___?",
        keywords: ["seat", "taken", "free"]
      },
      {
        taskId: "cafe_c4_t2",
        desc: {
          en: "Ask for the WiFi password.",
          zh: "询问WiFi密码。"
        },
        bot: "Sure! It's on the receipt.",
        user: "Could I get the WiFi password?",
        tips: {
          simple: "What's the WiFi password?",
          natural: "Could I get the WiFi password?",
          native: "What’s the WiFi pass?"
        },
        pattern: "What’s the WiFi ___?",
        keywords: ["wifi", "password"]
      },
      {
        taskId: "cafe_c4_t3",
        desc: {
          en: "Ask if you can charge your laptop.",
          zh: "询问是否可以给电脑充电。"
        },
        bot: "Yep, outlets are along the wall.",
        user: "Is it okay if I charge my laptop here?",
        tips: {
          simple: "Can I charge my laptop?",
          natural: "Is it okay if I charge my laptop here?",
          native: "Mind if I plug in my laptop?"
        },
        pattern: "Is it okay if I ___ my laptop?",
        keywords: ["charge", "laptop", "outlet"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 5：附加需求（糖、餐具、续杯…）
   * ----------------------------------------------------- */
  {
    cardId: "cafe_c5",
    title: {
      en: "Extra Requests",
      zh: "额外需求"
    },
    npc: {
      animal: "Deer",
      role: "Staff"
    },
    botHello: "Hey! Need anything?",
    botBye: "Sure, no problem.",
    tasks: [
      {
        taskId: "cafe_c5_t1",
        desc: {
          en: "Ask for napkins or utensils.",
          zh: "询问纸巾或餐具。"
        },
        bot: "Here you go!",
        user: "Could I get some napkins, please?",
        tips: {
          simple: "Can I have napkins?",
          natural: "Could I get some napkins?",
          native: "Can I grab a few napkins?"
        },
        pattern: "Could I get some ___?",
        keywords: ["napkins", "utensils"]
      },
      {
        taskId: "cafe_c5_t2",
        desc: {
          en: "Ask for water refill.",
          zh: "询问续杯或加水。"
        },
        bot: "Sure, I'll refill it.",
        user: "Could you refill my water, please?",
        tips: {
          simple: "More water, please.",
          natural: "Could you refill my water?",
          native: "Could I get a water refill?"
        },
        pattern: "Could you refill my ___?",
        keywords: ["refill", "water"]
      },
      {
        taskId: "cafe_c5_t3",
        desc: {
          en: "Ask for your drink to be reheated.",
          zh: "请求加热饮品。"
        },
        bot: "Of course, I'll warm it up.",
        user: "Could you warm up my coffee a bit?",
        tips: {
          simple: "Warm my coffee, please.",
          natural: "Could you warm up my coffee a bit?",
          native: "Mind warming my coffee up a little?"
        },
        pattern: "Could you warm up my ___?",
        keywords: ["warm up", "coffee"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 6：投诉/问题（订单错误、太慢…）
   * ----------------------------------------------------- */
  {
    cardId: "cafe_c6",
    title: {
      en: "Handling Problems",
      zh: "处理问题"
    },
    npc: {
      animal: "Raccoon",
      role: "Staff"
    },
    botHello: "Hey, is everything okay?",
    botBye: "Thanks for your patience—we’ll fix it right away.",
    tasks: [
      {
        taskId: "cafe_c6_t1",
        desc: {
          en: "Tell them your drink is not what you ordered.",
          zh: "告诉对方饮品不是你点的。"
        },
        bot: "Oh really? What did you order?",
        user: "I think this isn’t what I ordered.",
        tips: {
          simple: "This is not what I ordered.",
          natural: "I think this isn’t what I ordered.",
          native: "Hey, I don’t think this is what I ordered."
        },
        pattern: "I don’t think this is ___ I ordered.",
        keywords: ["wrong order", "not what I ordered"]
      },
      {
        taskId: "cafe_c6_t2",
        desc: {
          en: "Ask how much longer the order will take.",
          zh: "询问需要等多久。"
        },
        bot: "It’ll be ready in a moment!",
        user: "Excuse me, how much longer will my order take?",
        tips: {
          simple: "How long will it take?",
          natural: "How much longer will my order take?",
          native: "Any idea how much longer my order’ll be?"
        },
        pattern: "How much longer will ___ take?",
        keywords: ["wait time", "order"]
      },
      {
        taskId: "cafe_c6_t3",
        desc: {
          en: "Ask politely for a remake.",
          zh: "礼貌请求重做。"
        },
        bot: "Sure, we’ll remake it for you.",
        user: "Would it be possible to remake this?",
        tips: {
          simple: "Can you make it again?",
          natural: "Could you remake this?",
          native: "Mind remaking this for me?"
        },
        pattern: "Could you remake ___?",
        keywords: ["remake", "problem"]
      }
    ]
  }
];

export default cards;
