// 快餐店关卡任务数据

export const cards = [
  {
    cardId: "fastfood_c1",
    botHello: "Hi! What would you like to order?",
    botBye: "Enjoy your meal!",
    npc: { 
      animal: 'Fox', 
      role: 'Cashier' 
    },
    tasks: [
      {
        taskId: "fastfood_c1_t1",
        desc: {
          en: "Order a burger combo.",
          zh: "点一个汉堡套餐。"
        },
        bot: "One burger combo, coming right up!",
        user: "I'll have the burger combo, please.",
        tips: {
          simple: "Burger combo please.",
          natural: "I'd like the burger combo.",
          native: "Gimme the burger combo."
        },
        pattern: "I'll have ...",
        keywords: ["burger", "combo", "meal"]
      },
      {
        taskId: "fastfood_c1_t2",
        desc: {
          en: "Ask if they have vegetarian options.",
          zh: "询问是否有素食选择。"
        },
        bot: "Yes, we have a veggie burger and salads.",
        user: "Do you have any vegetarian options?",
        tips: {
          simple: "Do you have vegetarian food?",
          natural: "Are there any vegetarian options?",
          native: "Got anything vegetarian?"
        },
        pattern: "Do you have ...?",
        keywords: ["vegetarian", "options", "veggie"]
      },
      {
        taskId: "fastfood_c1_t3",
        desc: {
          en: "Request extra ketchup.",
          zh: "要求额外的番茄酱。"
        },
        bot: "Sure, I'll add some extra packets for you.",
        user: "Can I get extra ketchup?",
        tips: {
          simple: "Extra ketchup please.",
          natural: "Could I get some extra ketchup?",
          native: "Can I get more ketchup?"
        },
        pattern: "Can I get ...?",
        keywords: ["extra", "ketchup", "sauce"]
      }
    ]
  },
  {
    cardId: "fastfood_c2",
    botHello: "Welcome! Ready to order?",
    botBye: "Have a great day!",
    npc: { 
      animal: 'Cat', 
      role: 'Server' 
    },
    tasks: [
      {
        taskId: "fastfood_c2_t1",
        desc: {
          en: "Ask about large drink sizes.",
          zh: "询问大杯饮料的尺寸。"
        },
        bot: "Our large is 32 ounces.",
        user: "How big is the large drink?",
        tips: {
          simple: "How big is large?",
          natural: "What size is the large drink?",
          native: "How big's the large?"
        },
        pattern: "How big is ...?",
        keywords: ["large", "drink", "size"]
      },
      {
        taskId: "fastfood_c2_t2",
        desc: {
          en: "Ask if you can customize your order.",
          zh: "询问是否可以定制订单。"
        },
        bot: "Yes, you can customize however you like!",
        user: "Can I customize my burger?",
        tips: {
          simple: "Can I customize order?",
          natural: "Is it possible to customize my order?",
          native: "Can I switch things up?"
        },
        pattern: "Can I customize ...?",
        keywords: ["customize", "modify", "change"]
      },
      {
        taskId: "fastfood_c2_t3",
        desc: {
          en: "Ask where the restroom is.",
          zh: "询问洗手间在哪里。"
        },
        bot: "The restroom is in the back, past the soda fountain.",
        user: "Where is the restroom?",
        tips: {
          simple: "Where is restroom?",
          natural: "Could you tell me where the restroom is?",
          native: "Where's the bathroom?"
        },
        pattern: "Where is ...?",
        keywords: ["restroom", "bathroom", "where"]
      }
    ]
  }
];

export default cards;
