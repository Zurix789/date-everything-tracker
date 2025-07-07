// Character data with enhanced requirements
const characters = [
    { 
        id: 1, name: 'Skylar', object: 'Dateviators', stat: 'charm', 
        requirements: { smarts: 60, poise: 60, empathy: 60, charm: 40, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Can be realized anytime, but for best ending needs everyone else realized first
        bidirectionalDependencies: []
    },
    { 
        id: 2, name: 'Phoenicia', object: 'Phone', stat: 'charm', 
        requirements: { smarts: 30, poise: 0, empathy: 100, charm: 30, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Freddy
        bidirectionalDependencies: []
    },
    { 
        id: 3, name: 'Wallace', object: 'Wall', stat: 'poise', 
        requirements: { smarts: 20, poise: 100, empathy: 80, charm: 50, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 4, name: 'Florence', object: 'Floor', stat: 'charm', 
        requirements: { smarts: 20, poise: 50, empathy: 90, charm: 50, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Celia
        bidirectionalDependencies: []
    },
    { 
        id: 5, name: 'Celia', object: 'Ceiling', stat: 'smarts', 
        requirements: { smarts: 20, poise: 50, empathy: 90, charm: 50, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Wallace, Mateo, Beverly
        bidirectionalDependencies: []
    },
    { 
        id: 6, name: 'Stella', object: 'Stairs', stat: 'charm', 
        requirements: { smarts: 20, poise: 50, empathy: 90, charm: 50, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 7, name: 'Dorian', object: 'Door', stat: 'poise', 
        requirements: { smarts: 75, poise: 100, empathy: 75, charm: 0, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Bobby, Keith
        bidirectionalDependencies: [],
        hasLocations: true 
    },
    { 
        id: 8, name: 'Wyndolyn', object: 'Window', stat: 'empathy', 
        requirements: { smarts: 45, poise: 55, empathy: 85, charm: 35, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: { attic: true },
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: [],
        hasLocations: true 
    },
    { 
        id: 9, name: 'Curt & Rod', object: 'Curtain', stat: 'sass', 
        requirements: { smarts: 40, poise: 85, empathy: 0, charm: 40, sass: 85 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Wyndolyn, Cabrizzio, Fantina
        bidirectionalDependencies: [],
        hasLocations: true 
    },
    { 
        id: 10, name: 'Shelley', object: 'Shelf', stat: 'charm', 
        requirements: { smarts: 50, poise: 50, empathy: 50, charm: 50, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Dasha
        bidirectionalDependencies: []
    },
    { 
        id: 11, name: 'Abel', object: 'Table', stat: 'poise', 
        requirements: { smarts: 65, poise: 0, empathy: 75, charm: 65, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 12, name: 'Chairemi', object: 'Chair', stat: 'charm', 
        requirements: { smarts: 70, poise: 70, empathy: 0, charm: 70, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Florence, Celia
        bidirectionalDependencies: []
    },
    { 
        id: 13, name: 'Lux', object: 'Lamp', stat: 'sass', 
        requirements: { smarts: 0, poise: 50, empathy: 0, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 14, name: 'Hector', object: 'HVAC', stat: 'empathy', 
        requirements: { smarts: 25, poise: 35, empathy: 85, charm: 75, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: { attic: true },
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 15, name: 'Prissy', object: 'Plant', stat: 'charm', 
        requirements: { smarts: 65, poise: 80, empathy: 30, charm: 20, sass: 55 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 16, name: 'Timothy', object: 'Clock', stat: 'smarts', 
        requirements: { smarts: 90, poise: 15, empathy: 45, charm: 65, sass: 35 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 17, name: 'Artt', object: 'Art', stat: 'smarts', 
        requirements: { smarts: 100, poise: 0, empathy: 100, charm: 50, sass: 0 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 18, name: 'River', object: 'Water', stat: 'empathy', 
        requirements: { smarts: 45, poise: 45, empathy: 45, charm: 65, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 19, name: 'Eddie & Volt', object: 'Electricity', stat: 'empathy', 
        requirements: { smarts: 65, poise: 0, empathy: 85, charm: 15, sass: 85 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Jean Loo, Johnny Splash, Cam
        bidirectionalDependencies: []
    },
    { 
        id: 20, name: 'Koa', object: 'Couch', stat: 'empathy', 
        requirements: { smarts: 10, poise: 80, empathy: 100, charm: 40, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 21, name: 'Dolly', object: 'Dust Bunny', stat: 'smarts', 
        requirements: { smarts: 100, poise: 0, empathy: 70, charm: 0, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 22, name: 'Dante', object: 'Fire Place', stat: 'sass', 
        requirements: { smarts: 0, poise: 50, empathy: 0, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 23, name: 'Telly', object: 'TV', stat: 'sass', 
        requirements: { smarts: 40, poise: 45, empathy: 50, charm: 15, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 24, name: 'Luna', object: 'Video Game Console', stat: 'empathy', 
        requirements: { smarts: 75, poise: 100, empathy: 25, charm: 10, sass: 45 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 25, name: 'Keyes', object: 'Grand Piano', stat: 'smarts', 
        requirements: { smarts: 85, poise: 85, empathy: 20, charm: 35, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 26, name: 'Gaia', object: 'Globe', stat: 'smarts', 
        requirements: { smarts: 85, poise: 20, empathy: 65, charm: 20, sass: 60 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 27, name: 'Captain Jaques Pierrot', object: 'Ship-in-a-Bottle', stat: 'poise', 
        requirements: { smarts: 0, poise: 90, empathy: 0, charm: 90, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 28, name: 'Parker', object: 'Board Games', stat: 'charm', 
        requirements: { smarts: 10, poise: 10, empathy: 50, charm: 80, sass: 100 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // Chance
        bidirectionalDependencies: []
    },
    { 
        id: 29, name: 'Mateo', object: 'Blanket', stat: 'empathy', 
        requirements: { smarts: 5, poise: 45, empathy: 100, charm: 100, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 30, name: 'Tina', object: 'Musical Triangle', stat: 'charm', 
        requirements: { smarts: 80, poise: 50, empathy: 60, charm: 40, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 31, name: 'Beverly', object: 'Beverage', stat: 'charm', 
        requirements: { smarts: 60, poise: 60, empathy: 0, charm: 60, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 32, name: 'Mitchell Linn', object: 'Food', stat: 'smarts', 
        requirements: { smarts: 75, poise: 25, empathy: 30, charm: 70, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Koa, Daisuke, Freddy
        bidirectionalDependencies: []
    },
    { 
        id: 33, name: 'Cabrizzio', object: 'Cabinet', stat: 'empathy', 
        requirements: { smarts: 60, poise: 50, empathy: 40, charm: 100, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 34, name: 'Sinclaire', object: 'Sink', stat: 'smarts', 
        requirements: { smarts: 1, poise: 1, empathy: 1, charm: 1, sass: 5 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [55, 65], // Maggie
        bidirectionalDependencies: [55, 65]
    },
    { 
        id: 35, name: 'Freddy', object: 'Refrigerator', stat: 'charm', 
        requirements: { smarts: 45, poise: 65, empathy: 20, charm: 40, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 36, name: 'Stefan', object: 'Stove', stat: 'poise', 
        requirements: { smarts: 90, poise: 50, empathy: 80, charm: 15, sass: 15 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 37, name: 'Luke Nuke\'m', object: 'Microwave', stat: 'poise', 
        requirements: { smarts: 80, poise: 80, empathy: 80, charm: 5, sass: 5 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 38, name: 'Miranda Dulce Tostadora', object: 'Toaster', stat: 'charm', 
        requirements: { smarts: 0, poise: 0, empathy: 70, charm: 90, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 39, name: 'Dishy', object: 'Dishwasher', stat: 'sass', 
        requirements: { smarts: 100, poise: 0, empathy: 0, charm: 50, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 40, name: 'Daisuke', object: 'Dishware', stat: 'poise', 
        requirements: { smarts: 10, poise: 100, empathy: 90, charm: 25, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Beverly, Kopi, Mitchell Linn
        bidirectionalDependencies: []
    },
    { 
        id: 41, name: 'Friar Errol', object: 'Air Fryer', stat: 'smarts', 
        requirements: { smarts: 70, poise: 70, empathy: 70, charm: 40, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 42, name: 'Kopi', object: 'Coffeepot', stat: 'charm', 
        requirements: { smarts: 80, poise: 15, empathy: 85, charm: 60, sass: 10 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 43, name: 'Cam', object: 'Trash Can', stat: 'poise', 
        requirements: { smarts: 70, poise: 80, empathy: 80, charm: 10, sass: 10 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 44, name: 'I, Ronaldini', object: 'Fold-out Ironing Board', stat: 'sass', 
        requirements: { smarts: 75, poise: 20, empathy: 55, charm: 50, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Bobby
        bidirectionalDependencies: []
    },
    { 
        id: 45, name: 'Amir', object: 'Mirror', stat: 'sass', 
        requirements: { smarts: 20, poise: 40, empathy: 60, charm: 80, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 46, name: 'Jean Loo', object: 'Toilet', stat: 'sass', 
        requirements: { smarts: 50, poise: 100, empathy: 0, charm: 0, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 47, name: 'Johnny Splash', object: 'Shower', stat: 'sass', 
        requirements: { smarts: 0, poise: 75, empathy: 100, charm: 50, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 48, name: 'Bathsheba', object: 'Bathtub', stat: 'charm', 
        requirements: { smarts: 0, poise: 40, empathy: 60, charm: 50, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 49, name: 'Rebel', object: 'Rubber Ducky', stat: 'sass', 
        requirements: { smarts: 0, poise: 70, empathy: 40, charm: 40, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 50, name: 'Barry', object: 'Beauty Supplies', stat: 'empathy', 
        requirements: { smarts: 0, poise: 50, empathy: 90, charm: 20, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 51, name: 'Tyrell', object: 'Towel', stat: 'empathy', 
        requirements: { smarts: 50, poise: 25, empathy: 80, charm: 60, sass: 35 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 52, name: 'Farya', object: 'First Aid Kit', stat: 'smarts', 
        requirements: { smarts: 100, poise: 0, empathy: 75, charm: 75, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 53, name: 'Dasha', object: 'Desk', stat: 'poise', 
        requirements: { smarts: 35, poise: 100, empathy: 25, charm: 35, sass: 55 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 54, name: 'Jerry', object: 'Junk Drawer', stat: 'empathy', 
        requirements: { smarts: 10, poise: 55, empathy: 100, charm: 65, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 55, name: 'Penelope', object: 'Office Supplies', stat: 'empathy', 
        requirements: { smarts: 80, poise: 20, empathy: 70, charm: 40, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 56, name: 'Mac', object: 'Computer', stat: 'smarts', 
        requirements: { smarts: 90, poise: 20, empathy: 70, charm: 30, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 57, name: 'Willi', object: 'Work', stat: 'sass', 
        requirements: { smarts: 70, poise: 40, empathy: 25, charm: 60, sass: 55 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 58, name: 'Lyric', object: 'Literature', stat: 'smarts', 
        requirements: { smarts: 100, poise: 40, empathy: 0, charm: 40, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Wallace, Florence, Celia
        bidirectionalDependencies: []
    },
    { 
        id: 59, name: 'Rongomaiwhenua', object: 'Geode', stat: 'smarts', 
        requirements: { smarts: 80, poise: 70, empathy: 60, charm: 40, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 60, name: 'Chance', object: 'D20', stat: 'charm', 
        requirements: { smarts: 80, poise: 0, empathy: 60, charm: 80, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 61, name: 'Maggie', object: 'Magnifying Glass', stat: 'smarts', 
        requirements: { smarts: 100, poise: 45, empathy: 0, charm: 75, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 62, name: 'Winnifred', object: 'Water Heater', stat: 'empathy', 
        requirements: { smarts: 80, poise: 20, empathy: 55, charm: 60, sass: 35 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 63, name: 'Rainey', object: 'Record Player', stat: 'empathy', 
        requirements: { smarts: 80, poise: 20, empathy: 70, charm: 30, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 64, name: 'Scandalabra', object: 'Wick', stat: 'sass', 
        requirements: { smarts: 25, poise: 15, empathy: 20, charm: 90, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 65, name: 'Arma', object: 'Smoke Alarm', stat: 'empathy', 
        requirements: { smarts: 80, poise: 80, empathy: 65, charm: 0, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 66, name: 'Betty', object: 'Bed', stat: 'empathy', 
        requirements: { smarts: 0, poise: 0, empathy: 100, charm: 75, sass: 75 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Nightmare, Ben-Hwa
        bidirectionalDependencies: []
    },
    { 
        id: 67, name: 'Diana', object: 'Diary', stat: 'poise', 
        requirements: { smarts: 65, poise: 65, empathy: 65, charm: 55, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 68, name: 'Daemon', object: 'Unknown (Glitch)', stat: 'smarts', 
        requirements: { smarts: 1, poise: 1, empathy: 1, charm: 1, sass: 1 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 69, name: 'Ben-Hwa', object: 'Mysterious Objects', stat: 'sass', 
        requirements: { smarts: 0, poise: 100, empathy: 0, charm: 50, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 70, name: 'Hero Hime', object: 'Anime Figurine', stat: 'poise', 
        requirements: { smarts: 35, poise: 65, empathy: 35, charm: 65, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 71, name: 'Teddy', object: 'Teddy Bear', stat: 'empathy', 
        requirements: { smarts: 0, poise: 20, empathy: 90, charm: 90, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 72, name: 'Hank(s)', object: 'Hangers', stat: 'poise', 
        requirements: { smarts: 0, poise: 50, empathy: 0, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 73, name: 'Washford', object: 'Washer', stat: 'smarts', 
        requirements: { smarts: 15, poise: 100, empathy: 100, charm: 10, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 74, name: 'Drysdale', object: 'Dryer', stat: 'charm', 
        requirements: { smarts: 85, poise: 0, empathy: 0, charm: 90, sass: 75 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 75, name: 'Harper', object: 'Hamper', stat: 'poise', 
        requirements: { smarts: 50, poise: 70, empathy: 25, charm: 55, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 76, name: 'Dirk', object: 'Dirty Laundry', stat: 'sass', 
        requirements: { smarts: 80, poise: 0, empathy: 0, charm: 80, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 77, name: 'Tydus', object: 'Detergent', stat: 'poise', 
        requirements: { smarts: 90, poise: 95, empathy: 20, charm: 40, sass: 5 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 78, name: 'Henry Hoove', object: 'Vacuum Cleaner', stat: 'empathy', 
        requirements: { smarts: 70, poise: 20, empathy: 70, charm: 70, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 79, name: 'Bobby', object: 'Bobby Pin', stat: 'sass', 
        requirements: { smarts: 40, poise: 40, empathy: 40, charm: 65, sass: 65 }, 
        locationRequirement: 'none',
        storyRequirements: { attic: true},
        realizationDependencies: [], // Sophia, Betty, Harper, Willi
        bidirectionalDependencies: []
    },
    { 
        id: 80, name: 'Kristof', object: 'Crosstrainer', stat: 'poise', 
        requirements: { smarts: 70, poise: 100, empathy: 80, charm: 0, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 81, name: 'Dunk', object: 'Sporting Goods', stat: 'charm', 
        requirements: { smarts: 30, poise: 30, empathy: 70, charm: 80, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 82, name: 'Fantina', object: 'Fan', stat: 'poise', 
        requirements: { smarts: 25, poise: 25, empathy: 50, charm: 80, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 83, name: 'Stepford', object: 'Trophy', stat: 'charm', 
        requirements: { smarts: 65, poise: 70, empathy: 10, charm: 90, sass: 15 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 84, name: 'Tony', object: 'Toolbox', stat: 'charm', 
        requirements: { smarts: 20, poise: 50, empathy: 40, charm: 60, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 85, name: 'Beau', object: 'Box', stat: 'poise', 
        requirements: { smarts: 60, poise: 90, empathy: 0, charm: 70, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 86, name: 'Keith', object: 'Skeleton Key', stat: 'empathy', 
        requirements: { smarts: 50, poise: 50, empathy: 50, charm: 50, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 87, name: 'Bodhi', object: 'Time Capsule', stat: 'sass', 
        requirements: { smarts: 25, poise: 15, empathy: 10, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 88, name: 'Vaughn', object: 'Rat Trap', stat: 'sass', 
        requirements: { smarts: 50, poise: 25, empathy: 80, charm: 60, sass: 35 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 89, name: 'Sophia', object: 'Safe', stat: 'sass', 
        requirements: { smarts: 30, poise: 85, empathy: 20, charm: 15, sass: 100 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 90, name: 'Monique', object: 'Money', stat: 'smarts', 
        requirements: { smarts: 80, poise: 80, empathy: 0, charm: 80, sass: 10 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 91, name: 'Memoria', object: 'Memories', stat: 'poise', 
        requirements: { smarts: 0, poise: 80, empathy: 80, charm: 30, sass: 60 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 92, name: 'Holly', object: 'Holidays', stat: 'charm', 
        requirements: { smarts: 60, poise: 60, empathy: 60, charm: 40, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 93, name: 'Airyn', object: 'Air', stat: 'poise', 
        requirements: { smarts: 65, poise: 100, empathy: 85, charm: 0, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 94, name: 'Textbox-Chan', object: 'U.I.', stat: 'smarts', 
        requirements: { smarts: 95, poise: 5, empathy: 100, charm: 0, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: [],
        specialRequirement: 'met80Characters'
    },
    { 
        id: 95, name: 'The Sassy Chap', object: 'The Developers', stat: 'sass', 
        requirements: { smarts: 45, poise: 30, empathy: 30, charm: 45, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 96, name: 'Zoey Bennett', object: 'Ghost', stat: 'empathy', 
        requirements: { smarts: 5, poise: 70, empathy: 70, charm: 75, sass: 30 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [],
        bidirectionalDependencies: [],
    },
    { 
        id: 97, name: 'xxXShadowl0rd420Xxx', object: 'Darkness', stat: 'smarts', 
        requirements: { smarts: 70, poise: 60, empathy: 40, charm: 10, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 98, name: 'Doug', object: 'Overwhelming Sense of Existential Dread', stat: 'smarts', 
        requirements: { smarts: 20, poise: 100, empathy: 30, charm: 20, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 99, name: 'Nightmare', object: 'Nightmare', stat: 'poise', 
        requirements: { smarts: 45, poise: 100, empathy: 35, charm: 70, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 100, name: 'Reggie', object: 'Rejection', stat: 'sass', 
        requirements: { smarts: 80, poise: 80, empathy: 0, charm: 0, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // No one required
        bidirectionalDependencies: []
    },
    { 
        id: 102, name: 'Lucinda', object: 'Lavish Edition', stat: 'choosable', 
        requirements: { smarts: 1, poise: 1, empathy: 1, charm: 1, sass: 1 }, 
        locationRequirement: 'dlc',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    },
    { 
        id: 101, name: 'Michael Transaction', object: 'Microtransactions', stat: 'choosable', 
        requirements: { smarts: 100, poise: 100, empathy: 100, charm: 100, sass: 100 }, 
        locationRequirement: 'dlc',
        storyRequirements: {},
        realizationDependencies: [], // Further testing required
        bidirectionalDependencies: []
    }
];

// Location data for special characters
const locationData = {
    7: { // Dorian
        name: 'Dorian Tracker',
        locations: [
            'Front Door', 'Office Door', 'Office Closet Door', 'Trap Door',
            'Bathroom Door', 'Tiny Door', 'Laundry Room Door', 'Laundry Room Closet Door',
            'Back Door', 'Bedroom Door', 'Upstairs Bathroom Door (Bedroom Side)',
            'Upstairs Bathroom Door (Gym Side)', 'Bedroom Closet Door', 'Gymnasium Door',
            'Gymnasium Closet Door', 'Electrical Closet Door', 'Attic Door'
        ]
    },
    8: { // Wyndolyn
        name: 'Wyndolyn Tracker',
        locations: [
            'Attic Window', 'Window behind Sofa and Piano',
            'Front Window facing Street', 'Window beside the Back Door'
        ]
    },
    9: { // Curt & Rod
        name: 'Curt & Rod Tracker',
        locations: [
            'Bedroom', 'Gym', 'Office', 'Living Room',
            'Dining Room', 'Kitchen', 'Laundry', 'Front Door'
        ]
    }
};

// Content warnings for specific characters
const contentWarnings = {
    14: "Submissive/stalker-like behavior",
    30: "Forceful/abusive personality",
    41: "Religious themes, sin discussion",
    49: "Sexual content, profanity",
    52: "Medical themes, health anxiety",
    54: "Mental health, hoarding",
    65: "Trauma, violence, suicide",
    66: "Sexual content",
    67: "Mental health, paranoia, mood swings",
    69: "Sexual content, adult themes",
    68: "Horror themes, disturbing content",
    75: "Toxic relationship dynamics",
    76: "Toxic relationship dynamics",
    82: "Stalking behavior",
    86: "Manipulation, sociopathic behavior",
    89: "Dominatrix, sexual scenarios",
    96: "Violence descriptions",
    98: "Aggressive/abusive behavior",
    99: "Horror themes, disturbing content"
};

// Character portrait mapping - add character class names for those with images
const characterPortraitMap = {
    1: 'skylar',
    2: 'phoenicia',
    3: 'wallace',
    4: 'florence',
    5: 'celia',
    6: 'stella',
    7: 'dorian',
    8: 'wyndolyn',
    9: 'curt-rod',
    10: 'shelley',
    11: 'abel',
    12: 'chairemi',
    13: 'lux',
    14: 'hector',
    15: 'prissy',
    16: 'timothy',
    17: 'artt',
    18: 'river',
    19: 'eddie-volt',
    20: 'koa',
    21: 'dolly',
    22: 'dante',
    23: 'telly',
    24: 'luna',
    25: 'keyes',
    26: 'gaia',
    27: 'captain-jaques-pierrot',
    28: 'parker',
    29: 'mateo',
    30: 'tina',
    31: 'beverly',
    32: 'mitchell-linn',
    33: 'cabrizzio',
    34: 'sinclaire',
    35: 'freddy',
    36: 'stefan',
    37: 'luke-nukem',
    38: 'miranda-dulce-tostadora',
    39: 'dishy',
    40: 'daisuke',
    41: 'friar-errol',
    42: 'kopi',
    43: 'cam',
    44: 'i-ronaldini',
    45: 'amir',
    46: 'jean-loo',
    47: 'johnny-splash',
    48: 'bathsheba',
    49: 'rebel',
    50: 'barry',
    51: 'tyrell',
    52: 'farya',
    53: 'dasha',
    54: 'jerry',
    55: 'penelope',
    56: 'mac',
    57: 'willi',
    58: 'lyric',
    59: 'rongomaiwhenua',
    60: 'chance',
    61: 'maggie',
    62: 'winnifred',
    63: 'rainey',
    64: 'scandalabra',
    65: 'arma',
    66: 'betty',
    67: 'diana',
    68: 'daemon',
    69: 'ben-hwa',
    70: 'hero-hime',
    71: 'teddy',
    72: 'hanks',
    73: 'washford',
    74: 'drysdale',
    75: 'harper',
    76: 'dirk',
    77: 'tydus',
    78: 'henry-hoove',
    79: 'bobby',
    80: 'kristof',
    81: 'dunk',
    82: 'fantina',
    83: 'stepford',
    84: 'tony',
    85: 'beau',
    86: 'keith',
    87: 'bodhi',
    88: 'vaughn',
    89: 'sophia',
    90: 'monique',
    91: 'memoria',
    92: 'holly',
    93: 'airyn',
    94: 'textbox-chan',
    95: 'the-sassy-chap',
    96: 'zoey-bennett',
    97: 'xxxshadowl0rd420xxx',
    98: 'doug',
    99: 'nightmare',
    100: 'reggie',
    102: 'lucinda',
    101: 'michael-transaction'
};

// Character portrait URLs
const characterPortraitUrls = {
    1: { // Skylar
        default: 'https://dateeverything.wiki.gg/images/thumb/6/6b/Skylar_Pose_A.png/299px-Skylar_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/7/76/Skylar_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/1/13/Skylar_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/e/ec/Skylar_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/b/b9/Skylar_Realized.png/505px-Skylar_Realized.png'
    },
    2: { // Phoenicia
        default: 'https://dateeverything.wiki.gg/images/thumb/2/2d/Phoenicia_Pose_A.png/800px-Phoenicia_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/6/65/Phoenicia_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/f/f6/Phoenicia_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/3/33/Phoenicia_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/0/02/Phoenicia_Realized.png'
    },
    3: { // Wallace
        default: 'https://dateeverything.wiki.gg/images/2/22/Wallace_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/2/23/Wallace_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/8/8b/Wallace_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/9/9c/Wallace_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/1/19/Wallace_Realized.png'
    },
    4: { // Florence
        default: 'https://dateeverything.wiki.gg/images/d/d4/Florence_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/f/f4/Florence_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/4/40/Florence_Pose_C_Joy.png/800px-Florence_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/80/Florence_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/e/ef/Florence_Realized.png/800px-Florence_Realized.png'
    },
    5: { // Celia
        default: 'https://dateeverything.wiki.gg/images/2/27/Celia_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/9/93/Celia_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/56/Celia_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/8c/Celia_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/a/a6/Celia_Realized.png/320px-Celia_Realized.png'
    },
    6: { // Stella
        default: 'https://dateeverything.wiki.gg/images/thumb/d/d0/Stella_Pose_A.png/320px-Stella_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/5/51/Stella_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/c/c3/Stella_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/b/b5/Stella_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/5/58/Stella_Realized.png'
    },
    7: { // Dorian
        default: 'https://dateeverything.wiki.gg/images/thumb/4/42/Dorian_Pose_A.png/320px-Dorian_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/e/e6/Dorian_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/9/93/Dorian_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/f/fc/Dorian_Pose_D_Angry.png/320px-Dorian_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/2/2c/Dorian_Realized.png'
    },
    8: { // Wyndolyn
        default: 'https://dateeverything.wiki.gg/images/9/99/Wyndolyn_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/2/29/Wyndolyn_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/9/9e/Wyndolyn_Pose_C_Joy.png/320px-Wyndolyn_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/6/6e/Wyndolyn_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/2/23/Wyndolyn_Realized.png'
    },
    9: { 
        // Together states
        default: 'https://dateeverything.wiki.gg/images/thumb/4/4c/Curt_%26_Rod_Pose_A.png/800px-Curt_%26_Rod_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/6/64/Curt_%26_Rod_Pose_B.png/800px-Curt_%26_Rod_Pose_B.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/0/07/Curt_%26_Rod_Pose_C.png/800px-Curt_%26_Rod_Pose_C.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/8/82/Curt_%26_Rod_Pose_D.png/800px-Curt_%26_Rod_Pose_D.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/4/4c/Curt_%26_Rod_Pose_A.png/800px-Curt_%26_Rod_Pose_A.png',
        
        // Individual Curt portraits (cycle = 0)
        curtDefault: 'https://dateeverything.wiki.gg/images/1/1f/Curt_Pose_A.png',
        curtLove: 'https://dateeverything.wiki.gg/images/thumb/f/f5/Curt_Pose_B_Flirt.png/800px-Curt_Pose_B_Flirt.png',
        curtFriend: 'https://dateeverything.wiki.gg/images/thumb/f/f1/Curt_Pose_C_Joy.png/320px-Curt_Pose_C_Joy.png',
        curtHate: 'https://dateeverything.wiki.gg/images/d/df/Curt_Pose_D_Angry.png',
        curtRealized: 'https://dateeverything.wiki.gg/images/8/8a/Curt_Realized.png',
        
        // Individual Rod portraits (cycle = 1)
        rodDefault: 'https://dateeverything.wiki.gg/images/thumb/4/42/Rod_Pose_A.png/320px-Rod_Pose_A.png',
        rodLove: 'https://dateeverything.wiki.gg/images/9/90/Rod_Pose_B_Flirt.png',
        rodFriend: 'https://dateeverything.wiki.gg/images/2/21/Rod_Pose_C_Joy.png',
        rodHate: 'https://dateeverything.wiki.gg/images/2/2f/Rod_Pose_D_Angry.png',
        rodRealized: 'https://dateeverything.wiki.gg/images/thumb/e/eb/Rod_Realized.png/800px-Rod_Realized.png'
    },
    10: { // Shelley
        default: 'https://dateeverything.wiki.gg/images/3/3e/Shelley_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/6/67/Shelley_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/f/fb/Shelley_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/8f/Shelley_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/7/72/Shelley_Realized_Happy.png'
    },
    11: { // Abel
        default: 'https://dateeverything.wiki.gg/images/9/93/AbelBody.png',
        love: 'https://dateeverything.wiki.gg/images/d/dc/Abel_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/5f/Abel_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/9/9c/Abel_Pose_D_Angry.png/800px-Abel_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/b/b5/Abel_Realized.png'
    },
    12: { // Chairemi
        default: 'https://dateeverything.wiki.gg/images/9/99/Chairemi_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/e/e0/Chairemi_Pose_B.png',
        friend: 'https://dateeverything.wiki.gg/images/0/0e/Chairemi_Pose_C.png',
        hate: 'https://dateeverything.wiki.gg/images/4/43/Chairemi_Pose_D.png',
        realized: 'https://dateeverything.wiki.gg/images/8/8a/Chairemi_Realized.png'
    },
    13: { // Lux
        default: 'https://dateeverything.wiki.gg/images/b/b7/Lux_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/e/e3/Lux_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/4/4e/Lux_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/a/ae/Lux_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/d/d9/Lux_Realized.png'
    },
    14: { // Hector
        default: 'https://dateeverything.wiki.gg/images/7/78/Hector_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/1/1e/Hector_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/6/6d/Hector_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/f/fb/Hector_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/b/ba/Hector_Realized.png/320px-Hector_Realized.png'
    },
    15: { // Prissy
        default: 'https://dateeverything.wiki.gg/images/6/66/Prissy_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/c/c7/Prissy_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/7/7d/Prissy_Pose_C_Joy.png/320px-Prissy_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/d/d1/Prissy_Pose_D_Angry.png/320px-Prissy_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/49/Prissy_Realized.png'
    },
    16: { // Timothy
        default: 'https://dateeverything.wiki.gg/images/3/3e/Tim_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/b/b0/Tim_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/8/89/Tim_Pose_C_Joy.png/320px-Tim_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/d/d7/Tim_Pose_D_Angry.png/320px-Tim_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/0/00/Tim_Realized.png'
    },
    17: { // Artt
        default: 'https://dateeverything.wiki.gg/images/b/b6/Artt_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/3/34/Artt_Pose_B_Flirt.png/800px-Artt_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/f/fd/Artt_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/9/94/Artt_Pose_D_Angry.png/800px-Artt_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/47/Artt_Realized.png'
    },
    18: { // River
        default: 'https://dateeverything.wiki.gg/images/thumb/9/94/River_Pose_A.png/800px-River_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/0/03/River_Pose_B_Flirt.png/800px-River_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/d/d5/River_Pose_C_Joy.png/800px-River_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/9/92/River_Pose_D_Angry.png/800px-River_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/a/a7/River_Realized.png/800px-River_Realized.png'
    },
    19: { 
        // Together states
        default: 'https://dateeverything.wiki.gg/images/thumb/7/72/Eddie_%26_Volt_Pose_A.png/300px-Eddie_%26_Volt_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/2/23/Eddie_%26_Volt_Pose_B_Flirt.png/800px-Eddie_%26_Volt_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/6/6e/Eddie_%26_Volt_Pose_C_Joy.png/800px-Eddie_%26_Volt_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/e/e8/Eddie_%26_Volt_Pose_D_Angry.png/800px-Eddie_%26_Volt_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/7/72/Eddie_%26_Volt_Pose_A.png/300px-Eddie_%26_Volt_Pose_A.png',
        
        // Individual Eddie portraits (cycle = 0)
        eddieDefault: 'https://dateeverything.wiki.gg/images/c/c4/Eddie_Pose_A.png',
        eddieLove: 'https://dateeverything.wiki.gg/images/5/55/Eddie_Pose_B_Flirt.png',
        eddieFriend: 'https://dateeverything.wiki.gg/images/8/82/Eddie_Pose_C_Happy.png',
        eddieHate: 'https://dateeverything.wiki.gg/images/4/43/Eddie_Pose_D.png',
        eddieRealized: 'https://dateeverything.wiki.gg/images/1/1a/Eddie_Realized.png',
        
        // Individual Volt portraits (cycle = 1)
        voltDefault: 'https://dateeverything.wiki.gg/images/6/69/Volt_Pose_A.png',
        voltLove: 'https://dateeverything.wiki.gg/images/2/2b/Volt_Pose_B_Flirt.png',
        voltFriend: 'https://dateeverything.wiki.gg/images/b/b8/Volt_Pose_C_Joy.png',
        voltHate: 'https://dateeverything.wiki.gg/images/f/f1/Volt_Pose_D_Rage.png',
        voltRealized: 'https://dateeverything.wiki.gg/images/6/6b/Volt_Realized.png'
    },
    20: { // Koa
        default: 'https://dateeverything.wiki.gg/images/2/2c/Koa_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/7/73/Koa_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/7/78/Koa_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/4/4a/Koa_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/9/96/Koa_Realized.png'
    },
    21: { // Dolly
        default: 'https://dateeverything.wiki.gg/images/d/dd/Dolly_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/8/80/Dolly_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/5b/Dolly_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/a/a3/Dolly_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/f8/Dolly_Realized.png'
    },
    22: { // Dante
        default: 'https://dateeverything.wiki.gg/images/5/5d/Dante_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/1/12/Dante_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/6/62/Dante_Pose_C_Joy.png/800px-Dante_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/1/14/Dante_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/d/d3/Dante_Realized.png'
    },
    23: { // Telly
        default: 'https://dateeverything.wiki.gg/images/d/de/Telly_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/9/9b/Telly_Pose_B_Flirt.png/800px-Telly_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/f/ff/Telly_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/0/0b/Telly_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/e/eb/Telly_Realized.png'
    },
    24: { // Luna
        default: 'https://dateeverything.wiki.gg/images/4/46/Connie_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/0/08/Connie_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/4/4c/Connie_Pose_C_Joy.png/800px-Connie_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/3/36/Connie_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/b/be/Connie_Realized.png'
    },
    25: { // Keyes
        default: 'https://dateeverything.wiki.gg/images/4/43/Keyes_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/c/cb/Keyes_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/6/60/Keyes_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/5/5b/Keyes_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/6/6e/Keyes_Realized.png/800px-Keyes_Realized.png'
    },
    26: { // Gaia
        default: 'https://dateeverything.wiki.gg/images/f/fb/Gaia_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/4/4e/Gaia_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/1/1e/Gaia_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/d/d4/Gaia_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/40/Gaia_Realized.png'
    },
    27: { // Captain Jaques Pierrot
        default: 'https://dateeverything.wiki.gg/images/5/55/Captain_Jacques_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/f/f8/Captain_Jacques_Pose_B_Flirt.png/800px-Captain_Jacques_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/4/4d/Captain_Jacques_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/b/bf/Captain_Jacques_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/3/37/Captain_Jacques_Realized.png'
    },
    28: { // Parker
        default: 'https://dateeverything.wiki.gg/images/c/ce/Parker_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/8/8d/Parker_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/9/99/Parker_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/0/0c/Parker_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/d/dc/Parker_Realized.png/320px-Parker_Realized.png'
    },
    29: { // Mateo
        default: 'https://dateeverything.wiki.gg/images/d/d7/Mateo_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/a/a7/Mateo_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/e/ea/Mateo_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/4/4f/Mateo_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/d/df/Mateo_Realized.png'
    },
    30: { // Tina
        default: 'https://dateeverything.wiki.gg/images/0/07/Tina_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/9/99/Tina_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/8/8c/Tina_Pose_C_Joy.png/320px-Tina_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/4/4c/Tina_Pose_D_Angry.png/320px-Tina_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/7/77/Tina_Realized.png'
    },
    31: { // Beverly
        default: 'https://dateeverything.wiki.gg/images/1/18/Beverly_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/d/d6/Beverly_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/4/4d/Beverly_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/4/45/Beverly_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/7/77/Beverly_Realized.png'
    },
    32: { // Mitchell Linn
        default: 'https://dateeverything.wiki.gg/images/e/e0/Mitchell_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/7/75/Mitchell_Pose_B_Flirt.png/320px-Mitchell_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/d/d0/Mitchell_Pose_B_Joy.png/320px-Mitchell_Pose_B_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/d/df/Mitchell_Pose_D_Angry.png/800px-Mitchell_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/c/c0/Mitchell_Realized.png'
    },
    33: { // Cabrizzio
        default: 'https://dateeverything.wiki.gg/images/c/c4/Cabrizzio_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/7/7a/Cabrizzio_Pose_B_Flirt.png/800px-Cabrizzio_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/54/Cabrizzio_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/6/62/Cabrizzio_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/d/d3/Cabrizzio_Realized.png'
    },
    34: { // Sinclaire
        default: 'https://dateeverything.wiki.gg/images/9/97/Sinclaire_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/4/44/Sinclaire_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/50/Sinclaire_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/0/0c/Sinclaire_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/d/d6/Sinclaire_Realized.png'
    },
    35: { // Freddy
        default: 'https://dateeverything.wiki.gg/images/thumb/7/73/Freddy_Pose_A.png/800px-Freddy_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/4/46/Freddy_Pose_B_Flirt.png/800px-Freddy_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/2/2e/Freddy_Pose_C_Joy.png/800px-Freddy_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/1/10/Freddy_Pose_D_Angry.png/800px-Freddy_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/6/6c/Freddy_Realized.png/800px-Freddy_Realized.png'
    },
    36: { // Stefan
        default: 'https://dateeverything.wiki.gg/images/b/bc/Stefan_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/a/a1/Stefan_Pose_B_Flirt.png/800px-Stefan_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/7/73/Stefan_Pose_C_Joy.png/800px-Stefan_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/f/f5/Stefan_Pose_D_Angry.png/800px-Stefan_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/1/11/Stefan_Realized.png'
    },
    37: { // Luke Nuke'm
        default: 'https://dateeverything.wiki.gg/images/3/3f/Luke_Nukem_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/e/eb/Luke_Nukem_Pose_B_Flirt.png/800px-Luke_Nukem_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/b/be/Luke_Nukem_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/a/ab/Luke_Nukem_Pose_D_Angry.png/800px-Luke_Nukem_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/f3/Luke_Realized.png'
    },
    38: { // Miranda Dulce Tostadora
        default: 'https://dateeverything.wiki.gg/images/0/00/Miranda_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/a/a0/Miranda_Pose_B_Flirt.png/800px-Miranda_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/c/c9/Miranda_Pose_C_Joy.png/800px-Miranda_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/0/0c/Miranda_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/2/2b/Miranda_Realized.png/800px-Miranda_Realized.png'
    },
    39: { // Dishy
        default: 'https://dateeverything.wiki.gg/images/thumb/4/47/Dishy_Pose_A.png/800px-Dishy_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/a/a4/Dishy_Pose_B_Flirt.png/800px-Dishy_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/8/84/Dishy_Pose_C_Joy.png/800px-Dishy_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/4/4b/Dishy_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/42/Dishy_Realized.png'
    },
    40: { // Daisuke
        default: 'https://dateeverything.wiki.gg/images/thumb/7/73/Daisuke_Pose_A.png/320px-Daisuke_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/d/dd/Daisuke_Pose_B_Flirt.png/320px-Daisuke_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/4/42/Daisuke_Pose_C_Joy.png/320px-Daisuke_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/d/d5/Daisuke_Pose_D_Angry.png/800px-Daisuke_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/41/Daisuke_Realized.png'
    },
    41: { // Friar Errol
        default: 'https://dateeverything.wiki.gg/images/4/40/Friar_Errol_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/9/98/Friar_Errol_Pose_B_Flirt.png/800px-Friar_Errol_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/7/7d/Friar_Errol_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/1/11/Friar_Errol_Pose_D_Angry.png/320px-Friar_Errol_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/0/0b/Friar_Errol_Realized.png/800px-Friar_Errol_Realized.png'
    },
    42: { // Kopi
        default: 'https://dateeverything.wiki.gg/images/thumb/4/4f/Kopi_Pose_A.png/320px-Kopi_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/6/63/Kopi_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/8/8f/Kopi_Pose_C_Joy.png/320px-Kopi_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/c/c3/Kopi_Pose_D_Angry.png/320px-Kopi_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/f/f0/Kopi_Realized.png/320px-Kopi_Realized.png'
    },
    43: { // Cam
        default: 'https://dateeverything.wiki.gg/images/9/9b/Cam_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/0/02/Cam_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/3/35/Cam_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/2/2b/Cam_Pose_D_Angry.png/800px-Cam_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/7/76/Cam_Realized.png'
    },
    44: { // I, Ronaldini
        default: 'https://dateeverything.wiki.gg/images/5/5d/I%2C_Ronaldini_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/a/ab/I%2C_Ronaldini_Pose_B_Flirt.png/800px-I%2C_Ronaldini_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/4/46/I%2C_Ronaldini_Pose_C_Joy.png/800px-I%2C_Ronaldini_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/9/9d/I%2C_Ronaldini_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/4/4a/I%2C_Ronaldini_Realized.png/800px-I%2C_Ronaldini_Realized.png'
    },
    45: { // Amir
        default: 'https://dateeverything.wiki.gg/images/thumb/e/e1/Amir_Pose_A.png/320px-Amir_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/7/71/Amir_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/4/45/Amir_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/8/81/Amir_Pose_D_Angry.png/800px-Amir_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/e/e7/Amir_Realized.png'
    },
    46: { // Jean Loo
        default: 'https://dateeverything.wiki.gg/images/thumb/c/c9/Jean_Loo_Pose_A.png/800px-Jean_Loo_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/5/5f/Jean_Loo_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/57/Jean_Loo_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/7/76/Jean_Loo_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/c/c0/Jean_Loo_Realized.png'
    },
    47: { // Johnny Splash
        default: 'https://dateeverything.wiki.gg/images/9/9d/Johnny_Splash_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/b/ba/Johnny_Splash_Pose_B_Flirt.png/800px-Johnny_Splash_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/b/bd/Johnny_Splash_Pose_C_Joy.png/800px-Johnny_Splash_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/1/18/Johnny_Splash_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/b/b8/Johnny_Splash_Realized.png/800px-Johnny_Splash_Realized.png'
    },
    48: { // Bathsheba
        default: 'https://dateeverything.wiki.gg/images/8/85/Bathsheba_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/6/68/Bathsheba_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/2/2a/Bathsheba_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/7/72/Bathsheba_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/7/78/Bathsheba_Realized.png'
    },
    49: { // Rebel
        default: 'https://dateeverything.wiki.gg/images/c/c2/Rebel_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/2/22/Rebel_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/b/be/Rebel_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/2/23/Rebel_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/fa/Rebel_Realized.png'
    },
    50: { // Barry
        default: 'https://dateeverything.wiki.gg/images/a/a8/Barry_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/b/b2/Barry_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/3/3c/Barry_Pose_C_Joy.png/320px-Barry_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/4/49/Barry_Pose_D_Angry.png/320px-Barry_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/1/18/Barry_Realized.png'
    },
    51: { // Tyrell
        default: 'https://dateeverything.wiki.gg/images/4/4a/Tyrell_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/9/9d/Tyrell_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/1/15/Tyrell_Pose_C_Joy.png/800px-Tyrell_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/e/e5/Tyrell_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/1/14/Tyrell_Realized.png'
    },
    52: { // Farya
        default: 'https://dateeverything.wiki.gg/images/6/6d/Farya_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/5/52/Farya_Pose_B_Flirt.png/320px-Farya_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/7/7f/Farya_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/d/d4/Farya_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/2/29/Farya_Realized.png'
    },
    53: { // Dasha
        default: 'https://dateeverything.wiki.gg/images/5/57/Dasha_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/8/80/Dasha_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/3/3b/Dasha_Pose_C_Joy.png/320px-Dasha_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/9/9c/Dasha_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/d/d9/Dasha_Realized.png'
    },
    54: { // Jerry
        default: 'https://dateeverything.wiki.gg/images/1/14/Jerry_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/d/d3/Jerry_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/3/3b/Jerry_Pose_C_Joy.png/320px-Jerry_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/b/be/Jerry_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/5/51/Jerry_Realized.png'
    },
    55: { // Penelope
        default: 'https://dateeverything.wiki.gg/images/8/86/Penelope_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/1/1a/Penelope_Pose_B_Flirt.png/320px-Penelope_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/b/bd/Penelope_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/0/04/Penelope_Pose_D_Angry.png/320px-Penelope_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/0/01/Penelope_Realized.png'
    },
    56: { // Mac
        default: 'https://dateeverything.wiki.gg/images/thumb/7/7c/Mac_Pose_A.png/800px-Mac_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/a/a8/Mac_Pose_B_Flirt.png/800px-Mac_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/5/56/Mac_Pose_C_Joy.png/800px-Mac_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/a/af/Mac_Pose_D_Angry.png/800px-Mac_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/b/bc/Mac_Realized.png/800px-Mac_Realized.png'
    },
    57: { // Willi
        default: 'https://dateeverything.wiki.gg/images/thumb/7/77/Willi_Pose_A.png/300px-Willi_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/8/8e/Willi_Pose_B_Flirt.png/320px-Willi_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/8/8d/Willi_Pose_C_Joy.png/320px-Willi_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/a/ac/Willi_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/6/6f/Willi_Realized.png/320px-Willi_Realized.png'
    },
    58: { // Lyric
        default: 'https://dateeverything.wiki.gg/images/thumb/a/aa/Lyric_Pose_A.png/800px-Lyric_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/2/23/Lyric_Pose_B_Flirt.png/800px-Lyric_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/1/12/Lyric_Pose_C_Joy.png/800px-Lyric_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/d/d4/Lyric_Pose_D_Angry.png/800px-Lyric_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/fc/Lyric_Realized.png'
    },
    59: { // Rongomaiwhenua
        default: 'https://dateeverything.wiki.gg/images/thumb/8/86/Rongomaiwhenua_Pose_A.png/800px-Rongomaiwhenua_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/2/22/Rongomaiwhenua_Pose_B_Flirt.png/800px-Rongomaiwhenua_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/c/ca/Rongomaiwhenua_Pose_C_Joy.png/800px-Rongomaiwhenua_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/a/ad/Rongomaiwhenua_Pose_D_Angry.png/800px-Rongomaiwhenua_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/4d/Rongomaiwhenua_Realized.png'
    },
    60: { // Chance
        default: 'https://dateeverything.wiki.gg/images/thumb/6/6f/Chance_Pose_A.png/299px-Chance_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/8/87/Chance_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/d/d6/Chance_Pose_C_Joy.png/800px-Chance_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/3/33/Chance_Pose_D_Angry.png/800px-Chance_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/c/c6/Chance_Realized.png'
    },
    61: { // Maggie
        default: 'https://dateeverything.wiki.gg/images/thumb/6/66/Maggie_Pose_A.png/299px-Maggie_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/b/ba/Maggie_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/e/ec/Maggie_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/0/02/Maggie_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/9/9d/Maggie_Realized.png'
    },
    62: { // Winnifred
        default: 'https://dateeverything.wiki.gg/images/7/7f/Winnifred_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/1/1e/Winnifred_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/3/36/Winnifred_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/3/30/Winnifred_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/8/84/Winnifred_Realized.png/800px-Winnifred_Realized.png'
    },
    63: { // Rainey
        default: 'https://dateeverything.wiki.gg/images/2/22/Rainey_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/7/72/Rainey_Pose_B_Flirt.png/800px-Rainey_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/d/d8/Rainey_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/83/Rainey_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/4e/Rainey_Realized.png'
    },
    64: { // Scandalabra
        default: 'https://dateeverything.wiki.gg/images/a/a2/Scandalabra_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/5/58/Scandalabra_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/8/81/Scandalabra_Pose_C_Joy.png/320px-Scandalabra_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/3/35/Scandalabra_Pose_D_Angry.png/320px-Scandalabra_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/0/01/Scandalabra_Realized.png/800px-Scandalabra_Realized.png'
    },
    65: { // Arma
        default: 'https://dateeverything.wiki.gg/images/b/bb/Arma_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/e/ee/Arma_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/7/7e/Arma_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/88/Arma_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/0/09/Arma_Realized.png'
    },
    66: { // Betty
        default: 'https://dateeverything.wiki.gg/images/thumb/3/32/Betty_Pose_A.png/300px-Betty_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/e/eb/Betty_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/2/28/Betty_Pose_C_Joy.png/800px-Betty_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/e/ea/Betty_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/e/ed/Betty_Realized.png'
    },
    67: { // Diana
        default: 'https://dateeverything.wiki.gg/images/thumb/1/18/Diana_Pose_A.png/800px-Diana_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/7/73/Diana_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/8/82/Diana_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/e/e5/Diana_Pose_D_Angry.png/320px-Diana_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/c/ca/Diana_Realized.png/800px-Diana_Realized.png'
    },
    68: { // Daemon
        default: 'https://dateeverything.wiki.gg/images/5/58/Daemon_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/a/a1/Daemon_Pose_B.png',
        friend: 'https://dateeverything.wiki.gg/images/0/09/Daemon_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/5/58/Daemon_Pose_A.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/c/c2/Daemon_Realized.png/320px-Daemon_Realized.png'
    },
    69: { // Ben-Hwa
        default: 'https://dateeverything.wiki.gg/images/c/c8/Ben-Hwa_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/7/77/Ben-Hwa_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/7/77/Ben-Hwa_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/2/2a/Ben-Hwa_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/2/2f/Ben-Hwa_Realized.png'
    },
    70: { // Hero Hime
        default: 'https://dateeverything.wiki.gg/images/thumb/e/e5/Hero_Hime_Pose_A.png/800px-Hero_Hime_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/a/ab/Hero_Hime_Pose_B_Flirt.png/800px-Hero_Hime_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/9/92/Hero_Hime_Pose_C_Joy.png/800px-Hero_Hime_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/5/58/Hero_Hime_Pose_D_Angry.png/1024px-Hero_Hime_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/7/76/Hero_Hime_Realized.png/800px-Hero_Hime_Realized.png'
    },
    71: { // Teddy
        default: 'https://dateeverything.wiki.gg/images/thumb/b/b2/Teddy_Pose_A.png/300px-Teddy_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/5/53/Teddy_Pose_B_Flirt.png/165px-Teddy_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/8/8a/Teddy_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/f/fe/Teddy_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/a/a7/Teddy_Realized.png/800px-Teddy_Realized.png'
    },
    72: { // Hank(s)
        default: 'https://dateeverything.wiki.gg/images/thumb/5/54/Hanks_Pose_A.png/1024px-Hanks_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/b/bc/Hanks_Pose_B_Flirt.png/1024px-Hanks_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/c/c5/Hanks_Pose_C_Joy.png/1024px-Hanks_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/2/28/Hanks_Pose_D_Angry.png/1024px-Hanks_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/7/7c/Hanks_Realized.png/1024px-Hanks_Realized.png'
    },
    73: { // Washford
        default: 'https://dateeverything.wiki.gg/images/thumb/a/a2/Washford_Pose_A.png/299px-Washford_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/3/30/Washford_Pose_B_Flirt.png/800px-Washford_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/c/c0/Washford_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/4/44/Washford_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/d/d4/Washford_Realized.png'
    },
    74: { // Drysdale
        default: 'https://dateeverything.wiki.gg/images/3/34/Drysdale_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/a/a8/Drysdale_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/a/af/Drysdale_Pose_C_Joy.png/800px-Drysdale_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/8/80/Drysdale_Pose_D_Angry.png/320px-Drysdale_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/a/a7/Drysdale_Realized.png'
    },
    75: { // Harper
        default: 'https://dateeverything.wiki.gg/images/2/24/Harper_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/c/cd/Harper_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/c/c5/Harper_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/0/06/Harper_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/4/4d/Harper_Realized.png'
    },
    76: { // Dirk
        default: 'https://dateeverything.wiki.gg/images/d/d2/Dirk_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/8/87/Dirk_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/e/ed/Dirk_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/7/7e/Dirk_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/a/a8/Dirk_Realized.png/800px-Dirk_Realized.png'
    },
    77: { // Tydus
        default: 'https://dateeverything.wiki.gg/images/3/35/Tydus_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/5/58/Tydus_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/b/b6/Tydus_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/6/67/Tydus_Pose_D_Angry.png/800px-Tydus_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/8/84/Tydus_Realized.png'
    },
    78: { // Henry Hoove
        default: 'https://dateeverything.wiki.gg/images/f/f1/Hoove_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/b/b2/Hoove_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/f/f4/Hoove_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/1/16/Hoove_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/2/21/Hoove_Realized.png'
    },
    79: { // Bobby
        default: 'https://dateeverything.wiki.gg/images/thumb/d/d1/Bobby_Pose_A.png/320px-Bobby_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/2/23/Bobby_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/5d/Bobby_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/0/02/Bobby_Pose_D_Angry.png/320px-Bobby_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/1/19/Bobby_Realized.png'
    },
    80: { // Kristof
        default: 'https://dateeverything.wiki.gg/images/7/7a/Kristof_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/f/fb/Kristof_Pose_B_Flirt.png/800px-Kristof_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/c/cc/Kristof_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/8/8e/Kristof_Pose_D_Angry.png/800px-Kristof_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/ff/Kristof_Realized.png'
    },
    81: { // Dunk
        default: 'https://dateeverything.wiki.gg/images/thumb/f/f6/Dunk_Pose_A.png/800px-Dunk_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/f/f0/Dunk_Pose_B_Flirt.png/800px-Dunk_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/9/9b/Dunk_Pose_C_Joy.png/800px-Dunk_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/83/Dunk_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/c/cf/Dunk_Realized.png'
    },
    82: { // Fantina
        default: 'https://dateeverything.wiki.gg/images/thumb/4/4c/Fantina_Pose_A.png/300px-Fantina_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/c/c9/Fantina_Pose_B_Flirt.png/320px-Fantina_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/b/b2/Fantina_Pose_C_Joy.png/320px-Fantina_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/6/6a/Fantina_Pose_D_Angry.png/320px-Fantina_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/1/1d/Fantina_Realized.png/320px-Fantina_Realized.png'
    },
    83: { // Stepford
        default: 'https://dateeverything.wiki.gg/images/thumb/8/88/Stepford_Pose_A.png/300px-Stepford_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/6/69/Stepford_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/6/62/Stepford_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/2/28/Stepford_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/7/7b/Stepford_Realized.png'
    },
    84: { // Tony
        default: 'https://dateeverything.wiki.gg/images/2/29/Tony_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/1/19/Tony_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/c/c4/Tony_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/8/82/Tony_Pose_D_Angry.png/320px-Tony_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/0/07/Tony_Realized.png'
    },
    85: { // Beau
        default: 'https://dateeverything.wiki.gg/images/thumb/2/2b/Beau_Pose_A.png/800px-Beau_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/5/50/Beau_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/0/06/Beau_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/b/bd/Beau_Pose_D_Angry.png/320px-Beau_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/6/6f/Beau_Realized.png/800px-Beau_Realized.png'
    },
    86: { // Keith
        default: 'https://dateeverything.wiki.gg/images/1/16/Keith_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/5/50/Keith_Pose_B_Flirt.png/800px-Keith_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/4/47/Keith_Pose_C_Joy.png/800px-Keith_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/2/2e/Keith_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/9/94/Keith_Realized.png'
    },
    87: { // Bodhi
        default: 'https://dateeverything.wiki.gg/images/b/b4/Bodhi_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/3/36/Bodhi_Pose_B_Flirt.png/800px-Bodhi_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/1/1b/Bodhi_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/f/f8/Bodhi_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/3/3b/Bodhi_Realized.png'
    },
    88: { // Vaughn
        default: 'https://dateeverything.wiki.gg/images/1/1f/Vaughn_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/2/26/Vaughn_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/a/ab/Vaughn_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/f/f2/Vaughn_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/2/2b/Vaughn_Realized.png'
    },
    89: { // Sophia
        default: 'https://dateeverything.wiki.gg/images/e/ee/Sophia_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/c/c9/Sophia_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/f/f0/Sophia_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/81/Sophia_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/fe/Sophia_Realized.png'
    },
    90: { // Monique
        default: 'https://dateeverything.wiki.gg/images/1/14/Monique_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/b/b9/Monique_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/e/e4/Monique_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/1/15/Monique_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/f1/Monique_Realized.png'
    },
    91: { // Memoria
        default: 'https://dateeverything.wiki.gg/images/3/36/Memoria_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/a/ac/Memoria_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/5/50/Memoria_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/8/8c/Memoria_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/9/9f/Memoria_Realized.png'
    },
    92: { // Holly
        default: 'https://dateeverything.wiki.gg/images/f/fa/Holly_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/e/e5/Holly_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/d/dd/Holly_Pose_C_Joy.png/800px-Holly_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/b/bd/Holly_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/f1/Holly_Realized.png'
    },
    93: { // Airyn
        default: 'https://dateeverything.wiki.gg/images/e/e6/Airyn_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/9/96/Airyn_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/c/c3/Airyn_Pose_C_Joy.png/800px-Airyn_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/9/98/Airyn_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/5/51/Airyn_Realized.png'
    },
    94: { // Textbox-Chan
        default: 'https://dateeverything.wiki.gg/images/thumb/d/de/Textbox-Chan_Pose_A.png/300px-Textbox-Chan_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/7/7d/Textbox-Chan_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/8/86/Textbox-Chan_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/9/9a/Textbox-Chan_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/a/a6/Textbox-Chan_Realized.png'
    },
    95: { // The Sassy Chap
        default: 'https://dateeverything.wiki.gg/images/a/a4/Sassy_Chap_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/b/b0/Sassy_Chap_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/6/68/Sassy_Chap_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/1/16/Sassy_Chap_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/a/a0/Sassy_Chap_Realized.png'
    },
    96: { // Zoey Bennett
        default: 'https://dateeverything.wiki.gg/images/b/bf/Zoey_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/5/58/Zoey_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/c/c9/Zoey_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/c/c7/Zoey_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/5/57/Zoey_Realized.png/320px-Zoey_Realized.png'
    },
    97: { // xxXShadowl0rd420Xxx
        default: 'https://dateeverything.wiki.gg/images/thumb/3/31/Shadow_Pose_A.png/800px-Shadow_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/1/1c/Shadow_Pose_B_Flirt.png/800px-Shadow_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/2/2a/Shadow_Pose_C_Joy.png/800px-Shadow_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/9/92/Shadow_Pose_D_Angry.png/800px-Shadow_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/a/a8/Shadow_Realized.png/320px-Shadow_Realized.png'
    },
    98: { // Doug
        default: 'https://dateeverything.wiki.gg/images/f/f0/Doug_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/3/3f/Doug_Pose_B.png/800px-Doug_Pose_B.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/2/23/Doug_Pose_C_Joy.png/800px-Doug_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/1/1d/Doug_Pose_D_Angry.png/800px-Doug_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/6/6a/Doug_Realized.png'
    },
    99: { // Nightmare
        default: 'https://dateeverything.wiki.gg/images/thumb/e/eb/Nightmare_Pose_A.png/800px-Nightmare_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/thumb/f/f3/Nightmare_Pose_B_Flirt.png/800px-Nightmare_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/thumb/1/1a/Nightmare_Pose_C_Joy.png/800px-Nightmare_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/thumb/f/f3/Nightmare_Pose_D_Angry.png/800px-Nightmare_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/a/a2/Nightmare_Realized.png/800px-Nightmare_Realized.png'
    },
    100: { // Reggie
        default: 'https://dateeverything.wiki.gg/images/2/2a/Reggie_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/5/53/Reggie_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/e/e8/Reggie_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/e/ed/Reggie_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/thumb/1/14/Reggie_Realized.png/800px-Reggie_Realized.png'
    },
    102: { // Lucinda
        default: 'https://dateeverything.wiki.gg/images/5/50/Lucinda_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/8/85/Lucinda_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/7/77/Lucinda_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/b/b7/Lucinda_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/f/ff/Lucinda_Realized.png'
    },
    101: { // Michael Transaction
        default: 'https://dateeverything.wiki.gg/images/c/ce/Mikey_Pose_A.png',
        love: 'https://dateeverything.wiki.gg/images/f/f9/Mikey_Pose_B_Flirt.png',
        friend: 'https://dateeverything.wiki.gg/images/e/ec/Mikey_Pose_C_Joy.png',
        hate: 'https://dateeverything.wiki.gg/images/2/2f/Mikey_Pose_D_Angry.png',
        realized: 'https://dateeverything.wiki.gg/images/c/cd/Mikey_Realized.png'
    }
};