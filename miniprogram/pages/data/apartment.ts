// 公寓关卡任务数据

export const cards = [
  /* -----------------------------------------------------
   * Card 1：噪音沟通
   * ----------------------------------------------------- */
  {
    cardId: "apt_neighbor_c1",
    title: {
      en: "Talking About Noise",
      zh: "噪音沟通"
    },
    npc: {
      animal: "Cat",
      role: "Neighbor"
    },
    botOpening: "Hey there, everything okay?",
    botClosing: "Thanks for letting me know. Have a peaceful evening.",
    tasks: [
      {
        taskId: "apt_neighbor_c1_t1",
        desc: {
          en: "Politely ask about noise you heard last night.",
          zh: "礼貌询问昨晚的噪音情况。"
        },
        bot: "Oh, was it a bit loud last night?",
        user: "Hey, just checking—was there some noise last night? I wasn’t sure where it came from.",
        tips: {
          simple: "Was that noise last night from your place?",
          natural: "Hey, just wondering if that noise last night was from your apartment?",
          native: "Hey, quick question—was that noise last night coming from your place?"
        },
        pattern: "Was that noise ___ from your place?",
        keywords: ["noise", "last night", "from your place"]
      },
      {
        taskId: "apt_neighbor_c1_t2",
        desc: {
          en: "Tell them it disturbed your sleep.",
          zh: "告诉对方噪音影响了你的睡眠。"
        },
        bot: "Ah, sorry about that. Did it keep you up?",
        user: "Yeah, it woke me up a couple of times. Just wanted to let you know.",
        tips: {
          simple: "It woke me up a bit.",
          natural: "It woke me up a couple of times.",
          native: "Yeah, it actually woke me up a few times."
        },
        pattern: "It ___ me up ___ times.",
        keywords: ["woke", "sleep", "a few times"]
      },
      {
        taskId: "apt_neighbor_c1_t3",
        desc: {
          en: "Ask if they could keep it lower at night.",
          zh: "询问能否晚上小声一些。"
        },
        bot: "Sure, I’ll be more careful.",
        user: "Thanks, could you keep the volume a bit lower at night?",
        tips: {
          simple: "Can you be quieter at night?",
          natural: "Could you keep it a bit quieter at night?",
          native: "Mind keeping the volume a bit lower at night?"
        },
        pattern: "Could you keep it ___ at night?",
        keywords: ["keep quiet", "volume", "night"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 2：邻里互助（借东西）
   * ----------------------------------------------------- */
  {
    cardId: "apt_neighbor_c2",
    title: {
      en: "Asking to Borrow Items",
      zh: "向邻居借东西"
    },
    npc: {
      animal: "Rabbit",
      role: "Neighbor"
    },
    botOpening: "Hi! Everything alright?",
    botClosing: "No problem at all. Come by anytime!",
    tasks: [
      {
        taskId: "apt_neighbor_c2_t1",
        desc: {
          en: "Ask to borrow a simple household item.",
          zh: "询问能否借一个简单的生活物品。"
        },
        bot: "Oh sure, what do you need?",
        user: "Hey, do you happen to have a spare screwdriver I can borrow?",
        tips: {
          simple: "Do you have a screwdriver I can borrow?",
          natural: "Do you happen to have a screwdriver I could borrow?",
          native: "Hey, by any chance do you have a screwdriver I could borrow?"
        },
        pattern: "Do you have a ___ I could borrow?",
        keywords: ["borrow", "screwdriver", "spare"]
      },
      {
        taskId: "apt_neighbor_c2_t2",
        desc: {
          en: "Explain what you need it for.",
          zh: "解释你需要它的原因。"
        },
        bot: "Oh I see. Fixing something?",
        user: "Yeah, I need to tighten a loose shelf.",
        tips: {
          simple: "I need to fix a shelf.",
          natural: "I need to tighten a loose shelf.",
          native: "Just need to tighten up a loose shelf."
        },
        pattern: "I need to ___ a ___ shelf.",
        keywords: ["tighten", "loose shelf", "fix"]
      },
      {
        taskId: "apt_neighbor_c2_t3",
        desc: {
          en: "Promise to return it soon.",
          zh: "保证很快归还物品。"
        },
        bot: "No worries, take your time.",
        user: "Thanks! I’ll return it as soon as I’m done.",
        tips: {
          simple: "I’ll give it back soon.",
          natural: "I’ll return it as soon as I’m done.",
          native: "I’ll bring it right back when I’m finished."
        },
        pattern: "I’ll ___ it ___ when I’m done.",
        keywords: ["return", "when done", "promise"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 3：包裹误送 / 包裹查询
   * ----------------------------------------------------- */
  {
    cardId: "apt_neighbor_c3",
    title: {
      en: "Missing or Misdelivered Package",
      zh: "包裹误送或寻找包裹"
    },
    npc: {
      animal: "Dog",
      role: "Neighbor"
    },
    botOpening: "Hey, everything okay?",
    botClosing: "Hope you find your package!",
    tasks: [
      {
        taskId: "apt_neighbor_c3_t1",
        desc: {
          en: "Ask if they received your package by mistake.",
          zh: "询问对方是否误收了你的包裹。"
        },
        bot: "Oh? What does it look like?",
        user: "Hey, did a package for me get delivered to your door by mistake?",
        tips: {
          simple: "Did my package go to your door?",
          natural: "Did my package get delivered to your place by mistake?",
          native: "Hey, did a package for me end up at your door by any chance?"
        },
        pattern: "Did a package for me ___ to your door?",
        keywords: ["package", "delivered", "by mistake"]
      },
      {
        taskId: "apt_neighbor_c3_t2",
        desc: {
          en: "Describe what the package looks like.",
          zh: "描述包裹的外观。"
        },
        bot: "Okay, I’ll check.",
        user: "It’s a small brown box with my name on a white label.",
        tips: {
          simple: "A small brown box with my name.",
          natural: "It's a small brown box with my name on a label.",
          native: "It's a little brown box with a white label that has my name on it."
        },
        pattern: "It’s a ___ box with ___ label.",
        keywords: ["small box", "brown", "label"]
      },
      {
        taskId: "apt_neighbor_c3_t3",
        desc: {
          en: "Ask them to let you know if they see it.",
          zh: "请对方看到时告诉你。"
        },
        bot: "Sure thing!",
        user: "If you see it later, could you let me know?",
        tips: {
          simple: "If you see it, tell me.",
          natural: "If you happen to see it, let me know.",
          native: "If it turns up, could you give me a heads-up?"
        },
        pattern: "If you see it, could you ___?",
        keywords: ["let me know", "see it", "package"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 4：垃圾回收 / 公共区域礼仪
   * ----------------------------------------------------- */
  {
    cardId: "apt_neighbor_c4",
    title: {
      en: "Trash & Shared Space Etiquette",
      zh: "垃圾与公共区域礼仪"
    },
    npc: {
      animal: "Squirrel",
      role: "Neighbor"
    },
    botOpening: "Hey there, what’s up?",
    botClosing: "Got it, I’ll keep that in mind.",
    tasks: [
      {
        taskId: "apt_neighbor_c4_t1",
        desc: {
          en: "Ask when trash is usually taken out.",
          zh: "询问垃圾通常什么时候丢。"
        },
        bot: "Usually in the evening.",
        user: "Hey, when do people here usually take out their trash?",
        tips: {
          simple: "When do people take out trash?",
          natural: "When do people usually take out the trash here?",
          native: "Hey, what time do folks around here usually take their trash out?"
        },
        pattern: "When do people usually ___ the trash?",
        keywords: ["trash", "take out", "when"]
      },
      {
        taskId: "apt_neighbor_c4_t2",
        desc: {
          en: "Ask how recycling works.",
          zh: "询问回收如何分类或处理。"
        },
        bot: "We separate plastic and paper.",
        user: "And how does the recycling work here?",
        tips: {
          simple: "How to do recycling?",
          natural: "How does recycling work here?",
          native: "What’s the recycling system like here?"
        },
        pattern: "How does ___ work here?",
        keywords: ["recycling", "how", "system"]
      },
      {
        taskId: "apt_neighbor_c4_t3",
        desc: {
          en: "Politely mention an issue without accusing.",
          zh: "礼貌地提到公共区域问题（不指责）。"
        },
        bot: "Oh, thanks for telling me.",
        user: "I noticed some trash left in the hallway earlier—just wanted to check if there’s a rule about that?",
        tips: {
          simple: "I saw trash in the hallway. Is that okay?",
          natural: "I noticed some trash in the hallway—just wondering if there's a rule about it.",
          native: "Saw a bit of trash in the hallway earlier—do we have a rule about that?"
        },
        pattern: "I noticed ___ — is there a rule about it?",
        keywords: ["trash", "hallway", "rule"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 5：公寓活动 / 社交
   * ----------------------------------------------------- */
  {
    cardId: "apt_neighbor_c5",
    title: {
      en: "Socializing in the Apartment",
      zh: "公寓社交互动"
    },
    npc: {
      animal: "Fox",
      role: "Neighbor"
    },
    botOpening: "Hey! You new here?",
    botClosing: "Hope to see you around!",
    tasks: [
      {
        taskId: "apt_neighbor_c5_t1",
        desc: {
          en: "Introduce yourself briefly.",
          zh: "进行简短自我介绍。"
        },
        bot: "Nice to meet you!",
        user: "Yeah, I just moved in—I'm Alex, nice to meet you.",
        tips: {
          simple: "Hi, I’m new here. I’m Alex.",
          natural: "Yeah, I just moved in. I’m Alex.",
          native: "Yep, just moved in. I’m Alex—nice to meet you."
        },
        pattern: "I just moved in. I’m ___.",
        keywords: ["moved in", "name", "hello"]
      },
      {
        taskId: "apt_neighbor_c5_t2",
        desc: {
          en: "Ask about the building community.",
          zh: "询问公寓居民情况或氛围。"
        },
        bot: "People here are pretty friendly.",
        user: "How's the community here? Do people know each other?",
        tips: {
          simple: "Are people here friendly?",
          natural: "How’s the community here?",
          native: "What’s the vibe like around here? People usually know each other?"
        },
        pattern: "How’s the ___ here?",
        keywords: ["community", "vibe", "friendly"]
      },
      {
        taskId: "apt_neighbor_c5_t3",
        desc: {
          en: "Ask about events or gatherings.",
          zh: "询问是否有活动或聚会。"
        },
        bot: "Sometimes, yeah!",
        user: "Do we have any building gatherings or events?",
        tips: {
          simple: "Any events here?",
          natural: "Are there any gatherings or events here?",
          native: "Do folks here do any community stuff or events?"
        },
        pattern: "Are there any ___ here?",
        keywords: ["events", "gatherings", "community"]
      }
    ]
  },

  /* -----------------------------------------------------
   * Card 6：邻里求助/紧急情况
   * ----------------------------------------------------- */
  {
    cardId: "apt_neighbor_c6",
    title: {
      en: "Asking for Help in Urgent Situations",
      zh: "紧急情况向邻居求助"
    },
    npc: {
      animal: "Bear",
      role: "Neighbor"
    },
    botOpening: "Hey, you look worried. What's going on?",
    botClosing: "Hope it gets sorted out soon.",
    tasks: [
      {
        taskId: "apt_neighbor_c6_t1",
        desc: {
          en: "Ask for help with something unexpectedly broken.",
          zh: "请求帮助处理突然坏掉的东西。"
        },
        bot: "Oh no, what happened?",
        user: "Hey, sorry to bother you—my smoke alarm won’t stop beeping.",
        tips: {
          simple: "My smoke alarm keeps beeping.",
          natural: "My smoke alarm won’t stop beeping.",
          native: "My smoke alarm’s been beeping nonstop."
        },
        pattern: "My ___ won’t stop ___.",
        keywords: ["smoke alarm", "beeping", "help"]
      },
      {
        taskId: "apt_neighbor_c6_t2",
        desc: {
          en: "Ask if they know who to contact.",
          zh: "询问应该联系谁。"
        },
        bot: "You should call maintenance.",
        user: "Do you know who I should contact about this?",
        tips: {
          simple: "Who should I call?",
          natural: "Do you know who I should contact?",
          native: "Any idea who I’m supposed to call for this?"
        },
        pattern: "Do you know who I should ___?",
        keywords: ["contact", "who", "help"]
      },
      {
        taskId: "apt_neighbor_c6_t3",
        desc: {
          en: "Ask if they have any temporary solution.",
          zh: "询问是否有临时解决办法。"
        },
        bot: "You could remove the battery for now.",
        user: "Is there anything I can do for now to stop the noise?",
        tips: {
          simple: "How can I stop the noise?",
          natural: "Is there anything I can do for now?",
          native: "Anything I can do in the meantime to stop the noise?"
        },
        pattern: "Is there anything I can do ___?",
        keywords: ["temporary fix", "solution", "noise"]
      }
    ]
  }
];

export default cards;
