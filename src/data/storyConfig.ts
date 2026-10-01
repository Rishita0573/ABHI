export interface MemoryItem {
  id: string;
  title: string;
  quote: string;
  detail: string;
  tag: string;
  annotation?: string;
  layoutStyle?: 'polaroid' | 'filmstrip' | 'tilted' | 'stickynote';
  photoUrl?: string;
  videoUrl?: string;
  badge?: string;
}

export const STORY_CONFIG = {
  couple: {
    hisName: 'Abhii',
    hisNicknames: [
      'Abhii',
      'Nonu',
      'Sweetuuu',
      'Baby',
      'Kuchupuchu',
      'Bebu',
      'Cutu',
      'Junyali'
    ],
    herNicknames: ['Betu', 'Dumbo', 'Kiddo'],
    herRoastForHim: 'sada hua chuha 🐭',
    hisRoastForHer: 'Dumbo 🤪',
    confessionDate: '2025-01-11',
    confessionHeading: 'January 11, 2025',
    confessionSubheading: 'The day we finally said what we were both trying not to say.',
    birthdayMonthDay: '10-02',
  },

  bgMusic: {
    hero: { title: 'Tera Rasta Chhodun Na ♫', src: '/assets/audio/tera-rasta-chhodun-na.mp3' },
    college: { title: 'Tera Rasta Chhodun Na ♫', src: '/assets/audio/tera-rasta-chhodun-na.mp3' },
    confession: { title: 'Tera Rasta Chhodun Na ♫', src: '/assets/audio/tera-rasta-chhodun-na.mp3' },
    everyday: { title: 'Tera Rasta Chhodun Na ♫', src: '/assets/audio/tera-rasta-chhodun-na.mp3' },
    mussoorie: { title: 'Tera Rasta Chhodun Na ♫', src: '/assets/audio/tera-rasta-chhodun-na.mp3' },
    junyali: { title: 'Tera Rasta Chhodun Na ♫', src: '/assets/audio/tera-rasta-chhodun-na.mp3' },
    birthday: { title: 'Tera Rasta Chhodun Na ♫', src: '/assets/audio/tera-rasta-chhodun-na.mp3' }
  },

  scientificStats: {
    roastedTimes: '∞',
    missTime: '~2 seconds',
    normalPhotoChance: '0.03%',
    stupidChances: '100%',
    peopleWhoUnderstandNonsense: '2'
  },

  collegeEra: {
    title: 'The Roasting Era & College Days',
    subtitle: 'Before anything romantic happened, we were best friends who constantly roasted each other.',
    roastCounter: '∞',
    normalPhotoChance: '0%',
    annotation: 'just two idiots from college...',
    nfsMemory: {
      title: 'NFS Sabotage 🏎️',
      summary: 'I was trying to win the race. He apparently had other plans.',
      detail: 'I had a perfectly good race going... until someone decided distracting me was more important than letting me win.',
      annotation: 'he still thinks he won that argument.'
    }
  },

  confessionSection: {
    title: 'January 11, 2025',
    subheading: 'The day we finally said what we were both trying not to say.',
    bodyText: 'We weren\'t ready. We didn\'t have some perfect relationship plan. But surrounded by exam stress and late-night notes, we finally said out loud what we had both been hiding. Without forcing anything, we became something neither of us ever wanted to lose.',
    annotation: 'don\'t ask why this is here 😭'
  },

  everydayWonders: [
    {
      id: 'lab-kisses',
      title: 'Stealing Lab Kisses 💋',
      quote: 'Sneaking little kisses when nobody was looking.',
      detail: 'In the middle of college lab hours, when everyone else was busy with experiments.',
      tag: 'lab',
      annotation: 'yes, I kept this memory here. obviously.',
      layoutStyle: 'polaroid',
      photoUrl: '/assets/photos/lab_kiss.jpg'
    },
    {
      id: 'nfs-sabotage',
      title: 'NFS Sabotage 🏎️',
      quote: 'I was trying to win the race. He apparently had other plans.',
      detail: 'Playing Need for Speed on his laptop while he did everything to make me lose.',
      tag: 'roast',
      annotation: 'he still thinks he won that argument.',
      layoutStyle: 'stickynote',
      photoUrl: '/assets/photos/nfs_game.jpg'
    },
    {
      id: 'cheek-pinches',
      title: 'Cheek Pinches 😭',
      quote: 'His favourite way of reminding me that apparently my cheeks belong to him.',
      detail: 'Pinching my cheeks until they turn pink, no matter where we are.',
      tag: 'cute',
      annotation: 'proof.',
      layoutStyle: 'tilted',
      photoUrl: '/assets/photos/cheek_pinch.jpg'
    },
    {
      id: 'biceps-threats',
      title: 'Biceps Threats 😜',
      quote: 'His biceps are still under constant threat.',
      detail: 'Me jokingly threatening to bite his biceps whenever he annoys me.',
      tag: 'roast',
      annotation: 'one of my favourites.',
      layoutStyle: 'polaroid',
      photoUrl: '/assets/photos/biceps_bite.jpg'
    },
    {
      id: 'cuddles-sleep',
      title: 'Cuddles & Sleep 💤',
      quote: 'Somehow falling asleep in each other\'s arms feels like the safest place in the world.',
      detail: 'Wrapped together, completely peaceful, forgetting everything outside.',
      tag: 'cozy',
      annotation: 'safest place ever.',
      layoutStyle: 'filmstrip',
      photoUrl: '/assets/photos/cuddle.jpg'
    },
    {
      id: 'goofy-videos',
      title: 'Goofy Videos 📹',
      quote: 'Evidence that we should probably never be allowed to record ourselves.',
      detail: 'Goofy robotics lab clips and random moments of pure madness.',
      tag: 'video',
      annotation: 'Evidence that we have absolutely no shame.',
      layoutStyle: 'polaroid',
      videoUrl: '/assets/videos/goofy_lab.mp4'
    },
    {
      id: 'dancing-idiots',
      title: 'Dancing Like Idiots 💃',
      quote: 'No choreography. No shame. Just us.',
      detail: 'Spontaneous dancing in the lab without caring who might see.',
      tag: 'video',
      annotation: 'unfiltered madness hehe',
      layoutStyle: 'tilted',
      videoUrl: '/assets/videos/dancing_lab.mp4'
    },
    {
      id: 'hand-holding',
      title: 'Hand Holding 🤝',
      quote: 'One of those tiny things that somehow makes my whole heart react.',
      detail: 'Our fingers interlaced for the first time — simple, but unforgettable.',
      tag: 'sweet',
      annotation: 'butterfly moment 🦋',
      layoutStyle: 'polaroid',
      photoUrl: '/assets/photos/hand_holding.jpg'
    },
    {
      id: 'random-conversations',
      title: 'Random Conversations 💬',
      quote: 'Somehow we can talk about absolutely nothing for way too long.',
      detail: 'Hours flying by just talking nonsense and laughing till our stomachs hurt.',
      tag: 'talk',
      annotation: 'talking nonsense for 5 hours straight.',
      layoutStyle: 'stickynote',
      photoUrl: '/assets/photos/random_talk.jpg'
    }
  ],

  twoSecondRule: {
    question: 'How long does it take us to miss each other?',
    buttonText: 'Find out →',
    countdown: [3, 2, 1],
    reaction: 'Okay, we already miss each other.',
    finalAnswer: 'Actual answer: approximately 2 seconds.'
  },

  mussoorie: {
    title: 'Our First Escape — Mussoorie',
    subtitle: 'Being together somewhere away from everything.',
    memories: [
      'Sitting together in the quiet mountains',
      'The winding bus journey up the hills',
      'Sleeping in each other\'s arms on the bus',
      'Watching the mountain mist roll in'
    ],
    annotation: 'best trip ever 🏔️'
  },

  junyaliSecret: {
    unlockToast: 'You found them all. 🌙',
    mainQuote: 'I don\'t know exactly when this became your name. I just know that somewhere along the way, Junyali became you.',
    notes: [
      'Somehow, this name became yours.',
      'For the person I can be completely stupid with.',
      'My favourite place to come back to.'
    ]
  },

  finalSequence: {
    statements: [
      'You are my best friend.',
      'You are my safe place.',
      'You are my favourite person.',
      'And somehow...',
      'You became home.'
    ],
    breakLine: 'Okay, enough emotional damage. 😭',
    teaserLine: 'There\'s one more thing...'
  },

  birthdayLetter: {
    salutation: 'To my Abhii, Nonu, Sweetuuu, Baby, Kuchupuchu, Bebu, Cutu… and somehow, Junyali,',
    exactText: "To my Abhii, Nonu, Sweetuuu, Baby, Kuchupuchu, Bebu, Cutu… and somehow, Junyali,\n\nHappy Birthday, you sada hua chuha. ❤️\n\nI honestly don't know how to write this without making it sound way more serious than we actually are, because we're also the two idiots who spend half our time roasting each other, stealing kisses in the lab, pinching cheeks, threatening to bite each other's biceps, and generally doing everything except behaving like normal people.\n\nBut somewhere between all that nonsense, you became one of the most important parts of my life. Part bhi kya you are my life, my love .\n\nWe started as friends.\n\nJust friends.\n\nAt least that's what we kept telling ourselves.\n\nWe spent so much time together, annoying each other, laughing at the dumbest things, having random conversations, and just being around each other that I don't even remember exactly when things started feeling different.\n\nAnd then came 11 January 2025.\n\nThe day we finally said what we had both been trying not to say.\n\nNeither of us was really ready for a relationship. We didn't have everything figured out. But somehow, without making some big plan about it, we just became us.\n\nAnd I think that's one of my favourite things about us.\n\nIt never felt like we had to force it.\n\nIt just happened.\n\nNow somehow, after spending an entire day together, I can reach home and miss you approximately two seconds later.\n\nWhich is honestly ridiculous.\n\nBut also very us.\n\nI love the big memories — our first hug, which somehow felt like a recharge point when everything was already difficult; our first kiss that felt like actual fireworks; our first trip to Mussoorie; sitting together in the mountains; falling asleep in each other's arms on that bus; celebrating my birthday with you and feeling like I was living a little dream, us dancing in lab hehe, making those goofy videos...\n\n I think I'll always have a softer spot for the tiny things.\n\nHolding your hand.\n\nSeeing you and getting that stupid little heart flutter.\n\nYou noticing when something is wrong with me even when I don't say anything.\n\nFalling asleep while cuddling.\n\nOur random lab moments.\n\nYou distracting me while I was trying to play NFS.\n\nYou pinching my cheeks.\n\nMe threatening your biceps.\n\nOur goofy videos.\n\nOur dancing videos.\n\nOur completely unnecessary conversations.\n\nThe little kisses we steal when nobody is looking.\n\nAll those tiny moments that probably wouldn't mean much to anyone else.\n\nBut they mean everything to me.\n\nBecause somewhere along the way, you became the person I feel safest being completely stupid with.\n\nI can be your Dumbo.\n\nYour Betu.\n\nYour Kiddo.\n\nI can be annoying, dramatic, sleepy, emotional, completely unserious — and somehow I still feel like I can just be me with you.\n\nAnd I hope you know that I want to be that person for you too.\n\nYour safe place.\n\nThe person you can come to when you're happy, when you're tired, when something goes wrong, when you just want to talk nonsense, or when you don't want to talk at all.\n\nI don't need us to have everything figured out right now.\n\nI just want more of us.\n\nMore random days.\n\nMore stupid jokes.\n\nMore trips.\n\nMore hugs that somehow fix everything.\n\nMore falling asleep next to you.\n\nMore moments where we're doing absolutely nothing and somehow having the best time.\n\nMore memories that make no sense to anyone except us.\n\nAnd more reasons for me to call you every ridiculous nickname I can think of.\n\nSo today, on your birthday, I just want you to know one thing:\n\nI'm really, really grateful that  I met you in college, I met you.\n\nMy best friend.\n\nMy favourite person to annoy.\n\nMy safest place.\n\nMy partner in nonsense.\n\nMy sada hua chuha.\n\nMy Abhii.\n\nAnd somehow...\n\nmy Junyali. 🌙\n\nI hope you stay happy.\n\nI hope you keep laughing that stupid laugh.\n\nI hope you keep being the person who makes ordinary days feel a little better just by being there.\n\nAnd selfishly, I hope I get to be beside you for a lot more of those ordinary days.\n\nBecause honestly, I don't need some huge perfect story.\n\nI already really love ours.\n\nHappy Birthday, Baby. ❤️\n\nNow come here so I can bite your biceps.\n\n— Your Betu 🫶"
  }
};
