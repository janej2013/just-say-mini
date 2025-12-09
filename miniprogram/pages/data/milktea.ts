// 奶茶店关卡任务数据

export const cards = [
  {
    cardId: "milktea_c1",
    botHello: "Welcome! What can I make for you?",
    botBye: "Enjoy your drink!",
    npc: { 
      animal: 'Hippo', 
      role: 'Barista' 
    },
    tasks: [
      {
        taskId: "milktea_c1_t1",
        desc: {
          en: "Order a brown sugar milk tea.",
          zh: "点一杯黑糖奶茶。"
        },
        bot: "One brown sugar milk tea, coming right up!",
        user: "I'll have a brown sugar milk tea, please.",
        tips: {
          simple: "Brown sugar milk tea please.",
          natural: "I'd like a brown sugar milk tea.",
          native: "Brown sugar milk tea, thanks."
        },
        pattern: "I'll have ...",
        keywords: ["brown sugar", "milk tea", "boba"]
      },
      {
        taskId: "milktea_c1_t2",
        desc: {
          en: "Ask about sugar levels.",
          zh: "询问糖度选择。"
        },
        bot: "You can choose from 0%, 30%, 50%, 70%, or 100% sugar.",
        user: "What sugar levels do you have?",
        tips: {
          simple: "What sugar levels?",
          natural: "What are the sugar level options?",
          native: "How sweet can I make it?"
        },
        pattern: "What ... do you have?",
        keywords: ["sugar", "level", "sweetness"]
      },
      {
        taskId: "milktea_c1_t3",
        desc: {
          en: "Request less ice.",
          zh: "要求少冰。"
        },
        bot: "Sure, I'll make it with less ice for you.",
        user: "Can I get less ice?",
        tips: {
          simple: "Less ice please.",
          natural: "Could I have less ice?",
          native: "Easy on the ice."
        },
        pattern: "Can I get ...?",
        keywords: ["less ice", "ice", "light"]
      }
    ]
  },
  {
    cardId: "milktea_c2",
    botHello: "Hi! Ready to order?",
    botBye: "See you next time!",
    npc: { 
      animal: 'Parrot', 
      role: 'Staff' 
    },
    tasks: [
      {
        taskId: "milktea_c2_t1",
        desc: {
          en: "Ask about toppings.",
          zh: "询问配料选择。"
        },
        bot: "We have boba, pudding, grass jelly, and more!",
        user: "What toppings do you have?",
        tips: {
          simple: "What toppings?",
          natural: "What kinds of toppings are available?",
          native: "What can I add to it?"
        },
        pattern: "What ... do you have?",
        keywords: ["toppings", "boba", "add-ons"]
      },
      {
        taskId: "milktea_c2_t2",
        desc: {
          en: "Ask if they have non-dairy milk.",
          zh: "询问是否有非乳制品奶。"
        },
        bot: "Yes, we offer oat milk, almond milk, and soy milk.",
        user: "Do you have non-dairy milk options?",
        tips: {
          simple: "Do you have non-dairy milk?",
          natural: "Are there non-dairy milk options?",
          native: "Got any non-dairy milk?"
        },
        pattern: "Do you have ...?",
        keywords: ["non-dairy", "milk", "alternative"]
      },
      {
        taskId: "milktea_c2_t3",
        desc: {
          en: "Ask about loyalty rewards.",
          zh: "询问会员奖励。"
        },
        bot: "Buy 10 drinks and get the 11th free!",
        user: "Do you have a loyalty program?",
        tips: {
          simple: "Do you have rewards?",
          natural: "Is there a loyalty program?",
          native: "You got a rewards thing?"
        },
        pattern: "Do you have ...?",
        keywords: ["loyalty", "rewards", "program"]
      }
    ]
  }
];

export default cards;
