// 机场交通 — 出租车、网约车、机场大巴、地铁、机场快线

export const cards = [

  /* ---------------------------------------------------------
    Card 1 — Taxi（出租车区域）
  --------------------------------------------------------- */
  {
    cardId: "airport_transport_c1",
    botHello: "Hi there, looking for a taxi?",
    botBye: "Alright, safe travels!",
    npc: { animal: "Lion", role: "Taxi Staff" },
    tasks: [
      {
        taskId: "airport_transport_c1_t1",
        desc: {
          en: "Ask where the taxi stand is.",
          zh: "询问出租车候车区在哪里。"
        },
        bot: "The taxi stand is right outside through those doors.",
        tips: {
          simple: "Where is the taxi place?",
          natural: "Where can I find the taxi stand?",
          native: "Where’s the taxi stand located?"
        },
        user: "Hi, where can I find the taxi stand?",
        pattern: "Where can I find ...?",
        keywords: ["taxi stand", "where"]
      },
      {
        taskId: "airport_transport_c1_t2",
        desc: {
          en: "Ask how much a taxi to downtown costs.",
          zh: "询问去市中心的出租车价格。"
        },
        bot: "It usually costs around 30 to 40 dollars.",
        tips: {
          simple: "How much to downtown?",
          natural: "How much is a taxi to downtown?",
          native: "What’s the usual fare to downtown?"
        },
        user: "How much is a taxi to downtown?",
        pattern: "How much is ...?",
        keywords: ["taxi", "cost", "downtown"]
      },
      {
        taskId: "airport_transport_c1_t3",
        desc: {
          en: "Ask if the taxi uses a meter.",
          zh: "询问出租车是否使用计价器。"
        },
        bot: "Yes, all taxis here use a meter.",
        tips: {
          simple: "Do you use meter?",
          natural: "Do the taxis use a meter?",
          native: "Do cabs here run on a meter?"
        },
        user: "Do the taxis use a meter?",
        pattern: "Do ... use ...?",
        keywords: ["taxi", "meter"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 2 — Ride-share（网约车）
  --------------------------------------------------------- */
  {
    cardId: "airport_transport_c2",
    botHello: "Hello! Need help with ride-share pickup?",
    botBye: "Got it, enjoy your ride!",
    npc: { animal: "Otter", role: "Ride-share Helper" },
    tasks: [
      {
        taskId: "airport_transport_c2_t1",
        desc: {
          en: "Ask where ride-share pickup is.",
          zh: "询问网约车上车点在哪里。"
        },
        bot: "Ride-share pickup is on Level 2, Zone C.",
        tips: {
          simple: "Where’s the pickup for Uber?",
          natural: "Where do I get picked up for ride-share?",
          native: "Where’s the ride-share pickup zone?"
        },
        user: "Where do I get picked up for ride-share?",
        pattern: "Where do I ...?",
        keywords: ["ride-share", "pickup"]
      },
      {
        taskId: "airport_transport_c2_t2",
        desc: {
          en: "Ask if you need to book first.",
          zh: "询问是否需要先在APP上叫车。"
        },
        bot: "Yes, please book it on the app first.",
        tips: {
          simple: "Do I book first?",
          natural: "Do I need to book first on the app?",
          native: "Should I request the ride on the app first?"
        },
        user: "Do I need to book first on the app?",
        pattern: "Do I need to ...?",
        keywords: ["book", "app"]
      },
      {
        taskId: "airport_transport_c2_t3",
        desc: {
          en: "Ask how to recognize your driver.",
          zh: "询问如何确认自己的司机。"
        },
        bot: "Check the license plate and car model in the app.",
        tips: {
          simple: "How do I know my driver?",
          natural: "How can I recognize my driver?",
          native: "How do I confirm which car is mine?"
        },
        user: "How can I recognize my driver?",
        pattern: "How can I ...?",
        keywords: ["driver", "recognize", "car"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 3 — Airport Bus（机场大巴）
  --------------------------------------------------------- */
  {
    cardId: "airport_transport_c3",
    botHello: "Hi! Need help with the airport bus?",
    botBye: "Great, have a smooth ride!",
    npc: { animal: "Koala", role: "Bus Staff" },
    tasks: [
      {
        taskId: "airport_transport_c3_t1",
        desc: {
          en: "Ask if the bus goes to downtown.",
          zh: "询问机场大巴是否去市中心。"
        },
        bot: "Yes, Bus A1 goes directly downtown.",
        tips: {
          simple: "Does this bus go downtown?",
          natural: "Does this bus go to downtown?",
          native: "Does this route take me downtown?"
        },
        user: "Does this bus go to downtown?",
        pattern: "Does this ... go to ...?",
        keywords: ["bus", "downtown"]
      },
      {
        taskId: "airport_transport_c3_t2",
        desc: {
          en: "Ask where to buy bus tickets.",
          zh: "询问在哪里买大巴票。"
        },
        bot: "You can buy a ticket at the counter or on the bus.",
        tips: {
          simple: "Where buy ticket?",
          natural: "Where can I buy a bus ticket?",
          native: "Where do I get the bus ticket?"
        },
        user: "Where can I buy a bus ticket?",
        pattern: "Where can I ...?",
        keywords: ["bus ticket", "buy"]
      },
      {
        taskId: "airport_transport_c3_t3",
        desc: {
          en: "Ask how long the ride takes.",
          zh: "询问到市中心需要多久。"
        },
        bot: "It takes about 40 minutes.",
        tips: {
          simple: "How long gets there?",
          natural: "How long does it take?",
          native: "How long’s the ride?"
        },
        user: "How long does it take?",
        pattern: "How long does ...?",
        keywords: ["ride time", "duration"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 4 — Metro（机场地铁）
  --------------------------------------------------------- */
  {
    cardId: "airport_transport_c4",
    botHello: "Hello, need help with the metro?",
    botBye: "Alright, have a good trip!",
    npc: { animal: "Penguin", role: "Metro Guide" },
    tasks: [
      {
        taskId: "airport_transport_c4_t1",
        desc: {
          en: "Ask how to get to the metro station.",
          zh: "询问如何前往地铁站。"
        },
        bot: "Take the escalator down one level and follow the signs.",
        tips: {
          simple: "How go to metro?",
          natural: "How do I get to the metro station?",
          native: "Which way is the metro station?"
        },
        user: "How do I get to the metro station?",
        pattern: "How do I get to ...?",
        keywords: ["metro station", "get to"]
      },
      {
        taskId: "airport_transport_c4_t2",
        desc: {
          en: "Ask which line goes to downtown.",
          zh: "询问哪条线去市中心。"
        },
        bot: "Line 2 will take you downtown.",
        tips: {
          simple: "Which line to downtown?",
          natural: "Which line goes to downtown?",
          native: "Which metro line heads downtown?"
        },
        user: "Which line goes to downtown?",
        pattern: "Which line ...?",
        keywords: ["line", "downtown"]
      },
      {
        taskId: "airport_transport_c4_t3",
        desc: {
          en: "Ask if you need a separate ticket.",
          zh: "询问是否需要单独买票。"
        },
        bot: "Yes, you'll need to buy a metro ticket before entering.",
        tips: {
          simple: "Need buy ticket?",
          natural: "Do I need to buy a ticket?",
          native: "Do I need a separate ticket for the metro?"
        },
        user: "Do I need to buy a ticket?",
        pattern: "Do I need ...?",
        keywords: ["ticket", "need"]
      }
    ]
  },

  /* ---------------------------------------------------------
    Card 5 — Airport Train（机场快铁 / 机场快线）
  --------------------------------------------------------- */
  {
    cardId: "airport_transport_c5",
    botHello: "Hi! Are you taking the airport express?",
    botBye: "Perfect, enjoy your ride!",
    npc: { animal: "Eagle", role: "Train Staff" },
    tasks: [
      {
        taskId: "airport_transport_c5_t1",
        desc: {
          en: "Ask where the airport express platform is.",
          zh: "询问机场快线站台在哪里。"
        },
        bot: "The platform is two floors below, just follow the signs.",
        tips: {
          simple: "Where’s the train platform?",
          natural: "Where is the airport express platform?",
          native: "Which level is the express train platform on?"
        },
        user: "Where is the airport express platform?",
        pattern: "Where is ...?",
        keywords: ["platform", "express"]
      },
      {
        taskId: "airport_transport_c5_t2",
        desc: {
          en: "Ask how much the express ticket costs.",
          zh: "询问机场快线的票价。"
        },
        bot: "A one-way ticket is 15 dollars.",
        tips: {
          simple: "How much ticket?",
          natural: "How much is the express ticket?",
          native: "What’s the fare for the express?"
        },
        user: "How much is the express ticket?",
        pattern: "How much is ...?",
        keywords: ["ticket", "cost"]
      },
      {
        taskId: "airport_transport_c5_t3",
        desc: {
          en: "Ask how long the ride takes.",
          zh: "询问需要多久到市区。"
        },
        bot: "It takes about 20 minutes.",
        tips: {
          simple: "How long to city?",
          natural: "How long does it take to the city?",
          native: "How long’s the ride into the city?"
        },
        user: "How long does it take to the city?",
        pattern: "How long does ...?",
        keywords: ["ride", "time"]
      }
    ]
  }

];

export default cards;