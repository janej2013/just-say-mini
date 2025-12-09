// 公园关卡任务数据

export const cards = [
  {
    cardId: "park_c1",
    title: { zh: "公园信息", en: "Park Info" },
    botHello: "Welcome to Central Park!",
    botBye: "Enjoy your visit!",
    npc: { 
      animal: 'Rabbit', 
      role: 'Park Ranger' 
    },
    tasks: [
      {
        taskId: "park_c1_t1",
        desc: {
          en: "Ask where the playground is.",
          zh: "询问游乐场在哪里。"
        },
        bot: "The playground is near the south entrance, by the pond.",
        user: "Where is the playground?",
        tips: {
          simple: "Where is playground?",
          natural: "Could you tell me where the playground is?",
          native: "Where's the playground at?"
        },
        pattern: "Where is ...?",
        keywords: ["playground", "kids", "location"]
      },
      {
        taskId: "park_c1_t2",
        desc: {
          en: "Ask if dogs are allowed.",
          zh: "询问是否允许带狗。"
        },
        bot: "Yes, dogs are welcome but must be on a leash.",
        user: "Are dogs allowed in the park?",
        tips: {
          simple: "Can I bring dog?",
          natural: "Are dogs allowed here?",
          native: "You allow dogs?"
        },
        pattern: "Are ... allowed?",
        keywords: ["dogs", "pets", "allowed"]
      },
      {
        taskId: "park_c1_t3",
        desc: {
          en: "Ask about restroom locations.",
          zh: "询问洗手间位置。"
        },
        bot: "There are restrooms near the main pavilion and by the lake.",
        user: "Where are the restrooms?",
        tips: {
          simple: "Where are restrooms?",
          natural: "Could you tell me where the restrooms are?",
          native: "Where's the bathroom?"
        },
        pattern: "Where are ...?",
        keywords: ["restrooms", "bathroom", "location"]
      }
    ]
  },
  {
    cardId: "park_c2",
    title: { zh: "公园活动", en: "Park Activities" },
    botHello: "Hi! Need any information?",
    botBye: "Have a wonderful day!",
    npc: { 
      animal: 'Dog', 
      role: 'Visitor Services' 
    },
    tasks: [
      {
        taskId: "park_c2_t1",
        desc: {
          en: "Ask about picnic areas.",
          zh: "询问野餐区域。"
        },
        bot: "We have several picnic areas with tables, first-come first-served.",
        user: "Are there picnic areas here?",
        tips: {
          simple: "Where can I picnic?",
          natural: "Are there areas for picnicking?",
          native: "You got picnic spots?"
        },
        pattern: "Are there ...?",
        keywords: ["picnic", "areas", "tables"]
      },
      {
        taskId: "park_c2_t2",
        desc: {
          en: "Ask about bike rentals.",
          zh: "询问自行车租赁。"
        },
        bot: "Yes, the bike rental booth is near the west entrance.",
        user: "Do you have bike rentals?",
        tips: {
          simple: "Can I rent bike?",
          natural: "Are bike rentals available?",
          native: "You rent bikes here?"
        },
        pattern: "Do you have ...?",
        keywords: ["bike", "rental", "bicycle"]
      },
      {
        taskId: "park_c2_t3",
        desc: {
          en: "Ask about park events.",
          zh: "询问公园活动。"
        },
        bot: "We have outdoor movie nights every Friday in summer.",
        user: "What events do you have at the park?",
        tips: {
          simple: "What events do you have?",
          natural: "Are there any events happening?",
          native: "What's going on at the park?"
        },
        pattern: "What events ...?",
        keywords: ["events", "activities", "programs"]
      }
    ]
  }
];

export default cards;
