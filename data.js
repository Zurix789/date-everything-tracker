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
        realizationDependencies: [31], // Beverly
        bidirectionalDependencies: []
    },
    { 
        id: 3, name: 'Wallace', object: 'Wall', stat: 'poise', 
        requirements: { smarts: 20, poise: 100, empathy: 80, charm: 50, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [5, 31, 58, 61, 65, 70], // Celia, Beverly, Lyric, Maggie, Arma, Hero Hime
        bidirectionalDependencies: []
    },
    { 
        id: 4, name: 'Florence', object: 'Floor', stat: 'charm', 
        requirements: { smarts: 20, poise: 50, empathy: 90, charm: 50, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [5, 11, 12, 54, 58, 63, 65, 92], // Abel, Chairemi, Jerry, Lyric, Arma, Holly
        bidirectionalDependencies: []
    },
    { 
        id: 5, name: 'Celia', object: 'Ceiling', stat: 'smarts', 
        requirements: { smarts: 20, poise: 50, empathy: 90, charm: 50, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [4, 11, 12, 54, 58, 63, 65, 92], // Abel, Chairemi, Jerry, Lyric, Arma, Holly
        bidirectionalDependencies: []
    },
    { 
        id: 6, name: 'Stella', object: 'Stairs', stat: 'charm', 
        requirements: { smarts: 20, poise: 50, empathy: 90, charm: 50, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [4, 5, 31], // Celia, Beverly
        bidirectionalDependencies: []
    },
    { 
        id: 7, name: 'Dorian', object: 'Door', stat: 'poise', 
        requirements: { smarts: 75, poise: 100, empathy: 75, charm: 0, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26, 34, 61, 65, 79, 86], // Gaia, Sinclaire, Maggie, Arma, Bobby, Keith
        bidirectionalDependencies: [],
        hasLocations: true 
    },
    { 
        id: 8, name: 'Wyndolyn', object: 'Window', stat: 'empathy', 
        requirements: { smarts: 45, poise: 55, empathy: 85, charm: 35, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [9], // Curt & Rod
        bidirectionalDependencies: [],
        hasLocations: true 
    },
    { 
        id: 9, name: 'Curt & Rod', object: 'Curtain', stat: 'sass', 
        requirements: { smarts: 40, poise: 85, empathy: 0, charm: 40, sass: 85 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: [],
        hasLocations: true 
    },
    { 
        id: 10, name: 'Shelley', object: 'Shelf', stat: 'charm', 
        requirements: { smarts: 50, poise: 50, empathy: 50, charm: 50, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [29, 55, 81], // Mateo, Penelope, Dunk
        bidirectionalDependencies: []
    },
    { 
        id: 11, name: 'Abel', object: 'Table', stat: 'poise', 
        requirements: { smarts: 65, poise: 0, empathy: 75, charm: 65, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [31, 53, 86], // Dasha, Keith
        bidirectionalDependencies: []
    },
    { 
        id: 12, name: 'Chairemi', object: 'Chair', stat: 'charm', 
        requirements: { smarts: 70, poise: 70, empathy: 0, charm: 70, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [25], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 13, name: 'Lux', object: 'Lamp', stat: 'sass', 
        requirements: { smarts: 0, poise: 50, empathy: 0, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [25, 31], // Keyes, Beverly
        bidirectionalDependencies: []
    },
    { 
        id: 14, name: 'Hector', object: 'HVAC', stat: 'empathy', 
        requirements: { smarts: 25, poise: 35, empathy: 85, charm: 75, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: { attic: true },
        realizationDependencies: [25], // Keyes
        bidirectionalDependencies: []
    },
    { 
        id: 15, name: 'Prissy', object: 'Plant', stat: 'charm', 
        requirements: { smarts: 65, poise: 80, empathy: 30, charm: 20, sass: 55 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
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
        realizationDependencies: [91], // Memoria
        bidirectionalDependencies: []
    },
    { 
        id: 18, name: 'River', object: 'Water', stat: 'empathy', 
        requirements: { smarts: 45, poise: 45, empathy: 45, charm: 65, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [11, 62, 65], // Abel, Winnifred, Arma
        bidirectionalDependencies: []
    },
    { 
        id: 19, name: 'Eddie & Volt', object: 'Electricity', stat: 'empathy', 
        requirements: { smarts: 65, poise: 0, empathy: 85, charm: 15, sass: 85 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [65], // Arma
        bidirectionalDependencies: []
    },
    { 
        id: 20, name: 'Koa', object: 'Couch', stat: 'empathy', 
        requirements: { smarts: 10, poise: 80, empathy: 100, charm: 40, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32], // Mitchell
        bidirectionalDependencies: []
    },
    { 
        id: 21, name: 'Dolly', object: 'Dust Bunny', stat: 'smarts', 
        requirements: { smarts: 100, poise: 0, empathy: 70, charm: 0, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [29], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 22, name: 'Dante', object: 'Fire Place', stat: 'sass', 
        requirements: { smarts: 0, poise: 50, empathy: 0, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [18, 92], // River, Holly
        bidirectionalDependencies: []
    },
    { 
        id: 23, name: 'Telly', object: 'TV', stat: 'sass', 
        requirements: { smarts: 40, poise: 45, empathy: 50, charm: 15, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [25, 90], // Keyes
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
        realizationDependencies: [26], // Gaia
        bidirectionalDependencies: []
    },
    { 
        id: 26, name: 'Gaia', object: 'Globe', stat: 'smarts', 
        requirements: { smarts: 85, poise: 20, empathy: 65, charm: 20, sass: 60 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [25, 85], // Beau
        bidirectionalDependencies: []
    },
    { 
        id: 27, name: 'Captain Jaques Pierrot', object: 'Ship-in-a-Bottle', stat: 'poise', 
        requirements: { smarts: 0, poise: 90, empathy: 0, charm: 90, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26], // Gaia
        bidirectionalDependencies: []
    },
    { 
        id: 28, name: 'Parker', object: 'Board Games', stat: 'charm', 
        requirements: { smarts: 10, poise: 10, empathy: 50, charm: 80, sass: 100 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [96], // Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 29, name: 'Mateo', object: 'Blanket', stat: 'empathy', 
        requirements: { smarts: 5, poise: 45, empathy: 100, charm: 100, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [5, 26], // Celia, Gaia
        bidirectionalDependencies: []
    },
    { 
        id: 30, name: 'Tina', object: 'Musical Triangle', stat: 'charm', 
        requirements: { smarts: 80, poise: 50, empathy: 60, charm: 40, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [11, 63, 84], // Abel, Rainey, Tony
        bidirectionalDependencies: []
    },
    { 
        id: 31, name: 'Beverly', object: 'Beverage', stat: 'charm', 
        requirements: { smarts: 60, poise: 60, empathy: 0, charm: 60, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [5, 11, 35, 63], // Celia, Abel, Freddy, Rainey
        bidirectionalDependencies: []
    },
    { 
        id: 32, name: 'Mitchell Linn', object: 'Food', stat: 'smarts', 
        requirements: { smarts: 75, poise: 25, empathy: 30, charm: 70, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [31, 35], // Beverly, Freddy
        bidirectionalDependencies: []
    },
    { 
        id: 33, name: 'Cabrizzio', object: 'Cabinet', stat: 'empathy', 
        requirements: { smarts: 60, poise: 50, empathy: 40, charm: 100, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [9, 26, 31, 36, 40], // Curt & Rod, Gaia, Beverly, Stefan, Daisuke
        bidirectionalDependencies: []
    },
    { 
        id: 34, name: 'Sinclaire', object: 'Sink', stat: 'smarts', 
        requirements: { smarts: 1, poise: 1, empathy: 1, charm: 1, sass: 5 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [55, 65], // Penelope, Arma
        bidirectionalDependencies: []
    },
    { 
        id: 35, name: 'Freddy', object: 'Refrigerator', stat: 'charm', 
        requirements: { smarts: 45, poise: 65, empathy: 20, charm: 40, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32, 36, 88], // Mitchell, Stefan, Vaughn
        bidirectionalDependencies: []
    },
    { 
        id: 36, name: 'Stefan', object: 'Stove', stat: 'poise', 
        requirements: { smarts: 90, poise: 50, empathy: 80, charm: 15, sass: 15 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32, 35, 38, 41], // Freddy, Miranda, Friar Errol
        bidirectionalDependencies: []
    },
    { 
        id: 37, name: 'Luke Nuke\'m', object: 'Microwave', stat: 'poise', 
        requirements: { smarts: 80, poise: 80, empathy: 80, charm: 5, sass: 5 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32, 35, 36, 41], // Freddy, Stefan, Friar Errol
        bidirectionalDependencies: []
    },
    { 
        id: 38, name: 'Miranda', object: 'Toaster', stat: 'charm', 
        requirements: { smarts: 0, poise: 0, empathy: 70, charm: 90, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26, 32], // Gaia
        bidirectionalDependencies: []
    },
    { 
        id: 39, name: 'Dishy', object: 'Dishwasher', stat: 'sass', 
        requirements: { smarts: 100, poise: 0, empathy: 0, charm: 50, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 40, name: 'Daisuke', object: 'Dishware', stat: 'poise', 
        requirements: { smarts: 10, poise: 100, empathy: 90, charm: 25, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32], // Mitchell
        bidirectionalDependencies: []
    },
    { 
        id: 41, name: 'Friar Errol', object: 'Air Fryer', stat: 'smarts', 
        requirements: { smarts: 70, poise: 70, empathy: 70, charm: 40, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32, 36], // Stefan
        bidirectionalDependencies: []
    },
    { 
        id: 42, name: 'Kopi', object: 'Coffeepot', stat: 'charm', 
        requirements: { smarts: 80, poise: 15, empathy: 85, charm: 60, sass: 10 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [11, 26, 32, 92], // Abel, Gaia, Holly
        bidirectionalDependencies: []
    },
    { 
        id: 43, name: 'Cam', object: 'Trash Can', stat: 'poise', 
        requirements: { smarts: 70, poise: 80, empathy: 80, charm: 10, sass: 10 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [32, 34, 54, 61, 85, 91], // Sinclaire, Jerry, Maggie, Beau, Memoria
        bidirectionalDependencies: []
    },
    { 
        id: 44, name: 'I, Ronaldini', object: 'Fold-out Ironing Board', stat: 'sass', 
        requirements: { smarts: 75, poise: 20, empathy: 55, charm: 50, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26, 32, 79], // Bobby
        bidirectionalDependencies: []
    },
    { 
        id: 45, name: 'Amir', object: 'Mirror', stat: 'sass', 
        requirements: { smarts: 20, poise: 40, empathy: 60, charm: 80, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26, 48], // Gaia
        bidirectionalDependencies: []
    },
    { 
        id: 46, name: 'Jean Loo', object: 'Toilet', stat: 'sass', 
        requirements: { smarts: 50, poise: 100, empathy: 0, charm: 0, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26, 48, 49], // Gaia, Bathsheba, Rebel
        bidirectionalDependencies: []
    },
    { 
        id: 47, name: 'Johnny Splash', object: 'Shower', stat: 'sass', 
        requirements: { smarts: 0, poise: 75, empathy: 100, charm: 50, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [19, 45, 49], // Eddie & Volt, Amir, Rebel
        bidirectionalDependencies: []
    },
    { 
        id: 48, name: 'Bathsheba', object: 'Bathtub', stat: 'charm', 
        requirements: { smarts: 0, poise: 40, empathy: 60, charm: 50, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [18, 49, 50, 62], // River, Rebel, Winnifred
        bidirectionalDependencies: []
    },
    { 
        id: 49, name: 'Rebel', object: 'Rubber Ducky', stat: 'sass', 
        requirements: { smarts: 0, poise: 70, empathy: 40, charm: 40, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [48, 92], // Bathsheba, Holly
        bidirectionalDependencies: []
    },
    { 
        id: 50, name: 'Barry', object: 'Beauty Supplies', stat: 'empathy', 
        requirements: { smarts: 0, poise: 50, empathy: 90, charm: 20, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26, 48, 65], // Gaia, Bathsheba, Arma
        bidirectionalDependencies: []
    },
    { 
        id: 51, name: 'Tyrell', object: 'Towel', stat: 'empathy', 
        requirements: { smarts: 50, poise: 25, empathy: 80, charm: 60, sass: 35 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [11, 65], // Abel, Arma
        bidirectionalDependencies: []
    },
    { 
        id: 52, name: 'Farya', object: 'First Aid Kit', stat: 'smarts', 
        requirements: { smarts: 100, poise: 0, empathy: 75, charm: 75, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [65], // Arma
        bidirectionalDependencies: []
    },
    { 
        id: 53, name: 'Dasha', object: 'Desk', stat: 'poise', 
        requirements: { smarts: 35, poise: 100, empathy: 25, charm: 35, sass: 55 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [10, 26, 31, 60], // Shelley, Gaia, Beverly
        bidirectionalDependencies: []
    },
    { 
        id: 54, name: 'Jerry', object: 'Junk Drawer', stat: 'empathy', 
        requirements: { smarts: 10, poise: 55, empathy: 100, charm: 65, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [6, 92], // Stella, Holly
        bidirectionalDependencies: []
    },
    { 
        id: 55, name: 'Penelope', object: 'Office Supplies', stat: 'empathy', 
        requirements: { smarts: 80, poise: 20, empathy: 70, charm: 40, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [6, 54], // Stella, Jerry
        bidirectionalDependencies: []
    },
    { 
        id: 56, name: 'Mac', object: 'Computer', stat: 'smarts', 
        requirements: { smarts: 90, poise: 20, empathy: 70, charm: 30, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [49, 86, 88], // Rebel, Keith, Vaughn
        bidirectionalDependencies: []
    },
    { 
        id: 57, name: 'Willi', object: 'Work', stat: 'sass', 
        requirements: { smarts: 70, poise: 40, empathy: 25, charm: 60, sass: 55 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [79, 96], // Bobby, Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 58, name: 'Lyric', object: 'Literature', stat: 'smarts', 
        requirements: { smarts: 100, poise: 40, empathy: 0, charm: 40, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [29], // Mateo
        bidirectionalDependencies: []
    },
    { 
        id: 59, name: 'Rongomaiwhenua', object: 'Geode', stat: 'smarts', 
        requirements: { smarts: 80, poise: 70, empathy: 60, charm: 40, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26], // Gaia
        bidirectionalDependencies: []
    },
    { 
        id: 60, name: 'Chance', object: 'D20', stat: 'charm', 
        requirements: { smarts: 80, poise: 0, empathy: 60, charm: 80, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [28, 39, 55], // Parker, Dishy, Penelope
        bidirectionalDependencies: []
    },
    { 
        id: 61, name: 'Maggie', object: 'Magnifying Glass', stat: 'smarts', 
        requirements: { smarts: 100, poise: 45, empathy: 0, charm: 75, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [65], // Arma
        bidirectionalDependencies: []
    },
    { 
        id: 62, name: 'Winnifred', object: 'Water Heater', stat: 'empathy', 
        requirements: { smarts: 80, poise: 20, empathy: 55, charm: 60, sass: 35 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [6], // Stella
        bidirectionalDependencies: []
    },
    { 
        id: 63, name: 'Rainey', object: 'Record Player', stat: 'empathy', 
        requirements: { smarts: 80, poise: 20, empathy: 70, charm: 30, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [5, 25, 41, 64, 66, 84], // Keyes, Friar Errol, Betty, Tony
        bidirectionalDependencies: []
    },
    { 
        id: 64, name: 'Scandalabra', object: 'Wick', stat: 'sass', 
        requirements: { smarts: 25, poise: 15, empathy: 20, charm: 90, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [25, 31, 57, 61, 63, 66, 83], // Beverly, Willi, Maggie, Rainey, Betty, Stepford
        bidirectionalDependencies: []
    },
    { 
        id: 65, name: 'Arma', object: 'Smoke Alarm', stat: 'empathy', 
        requirements: { smarts: 80, poise: 80, empathy: 65, charm: 0, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 66, name: 'Betty', object: 'Bed', stat: 'empathy', 
        requirements: { smarts: 0, poise: 0, empathy: 100, charm: 75, sass: 75 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [29, 69, 79, 92], // Mateo, Ben-Hwa, Bobby, Holly
        bidirectionalDependencies: []
    },
    { 
        id: 67, name: 'Diana', object: 'Diary', stat: 'poise', 
        requirements: { smarts: 65, poise: 65, empathy: 65, charm: 55, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
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
        realizationDependencies: [11, 66], // Abel, Betty
        bidirectionalDependencies: []
    },
    { 
        id: 70, name: 'Hero Hime', object: 'Anime Figurine', stat: 'poise', 
        requirements: { smarts: 35, poise: 65, empathy: 35, charm: 65, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 71, name: 'Teddy', object: 'Teddy Bear', stat: 'empathy', 
        requirements: { smarts: 0, poise: 20, empathy: 90, charm: 90, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 72, name: 'Hank(s)', object: 'Hangers', stat: 'poise', 
        requirements: { smarts: 0, poise: 50, empathy: 0, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [57, 67], // Willi, Diana
        bidirectionalDependencies: []
    },
    { 
        id: 73, name: 'Washford', object: 'Washer', stat: 'smarts', 
        requirements: { smarts: 15, poise: 100, empathy: 100, charm: 10, sass: 25 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [54, 51, 74], // Jerry, Tyrell, Drysdale
        bidirectionalDependencies: []
    },
    { 
        id: 74, name: 'Drysdale', object: 'Dryer', stat: 'charm', 
        requirements: { smarts: 85, poise: 0, empathy: 0, charm: 90, sass: 75 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [73, 83], // Washford, Stepford
        bidirectionalDependencies: []
    },
    { 
        id: 75, name: 'Harper', object: 'Hamper', stat: 'poise', 
        requirements: { smarts: 50, poise: 70, empathy: 25, charm: 55, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [79], // Bobby
        bidirectionalDependencies: []
    },
    { 
        id: 76, name: 'Dirk', object: 'Dirty Laundry', stat: 'sass', 
        requirements: { smarts: 80, poise: 0, empathy: 0, charm: 80, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 77, name: 'Tydus', object: 'Detergent', stat: 'poise', 
        requirements: { smarts: 90, poise: 95, empathy: 20, charm: 40, sass: 5 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 78, name: 'Henry Hoove', object: 'Vacuum Cleaner', stat: 'empathy', 
        requirements: { smarts: 70, poise: 20, empathy: 70, charm: 70, sass: 20 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [25, 61], // Keyes, Maggie
        bidirectionalDependencies: []
    },
    { 
        id: 79, name: 'Bobby', object: 'Bobby Pin', stat: 'sass', 
        requirements: { smarts: 40, poise: 40, empathy: 40, charm: 65, sass: 65 }, 
        locationRequirement: 'none',
        storyRequirements: { attic: true},
        realizationDependencies: [57, 66, 75, 89, 90], // Willi, Betty, Harper, Sophia, Monique
        bidirectionalDependencies: []
    },
    { 
        id: 80, name: 'Kristof', object: 'Crosstrainer', stat: 'poise', 
        requirements: { smarts: 70, poise: 100, empathy: 80, charm: 0, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [55, 81], // Penelope, Dunk
        bidirectionalDependencies: []
    },
    { 
        id: 81, name: 'Dunk', object: 'Sporting Goods', stat: 'charm', 
        requirements: { smarts: 30, poise: 30, empathy: 70, charm: 80, sass: 40 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 82, name: 'Fantina', object: 'Fan', stat: 'poise', 
        requirements: { smarts: 25, poise: 25, empathy: 50, charm: 80, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [9, 65], // Curt & Rod, Arma
        bidirectionalDependencies: []
    },
    { 
        id: 83, name: 'Stepford', object: 'Trophy', stat: 'charm', 
        requirements: { smarts: 65, poise: 70, empathy: 10, charm: 90, sass: 15 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [29, 61, 81], // Mateo, Maggie, Dunk
        bidirectionalDependencies: []
    },
    { 
        id: 84, name: 'Tony', object: 'Toolbox', stat: 'charm', 
        requirements: { smarts: 20, poise: 50, empathy: 40, charm: 60, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [11], // Abel
        bidirectionalDependencies: []
    },
    { 
        id: 85, name: 'Beau', object: 'Box', stat: 'poise', 
        requirements: { smarts: 60, poise: 90, empathy: 0, charm: 70, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 86, name: 'Keith', object: 'Skeleton Key', stat: 'empathy', 
        requirements: { smarts: 50, poise: 50, empathy: 50, charm: 50, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [26], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 87, name: 'Bodhi', object: 'Time Capsule', stat: 'sass', 
        requirements: { smarts: 25, poise: 15, empathy: 10, charm: 100, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [31], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 88, name: 'Vaughn', object: 'Rat Trap', stat: 'sass', 
        requirements: { smarts: 50, poise: 25, empathy: 80, charm: 60, sass: 35 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 89, name: 'Sophia', object: 'Safe', stat: 'sass', 
        requirements: { smarts: 30, poise: 85, empathy: 20, charm: 15, sass: 100 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [79, 90, 96], // Bobby, Monique, Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 90, name: 'Monique', object: 'Money', stat: 'smarts', 
        requirements: { smarts: 80, poise: 80, empathy: 0, charm: 80, sass: 10 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [79, 96], // Bobby, Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 91, name: 'Memoria', object: 'Memories', stat: 'poise', 
        requirements: { smarts: 0, poise: 80, empathy: 80, charm: 30, sass: 60 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [18, 96], // River, Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 92, name: 'Holly', object: 'Holidays', stat: 'charm', 
        requirements: { smarts: 60, poise: 60, empathy: 60, charm: 40, sass: 30 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [96], // Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 93, name: 'Airyn', object: 'Air', stat: 'poise', 
        requirements: { smarts: 65, poise: 100, empathy: 85, charm: 0, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 94, name: 'Textbox-Chan', object: 'U.I.', stat: 'smarts', 
        requirements: { smarts: 95, poise: 5, empathy: 100, charm: 0, sass: 50 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [96], // Zoey
        bidirectionalDependencies: [],
        specialRequirement: 'met80Characters'
    },
    { 
        id: 95, name: 'The Sassy Chap', object: 'The Developers', stat: 'sass', 
        requirements: { smarts: 45, poise: 30, empathy: 30, charm: 45, sass: 100 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [96], // Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 96, name: 'Zoey Bennett', object: 'Ghost', stat: 'empathy', 
        requirements: { smarts: 5, poise: 70, empathy: 70, charm: 75, sass: 30 }, 
        locationRequirement: 'attic',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 97, name: 'xxX Shadowl0rd420 Xxx', object: 'Darkness', stat: 'smarts', 
        requirements: { smarts: 70, poise: 60, empathy: 40, charm: 10, sass: 70 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [96], // Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 98, name: 'Doug', object: 'Overwhelming Sense of Existential Dread', stat: 'smarts', 
        requirements: { smarts: 20, poise: 100, empathy: 30, charm: 20, sass: 80 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [35, 96], // Freddy, Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 99, name: 'Nightmare', object: 'Nightmare', stat: 'poise', 
        requirements: { smarts: 45, poise: 100, empathy: 35, charm: 70, sass: 0 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [66, 96], // Betty, Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 100, name: 'Reggie', object: 'Rejection', stat: 'sass', 
        requirements: { smarts: 80, poise: 80, empathy: 0, charm: 0, sass: 90 }, 
        locationRequirement: 'none',
        storyRequirements: {},
        realizationDependencies: [96], // Zoey
        bidirectionalDependencies: []
    },
    { 
        id: 101, name: 'Michael Transaction', object: 'Microtransactions', stat: 'choosable', 
        requirements: { smarts: 100, poise: 100, empathy: 100, charm: 100, sass: 100 }, 
        locationRequirement: 'dlc',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
        bidirectionalDependencies: []
    },
    { 
        id: 102, name: 'Lucinda', object: 'Lavish Edition', stat: 'choosable', 
        requirements: { smarts: 1, poise: 1, empathy: 1, charm: 1, sass: 1 }, 
        locationRequirement: 'dlc',
        storyRequirements: {},
        realizationDependencies: [], // Empty per your list
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
    88: "Animal Death references",
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
        default: './char_images/skylar/skylar_n.png',
        love: './char_images/skylar/skylar_lflirt.png',
        friend: './char_images/skylar/skylar_fjoy.png',
        hate: './char_images/skylar/skylar_hangry.png',
        realized: './char_images/skylar/skylar_r.png',
        realizedLove: './char_images/skylar/skylar_rflirt.png',
        realizedFriend: './char_images/skylar/skylar_rjoy.png'
    },
    2: { // Phoenicia
        default: './char_images/phoenicia/phoenicia_n.png',
        love: './char_images/phoenicia/phoenicia_lflirt.png',
        friend: './char_images/phoenicia/phoenicia_fjoy.png',
        hate: './char_images/phoenicia/phoenicia_hangry.png',
        realized: './char_images/phoenicia/phoenicia_r.png',
        realizedLove: './char_images/phoenicia/phoenicia_rflirt.png',
        realizedFriend: './char_images/phoenicia/phoenicia_rjoy.png'
    },
    3: { // Wallace
        default: './char_images/wallace/wallace_n.png',
        love: './char_images/wallace/wallace_lflirt.png',
        friend: './char_images/wallace/wallace_fjoy.png',
        hate: './char_images/wallace/wallace_hangry.png',
        realized: './char_images/wallace/wallace_r.png',
        realizedLove: './char_images/wallace/wallace_rflirt.png',
        realizedFriend: './char_images/wallace/wallace_rjoy.png'
    },
    4: { // Florence
        default: './char_images/florence/florence_n.png',
        love: './char_images/florence/florence_lflirt.png',
        friend: './char_images/florence/florence_fjoy.png',
        hate: './char_images/florence/florence_hangry.png',
        realized: './char_images/florence/florence_r.png',
        realizedLove: './char_images/florence/florence_rflirt.png',
        realizedFriend: './char_images/florence/florence_rjoy.png'
    },
    5: { // Celia
        default: './char_images/celia/celia_n.png',
        love: './char_images/celia/celia_lflirt.png',
        friend: './char_images/celia/celia_fjoy.png',
        hate: './char_images/celia/celia_hangry.png',
        realized: './char_images/celia/celia_r.png',
        realizedLove: './char_images/celia/celia_rflirt.png',
        realizedFriend: './char_images/celia/celia_rjoy.png'
    },
    6: { // Stella
        default: './char_images/stella/stella_n.png',
        love: './char_images/stella/stella_lflirt.png',
        friend: './char_images/stella/stella_fjoy.png',
        hate: './char_images/stella/stella_hangry.png',
        realized: './char_images/stella/stella_r.png',
        realizedLove: './char_images/stella/stella_rflirt.png',
        realizedFriend: './char_images/stella/stella_rjoy.png'
    },
    7: { // Dorian
        default: './char_images/dorian/dorian_n.png',
        love: './char_images/dorian/dorian_lflirt.png',
        friend: './char_images/dorian/dorian_fjoy.png',
        hate: './char_images/dorian/dorian_hangry.png',
        realized: './char_images/dorian/dorian_r.png',
        realizedLove: './char_images/dorian/dorian_rflirt.png',
        realizedFriend: './char_images/dorian/dorian_rjoy.png'
    },
    8: { // Wyndolyn
        default: './char_images/wyndolyn/wyndolyn_n.png',
        love: './char_images/wyndolyn/wyndolyn_lflirt.png',
        friend: './char_images/wyndolyn/wyndolyn_fjoy.png',
        hate: './char_images/wyndolyn/wyndolyn_hangry.png',
        realized: './char_images/wyndolyn/wyndolyn_r.png',
        realizedLove: './char_images/wyndolyn/wyndolyn_rflirt.png',
        realizedFriend: './char_images/wyndolyn/wyndolyn_rjoy.png'
    },
    9: { 
        // Together states
        default: './char_images/curtrod/curtrod_n.png',
        love: './char_images/curtrod/curtrod_l.png',
        friend: './char_images/curtrod/curtrod_f.png',
        hate: './char_images/curtrod/curtrod_h.png',
        realized: './char_images/curtrod/curtrod_r.png',
        realizedLove: './char_images/curtrod/curtrod_rflirt.png',
        realizedFriend: './char_images/curtrod/curtrod_r.png',
    },
    10: { // Shelley
        default: './char_images/shelley/shelley_n.png',
        love: './char_images/shelley/shelley_lflirt.png',
        friend: './char_images/shelley/shelley_fjoy.png',
        hate: './char_images/shelley/shelley_hangry.png',
        realized: './char_images/shelley/shelley_r.png',
        realizedLove: './char_images/shelley/shelley_rflirt.png',
        realizedFriend: './char_images/shelley/shelley_rjoy.png'
    },
    11: { // Abel
        default: './char_images/abel/abel_n.png',
        love: './char_images/abel/abel_lflirt.png',
        friend: './char_images/abel/abel_fjoy.png',
        hate: './char_images/abel/abel_hangry.png',
        realized: './char_images/abel/abel_r.png',
        realizedLove: './char_images/abel/abel_rflirt.png',
        realizedFriend: './char_images/abel/abel_rjoy.png'
    },
    12: { // Chairemi
        default: './char_images/chairemi/chairemi_n.png',
        love: './char_images/chairemi/chairemi_l.png',
        friend: './char_images/chairemi/chairemi_f.png',
        hate: './char_images/chairemi/chairemi_h.png',
        realized: './char_images/chairemi/chairemi_r.png',
        realizedLove: './char_images/chairemi/chairemi_rflirt.png',
        realizedFriend: './char_images/chairemi/chairemi_rjoy.png'
    },
    13: { // Lux
        default: './char_images/lux/lux_n.png',
        love: './char_images/lux/lux_lflirt.png',
        friend: './char_images/lux/lux_fjoy.png',
        hate: './char_images/lux/lux_hangry.png',
        realized: './char_images/lux/lux_r.png',
        realizedLove: './char_images/lux/lux_rflirt.png',
        realizedFriend: './char_images/lux/lux_rjoy.png'
    },
    14: { // Hector
        default: './char_images/hector/hector_n.png',
        love: './char_images/hector/hector_lflirt.png',
        friend: './char_images/hector/hector_fjoy.png',
        hate: './char_images/hector/hector_hangry.png',
        realized: './char_images/hector/hector_r.png',
        realizedLove: './char_images/hector/hector_rflirt.png',
        realizedFriend: './char_images/hector/hector_rjoy.png'
    },
    15: { // Prissy
        default: './char_images/prissy/prissy_n.png',
        love: './char_images/prissy/prissy_lflirt.png',
        friend: './char_images/prissy/prissy_fjoy.png',
        hate: './char_images/prissy/prissy_hangry.png',
        realized: './char_images/prissy/prissy_r.png',
        realizedLove: './char_images/prissy/prissy_rflirt.png',
        realizedFriend: './char_images/prissy/prissy_rjoy.png'
    },
    16: { // Timothy
        default: './char_images/timothy/tim_n.png',
        love: './char_images/timothy/tim_lflirt.png',
        friend: './char_images/timothy/tim_fjoy.png',
        hate: './char_images/timothy/tim_hangry.png',
        realized: './char_images/timothy/tim_r.png',
        realizedLove: './char_images/timothy/tim_rflirt.png',
        realizedFriend: './char_images/timothy/tim_rjoy.png'
    },
    17: { // Artt
        default: './char_images/artt/artt_n.png',
        love: './char_images/artt/artt_lflirt.png',
        friend: './char_images/artt/artt_fjoy.png',
        hate: './char_images/artt/artt_hangry.png',
        realized: './char_images/artt/artt_r.png',
        realizedLove: './char_images/artt/artt_rflirt.png',
        realizedFriend: './char_images/artt/artt_rjoy.png'
    },
    18: { // River
        default: './char_images/river/river_n.png',
        love: './char_images/river/river_lflirt.png',
        friend: './char_images/river/river_fjoy.png',
        hate: './char_images/river/river_hangry.png',
        realized: './char_images/river/river_r.png',
        realizedLove: './char_images/river/river_rflirt.png',
        realizedFriend: './char_images/river/river_rjoy.png'
    },
    19: { 
        // Together states
        default: './char_images/eddievolt/eddievolt_n.png',
        love: './char_images/eddievolt/eddievolt_lflirt.png',
        friend: './char_images/eddievolt/eddievolt_fjoy.png',
        hate: './char_images/eddievolt/eddievolt_hangry.png',
        realized: './char_images/eddievolt/eddievolt_r.png',
        realizedLove: './char_images/eddievolt/eddievolt_rflirt.png',
        realizedFriend: './char_images/eddievolt/eddievolt_rjoy.png',
    },
    20: { // Koa
        default: './char_images/koa/koa_n.png',
        love: './char_images/koa/koa_lflirt.png',
        friend: './char_images/koa/koa_fjoy.png',
        hate: './char_images/koa/koa_hangry.png',
        realized: './char_images/koa/koa_r.png',
        realizedLove: './char_images/koa/koa_rflirt.png',
        realizedFriend: './char_images/koa/koa_rjoy.png'
    },
    21: { // Dolly
        default: './char_images/dolly/dolly_n.png',
        love: './char_images/dolly/dolly_lflirt.png',
        friend: './char_images/dolly/dolly_fjoy.png',
        hate: './char_images/dolly/dolly_hangry.png',
        realized: './char_images/dolly/dolly_r.png',
        realizedLove: './char_images/dolly/dolly_rflirt.png',
        realizedFriend: './char_images/dolly/dolly_rjoy.png'
    },
    22: { // Dante
        default: './char_images/dante/dante_n.png',
        love: './char_images/dante/dante_lflirt.png',
        friend: './char_images/dante/dante_fjoy.png',
        hate: './char_images/dante/dante_hangry.png',
        realized: './char_images/dante/dante_r.png',
        realizedLove: './char_images/dante/dante_rflirt.png',
        realizedFriend: './char_images/dante/dante_rjoy.png'
    },
    23: { // Telly
        default: './char_images/telly/telly_n.png',
        love: './char_images/telly/telly_lflirt.png',
        friend: './char_images/telly/telly_fjoy.png',
        hate: './char_images/telly/telly_hangry.png',
        realized: './char_images/telly/telly_r.png',
        realizedLove: './char_images/telly/telly_rflirt.png',
        realizedFriend: './char_images/telly/telly_rjoy.png'
    },
    24: { // Luna
        default: './char_images/luna/connie_n.png',
        love: './char_images/luna/connie_lflirt.png',
        friend: './char_images/luna/connie_fjoy.png',
        hate: './char_images/luna/connie_hangry.png',
        realized: './char_images/luna/connie_r.png',
        realizedLove: './char_images/luna/connie_rflirt.png',
        realizedFriend: './char_images/luna/connie_rjoy.png'
    },
    25: { // Keyes
        default: './char_images/keyes/keyes_n.png',
        love: './char_images/keyes/keyes_lflirt.png',
        friend: './char_images/keyes/keyes_fjoy.png',
        hate: './char_images/keyes/keyes_hangry.png',
        realized: './char_images/keyes/keyes_r.png',
        realizedLove: './char_images/keyes/keyes_rflirt.png',
        realizedFriend: './char_images/keyes/keyes_rjoy.png'
    },
    26: { // Gaia
        default: './char_images/gaia/gaia_n.png',
        love: './char_images/gaia/gaia_lflirt.png',
        friend: './char_images/gaia/gaia_fjoy.png',
        hate: './char_images/gaia/gaia_hangry.png',
        realized: './char_images/gaia/gaia_r.png',
        realizedLove: './char_images/gaia/gaia_rflirt.png',
        realizedFriend: './char_images/gaia/gaia_rjoy.png'
    },
    27: { // Captain Jaques Pierrot
        default: './char_images/captainjacques/jacques_n.png',
        love: './char_images/captainjacques/jacques_lflirt.png',
        friend: './char_images/captainjacques/jacques_fjoy.png',
        hate: './char_images/captainjacques/jacques_hangry.png',
        realized: './char_images/captainjacques/jacques_r.png',
        realizedLove: './char_images/captainjacques/jacques_rflirt.png',
        realizedFriend: './char_images/captainjacques/jacques_rjoy.png'
    },
    28: { // Parker
        default: './char_images/parker/parker_n.png',
        love: './char_images/parker/parker_lflirt.png',
        friend: './char_images/parker/parker_fjoy.png',
        hate: './char_images/parker/parker_hangry.png',
        realized: './char_images/parker/parker_r.png',
        realizedLove: './char_images/parker/parker_rflirt.png',
        realizedFriend: './char_images/parker/parker_rjoy.png'
    },
    29: { // Mateo
        default: './char_images/mateo/mateo_n.png',
        love: './char_images/mateo/mateo_lflirt.png',
        friend: './char_images/mateo/mateo_fjoy.png',
        hate: './char_images/mateo/mateo_hangry.png',
        realized: './char_images/mateo/mateo_r.png',
        realizedLove: './char_images/mateo/mateo_rflirt.png',
        realizedFriend: './char_images/mateo/mateo_rjoy.png'
    },
    30: { // Tina
        default: './char_images/tina/tina_n.png',
        love: './char_images/tina/tina_lflirt.png',
        friend: './char_images/tina/tina_fjoy.png',
        hate: './char_images/tina/tina_hangry.png',
        realized: './char_images/tina/tina_r.png',
        realizedLove: './char_images/tina/tina_rflirt.png',
        realizedFriend: './char_images/tina/tina_rjoy.png'
    },
    31: { // Beverly
        default: './char_images/beverly/beverly_n.png',
        love: './char_images/beverly/beverly_lflirt.png',
        friend: './char_images/beverly/beverly_fjoy.png',
        hate: './char_images/beverly/beverly_hangry.png',
        realized: './char_images/beverly/beverly_r.png',
        realizedLove: './char_images/beverly/beverly_rflirt.png',
        realizedFriend: './char_images/beverly/beverly_rjoy.png'
    },
    32: { // Mitchell Linn
        default: './char_images/mitchell/mitchell_n.png',
        love: './char_images/mitchell/mitchell_lflirt.png',
        friend: './char_images/mitchell/mitchell_fjoy.png',
        hate: './char_images/mitchell/mitchell_hangry.png',
        realized: './char_images/mitchell/mitchell_r.png',
        realizedLove: './char_images/mitchell/mitchell_rflirt.png',
        realizedFriend: './char_images/mitchell/mitchell_rjoy.png'
    },
    33: { // Cabrizzio
        default: './char_images/cabrizzio/cabrizzio_n.png',
        love: './char_images/cabrizzio/cabrizzio_lflirt.png',
        friend: './char_images/cabrizzio/cabrizzio_fjoy.png',
        hate: './char_images/cabrizzio/cabrizzio_hangry.png',
        realized: './char_images/cabrizzio/cabrizzio_r.png',
        realizedLove: './char_images/cabrizzio/cabrizzio_rflirt.png',
        realizedFriend: './char_images/cabrizzio/cabrizzio_rjoy.png'
    },
    34: { // Sinclaire
        default: './char_images/sinclaire/sinclaire_n.png',
        love: './char_images/sinclaire/sinclaire_lflirt.png',
        friend: './char_images/sinclaire/sinclaire_fjoy.png',
        hate: './char_images/sinclaire/sinclaire_hangry.png',
        realized: './char_images/sinclaire/sinclaire_r.png',
        realizedLove: './char_images/sinclaire/sinclaire_rflirt.png',
        realizedFriend: './char_images/sinclaire/sinclaire_rjoy.png'
    },
    35: { // Freddy
        default: './char_images/freddy/freddy_n.png',
        love: './char_images/freddy/freddy_lflirt.png',
        friend: './char_images/freddy/freddy_fjoy.png',
        hate: './char_images/freddy/freddy_hangry.png',
        realized: './char_images/freddy/freddy_r.png',
        realizedLove: './char_images/freddy/freddy_rflirt.png',
        realizedFriend: './char_images/freddy/freddy_rjoy.png'
    },
    36: { // Stefan
        default: './char_images/stefan/stefan_n.png',
        love: './char_images/stefan/stefan_lflirt.png',
        friend: './char_images/stefan/stefan_fjoy.png',
        hate: './char_images/stefan/stefan_hangry.png',
        realized: './char_images/stefan/stefan_r.png',
        realizedLove: './char_images/stefan/stefan_rflirt.png',
        realizedFriend: './char_images/stefan/stefan_rjoy.png'
    },
    37: { // Luke Nuke'm
        default: './char_images/lukenuke/luke_n.png',
        love: './char_images/lukenuke/luke_lflirt.png',
        friend: './char_images/lukenuke/luke_fjoy.png',
        hate: './char_images/lukenuke/luke_hangry.png',
        realized: './char_images/lukenuke/luke_r.png',
        realizedLove: './char_images/lukenuke/luke_rflirt.png',
        realizedFriend: './char_images/lukenuke/luke_rjoy.png'
    },
    38: { // Miranda Dulce Tostadora
        default: './char_images/miranda/miranda_n.png',
        love: './char_images/miranda/miranda_lflirt.png',
        friend: './char_images/miranda/miranda_fjoy.png',
        hate: './char_images/miranda/miranda_hangry.png',
        realized: './char_images/miranda/miranda_r.png',
        realizedLove: './char_images/miranda/miranda_rflirt.png',
        realizedFriend: './char_images/miranda/miranda_rjoy.png'
    },
    39: { // Dishy
        default: './char_images/dishy/dishy_n.png',
        love: './char_images/dishy/dishy_lflirt.png',
        friend: './char_images/dishy/dishy_fjoy.png',
        hate: './char_images/dishy/dishy_hangry.png',
        realized: './char_images/dishy/dishy_r.png',
        realizedLove: './char_images/dishy/dishy_rflirt.png',
        realizedFriend: './char_images/dishy/dishy_rjoy.png'
    },
    40: { // Daisuke
        default: './char_images/daisuke/daisuke_n.png',
        love: './char_images/daisuke/daisuke_lflirt.png',
        friend: './char_images/daisuke/daisuke_fjoy.png',
        hate: './char_images/daisuke/daisuke_hangry.png',
        realized: './char_images/daisuke/daisuke_r.png',
        realizedLove: './char_images/daisuke/daisuke_rflirt.png',
        realizedFriend: './char_images/daisuke/daisuke_rjoy.png'
    },
    41: { // Friar Errol
        default: './char_images/friarerrol/friar_n.png',
        love: './char_images/friarerrol/friar_lflirt.png',
        friend: './char_images/friarerrol/friar_fjoy.png',
        hate: './char_images/friarerrol/friar_hangry.png',
        realized: './char_images/friarerrol/friar_r.png',
        realizedLove: './char_images/friarerrol/friar_rflirt.png',
        realizedFriend: './char_images/friarerrol/friar_rjoy.png'
    },
    42: { // Kopi
        default: './char_images/kopi/kopi_n.png',
        love: './char_images/kopi/kopi_lflirt.png',
        friend: './char_images/kopi/kopi_fjoy.png',
        hate: './char_images/kopi/kopi_hangry.png',
        realized: './char_images/kopi/kopi_r.png',
        realizedLove: './char_images/kopi/kopi_rflirt.png',
        realizedFriend: './char_images/kopi/kopi_rjoy.png'
    },
    43: { // Cam
        default: './char_images/cam/cam_n.png',
        love: './char_images/cam/cam_lflirt.png',
        friend: './char_images/cam/cam_fjoy.png',
        hate: './char_images/cam/cam_hangry.png',
        realized: './char_images/cam/cam_r.png',
        realizedLove: './char_images/cam/cam_rflirt.png',
        realizedFriend: './char_images/cam/cam_rjoy.png'
    },
    44: { // I, Ronaldini
        default: './char_images/ronaldini/ironaldini_n.png',
        love: './char_images/ronaldini/ironaldini_lflirt.png',
        friend: './char_images/ronaldini/ironaldini_fjoy.png',
        hate: './char_images/ronaldini/ironaldini_hangry.png',
        realized: './char_images/ronaldini/ironaldini_r.png',
        realizedLove: './char_images/ronaldini/ironaldini_rflirt.png',
        realizedFriend: './char_images/ronaldini/ironaldini_rjoy.png'
    },
    45: { // Amir
        default: './char_images/amir/amir_n.png',
        love: './char_images/amir/amir_lflirt.png',
        friend: './char_images/amir/amir_fjoy.png',
        hate: './char_images/amir/amir_hangry.png',
        realized: './char_images/amir/amir_r.png',
        realizedLove: './char_images/amir/amir_rflirt.png',
        realizedFriend: './char_images/amir/amir_rjoy.png'
    },
    46: { // Jean Loo
        default: './char_images/jeanloo/jeanloo_n.png',
        love: './char_images/jeanloo/jeanloo_lflirt.png',
        friend: './char_images/jeanloo/jeanloo_fjoy.png',
        hate: './char_images/jeanloo/jeanloo_hangry.png',
        realized: './char_images/jeanloo/jeanloo_r.png',
        realizedLove: './char_images/jeanloo/jeanloo_rflirt.png',
        realizedFriend: './char_images/jeanloo/jeanloo_rjoy.png'
    },
    47: { // Johnny Splash
        default: './char_images/johnnysplash/johnny_n.png',
        love: './char_images/johnnysplash/johnny_lflirt.png',
        friend: './char_images/johnnysplash/johnny_fjoy.png',
        hate: './char_images/johnnysplash/johnny_hangry.png',
        realized: './char_images/johnnysplash/johnny_r.png',
        realizedLove: './char_images/johnnysplash/johnny_rflirt.png',
        realizedFriend: './char_images/johnnysplash/johnny_rjoy.png'
    },
    48: { // Bathsheba
        default: './char_images/bathsheba/bathsheba_n.png',
        love: './char_images/bathsheba/bathsheba_lflirt.png',
        friend: './char_images/bathsheba/bathsheba_fjoy.png',
        hate: './char_images/bathsheba/bathsheba_hangry.png',
        realized: './char_images/bathsheba/bathsheba_r.png',
        realizedLove: './char_images/bathsheba/bathsheba_rflirt.png',
        realizedFriend: './char_images/bathsheba/bathsheba_rjoy.png'
    },
    49: { // Rebel
        default: './char_images/rebel/rebel_n.png',
        love: './char_images/rebel/rebel_lflirt.png',
        friend: './char_images/rebel/rebel_fjoy.png',
        hate: './char_images/rebel/rebel_hangry.png',
        realized: './char_images/rebel/rebel_r.png',
        realizedLove: './char_images/rebel/rebel_rflirt.png',
        realizedFriend: './char_images/rebel/rebel_rjoy.png'
    },
    50: { // Barry
        default: './char_images/barry/barry_n.png',
        love: './char_images/barry/barry_lflirt.png',
        friend: './char_images/barry/barry_fjoy.png',
        hate: './char_images/barry/barry_hangry.png',
        realized: './char_images/barry/barry_r.png',
        realizedLove: './char_images/barry/barry_rflirt.png',
        realizedFriend: './char_images/barry/barry_rjoy.png'
    },
    51: { // Tyrell
        default: './char_images/tyrell/tyrell_n.png',
        love: './char_images/tyrell/tyrell_lflirt.png',
        friend: './char_images/tyrell/tyrell_fjoy.png',
        hate: './char_images/tyrell/tyrell_hangry.png',
        realized: './char_images/tyrell/tyrell_r.png',
        realizedLove: './char_images/tyrell/tyrell_rflirt.png',
        realizedFriend: './char_images/tyrell/tyrell_rjoy.png'
    },
    52: { // Farya
        default: './char_images/farya/farya_n.png',
        love: './char_images/farya/farya_lflirt.png',
        friend: './char_images/farya/farya_fjoy.png',
        hate: './char_images/farya/farya_hangry.png',
        realized: './char_images/farya/farya_r.png',
        realizedLove: './char_images/farya/farya_rflirt.png',
        realizedFriend: './char_images/farya/farya_rjoy.png'
    },
    53: { // Dasha
        default: './char_images/dasha/dasha_n.png',
        love: './char_images/dasha/dasha_lflirt.png',
        friend: './char_images/dasha/dasha_fjoy.png',
        hate: './char_images/dasha/dasha_hangry.png',
        realized: './char_images/dasha/dasha_r.png',
        realizedLove: './char_images/dasha/dasha_rflirt.png',
        realizedFriend: './char_images/dasha/dasha_rjoy.png'
    },
    54: { // Jerry
        default: './char_images/jerry/jerry_n.png',
        love: './char_images/jerry/jerry_lflirt.png',
        friend: './char_images/jerry/jerry_fjoy.png',
        hate: './char_images/jerry/jerry_hangry.png',
        realized: './char_images/jerry/jerry_r.png',
        realizedLove: './char_images/jerry/jerry_rflirt.png',
        realizedFriend: './char_images/jerry/jerry_rjoy.png'
    },
    55: { // Penelope
        default: './char_images/penelope/penelope_n.png',
        love: './char_images/penelope/penelope_lflirt.png',
        friend: './char_images/penelope/penelope_fjoy.png',
        hate: './char_images/penelope/penelope_hangry.png',
        realized: './char_images/penelope/penelope_r.png',
        realizedLove: './char_images/penelope/penelope_rflirt.png',
        realizedFriend: './char_images/penelope/penelope_rjoy.png'
    },
    56: { // Mac
        default: './char_images/mac/mac_n.png',
        love: './char_images/mac/mac_lflirt.png',
        friend: './char_images/mac/mac_fjoy.png',
        hate: './char_images/mac/mac_hangry.png',
        realized: './char_images/mac/mac_r.png',
        realizedLove: './char_images/mac/mac_rflirt.png',
        realizedFriend: './char_images/mac/mac_rjoy.png'
    },
    57: { // Willi
        default: './char_images/willi/willi_n.png',
        love: './char_images/willi/willi_lflirt.png',
        friend: './char_images/willi/willi_fjoy.png',
        hate: './char_images/willi/willi_hangry.png',
        realized: './char_images/willi/willi_r.png',
        realizedLove: './char_images/willi/willi_rflirt.png',
        realizedFriend: './char_images/willi/willi_rjoy.png'
    },
    58: { // Lyric
        default: './char_images/lyric/lyric_n.png',
        love: './char_images/lyric/lyric_lflirt.png',
        friend: './char_images/lyric/lyric_fjoy.png',
        hate: './char_images/lyric/lyric_hangry.png',
        realized: './char_images/lyric/lyric_r.png',
        realizedLove: './char_images/lyric/lyric_rflirt.png',
        realizedFriend: './char_images/lyric/lyric_rjoy.png'
    },
    59: { // Rongomaiwhenua
        default: './char_images/rongomaiwhenua/rongomaiwhenua_n.png',
        love: './char_images/rongomaiwhenua/rongomaiwhenua_lflirt.png',
        friend: './char_images/rongomaiwhenua/rongomaiwhenua_fjoy.png',
        hate: './char_images/rongomaiwhenua/rongomaiwhenua_hangry.png',
        realized: './char_images/rongomaiwhenua/rongomaiwhenua_r.png',
        realizedLove: './char_images/rongomaiwhenua/rongomaiwhenua_rflirt.png',
        realizedFriend: './char_images/rongomaiwhenua/rongomaiwhenua_rjoy.png'
    },
    60: { // Chance
        default: './char_images/chance/chance_n.png',
        love: './char_images/chance/chance_lflirt.png',
        friend: './char_images/chance/chance_fjoy.png',
        hate: './char_images/chance/chance_hangry.png',
        realized: './char_images/chance/chance_r.png',
        realizedLove: './char_images/chance/chance_rflirt.png',
        realizedFriend: './char_images/chance/chance_rjoy.png'
    },
    61: { // Maggie
        default: './char_images/maggie/maggie_n.png',
        love: './char_images/maggie/maggie_lflirt.png',
        friend: './char_images/maggie/maggie_fjoy.png',
        hate: './char_images/maggie/maggie_hangry.png',
        realized: './char_images/maggie/maggie_r.png',
        realizedLove: './char_images/maggie/maggie_rflirt.png',
        realizedFriend: './char_images/maggie/maggie_rjoy.png'
    },
    62: { // Winnifred
        default: './char_images/winnifred/winnifred_n.png',
        love: './char_images/winnifred/winnifred_lflirt.png',
        friend: './char_images/winnifred/winnifred_fjoy.png',
        hate: './char_images/winnifred/winnifred_hangry.png',
        realized: './char_images/winnifred/winnifred_r.png',
        realizedLove: './char_images/winnifred/winnifred_rflirt.png',
        realizedFriend: './char_images/winnifred/winnifred_rjoy.png'
    },
    63: { // Rainey
        default: './char_images/rainey/rainey_n.png',
        love: './char_images/rainey/rainey_lflirt.png',
        friend: './char_images/rainey/rainey_fjoy.png',
        hate: './char_images/rainey/rainey_hangry.png',
        realized: './char_images/rainey/rainey_r.png',
        realizedLove: './char_images/rainey/rainey_rflirt.png',
        realizedFriend: './char_images/rainey/rainey_rjoy.png'
    },
    64: { // Scandalabra
        default: './char_images/scandalabra/scandalabra_n.png',
        love: './char_images/scandalabra/scandalabra_lflirt.png',
        friend: './char_images/scandalabra/scandalabra_fjoy.png',
        hate: './char_images/scandalabra/scandalabra_hangry.png',
        realized: './char_images/scandalabra/scandalabra_r.png',
        realizedLove: './char_images/scandalabra/scandalabra_rflirt.png',
        realizedFriend: './char_images/scandalabra/scandalabra_rjoy.png'
    },
    65: { // Arma
        default: './char_images/arma/arma_n.png',
        love: './char_images/arma/arma_lflirt.png',
        friend: './char_images/arma/arma_fjoy.png',
        hate: './char_images/arma/arma_hangry.png',
        realized: './char_images/arma/arma_r.png',
        realizedLove: './char_images/arma/arma_rflirt.png',
        realizedFriend: './char_images/arma/arma_rjoy.png'
    },
    66: { // Betty
        default: './char_images/betty/betty_n.png',
        love: './char_images/betty/betty_lflirt.png',
        friend: './char_images/betty/betty_fjoy.png',
        hate: './char_images/betty/betty_hangry.png',
        realized: './char_images/betty/betty_r.png',
        realizedLove: './char_images/betty/betty_rflirt.png',
        realizedFriend: './char_images/betty/betty_rjoy.png'
    },
    67: { // Diana
        default: './char_images/diana/diana_n.png',
        love: './char_images/diana/diana_lflirt.png',
        friend: './char_images/diana/diana_fjoy.png',
        hate: './char_images/diana/diana_hangry.png',
        realized: './char_images/diana/diana_r.png',
        realizedLove: './char_images/diana/diana_rflirt.png',
        realizedFriend: './char_images/diana/diana_rjoy.png'
    },
    68: { // Daemon
        default: './char_images/daemon/daemon_n.png',
        love: './char_images/daemon/daemon_ldeenah.png',
        friend: './char_images/daemon/daemon_fjoy.png',
        hate: './char_images/daemon/daemon_n.png',
        realized: './char_images/daemon/daemon_r.png',
        realizedLove: './char_images/daemon/daemon_rflirt.png',
        realizedFriend: './char_images/daemon/daemon_rjoy.png'
    },
    69: { // Ben-Hwa
        default: './char_images/benhwa/benhwa_n.png',
        love: './char_images/benhwa/benhwa_lflirt.png',
        friend: './char_images/benhwa/benhwa_fjoy.png',
        hate: './char_images/benhwa/benhwa_hangry.png',
        realized: './char_images/benhwa/benhwa_r.png',
        realizedLove: './char_images/benhwa/benhwa_rflirt.png',
        realizedFriend: './char_images/benhwa/benhwa_rjoy.png'
    },
    70: { // Hero Hime
        default: './char_images/herohime/hime_n.png',
        love: './char_images/herohime/hime_lflirt.png',
        friend: './char_images/herohime/hime_fjoy.png',
        hate: './char_images/herohime/hime_hangry.png',
        realized: './char_images/herohime/hime_r.png',
        realizedLove: './char_images/herohime/hime_rflirt.png',
        realizedFriend: './char_images/herohime/hime_rjoy.png'
    },
    71: { // Teddy
        default: './char_images/teddy/teddy_n.png',
        love: './char_images/teddy/teddy_lflirt.png',
        friend: './char_images/teddy/teddy_fjoy.png',
        hate: './char_images/teddy/teddy_hangry.png',
        realized: './char_images/teddy/teddy_r.png',
        realizedLove: './char_images/teddy/teddy_rflirt.png',
        realizedFriend: './char_images/teddy/teddy_rjoy.png'
    },
    72: { // Hank(s)
        default: './char_images/hanks/hanks_n.png',
        love: './char_images/hanks/hanks_lflirt.png',
        friend: './char_images/hanks/hanks_fjoy.png',
        hate: './char_images/hanks/hanks_hangry.png',
        realized: './char_images/hanks/hanks_r.png',
        realizedLove: './char_images/hanks/hanks_r.png',
        realizedFriend: './char_images/hanks/hanks_r.png'
    },
    73: { // Washford
        default: './char_images/washford/washford_n.png',
        love: './char_images/washford/washford_lflirt.png',
        friend: './char_images/washford/washford_fjoy.png',
        hate: './char_images/washford/washford_hangry.png',
        realized: './char_images/washford/washford_r.png',
        realizedLove: './char_images/washford/washford_rflirt.png',
        realizedFriend: './char_images/washford/washford_rjoy.png'
    },
    74: { // Drysdale
        default: './char_images/drysdale/drysdale_n.png',
        love: './char_images/drysdale/drysdale_lflirt.png',
        friend: './char_images/drysdale/drysdale_fjoy.png',
        hate: './char_images/drysdale/drysdale_hangry.png',
        realized: './char_images/drysdale/drysdale_r.png',
        realizedLove: './char_images/drysdale/drysdale_rflirt.png',
        realizedFriend: './char_images/drysdale/drysdale_rjoy.png'
    },
    75: { // Harper
        default: './char_images/harper/harper_n.png',
        love: './char_images/harper/harper_lflirt.png',
        friend: './char_images/harper/harper_fjoy.png',
        hate: './char_images/harper/harper_hangry.png',
        realized: './char_images/harper/harper_r.png',
        realizedLove: './char_images/harper/harper_rflirt.png',
        realizedFriend: './char_images/harper/harper_rjoy.png'
    },
    76: { // Dirk
        default: './char_images/dirk/dirk_n.png',
        love: './char_images/dirk/dirk_lflirt.png',
        friend: './char_images/dirk/dirk_fjoy.png',
        hate: './char_images/dirk/dirk_hangry.png',
        realized: './char_images/dirk/dirk_r.png',
        realizedLove: './char_images/dirk/dirk_rflirt.png',
        realizedFriend: './char_images/dirk/dirk_rjoy.png'
    },
    77: { // Tydus
        default: './char_images/tydus/tydus_n.png',
        love: './char_images/tydus/tydus_lflirt.png',
        friend: './char_images/tydus/tydus_fjoy.png',
        hate: './char_images/tydus/tydus_hangry.png',
        realized: './char_images/tydus/tydus_r.png',
        realizedLove: './char_images/tydus/tydus_rflirt.png',
        realizedFriend: './char_images/tydus/tydus_rjoy.png'
    },
    78: { // Henry Hoove
        default: './char_images/henryhoove/hoove_n.png',
        love: './char_images/henryhoove/hoove_lflirt.png',
        friend: './char_images/henryhoove/hoove_fjoy.png',
        hate: './char_images/henryhoove/hoove_hangry.png',
        realized: './char_images/henryhoove/hoove_r.png',
        realizedLove: './char_images/henryhoove/hoove_rflirt.png',
        realizedFriend: './char_images/henryhoove/hoove_rjoy.png'
    },
    79: { // Bobby
        default: './char_images/bobby/bobby_n.png',
        love: './char_images/bobby/bobby_lflirt.png',
        friend: './char_images/bobby/bobby_fjoy.png',
        hate: './char_images/bobby/bobby_hangry.png',
        realized: './char_images/bobby/bobby_r.png',
        realizedLove: './char_images/bobby/bobby_rflirt.png',
        realizedFriend: './char_images/bobby/bobby_rjoy.png'
    },
    80: { // Kristof
        default: './char_images/kristof/kristof_n.png',
        love: './char_images/kristof/kristof_lflirt.png',
        friend: './char_images/kristof/kristof_fjoy.png',
        hate: './char_images/kristof/kristof_hangry.png',
        realized: './char_images/kristof/kristof_r.png',
        realizedLove: './char_images/kristof/kristof_rflirt.png',
        realizedFriend: './char_images/kristof/kristof_rjoy.png'
    },
    81: { // Dunk
        default: './char_images/dunk/dunk_n.png',
        love: './char_images/dunk/dunk_lflirt.png',
        friend: './char_images/dunk/dunk_fjoy.png',
        hate: './char_images/dunk/dunk_hangry.png',
        realized: './char_images/dunk/dunk_r.png',
        realizedLove: './char_images/dunk/dunk_rflirt.png',
        realizedFriend: './char_images/dunk/dunk_rjoy.png'
    },
    82: { // Fantina
        default: './char_images/fantina/fantina_n.png',
        love: './char_images/fantina/fantina_lflirt.png',
        friend: './char_images/fantina/fantina_fjoy.png',
        hate: './char_images/fantina/fantina_hangry.png',
        realized: './char_images/fantina/fantina_r.png',
        realizedLove: './char_images/fantina/fantina_rflirt.png',
        realizedFriend: './char_images/fantina/fantina_rjoy.png'
    },
    83: { // Stepford
        default: './char_images/stepford/stepford_n.png',
        love: './char_images/stepford/stepford_lflirt.png',
        friend: './char_images/stepford/stepford_fjoy.png',
        hate: './char_images/stepford/stepford_hangry.png',
        realized: './char_images/stepford/stepford_r.png',
        realizedLove: './char_images/stepford/stepford_rflirt.png',
        realizedFriend: './char_images/stepford/stepford_rjoy.png'
    },
    84: { // Tony
        default: './char_images/tony/tony_n.png',
        love: './char_images/tony/tony_lflirt.png',
        friend: './char_images/tony/tony_fjoy.png',
        hate: './char_images/tony/tony_hangry.png',
        realized: './char_images/tony/tony_r.png',
        realizedLove: './char_images/tony/tony_rflirt.png',
        realizedFriend: './char_images/tony/tony_rjoy.png'
    },
    85: { // Beau
        default: './char_images/beau/beau_n.png',
        love: './char_images/beau/beau_lflirt.png',
        friend: './char_images/beau/beau_fjoy.png',
        hate: './char_images/beau/beau_hangry.png',
        realized: './char_images/beau/beau_r.png',
        realizedLove: './char_images/beau/beau_rflirt.png',
        realizedFriend: './char_images/beau/beau_rjoy.png'
    },
    86: { // Keith
        default: './char_images/keith/keith_n.png',
        love: './char_images/keith/keith_lflirt.png',
        friend: './char_images/keith/keith_fjoy.png',
        hate: './char_images/keith/keith_hangry.png',
        realized: './char_images/keith/keith_r.png',
        realizedLove: './char_images/keith/keith_rflirt.png',
        realizedFriend: './char_images/keith/keith_rjoy.png'
    },
    87: { // Bodhi
        default: './char_images/bodhi/bodhi_n.png',
        love: './char_images/bodhi/bodhi_lflirt.png',
        friend: './char_images/bodhi/bodhi_fjoy.png',
        hate: './char_images/bodhi/bodhi_hangry.png',
        realized: './char_images/bodhi/bodhi_r.png',
        realizedLove: './char_images/bodhi/bodhi_rflirt.png',
        realizedFriend: './char_images/bodhi/bodhi_rjoy.png'
    },
    88: { // Vaughn
        default: './char_images/vaughn/vaughn_n.png',
        love: './char_images/vaughn/vaughn_lflirt.png',
        friend: './char_images/vaughn/vaughn_fjoy.png',
        hate: './char_images/vaughn/vaughn_hangry.png',
        realized: './char_images/vaughn/vaughn_r.png',
        realizedLove: './char_images/vaughn/vaughn_rflirt.png',
        realizedFriend: './char_images/vaughn/vaughn_rjoy.png'
    },
    89: { // Sophia
        default: './char_images/sophia/sophia_n.png',
        love: './char_images/sophia/sophia_lflirt.png',
        friend: './char_images/sophia/sophia_fjoy.png',
        hate: './char_images/sophia/sophia_hangry.png',
        realized: './char_images/sophia/sophia_r.png',
        realizedLove: './char_images/sophia/sophia_rflirt.png',
        realizedFriend: './char_images/sophia/sophia_rjoy.png'
    },
    90: { // Monique
        default: './char_images/monique/monique_n.png',
        love: './char_images/monique/monique_lflirt.png',
        friend: './char_images/monique/monique_fjoy.png',
        hate: './char_images/monique/monique_hangry.png',
        realized: './char_images/monique/monique_r.png',
        realizedLove: './char_images/monique/monique_rflirt.png',
        realizedFriend: './char_images/monique/monique_rjoy.png'
    },
    91: { // Memoria
        default: './char_images/memoria/memoria_n.png',
        love: './char_images/memoria/memoria_lflirt.png',
        friend: './char_images/memoria/memoria_fjoy.png',
        hate: './char_images/memoria/memoria_hangry.png',
        realized: './char_images/memoria/memoria_r.png',
        realizedLove: './char_images/memoria/memoria_rflirt.png',
        realizedFriend: './char_images/memoria/memoria_rjoy.png'
    },
    92: { // Holly
        default: './char_images/holly/holly_n.png',
        love: './char_images/holly/holly_lflirt.png',
        friend: './char_images/holly/holly_fjoy.png',
        hate: './char_images/holly/holly_hangry.png',
        realized: './char_images/holly/holly_r.png',
        realizedLove: './char_images/holly/holly_rflirt.png',
        realizedFriend: './char_images/holly/holly_rjoy.png'
    },
    93: { // Airyn
        default: './char_images/airyn/airyn_n.png',
        love: './char_images/airyn/airyn_lflirt.png',
        friend: './char_images/airyn/airyn_fjoy.png',
        hate: './char_images/airyn/airyn_hangry.png',
        realized: './char_images/airyn/airyn_r.png',
        realizedLove: './char_images/airyn/airyn_rflirt.png',
        realizedFriend: './char_images/airyn/airyn_rjoy.png'
    },
    94: { // Textbox-Chan
        default: './char_images/textboxchan/tbc_n.png',
        love: './char_images/textboxchan/tbc_lflirt.png',
        friend: './char_images/textboxchan/tbc_fjoy.png',
        hate: './char_images/textboxchan/tbc_hangry.png',
        realized: './char_images/textboxchan/tbc_r.png',
        realizedLove: './char_images/textboxchan/tbc_rflirt.png',
        realizedFriend: './char_images/textboxchan/tbc_rjoy.png'
    },
    95: { // The Sassy Chap
        default: './char_images/sassychap/sassy_n.png',
        love: './char_images/sassychap/sassy_lflirt.png',
        friend: './char_images/sassychap/sassy_fjoy.png',
        hate: './char_images/sassychap/sassy_hangry.png',
        realized: './char_images/sassychap/sassy_r.png',
        realizedLove: './char_images/sassychap/sassy_rflirt.png',
        realizedFriend: './char_images/sassychap/sassy_rjoy.png'
    },
    96: { // Zoey Bennett
        default: './char_images/zoey/zoey_n.png',
        love: './char_images/zoey/zoey_lflirt.png',
        friend: './char_images/zoey/zoey_fjoy.png',
        hate: './char_images/zoey/zoey_hangry.png',
        realized: './char_images/zoey/zoey_r.png',
        realizedLove: './char_images/zoey/zoey_rflirt.png',
        realizedFriend: './char_images/zoey/zoey_rjoy.png'
    },
    97: { // xxXShadowl0rd420Xxx
        default: './char_images/shadowlord/shadow_n.png',
        love: './char_images/shadowlord/shadow_lflirt.png',
        friend: './char_images/shadowlord/shadow_fjoy.png',
        hate: './char_images/shadowlord/shadow_hangry.png',
        realized: './char_images/shadowlord/shadow_r.png',
        realizedLove: './char_images/shadowlord/shadow_rflirt.png',
        realizedFriend: './char_images/shadowlord/shadow_rjoy.png'
    },
    98: { // Doug
        default: './char_images/doug/doug_n.png',
        love: './char_images/doug/doug_l.png',
        friend: './char_images/doug/doug_fjoy.png',
        hate: './char_images/doug/doug_hangry.png',
        realized: './char_images/doug/doug_r.png',
        realizedLove: './char_images/doug/doug_rjoy.png',
        realizedFriend: './char_images/doug/doug_rjoy.png'
    },
    99: { // Nightmare
        default: './char_images/nightmare/nightmare_n.png',
        love: './char_images/nightmare/nightmare_lflirt.png',
        friend: './char_images/nightmare/nightmare_fjoy.png',
        hate: './char_images/nightmare/nightmare_hangry.png',
        realized: './char_images/nightmare/nightmare_r.png',
        realizedLove: './char_images/nightmare/nightmare_rflirt.png',
        realizedFriend: './char_images/nightmare/nightmare_rjoy.png'
    },
    100: { // Reggie
        default: './char_images/reggie/reggie_n.png',
        love: './char_images/reggie/reggie_lflirt.png',
        friend: './char_images/reggie/reggie_fjoy.png',
        hate: './char_images/reggie/reggie_hangry.png',
        realized: './char_images/reggie/reggie_r.png',
        realizedLove: './char_images/reggie/reggie_rflirt.png',
        realizedFriend: './char_images/reggie/reggie_rjoy.png'
    },
    101: { // Michael Transaction
        default: './char_images/michael/mikey_n.png',
        love: './char_images/michael/mikey_lflirt.png',
        friend: './char_images/michael/mikey_fjoy.png',
        hate: './char_images/michael/mikey_hangry.png',
        realized: './char_images/michael/mikey_r.png',
        realizedLove: './char_images/michael/mikey_rflirt.png',
        realizedFriend: './char_images/michael/mikey_rjoy.png'
    },
    102: { // Lucinda
        default: './char_images/lucinda/lucinda_n.png',
        love: './char_images/lucinda/lucinda_lflirt.png',
        friend: './char_images/lucinda/lucinda_fjoy.png',
        hate: './char_images/lucinda/lucinda_hangry.png',
        realized: './char_images/lucinda/lucinda_r.png',
        realizedLove: './char_images/lucinda/lucinda_rflirt.png',
        realizedFriend: './char_images/lucinda/lucinda_rjoy.png'
    }
};