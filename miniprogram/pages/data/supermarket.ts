// 超市关卡任务数据

export const cards = [
  {
    cardId: "supermarket_c1",
    title: { zh: "寻找商品", en: "Find Items" },
    botHello: "Hello! Need help finding anything?",
    botBye: "Thank you for shopping with us!",
    npc: { 
      animal: 'Rabbit', 
      role: 'Store Associate' 
    },
    tasks: [
      {
        taskId: "supermarket_c1_t1",
        desc: {
          en: "Ask where the dairy section is.",
          zh: "询问乳制品区在哪里。"
        },
        bot: "The dairy section is in aisle 5, on the left.",
        user: "Where is the dairy section?",
        tips: {
          simple: "Where is dairy?",
          natural: "Could you tell me where the dairy section is?",
          native: "Where's the dairy at?"
        },
        pattern: "Where is ...?",
        keywords: ["dairy", "milk", "section"]
      },
      {
        taskId: "supermarket_c1_t2",
        desc: {
          en: "Ask if they have organic produce.",
          zh: "询问是否有有机农产品。"
        },
        bot: "Yes, our organic produce is near the entrance.",
        user: "Do you have organic produce?",
        tips: {
          simple: "Do you have organic food?",
          natural: "Is there an organic section?",
          native: "You guys carry organic stuff?"
        },
        pattern: "Do you have ...?",
        keywords: ["organic", "produce", "vegetables"]
      },
      {
        taskId: "supermarket_c1_t3",
        desc: {
          en: "Ask about loyalty card benefits.",
          zh: "询问会员卡优惠。"
        },
        bot: "With a loyalty card, you get 5% off all purchases.",
        user: "What are the loyalty card benefits?",
        tips: {
          simple: "What are card benefits?",
          natural: "Could you tell me about the loyalty card?",
          native: "What do I get with the card?"
        },
        pattern: "What are ...?",
        keywords: ["loyalty card", "benefits", "discount"]
      }
    ]
  },
  {
    cardId: "supermarket_c2",
    title: { zh: "结账", en: "Checkout" },
    botHello: "Hi there! Shopping today?",
    botBye: "Have a wonderful day!",
    npc: { 
      animal: 'Dog', 
      role: 'Cashier' 
    },
    tasks: [
      {
        taskId: "supermarket_c2_t1",
        desc: {
          en: "Ask if they accept coupons.",
          zh: "询问是否接受优惠券。"
        },
        bot: "Yes, we accept both paper and digital coupons.",
        user: "Do you accept coupons?",
        tips: {
          simple: "Do you take coupons?",
          natural: "Can I use coupons here?",
          native: "You guys take coupons?"
        },
        pattern: "Do you accept ...?",
        keywords: ["coupons", "accept", "discount"]
      },
      {
        taskId: "supermarket_c2_t2",
        desc: {
          en: "Ask for plastic bags.",
          zh: "要求塑料袋。"
        },
        bot: "Sure, plastic bags are 10 cents each.",
        user: "Can I get plastic bags?",
        tips: {
          simple: "Can I have bags?",
          natural: "Could I get some plastic bags?",
          native: "Need some bags, please."
        },
        pattern: "Can I get ...?",
        keywords: ["plastic bags", "bags", "shopping"]
      },
      {
        taskId: "supermarket_c2_t3",
        desc: {
          en: "Ask about return policy.",
          zh: "询问退货政策。"
        },
        bot: "You can return items within 30 days with a receipt.",
        user: "What's your return policy?",
        tips: {
          simple: "What is return policy?",
          natural: "Could you explain the return policy?",
          native: "What's the deal with returns?"
        },
        pattern: "What's ...?",
        keywords: ["return", "policy", "refund"]
      }
    ]
  }
];

export default cards;
