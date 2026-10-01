export interface MemoryMediaItem {
  id: string;
  title: string;
  quote: string;
  detail: string;
  tag: string;
  annotation?: string;
  layoutStyle?: 'polaroid' | 'filmstrip' | 'tilted' | 'stickynote';
  photoUrl?: string;
  videoUrl?: string;
  rotateDeg?: number;
}

export const MEDIA_DATA = {
  // Chapter 1 — College / Before Us (ACTUAL FIRST PHOTO BEFORE RELATIONSHIP)
  firstPhotoBeforeUs: {
    id: 'first-photo-before-us',
    title: 'Our First Photo Together',
    quote: 'Technically, this was just a group photo.',
    detail: 'We just happened to be standing together. And somehow… this became our first photo.',
    annotation: 'look at us 🥹',
    tag: 'before us',
    photoUrl: '/assets/photos/first_photo_cropped.jpg'
  },

  // Chapter 3 — "Oh... so we're actually us now." (CLASSIC MARRIED COUPLE PHOTO)
  firstUs: {
    id: 'classic-married-couple',
    title: 'Classic Married Couple 💍',
    quote: 'Just casually looking like we’ve been married for 40 years.',
    detail: 'The very first relationship photo clicked after January 11. Full married couple energy.',
    annotation: 'married couple energy 😭',
    tag: 'first couple photo',
    photoUrl: '/assets/photos/IMG_20260226_161202.jpg'
  },

  // Chapter 4 — Goofy Us
  goofyUs: [
    {
      id: 'spiderman-filter',
      title: 'Spider-Man Filter Madness 🕷️',
      quote: 'Evidence that we should never be left unsupervised in lab.',
      detail: 'Goofy Spider-Man face filter selfie during lab work.',
      tag: 'lab goofy',
      annotation: 'why are we like this 😭',
      layoutStyle: 'tilted',
      rotateDeg: -3,
      photoUrl: '/assets/photos/Snapchat-1051096608.jpg'
    },
    {
      id: 'flower-crown-filter',
      title: 'Flower Crown & Lab Lanyards 🌸',
      quote: 'Supposedly studying, actually taking stupid filters.',
      detail: 'Classroom ceiling selfie with cute flower crowns.',
      tag: 'goofy',
      annotation: 'we were supposed to be studying.',
      layoutStyle: 'polaroid',
      rotateDeg: 2,
      photoUrl: '/assets/photos/Snapchat-665990462.jpg'
    },
    {
      id: 'abhii-flexing-arms',
      title: 'Campus Biceps Flex 💪',
      quote: 'He insists his arms are huge. I remain skeptical.',
      detail: 'Flexing arms pose on the campus lawn wearing ID lanyard.',
      tag: 'roast flex',
      annotation: 'yes, I noticed the arms 😜',
      layoutStyle: 'stickynote',
      rotateDeg: -2,
      photoUrl: '/assets/photos/IMG_20250917_164814987_HDR.jpg'
    },
    {
      id: 'robotics-dance-reel',
      title: 'Robotics Lab Dance Routine 💃',
      quote: 'No choreography. No shame. Just us.',
      detail: 'Our famous spontaneous dance routine reel recorded right inside the robotics lab.',
      tag: 'dance reel',
      annotation: 'normal behaviour.',
      layoutStyle: 'tilted',
      rotateDeg: 3,
      videoUrl: '/assets/videos/VID_20251118_022121_879.mp4'
    }
  ] as MemoryMediaItem[],

  // Chapter 5 — Everyday Wonders
  everydayWonders: {
    magneticBracelets: {
      id: 'magnetic-bracelets',
      title: 'Magnetic Couple Bracelets 🧲',
      quote: 'Holding hands in the robotics lab when magnetic hearts snap together.',
      detail: 'Our matching magnetic bracelets snapping together while holding hands during lab setup.',
      tag: 'lab sweet',
      annotation: 'proof.',
      layoutStyle: 'polaroid',
      rotateDeg: -2,
      photoUrl: '/assets/photos/IMG_20260609_145756.jpg'
    } as MemoryMediaItem,

    cozyBackHug: {
      id: 'cozy-back-hug',
      title: 'Cozy Room Hug 🤗',
      quote: 'Somehow being in your arms makes everything else disappear.',
      detail: 'Cozy room mirror selfie wrapped in a warm embrace.',
      tag: 'cozy',
      annotation: 'safest place ever.',
      layoutStyle: 'polaroid',
      rotateDeg: 2,
      photoUrl: '/assets/photos/IMG_20260619_010607.jpg'
    } as MemoryMediaItem,

    bwHandHolding: {
      id: 'bw-hand-holding',
      title: 'Hand Holding in B&W 🖤',
      quote: 'Holding your hand feels like a tiny piece of home.',
      detail: 'Monochrome cozy selfie interlacing fingers with heart stickers.',
      tag: 'sweet',
      annotation: 'butterfly moment 🦋',
      layoutStyle: 'tilted',
      rotateDeg: -2,
      photoUrl: '/assets/photos/Snapchat-471251364.jpg'
    } as MemoryMediaItem,

    mallMirrorSelfie: {
      id: 'mall-mirror-selfie',
      title: 'Shopping Mall Mirror Selfie 🛍️',
      quote: 'Random shopping trips and mirror selfies.',
      detail: 'Casual store mirror selfie holding shopping bags.',
      tag: 'casual date',
      annotation: 'random days together.',
      layoutStyle: 'stickynote',
      rotateDeg: 2,
      photoUrl: '/assets/photos/Snapchat-1683151989.jpg'
    } as MemoryMediaItem,

    cheekKissVideo: {
      id: 'cheek-kiss-video',
      title: 'Stolen Lab Kiss 💋',
      quote: 'a tiny moment I kept.',
      detail: 'A quick cheek kiss in the middle of college hours when nobody was looking.',
      tag: 'video memory',
      annotation: 'hehe.',
      videoUrl: '/assets/videos/WhatsApp Video 2026-10-01 at 4.43.57 PM.mp4'
    } as MemoryMediaItem
  },

  // Chapter 6 — "Okay but... look at us." (EXACT 8 CONVERTED JPG CARDS)
  lookAtUsCards: [
    {
      id: 'card-1-chandelier-arch',
      title: 'Under the Chandelier Arch ✨',
      quote: 'Gazing into each other\'s eyes under the grand evening lights.',
      detail: 'Full standing portrait under the illuminated chandelier and floral arch.',
      tag: 'fest formal',
      annotation: 'LOOK AT US.',
      layoutStyle: 'polaroid',
      photoUrl: '/assets/photos/IMG_3823.jpg'
    },
    {
      id: 'card-2-peace-signs-hug',
      title: 'Peace Signs & Back Hugs ✌️',
      quote: 'Even when we are dressed up, we remain the same two goofballs.',
      detail: 'Playful hug around his neck with double peace signs at the college function.',
      tag: 'goofy formal',
      annotation: 'classic us 😭',
      layoutStyle: 'tilted',
      photoUrl: '/assets/photos/IMG_3824.jpg'
    },
    {
      id: 'card-3-eye-contact-chandelier',
      title: 'Eye Contact Under Chandelier 👁️',
      quote: 'Looking at you like nobody else is in the room.',
      detail: 'Close couple portrait staring into each other\'s eyes beneath the warm lights.',
      tag: 'sweet',
      annotation: 'my favourite view.',
      layoutStyle: 'polaroid',
      photoUrl: '/assets/photos/IMG_3822.jpg'
    },
    {
      id: 'card-4-fairy-lights-arch',
      title: 'Fairy Lights & Flower Arch 🌸',
      quote: 'Evening college event under glowing lights.',
      detail: 'Dressed-up photo surrounded by greenery, fairy lights and the flower arch.',
      tag: 'event',
      annotation: 'okay but...',
      layoutStyle: 'stickynote',
      photoUrl: '/assets/photos/61b8c633-2fb0-4188-8442-daf3849fd3dc-copied-media~2.jpg'
    },
    {
      id: 'card-5-campus-walkway-portrait',
      title: 'Campus Walkway Portrait 🌿',
      quote: 'Standing on the paved college path in traditional attire.',
      detail: 'Full length campus portrait by the tree-lined walkway.',
      tag: 'campus',
      annotation: 'looking so handsome ❤️',
      layoutStyle: 'polaroid',
      photoUrl: '/assets/photos/IMG_2200.jpg'
    },
    {
      id: 'card-6-loving-glance-campus',
      title: 'Loving Glance on Campus 🌳',
      quote: 'A quiet glance on the walkway.',
      detail: 'Looking at each other lovingly under campus trees.',
      tag: 'sweet',
      annotation: 'always gazing at you.',
      layoutStyle: 'tilted',
      photoUrl: '/assets/photos/IMG_2206.jpg'
    },
    {
      id: 'card-7-grand-chandelier-evening',
      title: 'Grand Chandelier Evening 💃',
      quote: 'Posing under the massive crystal chandelier.',
      detail: 'Full evening gown & shirt couple snapshot.',
      tag: 'glam',
      annotation: 'fancy night out ✨',
      layoutStyle: 'polaroid',
      photoUrl: '/assets/photos/IMG_3819.jpg'
    },
    {
      id: 'card-8-full-peace-sign-pose',
      title: 'Full Peace Sign Pose ✌️',
      quote: 'Double peace signs for the victory.',
      detail: 'Full standing pose in front of the illuminated archway.',
      tag: 'couple',
      annotation: 'victory pose!',
      layoutStyle: 'stickynote',
      photoUrl: '/assets/photos/IMG_3825.jpg'
    }
  ] as MemoryMediaItem[],

  // Extra College Formal Outfit Video & Traditional Photo
  formalOutfitMedia: {
    formalSuitVideo: {
      id: 'formal-suit-video',
      title: 'Classroom Suit Winks 😉',
      quote: 'Dressed in formal suits, winking at the camera.',
      detail: 'Video clip in formal college blazers and lanyards.',
      tag: 'formal video',
      annotation: 'fancy suit idiots 😎',
      videoUrl: '/assets/videos/Snapchat-1431180633.mp4'
    } as MemoryMediaItem,
    traditionalSelfie: {
      id: 'traditional-selfie',
      title: 'Festive Campus Selfie 🥻',
      quote: 'Dressed up for college festivities.',
      detail: 'Selfie together in traditional college event outfits.',
      tag: 'festive',
      annotation: 'fest vibes ✨',
      photoUrl: '/assets/photos/Snapchat-1269986713.jpg'
    } as MemoryMediaItem
  },

  // Chapter 7 — Mussoorie
  mussoorie: {
    heroLandscape: {
      id: 'mussoorie-mist',
      title: 'Mussoorie Mountain Mist 🏔️',
      quote: 'Watching the mountain mist roll over the pine trees.',
      detail: 'Standing against the breathtaking backdrop of Mussoorie hill station.',
      tag: 'travel hero',
      annotation: 'one of my favourite days.',
      photoUrl: '/assets/photos/IMG_20260330_160836.jpg'
    },
    teaStallTender: {
      id: 'mussoorie-tea-stall',
      title: 'Hillside Tea Stall ☕',
      quote: 'Sitting together in the quiet mountains with hot tea.',
      detail: 'Relaxing at a Mussoorie roadside cafe wearing sunglasses and smiling tenderly.',
      tag: 'tea & mountains',
      annotation: 'Mussoorie.',
      photoUrl: '/assets/photos/IMG20260330115308.jpg'
    },
    teaStallThumbsUp: {
      id: 'mussoorie-thumbsup',
      title: 'Mountain Tea Selfie 👍',
      quote: 'Big smiles & hot chai on the winding mountain road.',
      detail: 'Goofy thumbs-up selfie at the hill station tea stall.',
      tag: 'travel goofy',
      annotation: 'best trip ever 🏔️',
      photoUrl: '/assets/photos/IMG20260330115358.jpg'
    },
    terraceViewpoint: {
      id: 'mussoorie-terrace',
      title: 'Terrace Viewpoint Portrait 🌄',
      quote: 'Looking over the valley together.',
      detail: 'Standing portrait on the open mountain terrace viewpoint overlooking Mussoorie.',
      tag: 'viewpoint',
      annotation: 'we went here together.',
      photoUrl: '/assets/photos/IMG20260330121651.jpg'
    },
    trailVideo: {
      id: 'mussoorie-trail-video',
      title: 'Mussoorie Trail Walk 🌲',
      quote: 'Walking down the mountain trail with cute animal filters.',
      detail: 'Snapping a walking selfie video surrounded by mountain pines.',
      tag: 'travel video',
      annotation: 'walking through the mist ☁️',
      videoUrl: '/assets/videos/Snapchat-1306388463.mp4'
    }
  },

  // Chapter 8 — Random Little Us
  randomLittleUs: [
    {
      id: 'outside-building-plants',
      title: 'Outside College Main Building 🪴',
      quote: 'Sitting together after classes.',
      detail: 'Sitting on the terrace step outside college building with potted plants.',
      tag: 'campus chill',
      annotation: 'after class moments.',
      photoUrl: '/assets/photos/IMG_20260930_110408_415.jpg'
    },
    {
      id: 'campus-thumbs-up',
      title: 'Garden Pathway Thumbs Up 👍',
      quote: 'Two best friends taking over the campus path.',
      detail: 'Giving matching thumbs-up on the college garden walkway.',
      tag: 'campus friends',
      annotation: 'there are so many tiny versions of us.',
      photoUrl: '/assets/photos/IMG_20250929_155458.jpg'
    },
    {
      id: 'tree-pout-pose',
      title: 'Campus Tree Pout 🌳',
      quote: 'Playful pouts by the tree.',
      detail: 'Playful candid snapshot standing beside campus tree.',
      tag: 'candid',
      annotation: 'always making dumb faces.',
      photoUrl: '/assets/photos/IMG_20250929_160105.jpg'
    }
  ] as MemoryMediaItem[]
};
