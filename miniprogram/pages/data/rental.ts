// 租房中介关卡任务数据

export const cards = [
  // 1. 提出租房需求
  {
    cardId: "re_c1",
    title: { zh: "说明租房需求", en: "Stating Rental Requirements" },
    npc: { animal: "Dog", role: "Real Estate Agent" },
    opening: "Hi there! What kind of place are you looking for?",
    ending: "Great, I’ll shortlist some options for you.",
    tasks: [
      {
        taskId: "re_c1_t1",
        desc: {
          en: "Tell the agent your budget.",
          zh: "告诉中介你的预算。",
        },
        bot: "Got it. That helps me narrow down the options.",
        user: "My budget is around 1500 dollars a month.",
        tips: {
          simple: "My budget is 1500 a month.",
          natural: "I’m looking to stay around 1500 a month.",
          native: "I’m aiming for roughly 1500 a month.",
        },
        pattern: "My budget is around X dollars a month.",
        keywords: ["budget", "per month"]
      },
      {
        taskId: "re_c1_t2",
        desc: {
          en: "Tell the agent your preferred move-in date.",
          zh: "告诉中介你的入住时间。",
        },
        bot: "Okay, I’ll look for places available around that time.",
        user: "I’m hoping to move in next month.",
        tips: {
          simple: "I want to move in next month.",
          natural: "I’m planning to move in next month.",
          native: "I’m looking to move in sometime next month.",
        },
        pattern: "I’m hoping to move in next month.",
        keywords: ["move in", "next month"]
      },
      {
        taskId: "re_c1_t3",
        desc: {
          en: "Tell the agent the type of apartment you want.",
          zh: "告诉中介你想要的房型。",
        },
        bot: "Sure, I’ll focus on that type of layout.",
        user: "I’m looking for a one-bedroom apartment.",
        tips: {
          simple: "I want a one-bedroom.",
          natural: "I’m looking for a one-bedroom place.",
          native: "I’m after a one-bedroom apartment.",
        },
        pattern: "I’m looking for a one-bedroom apartment.",
        keywords: ["one-bedroom", "apartment"]
      }
    ]
  },

  // 2. 询问房源细节
  {
    cardId: "re_c2",
    title: { zh: "询问房源细节", en: "Asking About Apartment Details" },
    npc: { animal: "Rabbit", role: "Real Estate Agent" },
    opening: "Feel free to ask me anything about the listings.",
    ending: "No problem, I’ll send more details shortly.",
    tasks: [
      {
        taskId: "re_c2_t1",
        desc: {
          en: "Ask if the apartment comes furnished.",
          zh: "询问公寓是否带家具。",
        },
        bot: "Some units do, some don’t. I’ll mark them for you.",
        user: "Is the apartment furnished?",
        tips: {
          simple: "Does it have furniture?",
          natural: "Is the place furnished?",
          native: "Is the unit fully furnished?",
        },
        pattern: "Is the apartment furnished?",
        keywords: ["furnished"]
      },
      {
        taskId: "re_c2_t2",
        desc: {
          en: "Ask if utilities are included.",
          zh: "询问水电网是否包含在租金里。",
        },
        bot: "Most places include water but not electricity. I’ll check for you.",
        user: "Are utilities included in the rent?",
        tips: {
          simple: "Does the rent include utilities?",
          natural: "Are utilities covered in the rent?",
          native: "Are utilities included?",
        },
        pattern: "Are utilities included in the rent?",
        keywords: ["utilities", "included"]
      },
      {
        taskId: "re_c2_t3",
        desc: {
          en: "Ask if pets are allowed.",
          zh: "询问是否允许养宠物。",
        },
        bot: "Some buildings are pet-friendly. I’ll note those for you.",
        user: "Are pets allowed in the building?",
        tips: {
          simple: "Can I have pets?",
          natural: "Do they allow pets in this building?",
          native: "Is the building pet-friendly?",
        },
        pattern: "Are pets allowed in the building?",
        keywords: ["pets", "allowed"]
      }
    ]
  },

  // 3. 看房时的问题
  {
    cardId: "re_c3",
    title: { zh: "看房时提问", en: "Questions During Apartment Viewing" },
    npc: { animal: "Cat", role: "Real Estate Agent" },
    opening: "Take your time looking around. Let me know what you'd like to know.",
    ending: "Alright, let’s check out the next place.",
    tasks: [
      {
        taskId: "re_c3_t1",
        desc: {
          en: "Ask about safety of the neighborhood.",
          zh: "询问社区安全情况。",
        },
        bot: "It’s generally safe, and there are patrols at night.",
        user: "Is the neighborhood safe?",
        tips: {
          simple: "Is this area safe?",
          natural: "How safe is the neighborhood?",
          native: "Is this a pretty safe neighborhood?",
        },
        pattern: "Is the neighborhood safe?",
        keywords: ["neighborhood", "safe"]
      },
      {
        taskId: "re_c3_t2",
        desc: {
          en: "Ask about nearby transportation.",
          zh: "询问附近交通情况。",
        },
        bot: "Yes, there’s a subway station about five minutes away.",
        user: "Is there public transportation nearby?",
        tips: {
          simple: "Is there a bus or subway nearby?",
          natural: "Is public transport close by?",
          native: "Is there good public transit around here?",
        },
        pattern: "Is there public transportation nearby?",
        keywords: ["transportation", "nearby"]
      },
      {
        taskId: "re_c3_t3",
        desc: {
          en: "Ask if the room is quiet.",
          zh: "询问房间是否安静。",
        },
        bot: "It’s pretty quiet, especially at night.",
        user: "Is the room quiet?",
        tips: {
          simple: "Is it quiet here?",
          natural: "Is the room pretty quiet?",
          native: "Is it quiet inside the unit?",
        },
        pattern: "Is the room quiet?",
        keywords: ["room", "quiet"]
      }
    ]
  },

  // 4. 费用与合同
  {
    cardId: "re_c4",
    title: { zh: "费用与合同", en: "Fees and Lease Terms" },
    npc: { animal: "Fox", role: "Real Estate Agent" },
    opening: "Let’s go over the fees and lease terms.",
    ending: "Great, I’ll prepare the lease details.",
    tasks: [
      {
        taskId: "re_c4_t1",
        desc: {
          en: "Ask about the security deposit.",
          zh: "询问押金是多少。",
        },
        bot: "Usually it’s one month’s rent, but it depends on the landlord.",
        user: "How much is the security deposit?",
        tips: {
          simple: "What’s the deposit?",
          natural: "How much is the security deposit?",
          native: "What’s the deposit like?",
        },
        pattern: "How much is the security deposit?",
        keywords: ["security deposit", "how much"]
      },
      {
        taskId: "re_c4_t2",
        desc: {
          en: "Ask about the required lease term.",
          zh: "询问租期要求。",
        },
        bot: "Most places require a 12-month lease.",
        user: "What’s the minimum lease term?",
        tips: {
          simple: "How long is the lease?",
          natural: "What’s the required lease term?",
          native: "What’s the minimum lease term?",
        },
        pattern: "What’s the minimum lease term?",
        keywords: ["lease term", "minimum"]
      },
      {
        taskId: "re_c4_t3",
        desc: {
          en: "Ask if there is an agent fee.",
          zh: "询问是否有中介费。",
        },
        bot: "Yes, there’s a one-time agent fee equivalent to half a month’s rent.",
        user: "Is there an agent fee?",
        tips: {
          simple: "Do I need to pay an agent fee?",
          natural: "Is there any agent fee involved?",
          native: "Do you charge an agent fee?",
        },
        pattern: "Is there an agent fee?",
        keywords: ["agent fee"]
      }
    ]
  },

  // 5. 提交申请
  {
    cardId: "re_c5",
    title: { zh: "提交申请", en: "Submitting an Application" },
    npc: { animal: "Owl", role: "Real Estate Agent" },
    opening: "If you're ready, I can guide you through the application.",
    ending: "Awesome, I’ll submit your application today.",
    tasks: [
      {
        taskId: "re_c5_t1",
        desc: {
          en: "Ask how to apply for the apartment.",
          zh: "询问如何申请这间公寓。",
        },
        bot: "You’ll just need to fill out a simple online form.",
        user: "How do I apply for this apartment?",
        tips: {
          simple: "How can I apply?",
          natural: "How do I apply for this place?",
          native: "What’s the process to apply for this unit?",
        },
        pattern: "How do I apply for this apartment?",
        keywords: ["apply", "apartment"]
      },
      {
        taskId: "re_c5_t2",
        desc: {
          en: "Ask what documents are needed.",
          zh: "询问需要哪些材料。",
        },
        bot: "You'll need ID, proof of income, and references.",
        user: "What documents do I need to prepare?",
        tips: {
          simple: "What documents do I need?",
          natural: "What documents should I prepare?",
          native: "What documents do you usually need?",
        },
        pattern: "What documents do I need to prepare?",
        keywords: ["documents", "need"]
      },
      {
        taskId: "re_c5_t3",
        desc: {
          en: "Ask how long the approval takes.",
          zh: "询问审批需要多久。",
        },
        bot: "Approval usually takes two to three days.",
        user: "How long does the approval take?",
        tips: {
          simple: "How long is the approval?",
          natural: "How long does the approval process take?",
          native: "How long does it usually take to get approved?",
        },
        pattern: "How long does the approval take?",
        keywords: ["approval", "how long"]
      }
    ]
  }
];

export default cards;
