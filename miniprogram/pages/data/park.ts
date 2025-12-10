// 公园关卡任务数据

export const cards = [
  {
    cardId: "park_direction_c1",
    title: { zh: "方向与问路", en: "Directions in the Park" },
    botHello: "Hi! Need help finding something in the park?",
    botBye: "No problem, enjoy your time here!",
    npc: { animal: "Squirrel", role: "Park Staff" },
    tasks: [
      {
        taskId: "park_direction_c1_t1",
        desc: {
          en: "Ask where the main entrance is.",
          zh: "询问主入口在哪里。"
        },
        bot: "The main entrance is straight ahead and then to your right.",
        tips: {
          simple: "Where is the main entrance?",
          natural: "Could you tell me where the main entrance is?",
          native: "Where can I find the main entrance?"
        },
        user: "Hi, could you tell me where the main entrance is?",
        pattern: "Where can I find ...?",
        keywords: ["main entrance", "where"]
      },
      {
        taskId: "park_direction_c1_t2",
        desc: {
          en: "Ask how to get to the lake.",
          zh: "询问如何去湖边。"
        },
        bot: "Just follow this path straight down, and you'll reach the lake in five minutes.",
        tips: {
          simple: "How to get to the lake?",
          natural: "How do I get to the lake?",
          native: "Which way is the lake?"
        },
        user: "Hi, how do I get to the lake?",
        pattern: "How do I get to ...?",
        keywords: ["lake", "how to get"]
      },
      {
        taskId: "park_direction_c1_t3",
        desc: {
          en: "Ask where the playground is.",
          zh: "询问儿童游乐场在哪里。"
        },
        bot: "The playground is on the left side near the picnic area.",
        tips: {
          simple: "Where is the playground?",
          natural: "Could you tell me where the playground is?",
          native: "Where’s the playground at?"
        },
        user: "Hi, could you tell me where the playground is?",
        pattern: "Where is ...?",
        keywords: ["playground", "where"]
      }
    ]
  },

  {
    cardId: "park_facility_c2",
    title: { zh: "设施询问", en: "Park Facilities" },
    botHello: "Hello! Looking for any facilities?",
    botBye: "Sure thing, enjoy the park!",
    npc: { animal: "Rabbit", role: "Park Staff" },
    tasks: [
      {
        taskId: "park_facility_c2_t1",
        desc: {
          en: "Ask where the restrooms are.",
          zh: "询问洗手间在哪里。"
        },
        bot: "The restrooms are right behind that café building.",
        tips: {
          simple: "Where are the restrooms?",
          natural: "Where can I find the restrooms?",
          native: "Restrooms—where are they?"
        },
        user: "Hi, where can I find the restrooms?",
        pattern: "Where can I find ...?",
        keywords: ["restrooms", "where"]
      },
      {
        taskId: "park_facility_c2_t2",
        desc: {
          en: "Ask if there is a water fountain.",
          zh: "询问是否有饮水机。"
        },
        bot: "Yes, there’s a water fountain next to the running track.",
        tips: {
          simple: "Is there a water fountain?",
          natural: "Do you have a water fountain here?",
          native: "Is there a drinking fountain around?"
        },
        user: "Hi, is there a water fountain?",
        pattern: "Is there ...?",
        keywords: ["water fountain", "is there"]
      },
      {
        taskId: "park_facility_c2_t3",
        desc: {
          en: "Ask whether picnic tables are available.",
          zh: "询问是否有野餐桌可用。"
        },
        bot: "Yes, you can find picnic tables near the open lawn area.",
        tips: {
          simple: "Any picnic tables?",
          natural: "Are there any picnic tables available?",
          native: "Do you guys have picnic tables here?"
        },
        user: "Hi, are there any picnic tables available?",
        pattern: "Are there any ...?",
        keywords: ["picnic tables", "available"]
      }
    ]
  },

  {
    cardId: "park_activity_c3",
    title: { zh: "活动参与", en: "Park Activities" },
    botHello: "Hey! Interested in activities happening here?",
    botBye: "Hope you enjoy the activities!",
    npc: { animal: "Deer", role: "Park Guide" },
    tasks: [
      {
        taskId: "park_activity_c3_t1",
        desc: {
          en: "Ask whether bikes can be rented.",
          zh: "询问是否可以租自行车。"
        },
        bot: "Yes, bike rentals are available at the north entrance.",
        tips: {
          simple: "Can I rent a bike?",
          natural: "Is it possible to rent a bike here?",
          native: "Do you guys rent bikes?"
        },
        user: "Hi, is it possible to rent a bike here?",
        pattern: "Is it possible to ...?",
        keywords: ["rent a bike", "possible"]
      },
      {
        taskId: "park_activity_c3_t2",
        desc: {
          en: "Ask what events are happening today.",
          zh: "询问今天有什么活动。"
        },
        bot: "There’s a yoga class at 10 AM and a live band at 4 PM.",
        tips: {
          simple: "What events today?",
          natural: "What events are happening today?",
          native: "Anything going on today?"
        },
        user: "Hi, what events are happening today?",
        pattern: "What ... are happening?",
        keywords: ["events", "today"]
      },
      {
        taskId: "park_activity_c3_t3",
        desc: {
          en: "Ask if dogs are allowed.",
          zh: "询问是否允许带狗。"
        },
        bot: "Dogs are allowed, but please keep them on a leash.",
        tips: {
          simple: "Dogs allowed?",
          natural: "Are dogs allowed in the park?",
          native: "Can I bring my dog here?"
        },
        user: "Hi, are dogs allowed in the park?",
        pattern: "Are ... allowed?",
        keywords: ["dogs", "allowed"]
      }
    ]
  },

  {
    cardId: "park_safety_c4",
    title: { zh: "安全与规则", en: "Safety & Rules" },
    botHello: "Hi! Have any safety questions?",
    botBye: "Alright, stay safe and have fun!",
    npc: { animal: "Owl", role: "Park Ranger" },
    tasks: [
      {
        taskId: "park_safety_c4_t1",
        desc: {
          en: "Ask whether feeding animals is allowed.",
          zh: "询问是否允许喂动物。"
        },
        bot: "Feeding animals is not allowed for safety reasons.",
        tips: {
          simple: "Can I feed animals?",
          natural: "Is it allowed to feed the animals?",
          native: "Am I allowed to feed the animals?"
        },
        user: "Hi, is it allowed to feed the animals?",
        pattern: "Is it allowed to ...?",
        keywords: ["feed animals", "allowed"]
      },
      {
        taskId: "park_safety_c4_t2",
        desc: {
          en: "Ask whether there are restricted areas.",
          zh: "询问是否有禁止进入的区域。"
        },
        bot: "Yes, some parts of the forest area are restricted.",
        tips: {
          simple: "Restricted areas?",
          natural: "Are there any restricted areas?",
          native: "Any areas off-limits?"
        },
        user: "Hi, are there any restricted areas?",
        pattern: "Are there any ...?",
        keywords: ["restricted areas", "off-limits"]
      },
      {
        taskId: "park_safety_c4_t3",
        desc: {
          en: "Ask what time the park closes.",
          zh: "询问公园几点关闭。"
        },
        bot: "The park closes at 8 PM.",
        tips: {
          simple: "When park close?",
          natural: "What time does the park close?",
          native: "When does the park close?"
        },
        user: "Hi, what time does the park close?",
        pattern: "What time does ... close?",
        keywords: ["park", "close"]
      }
    ]
  }
];

export default cards;
