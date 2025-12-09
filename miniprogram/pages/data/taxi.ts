// 出租车关卡任务数据

export const cards = [
  {
    cardId: "taxi_c1",
    botHello: "Good day! Where to?",
    botBye: "Thanks for riding with me!",
    npc: { 
      animal: 'Dog', 
      role: 'Driver' 
    },
    tasks: [
      {
        taskId: "taxi_c1_t1",
        desc: {
          en: "Tell the driver your destination.",
          zh: "告诉司机你的目的地。"
        },
        bot: "Got it, we'll be there in about 20 minutes.",
        user: "Please take me to the Grand Hotel.",
        tips: {
          simple: "Take me to Grand Hotel.",
          natural: "I'd like to go to the Grand Hotel, please.",
          native: "Grand Hotel, please."
        },
        pattern: "Please take me to ...",
        keywords: ["destination", "hotel", "go"]
      },
      {
        taskId: "taxi_c1_t2",
        desc: {
          en: "Ask how much the fare is.",
          zh: "询问车费是多少。"
        },
        bot: "It should be around 25 dollars to get there.",
        user: "How much will it cost?",
        tips: {
          simple: "How much is it?",
          natural: "Could you tell me how much the fare is?",
          native: "What's the fare gonna be?"
        },
        pattern: "How much ...?",
        keywords: ["fare", "cost", "price"]
      },
      {
        taskId: "taxi_c1_t3",
        desc: {
          en: "Ask to turn on the AC.",
          zh: "要求打开空调。"
        },
        bot: "Sure, I'll turn it on for you.",
        user: "Can you turn on the AC?",
        tips: {
          simple: "Turn on AC please.",
          natural: "Could you turn on the air conditioning, please?",
          native: "Mind turning the AC on?"
        },
        pattern: "Can you ...?",
        keywords: ["AC", "air conditioning", "turn on"]
      }
    ]
  },
  {
    cardId: "taxi_c2",
    botHello: "Hi! Ready to go?",
    botBye: "See you next time!",
    npc: { 
      animal: 'Elephant', 
      role: 'Driver' 
    },
    tasks: [
      {
        taskId: "taxi_c2_t1",
        desc: {
          en: "Ask to stop at the corner.",
          zh: "要求在拐角处停车。"
        },
        bot: "No problem, pulling over now.",
        user: "Please stop at the corner.",
        tips: {
          simple: "Stop at corner please.",
          natural: "Could you stop at the corner, please?",
          native: "Can you pull over at the corner?"
        },
        pattern: "Please stop ...",
        keywords: ["stop", "corner", "pull over"]
      },
      {
        taskId: "taxi_c2_t2",
        desc: {
          en: "Ask for a receipt.",
          zh: "索要收据。"
        },
        bot: "Here you go, have a good day!",
        user: "Can I get a receipt?",
        tips: {
          simple: "Can I get receipt?",
          natural: "Could I have a receipt, please?",
          native: "Can I get a receipt?"
        },
        pattern: "Can I get ...?",
        keywords: ["receipt", "get"]
      },
      {
        taskId: "taxi_c2_t3",
        desc: {
          en: "Ask if you can pay by card.",
          zh: "询问是否可以用卡支付。"
        },
        bot: "Yes, I accept credit and debit cards.",
        user: "Can I pay by card?",
        tips: {
          simple: "Can I pay by card?",
          natural: "Do you accept card payments?",
          native: "You take cards?"
        },
        pattern: "Can I pay ...?",
        keywords: ["pay", "card", "credit"]
      }
    ]
  }
];

export default cards;
