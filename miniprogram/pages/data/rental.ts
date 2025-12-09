// 租房中介关卡任务数据

export const cards = [
  {
    cardId: "rental_c1",
    botHello: "Hi! Looking for a place?",
    botBye: "Good luck with your search!",
    npc: { 
      animal: 'Owl', 
      role: 'Agent' 
    },
    tasks: [
      {
        taskId: "rental_c1_t1",
        desc: {
          en: "Ask about 1-bedroom rent.",
          zh: "询问一居室的租金。"
        },
        bot: "Our 1-bedroom apartments start at $1,200 per month.",
        user: "I'm looking for a 1-bedroom apartment.",
        tips: {
          simple: "I want 1-bedroom apartment.",
          natural: "I'm looking for a 1-bedroom apartment.",
          native: "A 1-bedroom would be great."
        },
        pattern: "I'm looking for ...",
        keywords: ["1-bedroom", "apartment", "rent"]
      },
      {
        taskId: "rental_c1_t2",
        desc: {
          en: "Sign the lease contract.",
          zh: "签署租赁合同。"
        },
        bot: "Great! Please sign here and here.",
        user: "Yes, I'll sign the contract.",
        tips: {
          simple: "I'll sign contract.",
          natural: "Yes, I'm ready to sign the lease contract.",
          native: "Yeah, let's do it."
        },
        pattern: "I'll sign ...",
        keywords: ["sign", "lease", "contract"]
      },
      {
        taskId: "rental_c1_t3",
        desc: {
          en: "Ask if utilities are included.",
          zh: "询问水电费是否包含在内。"
        },
        bot: "Water and trash are included, but not electricity.",
        user: "Are utilities included in the rent?",
        tips: {
          simple: "Are utilities included?",
          natural: "Does the rent include utilities?",
          native: "Utilities covered?"
        },
        pattern: "Are ... included?",
        keywords: ["utilities", "included", "rent"]
      }
    ]
  },
  {
    cardId: "rental_c2",
    botHello: "Welcome! How can I help?",
    botBye: "Feel free to contact me anytime!",
    npc: { 
      animal: 'Koala', 
      role: 'Agent' 
    },
    tasks: [
      {
        taskId: "rental_c2_t1",
        desc: {
          en: "Ask when you can move in.",
          zh: "询问何时可以入住。"
        },
        bot: "The apartment will be ready from the 1st of next month.",
        user: "When can I move in?",
        tips: {
          simple: "When can I move in?",
          natural: "When would I be able to move in?",
          native: "When's it available?"
        },
        pattern: "When can I ...?",
        keywords: ["move in", "available", "when"]
      },
      {
        taskId: "rental_c2_t2",
        desc: {
          en: "Ask about the security deposit.",
          zh: "询问押金金额。"
        },
        bot: "The security deposit is equal to one month's rent.",
        user: "How much is the security deposit?",
        tips: {
          simple: "How much is deposit?",
          natural: "What's the security deposit amount?",
          native: "What's the deposit?"
        },
        pattern: "How much is ...?",
        keywords: ["security deposit", "amount", "money"]
      },
      {
        taskId: "rental_c2_t3",
        desc: {
          en: "Ask if pets are allowed.",
          zh: "询问是否允许养宠物。"
        },
        bot: "Small pets are allowed with an additional deposit.",
        user: "Are pets allowed?",
        tips: {
          simple: "Can I have pets?",
          natural: "Are pets allowed in this apartment?",
          native: "You allow pets?"
        },
        pattern: "Are ... allowed?",
        keywords: ["pets", "allowed", "dog", "cat"]
      }
    ]
  }
];

export default cards;
