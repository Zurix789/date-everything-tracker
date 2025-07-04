// Collectables database
const collectables = {
    // Abel - Table (ID: 11)
    11: [
        { id: 'abel_1', clue: 'Get a cup of coffee for Abel.', description: 'Ethiopian Sidama Ardi: Tastes like strawberries!', image: 'https://dateeverything.wiki.gg/images/thumb/8/8c/Abel_Collectable_1.png/150px-Abel_Collectable_1.png'},
        { id: 'abel_2', clue: 'Check out the Landing Table.', description: 'Leaky Ceiling: Poor Abel.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e5/Abel_Collectable_2.png/150px-Abel_Collectable_2.png'},
        { id: 'abel_3', clue: 'Check out the Dining Table.', description: 'Wobbly Leg: Poor Abel.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c3/Abel_Collectable_3.png/150px-Abel_Collectable_3.png'},
        { id: 'abel_4', clue: 'Check out the End Table.', description: 'End Table Spill: Poor Abel.', image: 'https://dateeverything.wiki.gg/images/thumb/a/aa/Abel_Collectable_4.png/150px-Abel_Collectable_4.png'}
    ],
    
    // Airyn - Air (ID: 93)
    93: [
        { id: 'airyn_1', clue: 'Speak to Airyn.', description: 'Dot Dot Dot ...', image: 'https://dateeverything.wiki.gg/images/thumb/0/0d/Airyn_Collectable_1.png/150px-Airyn_Collectable_1.png'},
        { id: 'airyn_2', clue: 'Get a Love Ending with Airyn.', description: 'Love Without Words: ...', image: 'https://dateeverything.wiki.gg/images/thumb/2/28/Airyn_Collectable_2.png/150px-Airyn_Collectable_2.png'},
        { id: 'airyn_3', clue: 'Ask Airyn about life.', description: 'Cool Trivia You need Airyn more than she needs you.', image: 'https://dateeverything.wiki.gg/images/thumb/1/12/Airyn_Collectable_3.png/150px-Airyn_Collectable_3.png'}
    ],
    
    // Amir - Mirror (ID: 45)
    45: [
        { id: 'amir_1', clue: 'Hang out with Amir for a while.', description: 'You the Looking Glass: So much staring, so little adventure.', image: 'https://dateeverything.wiki.gg/images/thumb/5/55/Amir_Collectable_1.png/150px-Amir_Collectable_1.png'},
        { id: 'amir_2', clue: 'Watch Amir\'s show at the Breaker Box.', description: 'Mirror Pesh-Kabz: Glittering, dangerous.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a7/Amir_Collectable_2.png/150px-Amir_Collectable_2.png'},
        { id: 'amir_3', clue: 'Speak to Amir.', description: 'Amir Face Trace: The work of a villain.', image: 'https://dateeverything.wiki.gg/images/thumb/2/22/Amir_Collectable_3.png/150px-Amir_Collectable_3.png'}
    ],
    
    // Arma - Smoke Alarm (ID: 65)
    65: [
        { id: 'arma_1', clue: 'Get Arma to recharge her battery.', description: 'Bathroom Fire!: Stop, drop, and paper roll!', image: 'https://dateeverything.wiki.gg/images/thumb/b/b3/Arma_Collectable_1.png/150px-Arma_Collectable_1.png'},
        { id: 'arma_2', clue: 'Get Arma to open up about her trauma.', description: 'Arma\'s Biggest Fear: Staying silent can sometimes cause more trouble.', image: 'https://dateeverything.wiki.gg/images/thumb/0/04/Arma_Collectable_2.png/150px-Arma_Collectable_2.png'},
        { id: 'arma_3', clue: 'Get Arma to recharge her battery.', description: 'All Charged Up!: Sometimes all we need is a little break.', image: 'https://dateeverything.wiki.gg/images/thumb/0/09/Arma_Collectable_3.png/150px-Arma_Collectable_3.png'},
        { id: 'arma_4', clue: 'Get Arma to relax.', description: 'Ciggy & The Smokes: It\'s tough to resist these hip joints.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e4/Arma_Collectable_4.png/150px-Arma_Collectable_4.png'}
    ],
    
    // Artt - Art (ID: 17)
    17: [
        { id: 'artt_1', clue: 'Speak with Artt.', description: 'Painting Of A Ship: Glorious. Inspiring. Old.', image: 'https://dateeverything.wiki.gg/images/thumb/1/19/Artt_Collectable_1.png/150px-Artt_Collectable_1.png'},
        { id: 'artt_2', clue: 'Speak with Artt.', description: 'Zen Painting: It\'s about the brush-strokes they didn\'t paint.', image: 'https://dateeverything.wiki.gg/images/thumb/9/91/Artt_Collectable_2.png/150px-Artt_Collectable_2.png'},
        { id: 'artt_3', clue: 'Speak with Artt.', description: 'Kitschy Painting: There\'s something about houses that always makes you feel at home.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2c/Artt_Collectable_3.png/150px-Artt_Collectable_3.png'},
        { id: 'artt_4', clue: 'Speak with Artt.', description: 'Protest Art: It\'s the corporations - they are like the robbers! And the data is the plunder rather than coins!', image: 'https://dateeverything.wiki.gg/images/thumb/a/af/Artt_Collectable_4.png/150px-Artt_Collectable_4.png'}
    ],
    
    // Barry - Beauty Supplies (ID: 50)
    50: [
        { id: 'barry_1', clue: 'Speak to Barry.', description: 'Tweezer Survey: This survey is of vital importance.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0e/Barry_Collectable_1.png/150px-Barry_Collectable_1.png'},
        { id: 'barry_2', clue: 'Speak to Barry.', description: 'Toothpaste Survey: No, this survey is of vital importance.', image: 'https://dateeverything.wiki.gg/images/thumb/1/18/Barry_Collectable_2.png/150px-Barry_Collectable_2.png'},
        { id: 'barry_3', clue: 'Achieve a Love Ending with Barry,', description: 'Toucans: This is one fixation that is here to slay!', image: 'https://dateeverything.wiki.gg/images/thumb/4/4a/Barry_Collectable_3.png/150px-Barry_Collectable_3.png'}
    ],
    
    // Bathsheba - Bathtub (ID: 48)
    48: [
        { id: 'bathsheba_1', clue: 'Speak to Bathsheba.', description: 'Steamy Romance Novel: Steamy, because bath.', image: 'https://dateeverything.wiki.gg/images/thumb/6/68/Bathsheba_Collectable_1.png/150px-Bathsheba_Collectable_1.png'},
        { id: 'bathsheba_2', clue: 'Treat Bathsheba poorly.', description: 'Megalobańia: Soapy, scary, skeleton.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c9/Bathsheba_Collectable_2.png/150px-Bathsheba_Collectable_2.png'},
        { id: 'bathsheba_3', clue: 'Achieve a Love ending with Bathsheba, and agree to loving her.', description: 'Bathtime: You found a way into Bathsheba\'s tender embrace.', image: 'https://dateeverything.wiki.gg/images/thumb/7/70/Bathsheba_Collectable_3.png/150px-Bathsheba_Collectable_3.png'}
    ],
    
    // Beau - Box (ID: 85)
    85: [
        { id: 'beau_1', clue: 'Meet Beau at Jaques\' location.', description: 'Extension Cord Whip: Just like Beau uses!', image: 'https://dateeverything.wiki.gg/images/thumb/4/45/Beau_Collectable_1.png/150px-Beau_Collectable_1.png'},
        { id: 'beau_2', clue: 'Complete Beau\'s quest under the house.', description: 'Isolde Chest: A Taker of Objects, not a Keeper.', image: 'https://dateeverything.wiki.gg/images/thumb/0/04/Beau_Collectable_2.png/150px-Beau_Collectable_2.png'},
        { id: 'beau_3', clue: 'Complete Beau\'s quest under the house.', description: 'Roach Army: These are some minions you don\'t want to mess with.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d8/Beau_Collectable_3.png/150px-Beau_Collectable_3.png'}
    ],
    
    // Ben-hwa - Mysterious Objects (ID: 69)
    69: [
        { id: 'benhwa_1', clue: 'Speak with Ben-Hwa.', description: 'Bright-Eyed Virgin: Everybody has to start somewhere...', image: 'https://dateeverything.wiki.gg/images/thumb/a/ad/Ben-Hwa_Collectable_1.png/150px-Ben-Hwa_Collectable_1.png'},
        { id: 'benhwa_2', clue: 'Speak with Ben-Hwa.', description: 'The Indominator: No injuries have been fatal... yet.', image: 'https://dateeverything.wiki.gg/images/thumb/7/79/Ben-Hwa_Collectable_2.png/150px-Ben-Hwa_Collectable_2.png'},
        { id: 'benhwa_3', clue: 'Go all-in with Ben-Hwa on their greatest wish.', description: 'Taco Night - Consummated: Clean-up on aisle you.', image: 'https://dateeverything.wiki.gg/images/thumb/6/6b/Ben-Hwa_Collectable_3.png/150px-Ben-Hwa_Collectable_3.png'}
    ],
    
    // Betty - Bed (ID: 66)
    66: [
        { id: 'betty_1', clue: 'Sleep with your bed, for real.', description: 'Twisted Sheets: You\'ll make your bed tomorrow.', image: 'https://dateeverything.wiki.gg/images/thumb/9/98/Betty_Collectable_1.png/150px-Betty_Collectable_1.png'},
        { id: 'betty_2', clue: 'Feed Betty something from the heart.', description: 'Good Eatin\': I think she liked it...', image: 'https://dateeverything.wiki.gg/images/thumb/3/3c/Betty_Collectable_2.png/150px-Betty_Collectable_2.png'},
        { id: 'betty_3', clue: 'Achieve enemies with benefits with Betty.', description: 'Broken Frame: It\'s so wrong, but feels so right.', image: 'https://dateeverything.wiki.gg/images/thumb/2/23/Betty_Collectable_3.png/150px-Betty_Collectable_3.png'}
    ],
    
    // Beverly - Beverage (ID: 31)
    31: [
        { id: 'beverly_1', clue: 'Order a martini.', description: 'Martini: Served with a twist.', image: 'https://dateeverything.wiki.gg/images/thumb/5/5e/Beverly_Collectable_1.png/150px-Beverly_Collectable_1.png'},
        { id: 'beverly_2', clue: 'Order an Aperol Spritz.', description: 'Aperol Spritz: Bitter, bubbly.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a2/Beverly_Collectable_2.png/150px-Beverly_Collectable_2.png'},
        { id: 'beverly_3', clue: 'Order a Mojito.', description: 'Mojito: Minty and fresh!', image: 'https://dateeverything.wiki.gg/images/thumb/c/cf/Beverly_Collectable_3.png/150px-Beverly_Collectable_3.png'},
        { id: 'beverly_4', clue: 'Order a Ramos Gin Fizz.', description: 'Ramos Gin Fizz: Takes seven minutes to shake.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a2/Beverly_Collectable_4.png/150px-Beverly_Collectable_4.png'},
        { id: 'beverly_5', clue: 'Order a glass of water.', description: 'Glass of Water: Free.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e0/Beverly_Collectable_5.png/150px-Beverly_Collectable_5.png'},
        { id: 'beverly_6', clue: 'Order a soda.', description: 'Soda: Fresh and bubbly.', image: 'https://dateeverything.wiki.gg/images/thumb/8/8e/Beverly_Collectable_6.png/150px-Beverly_Collectable_6.png'},
        { id: 'beverly_7', clue: 'Order a Virgin Mojito.', description: 'Virgin Mojito: Fresh and minty!', image: 'https://dateeverything.wiki.gg/images/thumb/0/04/Beverly_Collectable_7.png/150px-Beverly_Collectable_7.png'},
        { id: 'beverly_8', clue: 'Create a signature drink for Beverly\'s bar.', description: 'The Dateviator: A perfect blend of ingredients.', image: 'https://dateeverything.wiki.gg/images/thumb/3/31/Beverly_Collectable_8.png/150px-Beverly_Collectable_8.png'},
        { id: 'beverly_9', clue: 'Have a drink with Beverly in another storyline.', description: 'Pinot Noir: A delicious grape.', image: 'https://dateeverything.wiki.gg/images/thumb/0/08/Beverly_Collectable_9.png/150px-Beverly_Collectable_9.png'}
    ],
    
    // Bobby - Bobby Pin (ID: 79)
    79: [
        { id: 'bobby_1', clue: 'Speak to Bobby in the office.', description: 'Bobby\'s Businessplate: That\'s not a misspelling, you just don\'t know how to crime.', image: 'https://dateeverything.wiki.gg/images/thumb/c/cf/Bobby_Collectable_1.png/150px-Bobby_Collectable_1.png'},
        { id: 'bobby_2', clue: 'Speak to Bobby in the bedroom.', description: 'Bobby\'s Family: A bunch a rubes, the lot of \'em.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a2/Bobby_Collectable_2.png/150px-Bobby_Collectable_2.png'},
        { id: 'bobby_3', clue: 'Pitch an idea for Bobby\'s gang\'s name.', description: 'Talc Capone: To this day, no one knows where he was scattered.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c3/Bobby_Collectable_3.png/150px-Bobby_Collectable_3.png'}
    ],
    
    // Bodhi - Time Capsule (ID: 87)
    87: [
        { id: 'bodhi_1', clue: 'Achieve a Love ending with Bodhi.', description: 'Bodhi\'s Concert: Rock on!', image: 'https://dateeverything.wiki.gg/images/thumb/5/51/Bodhi_Collectable_1.png/150px-Bodhi_Collectable_1.png'},
        { id: 'bodhi_2', clue: 'Take Bodhi out of his capsule.', description: 'Bodhi\'s Capsule: He won\'t be needing this anymore.', image: 'https://dateeverything.wiki.gg/images/thumb/6/63/Bodhi_Collectable_2.png/150px-Bodhi_Collectable_2.png'},
        { id: 'bodhi_3', clue: 'Speak with Bodhi around the house.', description: 'Bad News: You can\'t tear your eyes away...', image: 'https://dateeverything.wiki.gg/images/thumb/6/63/Bodhi_Collectable_3.png/150px-Bodhi_Collectable_3.png'}
    ],
    
    // Cabrizzio - Cabinet (ID: 33)
    33: [
        { id: 'cabrizzio_1', clue: 'Speak with Cabrizzio.', description: 'Il Ragazzo Pazzo: Cabrizzio\'s dearest friend, aside from you.', image: 'https://dateeverything.wiki.gg/images/thumb/5/52/Cabrizzio_Collectable_1.png/150px-Cabrizzio_Collectable_1.png'},
        { id: 'cabrizzio_2', clue: 'Get Cabrizzio to take off his jacket.', description: 'Cabrizzio\'s Jacket: Surprisingly stiff...', image: 'https://dateeverything.wiki.gg/images/thumb/7/77/Cabrizzio_Collectable_2.png/150px-Cabrizzio_Collectable_2.png'},
        { id: 'cabrizzio_3', clue: 'Speak to Cabrizzio about his past.', description: 'Cabrizzio\'s Past: Change is the only constant, even the most perfect flower will eventually fade and wither.', image: 'https://dateeverything.wiki.gg/images/thumb/1/1c/Cabrizzio_Collectable_3.png/150px-Cabrizzio_Collectable_3.png'}
    ],
    
    // Cam - Trash Can (ID: 43)
    43: [
        { id: 'cam_1', clue: 'Achieve a Friend ending with Cam.', description: 'Banana Peel Hat: Sick.', image: 'https://dateeverything.wiki.gg/images/thumb/1/18/Cam_Collectable_1.png/150px-Cam_Collectable_1.png'},
        { id: 'cam_2', clue: 'Talk about \'food, music, sleeping\' before apologizing.', description: 'Fresh Butts: Good shit right there.', image: 'https://dateeverything.wiki.gg/images/thumb/7/7d/Cam_Collectable_2.png/150px-Cam_Collectable_2.png'},
        { id: 'cam_3', clue: 'Achieve a Love ending with Cam.', description: 'Old Cucumber: Dope.', image: 'https://dateeverything.wiki.gg/images/thumb/3/39/Cam_Collectable_3.png/150px-Cam_Collectable_3.png'},
        { id: 'cam_4', clue: 'Clean out the junk drawer.', description: 'Jerry\'s Trash: It\'ll be good to get rid of that doll\'s head, honestly.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b1/Cam_Collectable_4.png/150px-Cam_Collectable_4.png'}
    ],
    
    // Captain Jacques Pierrot - Ship-in-a-Bottle (ID: 27)
    27: [
        { id: 'jacques_1', clue: 'Begin an adventure with Jacques.', description: 'The Secret Sword: Fearsome. Bejeweled.', image: 'https://dateeverything.wiki.gg/images/thumb/4/42/Captain_Jacques_Collectable_1.png/150px-Captain_Jacques_Collectable_1.png'},
        { id: 'jacques_2', clue: 'Catch up with Jacques after an adventure.', description: 'Cockroach Pirates: Jacques is unstoppable!', image: 'https://dateeverything.wiki.gg/images/thumb/1/15/Captain_Jacques_Collectable_2.png/150px-Captain_Jacques_Collectable_2.png'},
        { id: 'jacques_3', clue: 'Attempt to woo Jacques from the beginning.', description: 'Swabbed Deck: Every deck needs a good swabbing.', image: 'https://dateeverything.wiki.gg/images/thumb/3/32/Captain_Jacques_Collectable_3.png/150px-Captain_Jacques_Collectable_3.png'}
    ],
    
    // Celia - Ceiling (ID: 5)
    5: [
        { id: 'celia_1', clue: 'Speak with Celia.', description: 'Celia\'s Contact Information: You can always just... look up.', image: 'https://dateeverything.wiki.gg/images/thumb/0/06/Celia_Collectable_1.png/150px-Celia_Collectable_1.png'},
        { id: 'celia_2', clue: 'Sign Florence into the Airway Army.', description: 'Florence\'s Contract: Now with 60% more clauses!', image: 'https://dateeverything.wiki.gg/images/thumb/d/d3/Celia_Collectable_2.png/150px-Celia_Collectable_2.png'},
        { id: 'celia_3', clue: 'Become co-mayors.', description: 'Rock to the Key to the House: You can now enter your house from the outside, if that was ever a thing you needed to do.', image: 'https://dateeverything.wiki.gg/images/thumb/1/1e/Celia_Collectable_3.png/150px-Celia_Collectable_3.png'}
    ],
    
    // Chairemi - Chair (ID: 12)
    12: [
        { id: 'chairemi_1', clue: 'See Chairemi\'s play on a Tuesday.', description: '"Pleathers" Set: The newest high school... musical?', image: 'https://dateeverything.wiki.gg/images/thumb/d/dd/Chairemi_Collectable_1.png/150px-Chairemi_Collectable_1.png'},
        { id: 'chairemi_2', clue: 'See Chairemi\'s play on a Wednesday.', description: '"Marquis? More Kiss" Set: There\'s something about altars...', image: 'https://dateeverything.wiki.gg/images/thumb/4/47/Chairemi_Collectable_2.png/150px-Chairemi_Collectable_2.png'},
        { id: 'chairemi_3', clue: 'See Chairemi\'s play on a Thursday.', description: '"Beyond the Starscape" Set: To boldly perform where no chair has played before.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d5/Chairemi_Collectable_3.png/150px-Chairemi_Collectable_3.png'},
        { id: 'chairemi_4', clue: 'See Chairemi\'s play on a Friday.', description: '"Everblade" Set: Valdivian already bought the rights to the prequel series.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e9/Chairemi_Collectable_4.png/150px-Chairemi_Collectable_4.png'},
        { id: 'chairemi_5', clue: 'See Chairemi\'s play on a Saturday.', description: '"Throw It All Away" Set: Mystery Dinner Theater without the Dinner.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e5/Chairemi_Collectable_5.png/150px-Chairemi_Collectable_5.png'}
    ],
    
    // Chance - D20 (ID: 60)
    60: [
        { id: 'chance_1', clue: 'Play through the Guardian campaign.', description: 'Amup Scout: Too cute to battle.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e3/Chance_Collectable_1.png/150px-Chance_Collectable_1.png'},
        { id: 'chance_2', clue: 'Play through the Guardian campaign.', description: 'Tiger Amup: Not dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/a/ab/Chance_Collectable_2.png/150px-Chance_Collectable_2.png'},
        { id: 'chance_3', clue: 'Play through the Troubadour campaign.', description: 'King Cleaver: Perhaps a monologue is coming up soon...', image: 'https://dateeverything.wiki.gg/images/thumb/d/df/Chance_Collectable_3.png/150px-Chance_Collectable_3.png'},
        { id: 'chance_4', clue: 'Play through the Troubadour campaign.', description: 'Queen Sliceilia: Sharp.', image: 'https://dateeverything.wiki.gg/images/thumb/9/93/Chance_Collectable_4.png/150px-Chance_Collectable_4.png'},
        { id: 'chance_5', clue: 'Play through the Enchanter campaign.', description: 'Moys: Not dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e7/Chance_Collectable_5.png/150px-Chance_Collectable_5.png'},
        { id: 'chance_6', clue: 'Play through the Enchanter campaign.', description: 'High Enchanter Melvil:Exactly what an annoying proficient Enchanter would like look.', image: 'https://dateeverything.wiki.gg/images/thumb/2/28/Chance_Collectable_6.png/150px-Chance_Collectable_6.png'},
        { id: 'chance_7', clue: 'Play through the Enchanter campaign.', description: 'Djinn: Releasing one is always a good start to an adventure.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0a/Chance_Collectable_7.png/150px-Chance_Collectable_7.png'},
        { id: 'chance_8', clue: 'Play through the Enchanter campaign.', description: 'Melvil - Djinn Form: That\'s a final boss, for sure.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d2/Chance_Collectable_8.png/150px-Chance_Collectable_8.png'}
    ],
    
    // Luna (Connie) - Video Game Console (ID: 24)
    24: [
        { id: 'connie_1', clue: 'Speak with Connie.', description: 'Moonsurgents: Resurgence: Press Start to Play!', image: 'https://dateeverything.wiki.gg/images/thumb/9/9e/Connie_Collectable_1.png/150px-Connie_Collectable_1.png'},
        { id: 'connie_2', clue: 'Find the goggles.', description: 'Xeno-Goggles: Imagine, glasses that can help you see the world in a different way...', image: 'https://dateeverything.wiki.gg/images/thumb/e/e6/Connie_Collectable_2.png/150px-Connie_Collectable_2.png'},
        { id: 'connie_3', clue: 'Find the relic.', description: 'Harmonic Stratospire: Previously belonging to the ancient race called the \'Guffins\'.', image: 'https://dateeverything.wiki.gg/images/thumb/8/80/Connie_Collectable_3.png/150px-Connie_Collectable_3.png'}
    ],
    
    // Curt & Rod - Curtain (ID: 9)
    9: [
        { id: 'curtrod_1', clue: 'Make it personal.', description: 'Way to make it personal!: Ya jerk!', image: 'https://dateeverything.wiki.gg/images/thumb/9/97/Curt_and_Rod_Collectable_1.png/150px-Curt_and_Rod_Collectable_1.png'},
        { id: 'curtrod_2', clue: 'Do a bad Shade.', description: 'No Shade Detected What is this, noon?', image: 'https://dateeverything.wiki.gg/images/thumb/0/0a/Curt_and_Rod_Collectable_2.png/150px-Curt_and_Rod_Collectable_2.png'},
        { id: 'curtrod_3', clue: 'Make some Shade.', description: 'Ooo Shady! Woohoo!', image: 'https://dateeverything.wiki.gg/images/thumb/4/49/Curt_and_Rod_Collectable_3.png/150px-Curt_and_Rod_Collectable_3.png'},
        { id: 'curtrod_4', clue: 'Throw some shade during the first interaction.', description: 'Got \'Em!: Nice!', image: 'https://dateeverything.wiki.gg/images/thumb/7/7f/Curt_and_Rod_Collectable_4.png/150px-Curt_and_Rod_Collectable_4.png'}
    ],
    
    // Daemon - Unknown (Glitch) (ID: 68)
    68: [
        { id: 'daemon_1', clue: 'CUT CONTENT', description: 'Collectable_Deenah 1: (((cubt_start_append "LET"sGOBOWLING"immediate', image: 'https://dateeverything.wiki.gg/images/thumb/c/ce/Daemon_Collectable_1.png/150px-Daemon_Collectable_1.png'},
        { id: 'daemon_2', clue: 'CUT CONTENT', description: 'Collectable_Deenah 2: wrtprt _3', image: 'https://dateeverything.wiki.gg/images/thumb/5/59/Daemon_Collectable_2.png/150px-Daemon_Collectable_2.png'},
        { id: 'daemon_3', clue: 'CUT CONTENT', description: 'Collectable_Deenah 3: a nice day at the sun', image: 'https://dateeverything.wiki.gg/images/thumb/4/42/Daemon_Collectable_3.png/150px-Daemon_Collectable_3.png'}
    ],
    
    // Daisuke - Dishware (ID: 40)
    40: [
        { id: 'daisuke_1', clue: 'Deliver the package to Kopi.', description: 'Coffee Mugs: Unblemished.', image: 'https://dateeverything.wiki.gg/images/thumb/4/42/Daisuke_Collectable_1.png/150px-Daisuke_Collectable_1.png'},
        { id: 'daisuke_2', clue: 'Deliver the package to Beverly.', description: 'Tipsy Tumbler Rocks Glasses: Pristine.', image: 'https://dateeverything.wiki.gg/images/thumb/6/62/Daisuke_Collectable_2.png/150px-Daisuke_Collectable_2.png'},
        { id: 'daisuke_3', clue: 'Deliver the package to Mitchell Linn.', description: 'Plates: Plating is as vital to a dish as the seasoning.', image: 'https://dateeverything.wiki.gg/images/thumb/c/cf/Daisuke_Collectable_3.png/150px-Daisuke_Collectable_3.png'}
    ],
    
    // Dante - Fire Place (ID: 22)
    22: [
        { id: 'dante_1', clue: 'Speak with Dante.', description: 'The Way of the Flame Badge: You may now date objects up to Level 20!', image: 'https://dateeverything.wiki.gg/images/thumb/3/32/Dante_Collectable_1.png/150px-Dante_Collectable_1.png'},
        { id: 'dante_2', clue: 'Progress through Dante\'s lessons.', description: 'Fireplace Fraud: It was all a lie!', image: 'https://dateeverything.wiki.gg/images/thumb/2/2e/Dante_Collectable_2.png/150px-Dante_Collectable_2.png'},
        { id: 'dante_3', clue: 'Use SPECS to blow Dante away.', description: 'Frozen Dante: You were too cool. Ice cold.', image: 'https://dateeverything.wiki.gg/images/thumb/1/1e/Dante_Collectable_3.png/150px-Dante_Collectable_3.png'}
    ],
    
    // Dasha - Desk (ID: 53)
    53: [
        { id: 'dasha_1', clue: 'Have a practice date at a restaurant.', description: 'A Restaurant: Time for meals!', image: 'https://dateeverything.wiki.gg/images/thumb/a/a7/Dasha_Collectable_1.png/150px-Dasha_Collectable_1.png'},
        { id: 'dasha_2', clue: 'Have a practice date at a bowling alley.', description: 'A Bowling Alley: Strike three!', image: 'https://dateeverything.wiki.gg/images/thumb/2/25/Dasha_Collectable_2.png/150px-Dasha_Collectable_2.png'},
        { id: 'dasha_3', clue: 'Have a practice date at a strip club.', description: 'A Strip Club: Just as you always imagined.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a8/Dasha_Collectable_3.png/150px-Dasha_Collectable_3.png'}
    ],
    
    // Diana - Diary (ID: 67)
    67: [
        { id: 'diana_1', clue: 'Speak with Diana.', description: 'High School Scrawlings: It was a bad day at school...', image: 'https://dateeverything.wiki.gg/images/thumb/8/86/Diana_Collectable_1.png/150px-Diana_Collectable_1.png'},
        { id: 'diana_2', clue: 'Choose the seizure memory.', description: 'Seizure Incident: There was an unearthly sound, a violent pulling of air through a narrow space.', image: 'https://dateeverything.wiki.gg/images/thumb/3/36/Diana_Collectable_2.png/150px-Diana_Collectable_2.png'},
        { id: 'diana_3', clue: 'Choose the theater memory.', description: 'Waiting in the Wings: Everyone was speaking English but it sounded... different, like poetry or like a song with no music.', image: 'https://dateeverything.wiki.gg/images/thumb/4/4f/Diana_Collectable_3.png/150px-Diana_Collectable_3.png'},
        { id: 'diana_4', clue: 'Choose the skiing memory.', description: 'Skiing into a Tree: bumpbumpbumpityBANG all the way to where the stitches lady was.', image: 'https://dateeverything.wiki.gg/images/thumb/5/58/Diana_Collectable_4.png/150px-Diana_Collectable_4.png'}
    ],
    
    // Dirk - Dirty Laundry (ID: 76)
    76: [
        { id: 'dirk_1', clue: 'Speak to Dirk.', description: 'Dirk\'s Mother: A beautiful and caring loom.', image: 'https://dateeverything.wiki.gg/images/thumb/4/45/Dirk_Collectable_1.png/150px-Dirk_Collectable_1.png'},
        { id: 'dirk_2', clue: 'Speak to Dirk after breaking up Dirk and Harper.', description: 'Bat-Man Dakimakura: Perfect for resting after a long day of crime-fighting.', image: 'https://dateeverything.wiki.gg/images/thumb/8/83/Dirk_Collectable_2.png/150px-Dirk_Collectable_2.png'},
        { id: 'dirk_3', clue: 'Break up Dirk and Harper.', description: 'Clarence Couture: Dirk\'s inner form, begging to be let out.', image: 'https://dateeverything.wiki.gg/images/thumb/1/17/Dirk_Collectable_3.png/150px-Dirk_Collectable_3.png'}
    ],
    
    // Dishy - Dishwasher (ID: 39)
    39: [
        { id: 'dishy_1', clue: 'Wait for it.', description: 'Tears of a Dishwasher: You stood by while he was in his time of need.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3b/Dishy_Collectable_1.png/150px-Dishy_Collectable_1.png'},
        { id: 'dishy_2', clue: 'Refund Dishy.', description: '599 Dollar Refund: Yay! You earned the most money you\'ll ever get in this game!', image: 'https://dateeverything.wiki.gg/images/thumb/5/59/Dishy_Collectable_2.png/150px-Dishy_Collectable_2.png'},
        { id: 'dishy_3', clue: 'Achieve the Boss Battle.', description: 'Dishy\'s Final Form: SPOONS FORKS KNIVES AND SPORKS DIRTY PLATES AND BOWLS AND MORE SPOONS FORKS KNIVES AND SPORKS CRUSTY STAINS AND FILTHY CHORES DISHYWASH!', image: 'https://dateeverything.wiki.gg/images/thumb/9/95/Dishy_Collectable_3.png/150px-Dishy_Collectable_3.png'}
    ],
    
    // Dolly - Dust Bunny (ID: 21)
    21: [
        { id: 'dolly_1', clue: 'Ask about Dolly\'s modeling.', description: 'Playbunny Magazine, May Issue: That\'s some strategic bunny placement right there.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a5/Dolly_Collectable_1.png/150px-Dolly_Collectable_1.png'},
        { id: 'dolly_2', clue: 'Go on an expedition with Dolly.', description: 'Moonlit Archaeological Site: Full of the mysteries of the ancient Dustonians.', image: 'https://dateeverything.wiki.gg/images/thumb/4/43/Dolly_Collectable_2.png/150px-Dolly_Collectable_2.png'},
        { id: 'dolly_3', clue: 'Go on an expedition with Dolly.', description: 'Dustonian Cave Painting: Full of lovely little details...', image: 'https://dateeverything.wiki.gg/images/thumb/a/a2/Dolly_Collectable_3.png/150px-Dolly_Collectable_3.png'},
        { id: 'dolly_4', clue: 'Sneeze.', description: 'Dolly, Dust Form: Kinda cute, actually.', image: 'https://dateeverything.wiki.gg/images/thumb/8/87/Dolly_Collectable_4.png/150px-Dolly_Collectable_4.png'}
    ],
    
    // Dorian - Door (ID: 7)
    7: [
        { id: 'dorian_1', clue: 'Speak to Dorian at the front foyer.', description: 'Front Dorian: The most important door there is, and ever was.', image: 'https://dateeverything.wiki.gg/images/thumb/8/86/Dorian_Collectable_1.png/150px-Dorian_Collectable_1.png'},
        { id: 'dorian_2', clue: 'Speak to Dorian facing the wrong way.', description: 'Back Dorian: It is difficult to hear the collectable description, unfortunately...', image: 'https://dateeverything.wiki.gg/images/thumb/9/98/Dorian_Collectable_2.png/150px-Dorian_Collectable_2.png'},
        { id: 'dorian_3', clue: 'Speak to the most hidden Dorian.', description: 'Trap Dorian: The only horizontal door around.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a6/Dorian_Collectable_3.png/150px-Dorian_Collectable_3.png'},
        { id: 'dorian_4', clue: 'Speak to Dorian in the Kitchen.', description: 'Tiny Dorian: There\'s nothing funny about this.', image: 'https://dateeverything.wiki.gg/images/thumb/7/74/Dorian_Collectable_4.png/150px-Dorian_Collectable_4.png'}
    ],
    
    // Doug - Overwhelming Sense of Existential Dread (ID: 98)
    98: [
        { id: 'doug_1', clue: 'Solve a difficult puzzle.', description: 'Doug Point: If you get 5 of them, something happens? I wouldn\'t trust this.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f2/Doug_Collectable_1.png/150px-Doug_Collectable_1.png'},
        { id: 'doug_2', clue: 'Agree to play a round of sudoku with Doug.', description: 'Doug\'s Sudoku: This is fine.', image: 'https://dateeverything.wiki.gg/images/thumb/c/ca/Doug_Collectable_2.png/150px-Doug_Collectable_2.png'},
        { id: 'doug_3', clue: 'Break through Doug\'s Barriers.', description: 'Hope: She was beautiful...', image: 'https://dateeverything.wiki.gg/images/thumb/7/76/Doug_Collectable_3.png/150px-Doug_Collectable_3.png'}
    ],
    
    // Drysdale - Dryer (ID: 74)
    74: [
        { id: 'drysdale_1', clue: 'Speak to Drysdale.', description: 'The Pale Betrayal: The cause of the breakup...', image: 'https://dateeverything.wiki.gg/images/thumb/b/b8/Drysdale_Collectable_1.png/150px-Drysdale_Collectable_1.png'},
        { id: 'drysdale_2', clue: 'Gain Drysdale\'s approval.', description: 'Drysdale Points: Look at you! Getting Drysdale Points! That\'s great!', image: 'https://dateeverything.wiki.gg/images/thumb/7/7c/Drysdale_Collectable_2.png/150px-Drysdale_Collectable_2.png'},
        { id: 'drysdale_3', clue: 'Achieve a Hate ending with Drysdale.', description: 'Static Shock: Ouch!', image: 'https://dateeverything.wiki.gg/images/thumb/a/a8/Drysdale_Collectable_3.png/150px-Drysdale_Collectable_3.png'}
    ],
    
    // Dunk - Sporting Goods (ID: 81)
    81: [
        { id: 'dunk_1', clue: 'Fail to catch the basketball.', description: 'Stepford\'s Smeared Face: Poor Stepford - his nose will be forever slightly bruised.', image: 'https://dateeverything.wiki.gg/images/thumb/6/63/Dunk_Collectable_1.png/150px-Dunk_Collectable_1.png'},
        { id: 'dunk_2', clue: 'Meet Dunk at the exercise ball.', description: 'Crouching Lessons: Enjoy the lower half of the world with increased knee mobility!', image: 'https://dateeverything.wiki.gg/images/thumb/2/28/Dunk_Collectable_2.png/150px-Dunk_Collectable_2.png'},
        { id: 'dunk_3', clue: 'Achieve a Hate ending with Dunk.', description: 'Deflated football: Not good for much anymore.', image: 'https://dateeverything.wiki.gg/images/thumb/7/7a/Dunk_Collectable_3.png/150px-Dunk_Collectable_3.png'}
    ],
    
    // Eddie & Volt - Electricity (ID: 19)
    19: [
        { id: 'eddievolt_1', clue: 'Order a drink from Eddie or Volt', description: 'Whiskey Sour: The Seasonal Menu Item.', image: 'https://dateeverything.wiki.gg/images/thumb/7/7e/Eddie_%26_Volt_Collectable_1.png/150px-Eddie_%26_Volt_Collectable_1.png'},
        { id: 'eddievolt_2', clue: 'Ask Volt about the show the first time you meet him.', description: 'The Spotlight Show: No better showcase of talent in the whole house.', image: 'https://dateeverything.wiki.gg/images/thumb/e/eb/Eddie_%26_Volt_Collectable_2.png/150px-Eddie_%26_Volt_Collectable_2.png'},
        { id: 'eddievolt_3', clue: 'Speak with Eddie & Volt.', description: 'The Breaker Box: Thirsty? Lonely? Come to the hottest bar this side of the bannister.', image: 'https://dateeverything.wiki.gg/images/thumb/0/08/Eddie_%26_Volt_Collectable_3.png/150px-Eddie_%26_Volt_Collectable_3.png'}
    ],
    
    // Fantina - Fan (ID: 82)
    82: [
        { id: 'fantina_1', clue: 'Speak to Fantina.', description: 'Portrait Of you, In Pasta: She really captured your carb-heavy side.', image: 'https://dateeverything.wiki.gg/images/thumb/9/97/Fantina_Collectable_1.png/150px-Fantina_Collectable_1.png'},
        { id: 'fantina_2', clue: 'Speak to Fantina.', description: 'Hallowed Sanctuary of Eternal Reverence: Hallowed? Certainly. Eternal? Perhaps. Reverent? Absolutely.', image: 'https://dateeverything.wiki.gg/images/thumb/1/1d/Fantina_Collectable_2.png/150px-Fantina_Collectable_2.png'},
        { id: 'fantina_3', clue: 'Speak to Fantina about your relationship.', description: 'Fantina\'s Parents: Looks like they\'re having a bit of fun.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f4/Fantina_Collectable_3.png/150px-Fantina_Collectable_3.png'},
        { id: 'fantina_4', clue: 'Somehow achieve a Hate ending with Fantina.', description: 'Toppled fan: Hopefully you did this just for the achievement.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f5/Fantina_Collectable_4.png/150px-Fantina_Collectable_4.png'}
    ],
    
    // Farya - First Aid Kit (ID: 52)
    52: [
        { id: 'farya_1', clue: 'Speak with Farya.', description: 'Skeletal Illustration: The number of bones in the human body is 206.', image: 'https://dateeverything.wiki.gg/images/thumb/7/79/Farya_Collectable_1.png/150px-Farya_Collectable_1.png'},
        { id: 'farya_2', clue: 'Speak with Farya.', description: 'Splinting A Bone: Immobilize the joints above and below a fracture.', image: 'https://dateeverything.wiki.gg/images/thumb/b/be/Farya_Collectable_2.png/150px-Farya_Collectable_2.png'},
        { id: 'farya_3', clue: 'Speak with Farya.', description: 'ABCs: Airway, Breathing, Circulation', image: 'https://dateeverything.wiki.gg/images/thumb/e/ef/Farya_Collectable_3.png/150px-Farya_Collectable_3.png'},
        { id: 'farya_4', clue: 'Speak with Farya.', description: 'How to Diagnose: Diagnoses are made via the twin paths of symptoms, which a patient reports to a physician, and signs, which are gleaned from examination.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f3/Farya_Collectable_4.png/150px-Farya_Collectable_4.png'},
        { id: 'farya_5', clue: 'Speak with Farya.', description: 'Allografts: Sometimes a patient\'s skin isn\'t healthy enough for grafting - an allograft (skin from a corpse) may be used.', image: 'https://dateeverything.wiki.gg/images/thumb/4/43/Farya_Collectable_5.png/150px-Farya_Collectable_5.png'},
        { id: 'farya_6', clue: 'Speak with Farya.', description: 'Brain Surgery: Patients may be awake for brain surgery in order to provide verbal feedback during the procedure. This lessens the chance of damaging vital brain areas.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2a/Farya_Collectable_6.png/150px-Farya_Collectable_6.png'}
    ],
    
    // Florence - Floor (ID: 4)
    4: [
        { id: 'florence_1', clue: 'Ask for tea for Florence.', description: 'Spilled Tea: Oh dear!', image: 'https://dateeverything.wiki.gg/images/thumb/2/22/Florence_Collectable_1.png/150px-Florence_Collectable_1.png'},
        { id: 'florence_2', clue: 'Get Florence to cry during a play.', description: 'Spilled Tears: You can only tell the best actors by how well they can make the audience cry.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b4/Florence_Collectable_2.png/150px-Florence_Collectable_2.png'},
        { id: 'florence_3', clue: 'Speak with Florence about Airway.', description: 'Spilled Airway Air: It\'s a resale triangle!', image: 'https://dateeverything.wiki.gg/images/thumb/d/d1/Florence_Collectable_3.png/150px-Florence_Collectable_3.png'}
    ],
    
    // Freddy - Refrigerator (ID: 35)
    35: [
        { id: 'freddy_1', clue: 'Get Thai leftovers from Freddy.', description: 'Pad See Ew: Broccoli, shiitake AND button mushrooms, and possibly egg!', image: 'https://dateeverything.wiki.gg/images/thumb/f/f9/Freddy_Collectable_1.png/150px-Freddy_Collectable_1.png'},
        { id: 'freddy_2', clue: 'Get pizza from Freddy.', description: 'Leftover Pizza: Pineapple on pizza is the best.', image: 'https://dateeverything.wiki.gg/images/thumb/6/67/Freddy_Collectable_2.png/150px-Freddy_Collectable_2.png'},
        { id: 'freddy_3', clue: 'Get the cake from Freddy.', description: 'Peaches and Cream Bundt Cake: No peach flavoring here - though it is a little dry.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b7/Freddy_Collectable_3.png/150px-Freddy_Collectable_3.png'},
        { id: 'freddy_4', clue: 'Get a snack after the pizza.', description: 'A Snack.: Whoops, where did this come from?', image: 'https://dateeverything.wiki.gg/images/thumb/9/95/Freddy_Collectable_4.png/150px-Freddy_Collectable_4.png'},
        { id: 'freddy_5', clue: 'Achieve a Love or Friend ending with Freddy.', description: 'Ice Cream Drawer: What Freddy\'s dreams are apparently made of.', image: 'https://dateeverything.wiki.gg/images/thumb/c/cd/Freddy_Collectable_5.png/150px-Freddy_Collectable_5.png'},
        { id: 'freddy_6', clue: 'Get nothing from Freddy.', description: 'A Perfect Mango: It\'s even cut into perfect little squares.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2e/Freddy_Collectable_6.png/150px-Freddy_Collectable_6.png'}
    ],
    
    // Friar Errol - Air Fryer (ID: 41)
    41: [
        { id: 'friarerrol_1', clue: 'Speak to Friar Errol.', description: 'Pamphlet: You should study this, but the text is too small.', image: 'https://dateeverything.wiki.gg/images/thumb/8/87/Friar_Errol_Collectable_1.png/150px-Friar_Errol_Collectable_1.png'},
        { id: 'friarerrol_2', clue: 'Gain some esteem from Friar Errol.', description: 'Hymnal: You will never give up Our Lord in Convection. You will never let Him down.', image: 'https://dateeverything.wiki.gg/images/thumb/9/91/Friar_Errol_Collectable_2.png/150px-Friar_Errol_Collectable_2.png'},
        { id: 'friarerrol_3', clue: 'Speak to Friar Errol.', description: 'Air-Fried French Fires: Not a drop of oil has touched them. Praise His Name.', image: 'https://dateeverything.wiki.gg/images/thumb/2/23/Friar_Errol_Collectable_3.png/150px-Friar_Errol_Collectable_3.png'},
        { id: 'friarerrol_4', clue: 'Speak to Friar Errol.', description: 'Temptation: RESIST! RESIST!', image: 'https://dateeverything.wiki.gg/images/thumb/0/03/Friar_Errol_Collectable_4.png/150px-Friar_Errol_Collectable_4.png'}
    ],
    
    // Gaia - Globe (ID: 26)
    26: [
        { id: 'gaia_1', clue: 'Speak with Gaia.', description: 'Newfoundland!: A place where strong accents reside.', image: 'https://dateeverything.wiki.gg/images/thumb/4/4d/Gaia_Collectable_1.png/150px-Gaia_Collectable_1.png'},
        { id: 'gaia_2', clue: 'Achieve a Friendship ending with Gaia.', description: 'Gaia\'s Photo of You: Didn\'t really capture your essence...', image: 'https://dateeverything.wiki.gg/images/thumb/3/33/Gaia_Collectable_2.png/150px-Gaia_Collectable_2.png'},
        { id: 'gaia_3', clue: 'Find all 16 Travelers and bring them to Gaia.', description: 'Around the World in 80 Days: This title was never changed.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e3/Gaia_Collectable_3.png/150px-Gaia_Collectable_3.png'}
    ],
    
    // Hank(s) - Hangers (ID: 72)
    72: [
        { id: 'hanks_1', clue: 'Go on an adventure with the Hanks.', description: 'Hank Gliding!: Catch the breeze!', image: 'https://dateeverything.wiki.gg/images/thumb/e/e1/Hanks_Collectable_1.png/150px-Hanks_Collectable_1.png'},
        { id: 'hanks_2', clue: 'Go on an adventure with the Hanks.', description: 'Windsurfing!: Don\'t think about it too much.', image: 'https://dateeverything.wiki.gg/images/thumb/d/df/Hanks_Collectable_2.png/150px-Hanks_Collectable_2.png'},
        { id: 'hanks_3', clue: 'Go on an adventure with the Hanks.', description: 'Paragliding!: Fantina\'s breeze is eternal!', image: 'https://dateeverything.wiki.gg/images/thumb/3/33/Hanks_Collectable_3.png/150px-Hanks_Collectable_3.png'},
        { id: 'hanks_4', clue: 'Go on an adventure with the Hanks.', description: 'Monster Thermals!: Better than normal Hank gliding - the HVAC rips!', image: 'https://dateeverything.wiki.gg/images/thumb/5/5f/Hanks_Collectable_4.png/150px-Hanks_Collectable_4.png'},
        { id: 'hanks_5', clue: 'Go on an adventure with the Hanks.', description: 'Wing Suits! Wing Suits! Wing Suits!: EPIC!!!!!!!!!!!!!!!!!!', image: 'https://dateeverything.wiki.gg/images/thumb/7/7a/Hanks_Collectable_5.png/150px-Hanks_Collectable_5.png'}
    ],
    
    // Harper - Hamper (ID: 75)
    75: [
        { id: 'harper_1', clue: 'Speak to Harper.', description: 'Chappy: Poor guy - never stood a chance in the washer.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d4/Harper_Collectable_1.png/150px-Harper_Collectable_1.png'},
        { id: 'harper_2', clue: 'Side with Harper when asked.', description: 'Harper\'s Doll: This... is a doll?', image: 'https://dateeverything.wiki.gg/images/thumb/9/9f/Harper_Collectable_2.png/150px-Harper_Collectable_2.png'},
        { id: 'harper_3', clue: 'Achieve solo Friend ending with Harper.', description: 'Friendship Tattoo: There\'s no stronger bond that friendship... right?', image: 'https://dateeverything.wiki.gg/images/thumb/c/c6/Harper_Collectable_3.png/150px-Harper_Collectable_3.png'}
    ],
    
    // Hector - HVAC (ID: 14)
    14: [
        { id: 'hector_1', clue: 'Speak with Hector.', description: 'Hector, Grate Form: Oh, grate.', image: 'https://dateeverything.wiki.gg/images/thumb/3/38/Hector_Collectable_1.png/150px-Hector_Collectable_1.png'},
        { id: 'hector_2', clue: 'Ask to hear Hector\'s writings.', description: 'Grate Expectations: A novelization of musings.', image: 'https://dateeverything.wiki.gg/images/thumb/1/14/Hector_Collectable_2.png/150px-Hector_Collectable_2.png'},
        { id: 'hector_3', clue: 'Ask for a picture of Hector.', description: 'Picture of Hector.: This must be what he looks like.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d0/Hector_Collectable_3.png/150px-Hector_Collectable_3.png'}
    ],
    
    // Henry Hoove - Vacuum Cleaner (ID: 78)
    78: [
        { id: 'hoove_1', clue: 'Go drinking with Hoove.', description: 'Motor Oil: Tough going in, tough going out...', image: 'https://dateeverything.wiki.gg/images/thumb/7/70/Hoove_Collectable_1.png/150px-Hoove_Collectable_1.png'},
        { id: 'hoove_2', clue: 'Catch a ballgame with Hoove.', description: 'Hankees Game: What a show!', image: 'https://dateeverything.wiki.gg/images/thumb/9/99/Hoove_Collectable_2.png/150px-Hoove_Collectable_2.png'},
        { id: 'hoove_3', clue: 'Remove Hoove\'s button from his bag.', description: 'Shiny Red Button: What it says on the tin.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2e/Hoove_Collectable_3.png/150px-Hoove_Collectable_3.png'},
        { id: 'hoove_4', clue: 'Remove lint and hair from his bag.', description: 'Lint and Hair: They go together like cookies and cream. Which this is not.', image: 'https://dateeverything.wiki.gg/images/thumb/a/af/Hoove_Collectable_4.png/150px-Hoove_Collectable_4.png'},
        { id: 'hoove_5', clue: 'Remove a bird from Hoove\'s bag.', description: 'Origami Bird: How did this get in Hoove\'s bag? At least it can fly free now.', image: 'https://dateeverything.wiki.gg/images/thumb/b/ba/Hoove_Collectable_5.png/150px-Hoove_Collectable_5.png'},
        { id: 'hoove_6', clue: 'Remove something from Hoove\'s bag.', description: 'Something: Beyond description.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9d/Hoove_Collectable_6.png/150px-Hoove_Collectable_6.png'}
    ],
    
    // Hero Hime - Anime Figurine (ID: 70)
    70: [
        { id: 'herohime_1', clue: 'Speak with Hero-Hime.', description: 'Nekoboru: Part cat - part ball. All Charisma', image: 'https://dateeverything.wiki.gg/images/thumb/b/b0/Hero_Hime_Collectable_1.png/150px-Hero_Hime_Collectable_1.png'},
        { id: 'herohime_2', clue: 'Speak with Hero-Hime.', description: 'Starlight Overheaders: Episode 3 - Rival San Gives Into Dread!!: Anxiety, frustration, self-blame. All these are a part of tennis as well.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d4/Hero_Hime_Collectable_2.png/150px-Hero_Hime_Collectable_2.png'},
        { id: 'herohime_3', clue: 'Play for the title of Tennistar.', description: 'Tennistar: Hero-Hime has won it - game, set, and match!', image: 'https://dateeverything.wiki.gg/images/thumb/8/88/Hero_Hime_Collectable_3.png/150px-Hero_Hime_Collectable_3.png'},
        { id: 'herohime_4', clue: 'Allow Hero-Hime to win the Tennistar match.', description: 'Dark Tennistar: Hero-Hime has won the title, but at what cost...', image: 'https://dateeverything.wiki.gg/images/thumb/4/49/Hero_Hime_Collectable_4.png/150px-Hero_Hime_Collectable_4.png'},
        { id: 'herohime_5', clue: 'Allow Hero-Hime to win the Tennistar match.', description: 'Become the Boru.: Seems like Hero-Hime might succumb to the dread.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2c/Hero_Hime_Collectable_5.png/150px-Hero_Hime_Collectable_5.png'},
        { id: 'herohime_6', clue: 'Remove something belonging to Hero-Hime from Hoove.', description: 'Hero Hime Trading Card: Returned to its rightful owner from Hoove.', image: 'https://dateeverything.wiki.gg/images/thumb/1/12/Hero_Hime_Collectable_6.png/150px-Hero_Hime_Collectable_6.png'}
    ],
    
    // Holly - Holidays (ID: 92)
    92: [
        { id: 'holly_1', clue: 'Achieve a Love ending with Holly.', description: 'Basket of Roses: For the Holly-day Queen!', image: 'https://dateeverything.wiki.gg/images/thumb/2/2e/Holly_Collectable_1.png/150px-Holly_Collectable_1.png'},
        { id: 'holly_2', clue: 'Speak with Holly.', description: 'Mirthday Party Flyer: You\'re invited! No cake.', image: 'https://dateeverything.wiki.gg/images/thumb/7/71/Holly_Collectable_2.png/150px-Holly_Collectable_2.png'},
        { id: 'holly_3', clue: 'Achieve a Hate ending with Holly.', description: 'Lump of Coal: Useful only when heating things.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b7/Holly_Collectable_3.png/150px-Holly_Collectable_3.png'}
    ],
    
    // I, Ronaldini - Fold-out Ironing Board (ID: 44)
    44: [
        { id: 'ronaldini_1', clue: 'Find out about I, Ronaldini\'s background.', description: 'Lloydminster Postcard: Flat, Grim, Canadian.', image: 'https://dateeverything.wiki.gg/images/thumb/7/71/I%2C_Ronaldini_Collectable_1.png/150px-I%2C_Ronaldini_Collectable_1.png'},
        { id: 'ronaldini_2', clue: 'Attend I, Ronaldini\'s magic show.', description: 'I, Ronaldini\'s Show of Wonders!: Stupefying, Exhilarating, Permanently Pressed!', image: 'https://dateeverything.wiki.gg/images/thumb/1/1a/I%2C_Ronaldini_Collectable_2.png/150px-I%2C_Ronaldini_Collectable_2.png'},
        { id: 'ronaldini_3', clue: 'Help I, Ronaldini to write his autobiography.', description: 'I, Ronaldini’s Autobiography: Detailed. Revealing. Invisible.', image: 'https://dateeverything.wiki.gg/images/thumb/1/16/I%2C_Ronaldini_Collectable_3.png/150px-I%2C_Ronaldini_Collectable_3.png'}
    ],
    
    // Jean Loo - Toilet (ID: 46)
    46: [
        { id: 'jeanloo_1', clue: 'Speak to Jean Loo.', description: 'Crapping: (Note: Cool-Rapping!)', image: 'https://dateeverything.wiki.gg/images/thumb/5/52/Jean_Loo_Collectable_1.png/150px-Jean_Loo_Collectable_1.png'},
        { id: 'jeanloo_2', clue: 'Use Jean Loo as a toilet through dialogue.', description: 'The Naked Truth: Just had to do it to him.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a4/Jean_Loo_Collectable_2.png/150px-Jean_Loo_Collectable_2.png'},
        { id: 'jeanloo_3', clue: 'Beat Jean Loo at all Crap Battles.', description: 'Golden Lid: Worn by the lords of the throne.', image: 'https://dateeverything.wiki.gg/images/thumb/7/75/Jean_Loo_Collectable_3.png/150px-Jean_Loo_Collectable_3.png'},
        { id: 'jeanloo_4', clue: 'Speak to Jean Loo.', description: 'Ballcock: It\'s really what it\'s called.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3f/Jean_Loo_Collectable_4.png/150px-Jean_Loo_Collectable_4.png'}
    ],
    
    // Jerry - Junk Drawer (ID: 54)
    54: [
        { id: 'jerry_1', clue: 'Speak with Jerry.', description: 'Jerry\'s Junk Drawer: Witness the splendor!', image: 'https://dateeverything.wiki.gg/images/thumb/9/99/Jerry_Collectable_1.png/150px-Jerry_Collectable_1.png'},
        { id: 'jerry_2', clue: 'Create Art from Junk.', description: 'Junk Carousel: Upcycled to perfection!', image: 'https://dateeverything.wiki.gg/images/thumb/7/7c/Jerry_Collectable_2.png/150px-Jerry_Collectable_2.png'},
        { id: 'jerry_3', clue: 'Clean out the junk drawer.', description: 'Empty Drawer: The padded edges remind you of somewhere...', image: 'https://dateeverything.wiki.gg/images/thumb/0/08/Jerry_Collectable_3.png/150px-Jerry_Collectable_3.png'}
    ],
    
    // Johnny Splash - Shower (ID: 47)
    47: [
        { id: 'johnnysplash_1', clue: 'Speak with Johnny.', description: 'Johnny\'s Audition: He did his best.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9d/Johnny_Splash_Collectable_1.png/150px-Johnny_Splash_Collectable_1.png'},
        { id: 'johnnysplash_2', clue: 'Confront Johnny about his background.', description: 'Johnny\'s Lore: It\'s honestly all over the place. Is Duke real?', image: 'https://dateeverything.wiki.gg/images/thumb/4/46/Johnny_Splash_Collectable_2.png/150px-Johnny_Splash_Collectable_2.png'},
        { id: 'johnnysplash_3', clue: 'Convince Johnny you enjoy his music.', description: 'Johnny\'s Demo Tape: Not recommended for listening at home or anywhere.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2a/Johnny_Splash_Collectable_3.png/150px-Johnny_Splash_Collectable_3.png'}
    ],
    
    // Keith - Skeleton Key (ID: 86)
    86: [
        { id: 'keith_1', clue: 'Bring up your Smarts Stat and speak with Keith.', description: 'Smarts Candy: Use this to redo a Hate ending with any Smarts-aligned dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/8/87/Keith_Collectable_1.png/150px-Keith_Collectable_1.png'},
        { id: 'keith_2', clue: 'Bring up your Poise Stat and speak with Keith.', description: 'Poise Candy: Use this to redo a Hate ending with any Poise-aligned dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2f/Keith_Collectable_2.png/150px-Keith_Collectable_2.png'},
        { id: 'keith_3', clue: 'Bring up your Empathy Stat and speak with Keith.', description: 'Empathy Candy: Use this to redo a Hate ending with any Empathy-aligned dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3f/Keith_Collectable_3.png/150px-Keith_Collectable_3.png'},
        { id: 'keith_4', clue: 'Bring up your Charm Stat and speak with Keith.', description: 'Charm Candy: Use this to redo a Hate ending with any Charm-aligned dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/4/4f/Keith_Collectable_4.png/150px-Keith_Collectable_4.png'},
        { id: 'keith_5', clue: 'Bring up your Sass Stat and speak with Keith.', description: 'Sass Candy: Use this to redo a Hate ending with any Sass-aligned dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/2/27/Keith_Collectable_5.png/150px-Keith_Collectable_5.png'}
    ],
    
    // Keyes - Grand Piano (ID: 25)
    25: [
        { id: 'keyes_1', clue: 'Speak with Keyes.', description: 'Door 33 Sheet Music: It\'s about the notes you don\'t play.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9f/Keyes_Collectable_1.png/150px-Keyes_Collectable_1.png'},
        { id: 'keyes_2', clue: 'Get Keyes to write her great work.', description: 'Capriccio Infernal: A magnum opus.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a9/Keyes_Collectable_2.png/150px-Keyes_Collectable_2.png'},
        { id: 'keyes_3', clue: 'Attend Keyes\' concert.', description: 'Keyes\' Performance Gown: As if she could get any more stunning.', image: 'https://dateeverything.wiki.gg/images/thumb/e/ed/Keyes_Collectable_3.png/150px-Keyes_Collectable_3.png'}
    ],
    
    // Koa - Couch (ID: 20)
    20: [
        { id: 'koa_1', clue: 'Sit with Koa.', description: '', image: 'https://dateeverything.wiki.gg/images/thumb/8/8e/Koa_Collectable_1.png/150px-Koa_Collectable_1.png'},
        { id: 'koa_2', clue: 'Sit with Koa.', description: '', image: 'https://dateeverything.wiki.gg/images/thumb/3/35/Koa_Collectable_2.png/150px-Koa_Collectable_2.png'},
        { id: 'koa_3', clue: 'Sit with Koa.', description: '', image: 'https://dateeverything.wiki.gg/images/thumb/d/d8/Koa_Collectable_3.png/150px-Koa_Collectable_3.png'},
        { id: 'koa_4', clue: 'Sit with Koa.', description: '', image: 'https://dateeverything.wiki.gg/images/thumb/f/f3/Koa_Collectable_4.png/150px-Koa_Collectable_4.png'},
        { id: 'koa_5', clue: 'Achieve a Love ending with Koa.', description: '', image: 'https://dateeverything.wiki.gg/images/thumb/5/57/Koa_Collectable_5.png/150px-Koa_Collectable_5.png'}
    ],
    
    // Kopi - Coffeepot (ID: 42)
    42: [
        { id: 'kopi_1', clue: 'Order a latte from Kopi.', description: 'Latte: A Roofbucks essential, with just a touch of foam', image: 'https://dateeverything.wiki.gg/images/thumb/c/cf/Kopi_Collectable_1.png/150px-Kopi_Collectable_1.png'},
        { id: 'kopi_2', clue: 'Order an affogato from Kopi.', description: 'Affogato: A fun drink - ice cream drowned in coffee!', image: 'https://dateeverything.wiki.gg/images/thumb/c/cc/Kopi_Collectable_2.png/150px-Kopi_Collectable_2.png'},
        { id: 'kopi_3', clue: 'Order an Irish Coffee from Kopi.', description: 'Irish Coffee: Is it the booze that makes you feel good, or just the hint of vanilla?', image: 'https://dateeverything.wiki.gg/images/thumb/8/8f/Kopi_Collectable_3.png/150px-Kopi_Collectable_3.png'}
    ],
    
    // Kristof - Crosstrainer (ID: 80)
    80: [
        { id: 'kristof_1', clue: 'Speak with Kristof.', description: 'Ring From the Queen of Collapsible Bookshelves: From Kristof\'s father to you.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c7/Kristof_Collectable_1.png/150px-Kristof_Collectable_1.png'},
        { id: 'kristof_2', clue: 'Speak with Kristof.', description: 'One-Pound Dumbbells: They\'re so cute!', image: 'https://dateeverything.wiki.gg/images/thumb/a/a9/Kristof_Collectable_2.png/150px-Kristof_Collectable_2.png'},
        { id: 'kristof_3', clue: 'Listen to Kristof\'s tales.', description: 'Bjartur the Oil Fryer: Too greasy to be a dateable object.', image: 'https://dateeverything.wiki.gg/images/thumb/5/59/Kristof_Collectable_3.png/150px-Kristof_Collectable_3.png'}
    ],
    
    // Memoria - Memories (ID: 91)
    91: [
        { id: 'memoria_1', clue: 'Lady Memoria\'s cleaning - Day 1', description: 'Moonshine Jug Tour Poster: It\'s his use of lids that really wowed the critics.', image: 'https://dateeverything.wiki.gg/images/thumb/6/65/Memoria_Collectable_1.png/150px-Memoria_Collectable_1.png'},
        { id: 'memoria_2', clue: 'Lady Memoria\'s cleaning - Day 1', description: 'Tickets to Bruno Jars Tour, With Album: No scalpers here - you paid the fair 200% markup to the ticketing company.', image: 'https://dateeverything.wiki.gg/images/thumb/7/79/Memoria_Collectable_2.png/150px-Memoria_Collectable_2.png'},
        { id: 'memoria_3', clue: 'Lady Memoria\'s cleaning - Day 1', description: 'Stamp and Coin Collection: Gotta catch \'em all!', image: 'https://dateeverything.wiki.gg/images/thumb/2/25/Memoria_Collectable_3.png/150px-Memoria_Collectable_3.png'},
        { id: 'memoria_4', clue: 'Lady Memoria\'s cleaning - Day 1', description: 'Frame Informer Magazines: You read this for the articles.', image: 'https://dateeverything.wiki.gg/images/thumb/2/23/Memoria_Collectable_4.png/150px-Memoria_Collectable_4.png'},
        { id: 'memoria_5', clue: 'Lady Memoria\'s cleaning - Day 1', description: 'Believe In Your Shelf Poster: There\'s nothing stronger than a well-bolted shelf.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2e/Memoria_Collectable_5.png/150px-Memoria_Collectable_5.png'},
        { id: 'memoria_6', clue: 'Lady Memoria\'s cleaning - Day 1', description: 'Hero Hime Poster: Hero Hime is making one of her iconic \'Ro-\'Ro poses.', image: 'https://dateeverything.wiki.gg/images/thumb/4/4e/Memoria_Collectable_6.png/150px-Memoria_Collectable_6.png'},
        { id: 'memoria_7', clue: 'Lady Memoria\'s cleaning - Day 2', description: 'Chimneyland Poster: The ashiest place on earth!', image: 'https://dateeverything.wiki.gg/images/thumb/7/7a/Memoria_Collectable_7.png/150px-Memoria_Collectable_7.png'},
        { id: 'memoria_8', clue: 'Lady Memoria\'s cleaning - Day 2', description: 'Kitschy Posters: Inspiring. Uplifting. Normie.', image: 'https://dateeverything.wiki.gg/images/thumb/f/fd/Memoria_Collectable_8.png/150px-Memoria_Collectable_8.png'},
        { id: 'memoria_9', clue: 'Lady Memoria\'s cleaning - Day 2', description: 'Four-Leaf Clover: Maybe the luck has begun to come true...', image: 'https://dateeverything.wiki.gg/images/thumb/1/17/Memoria_Collectable_9.png/150px-Memoria_Collectable_9.png'},
        { id: 'memoria_10', clue: 'Lady Memoria\'s cleaning - Day 2', description: 'Beach Photo: You know your f-stop from your g-strings.', image: 'https://dateeverything.wiki.gg/images/thumb/6/66/Memoria_Collectable_10.png/150px-Memoria_Collectable_10.png'},
        { id: 'memoria_11', clue: 'Lady Memoria\'s cleaning - Day 2', description: 'Operating Manual For 1970s Microwave: Microwave not included.', image: 'https://dateeverything.wiki.gg/images/thumb/7/76/Memoria_Collectable_11.png/150px-Memoria_Collectable_11.png'},
        { id: 'memoria_12', clue: 'Lady Memoria\'s cleaning - Day 2', description: 'Photograph of Parents: They\'re happy because you\'re not there.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b2/Memoria_Collectable_12.png/150px-Memoria_Collectable_12.png'},
        { id: 'memoria_13', clue: 'Lady Memoria\'s cleaning - Day 3', description: 'You, Pooping: Everyone has a first time.', image: 'https://dateeverything.wiki.gg/images/thumb/2/20/Memoria_Collectable_13.png/150px-Memoria_Collectable_13.png'},
        { id: 'memoria_14', clue: 'Lady Memoria\'s cleaning - Day 3', description: 'You, Weeping: Have you gotten any better with food, really?', image: 'https://dateeverything.wiki.gg/images/thumb/e/e9/Memoria_Collectable_14.png/150px-Memoria_Collectable_14.png'},
        { id: 'memoria_15', clue: 'Lady Memoria\'s cleaning - Day 3', description: 'Childhood Collection: You never wanted your photo taken, but you\'re glad you did.', image: 'https://dateeverything.wiki.gg/images/thumb/1/15/Memoria_Collectable_15.png/150px-Memoria_Collectable_15.png'},
        { id: 'memoria_16', clue: 'Lady Memoria\'s cleaning - Day 3', description: 'Pasta Portrait: Might still be edible...', image: 'https://dateeverything.wiki.gg/images/thumb/9/9f/Memoria_Collectable_16.png/150px-Memoria_Collectable_16.png'},
        { id: 'memoria_17', clue: 'Lady Memoria\'s cleaning - Day 3', description: 'Diploma: The beginning of a promising career.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b7/Memoria_Collectable_17.png/150px-Memoria_Collectable_17.png'},
        { id: 'memoria_18', clue: 'Lady Memoria\'s cleaning - Day 3', description: 'Graduation Photo: They really captured your blue side here.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3d/Memoria_Collectable_18.png/150px-Memoria_Collectable_18.png'}
    ],
    
    // Luke Nuke'm - Microwave (ID: 37)
    37: [
        { id: 'lukenuke_1', clue: 'Speak with Luke.', description: 'Magnetron Blueprint: Looks highly dangerous, and classified. Soggy.', image: 'https://dateeverything.wiki.gg/images/thumb/e/ec/Luke_Nukem_Collectable_1.png/150px-Luke_Nukem_Collectable_1.png'},
        { id: 'lukenuke_2', clue: 'Achieve a Friend ending with Luke.', description: 'Tendies: Crispy like you would never believe.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0f/Luke_Nukem_Collectable_2.png/150px-Luke_Nukem_Collectable_2.png'},
        { id: 'lukenuke_3', clue: 'Find the Magnetron.', description: 'The Magnetron: Used for warming up food lightly.', image: 'https://dateeverything.wiki.gg/images/thumb/1/17/Luke_Nukem_Collectable_3.png/150px-Luke_Nukem_Collectable_3.png'}
    ],
    
    // Lux - Lamp (ID: 13)
    13: [
        { id: 'lux_1', clue: 'Undo a Hate ending with Lux using Charm.', description: 'Shiny Wink: How Charming of you!', image: 'https://dateeverything.wiki.gg/images/thumb/d/db/Lux_Collectable_1.png/150px-Lux_Collectable_1.png'},
        { id: 'lux_2', clue: 'Found by accident.', description: 'Shameless Plug: How dare they plug themselves so?', image: 'https://dateeverything.wiki.gg/images/thumb/c/c2/Lux_Collectable_2.png/150px-Lux_Collectable_2.png'},
        { id: 'lux_3', clue: 'Speak with Lux.', description: 'Instaglam Moderator: The premium version is actually worse.', image: 'https://dateeverything.wiki.gg/images/thumb/9/90/Lux_Collectable_3.png/150px-Lux_Collectable_3.png'}
    ],
    
    // Lyric - Literature (ID: 58)
    58: [
        { id: 'lyric_1', clue: 'Speak with Lyric.', description: 'Lyric\'s Reading List: No need to read those titles.', image: 'https://dateeverything.wiki.gg/images/thumb/8/85/Lyric_Collectable_1.png/150px-Lyric_Collectable_1.png'},
        { id: 'lyric_2', clue: 'Write a book with Lyric.', description: 'The Tome: What does yours have inside...?', image: 'https://dateeverything.wiki.gg/images/thumb/0/04/Lyric_Collectable_2.png/150px-Lyric_Collectable_2.png'},
        { id: 'lyric_3', clue: 'Write a very horny book with Lyric.', description: 'The Horny Tome: You couldn\'t help yourself, could you?', image: 'https://dateeverything.wiki.gg/images/thumb/8/84/Lyric_Collectable_3.png/150px-Lyric_Collectable_3.png'}
    ],
    
    // Mac - Computer (ID: 56)
    56: [
        { id: 'mac_1', clue: 'Speak with Mac.', description: 'Trenton O.S.: One of the most scenic cities in New Jersey.', image: 'https://dateeverything.wiki.gg/images/thumb/a/ae/Mac_Collectable_1.png/150px-Mac_Collectable_1.png'},
        { id: 'mac_2', clue: 'Ask about your clicking.', description: 'The click of a lover...: Your double clicks are so gentle, and with clear affection.', image: 'https://dateeverything.wiki.gg/images/thumb/e/eb/Mac_Collectable_2.png/150px-Mac_Collectable_2.png'},
        { id: 'mac_3', clue: 'Speak with Mac.', description: '100TB of self-insert fanfic.: Some of it is pretty good.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f1/Mac_Collectable_3.png/150px-Mac_Collectable_3.png'}
    ],
    
    // Maggie - Magnifying Glass (ID: 61)
    61: [
        { id: 'maggie_1', clue: 'Speak with Maggie.', description: 'A Mysterious Love Letter: Who could it be from?', image: 'https://dateeverything.wiki.gg/images/thumb/4/44/Maggie_Collectable_1.png/150px-Maggie_Collectable_1.png'},
        { id: 'maggie_2', clue: 'Go on a date with Maggie.', description: 'Jasmine Green Tea: Your favorite!', image: 'https://dateeverything.wiki.gg/images/thumb/0/06/Maggie_Collectable_2.png/150px-Maggie_Collectable_2.png'},
        { id: 'maggie_3', clue: 'Party with Maggie.', description: 'Magnifying Shot Glass: Who knew Maggie had such a side to her?', image: 'https://dateeverything.wiki.gg/images/thumb/d/d1/Maggie_Collectable_3.png/150px-Maggie_Collectable_3.png'},
        { id: 'maggie_4', clue: 'Have a steamy encounter with the detective.', description: 'Steamed Lens: Case closed.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c5/Maggie_Collectable_4.png/150px-Maggie_Collectable_4.png'}
    ],
    
    // Mateo - Blanket (ID: 29)
    29: [
        { id: 'mateo_1', clue: 'Speak with Mateo.', description: 'Sprite: Don\'t let her fool you, she\'s a mischief-maker.', image: 'https://dateeverything.wiki.gg/images/thumb/e/ed/Mateo_Collectable_1.png/150px-Mateo_Collectable_1.png'},
        { id: 'mateo_2', clue: 'Speak with Mateo.', description: 'The Rescues: Good boys and good girls all.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f4/Mateo_Collectable_2.png/150px-Mateo_Collectable_2.png'},
        { id: 'mateo_3', clue: 'Find Davi.', description: 'Pythorn: Don\'t get poked and they\'ll make a great pet.', image: 'https://dateeverything.wiki.gg/images/thumb/9/93/Mateo_Collectable_3.png/150px-Mateo_Collectable_3.png'},
        { id: 'mateo_4', clue: 'Find Davi.', description: 'Springtail: Tough to catch! Well done.', image: 'https://dateeverything.wiki.gg/images/thumb/4/45/Mateo_Collectable_4.png/150px-Mateo_Collectable_4.png'},
        { id: 'mateo_5', clue: 'Find Davi.', description: 'Davi: The goodest boy, seeker of those who are lost.', image: 'https://dateeverything.wiki.gg/images/thumb/f/fa/Mateo_Collectable_5.png/150px-Mateo_Collectable_5.png'},
        { id: 'mateo_6', clue: 'Find Davi.', description: 'Stitch: The trouble-making frayhound who started it all.', image: 'https://dateeverything.wiki.gg/images/thumb/9/95/Mateo_Collectable_6.png/150px-Mateo_Collectable_6.png'}
    ],
    
    // Michael Transaction - Microtransactions (ID: 101)
    101: [
        { id: 'michael_1', clue: 'Pull a Common Item.', description: 'Common Boots of True Presence: They don\'t do nothing. They also do don\'t anything.', image: 'https://dateeverything.wiki.gg/images/thumb/6/6f/Mikey_Collectable_1.png/150px-Mikey_Collectable_1.png'},
        { id: 'michael_2', clue: 'Pull an Epic Item.', description: 'Epic Gauntlets of Stardom: They glimmer with the aura of slight satisfaction.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3e/Mikey_Collectable_2.png/150px-Mikey_Collectable_2.png'},
        { id: 'michael_3', clue: 'Pull a Legendary Item.', description: 'Legendary Cuirass of Unwavering Magnetism: Now you\'re a real player! Go get \'em!', image: 'https://dateeverything.wiki.gg/images/thumb/3/3c/Mikey_Collectable_3.png/150px-Mikey_Collectable_3.png'},
        { id: 'michael_4', clue: 'Get to know Mikey better by continuing to see him and ask questions.', description: 'Mikey\'s Kids: From the left - Makayla, Mickey, and Marco.', image: 'https://dateeverything.wiki.gg/images/thumb/2/24/Mikey_Collectable_4.png/150px-Mikey_Collectable_4.png'}
    ],
    
    // Miranda Dulce Tostadora - Toaster (ID: 38)
    38: [
        { id: 'miranda_1', clue: 'Ask if Miranda has ever been in love.', description: 'Miranda\'s Old Flame: Not a very good match, all things considered.', image: 'https://dateeverything.wiki.gg/images/thumb/e/eb/Miranda_Collectable_1.png/150px-Miranda_Collectable_1.png'},
        { id: 'miranda_2', clue: 'Speak to Miranda.', description: 'The Migas: These guys grew up together, played together, and even cry together when someone\'s having a bad day.', image: 'https://dateeverything.wiki.gg/images/thumb/1/12/Miranda_Collectable_2.png/150px-Miranda_Collectable_2.png'},
        { id: 'miranda_3', clue: 'Attend Miranda\'s concert.', description: 'Miranda\'s Concert: You can still hear the strains in the air like waft of toasting bread...', image: 'https://dateeverything.wiki.gg/images/thumb/0/0a/Miranda_Collectable_3.png/150px-Miranda_Collectable_3.png'}
    ],
    
    // Mitchell Linn - Food (ID: 32)
    32: [
        { id: 'mitchell_1', clue: 'Speak with Mitchell Linn.', description: 'Sauvingon Blanc: It\'s a Sancerre. Obviously.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e5/Mitchell_Collectable_1.png/150px-Mitchell_Collectable_1.png'},
        { id: 'mitchell_2', clue: 'Go to Daisuke\'s sushi restaurant.', description: 'Omakase Daisuke: Recently opened, poorly attended.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f4/Mitchell_Collectable_2.png/150px-Mitchell_Collectable_2.png'},
        { id: 'mitchell_3', clue: 'Go to Freddy\'s ice cream parlor.', description: 'The Yummy Yeti: Well, it\'s not trying that hard.', image: 'https://dateeverything.wiki.gg/images/thumb/6/6d/Mitchell_Collectable_3.png/150px-Mitchell_Collectable_3.png'},
        { id: 'mitchell_4', clue: 'Go to Koa\'s Hawaiian-fusion restaurant.', description: 'Two Currents: Fusion! Fun! Couches!', image: 'https://dateeverything.wiki.gg/images/thumb/e/e1/Mitchell_Collectable_4.png/150px-Mitchell_Collectable_4.png'}
    ],
    
    // Monique - Money (ID: 90)
    90: [
        { id: 'monique_1', clue: 'Ask who "Will" is.', description: 'Your Will: Terrifying.', image: 'https://dateeverything.wiki.gg/images/thumb/8/88/Monique_Collectable_1.png/150px-Monique_Collectable_1.png'},
        { id: 'monique_2', clue: 'Speak to Monique.', description: 'Your Budget: Terrifying.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b9/Monique_Collectable_2.png/150px-Monique_Collectable_2.png'},
        { id: 'monique_3', clue: 'Ask for Twenty Dollars.', description: 'Twenty Dollars: Sweet! Twenty bucks!', image: 'https://dateeverything.wiki.gg/images/thumb/2/2d/Monique_Collectable_3.png/150px-Monique_Collectable_3.png'}
    ],
    
    // Nightmare - Nightmare (ID: 99)
    99: [
        { id: 'nightmare_1', clue: 'Dream about Abandonment.', description: 'Abandonment Dream: Your body breaks to pieces as it falls to the ground.', image: 'https://dateeverything.wiki.gg/images/thumb/0/00/Nightmare_Collectable_1.png/150px-Nightmare_Collectable_1.png'},
        { id: 'nightmare_2', clue: 'Dream about Failure.', description: 'Failure Dream: Dead weight, you\'re holding me back.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9d/Nightmare_Collectable_2.png/150px-Nightmare_Collectable_2.png'},
        { id: 'nightmare_3', clue: 'Dream about Mediocrity.', description: 'Mediocrity Dream: You\'re too late to free yourself.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9e/Nightmare_Collectable_3.png/150px-Nightmare_Collectable_3.png'}
    ],
    
    // Parker - Board Games (ID: 28)
    28: [
        { id: 'parker_1', clue: 'Ask Parker to strip down.', description: 'Parker in Swim Trunks: Doesn\'t appear to know he\'s in a dating sim.', image: 'https://dateeverything.wiki.gg/images/thumb/1/19/Parker_Collectable_1.png/150px-Parker_Collectable_1.png'},
        { id: 'parker_2', clue: 'Ask Parker to put on a blindfold.', description: 'Chess Blindfold: Could cause some unintentional sexy situations.', image: 'https://dateeverything.wiki.gg/images/thumb/1/11/Parker_Collectable_2.png/150px-Parker_Collectable_2.png'},
        { id: 'parker_3', clue: 'Use strange tactics against Parker.', description: 'Carl Card: Destroyer of worlds.', image: 'https://dateeverything.wiki.gg/images/thumb/1/1e/Parker_Collectable_3.png/150px-Parker_Collectable_3.png'},
        { id: 'parker_4', clue: 'Attempt to get a relationship ending with Parker.', description: 'Relationship Dice: They\'re cute, if they weren\'t so chaotic.', image: 'https://dateeverything.wiki.gg/images/thumb/4/48/Parker_Collectable_4.png/150px-Parker_Collectable_4.png'}
    ],
    
    // Penelope - Office Supplies (ID: 55)
    55: [
        { id: 'penelope_1', clue: 'Talk to Penelope.', description: 'Office Romance Magazine: Read by only the most up-to-date day planners.', image: 'https://dateeverything.wiki.gg/images/thumb/5/56/Penelope_Collectable_1.png/150px-Penelope_Collectable_1.png'},
        { id: 'penelope_2', clue: 'Speak with the bulletin board after a photograph appears.', description: 'Instapix Film: Could this be the way to track progress...?', image: 'https://dateeverything.wiki.gg/images/thumb/9/94/Penelope_Collectable_2.png/150px-Penelope_Collectable_2.png'},
        { id: 'penelope_3', clue: 'Clean out Jerry\'s drawer.', description: 'Penelope\'s tacks: Tacky.', image: 'https://dateeverything.wiki.gg/images/thumb/c/ce/Penelope_Collectable_3.png/150px-Penelope_Collectable_3.png'}
    ],
    
    // Phoenicia - Phone (ID: 2)
    2: [
        { id: 'phoenicia_1', clue: 'Speak with Phoenicia.', description: 'Placebook: No humans allowed.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f3/Phoenicia_Collectable_1.png/150px-Phoenicia_Collectable_1.png'},
        { id: 'phoenicia_2', clue: 'Speak with Phoenicia.', description: 'Temperature Warning: Might just be a faulty sensor...', image: 'https://dateeverything.wiki.gg/images/thumb/4/47/Phoenicia_Collectable_2.png/150px-Phoenicia_Collectable_2.png'},
        { id: 'phoenicia_3', clue: 'Achieve a Love Ending with Phoenicia.', description: 'Phoenicia\'s Newest Hobby: No socials breaks can lead to some beautiful new skills.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0e/Phoenicia_Collectable_3.png/150px-Phoenicia_Collectable_3.png'}
    ],
    
    // Prissy - Plant (ID: 15)
    15: [
        { id: 'prissy_1', clue: 'Speak to Prissy.', description: 'Flirtilizar: Like fertilizer, but magical!', image: 'https://dateeverything.wiki.gg/images/thumb/8/88/Prissy_Collectable_1.png/150px-Prissy_Collectable_1.png'},
        { id: 'prissy_2', clue: 'Speak to Prissy.', description: 'Wootering Can: Like a watering can, but magical!', image: 'https://dateeverything.wiki.gg/images/thumb/f/f2/Prissy_Collectable_2.png/150px-Prissy_Collectable_2.png'},
        { id: 'prissy_3', clue: 'Speak to Prissy.', description: 'Vinegar: Will nothing work??', image: 'https://dateeverything.wiki.gg/images/thumb/8/83/Prissy_Collectable_3.png/150px-Prissy_Collectable_3.png'}
    ],
    
    // Rainey - Record Player (ID: 63)
    63: [
        { id: 'rainey_1', clue: 'Talk to Celia about Rainey\'s past.', description: 'Written Proof of Rainey\'s Past: Are some memories best left forgotten?', image: 'https://dateeverything.wiki.gg/images/thumb/e/e3/Rainey_Collectable_1.png/150px-Rainey_Collectable_1.png'},
        { id: 'rainey_2', clue: 'Go drinking with Rainey.', description: 'Apocalypse: We can not disclose the ingredients for legal reasons.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c9/Rainey_Collectable_2.png/150px-Rainey_Collectable_2.png'},
        { id: 'rainey_3', clue: 'Attend Keyes\' concert.', description: 'Tuxedo Rainey: Our flapper cleans up just fine.', image: 'https://dateeverything.wiki.gg/images/thumb/6/69/Rainey_Collectable_3.png/150px-Rainey_Collectable_3.png'}
    ],
    
    // Rebel - Rubber Ducky (ID: 49)
    49: [
        { id: 'rebel_1', clue: 'Find out Rebel\'s secret.', description: 'Rebel\'s Barcode: Rebel is one in a million... or maybe one of a million.', image: 'https://dateeverything.wiki.gg/images/thumb/1/1d/Rebel_Collectable_1.png/150px-Rebel_Collectable_1.png'},
        { id: 'rebel_2', clue: 'Achieve a Love ending with Rebel and ask about what that entails.', description: 'Cuddling: The most bad-ass of kinks.', image: 'https://dateeverything.wiki.gg/images/thumb/9/90/Rebel_Collectable_2.png/150px-Rebel_Collectable_2.png'},
        { id: 'rebel_3', clue: 'Choose not to make a choice consistently.', description: 'Winnie: Nice and cold.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e8/Rebel_Collectable_3.png/150px-Rebel_Collectable_3.png'}
    ],
    
    // Reggie - Rejection (ID: 100)
    100: [
        { id: 'reggie_1', clue: 'Speak with Reggie.', description: 'Reggie\'s Phone App: Call him anytime... if you dare.', image: 'https://dateeverything.wiki.gg/images/thumb/1/13/Reggie_Collectable_1.png/150px-Reggie_Collectable_1.png'},
        { id: 'reggie_2', clue: 'Get a Love ending with Reggie.', description: 'Reggie repaired: Everyone has to find someone to love.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0e/Reggie_Collectable_2.png/150px-Reggie_Collectable_2.png'},
        { id: 'reggie_3', clue: 'Achieve a Hate ending with everyone in the game.', description: 'Hate Everything: Was it fun, at least?', image: 'https://dateeverything.wiki.gg/images/thumb/c/cf/Reggie_Collectable_3.png/150px-Reggie_Collectable_3.png'}
    ],
    
    // River - Water (ID: 18)
    18: [
        { id: 'river_1', clue: 'Speak to River.', description: 'Chair - Be-Leaf: No relation to Chairemi.', image: 'https://dateeverything.wiki.gg/images/thumb/1/19/River_Collectable_1.png/150px-River_Collectable_1.png'},
        { id: 'river_2', clue: 'Speak to River.', description: 'The Tea: Let the gossip flow...', image: 'https://dateeverything.wiki.gg/images/thumb/2/26/River_Collectable_2.png/150px-River_Collectable_2.png'},
        { id: 'river_3', clue: 'Paint with River.', description: 'River\'s Watercolors: She loves flowers...', image: 'https://dateeverything.wiki.gg/images/thumb/0/08/River_Collectable_3.png/150px-River_Collectable_3.png'}
    ],
    
    // Rongomaiwhenua - Geode (ID: 59)
    59: [
        { id: 'rongo_1', clue: 'Praise Rongomaiwhenua.', description: 'Citrine Geode: ... that is enough admiring.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a1/Rongomaiwhenua_Collectable_1.png/150px-Rongomaiwhenua_Collectable_1.png'},
        { id: 'rongo_2', clue: 'Bring Rongomaiwhenua to Gaia.', description: 'Queen\'s Head: Purely accidental, but worth noting nonetheless', image: 'https://dateeverything.wiki.gg/images/thumb/d/d2/Rongomaiwhenua_Collectable_2.png/150px-Rongomaiwhenua_Collectable_2.png'},
        { id: 'rongo_3', clue: 'Achieve a love ending with Rongomaiwhenua and accept her gift.', description: 'Infinity: You are forever changed.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b5/Rongomaiwhenua_Collectable_3.png/150px-Rongomaiwhenua_Collectable_3.png'}
    ],
    
    // The Sassy Chap - Developers (ID: 95)
    95: [
        { id: 'sassy_1', clue: 'Date the Dev!', description: 'Adriel: Programmer - Built the Vertical Slice.', image: 'https://dateeverything.wiki.gg/images/thumb/3/38/Sassy_Chap_Collectable_1.png/150px-Sassy_Chap_Collectable_1.png'},
        { id: 'sassy_2', clue: 'Date the Dev!', description: 'Amanda: Producer with Too Many Hats.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e3/Sassy_Chap_Collectable_2.png/150px-Sassy_Chap_Collectable_2.png'},
        { id: 'sassy_3', clue: 'Date the Dev!', description: 'Andrew: Owner of Voicetrax - Cut us an insane deal.', image: 'https://dateeverything.wiki.gg/images/thumb/4/47/Sassy_Chap_Collectable_3.png/150px-Sassy_Chap_Collectable_3.png'},
        { id: 'sassy_4', clue: 'Date the Dev!', description: 'Ben: Polish - except his own bio.', image: 'https://dateeverything.wiki.gg/images/thumb/1/10/Sassy_Chap_Collectable_4.png/150px-Sassy_Chap_Collectable_4.png'},
        { id: 'sassy_5', clue: 'Date the Dev!', description: 'Cael: Artistic as all get out.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2a/Sassy_Chap_Collectable_5.png/150px-Sassy_Chap_Collectable_5.png'},
        { id: 'sassy_6', clue: 'Date the Dev!', description: 'Debz: Artistic up the wazoo.', image: 'https://dateeverything.wiki.gg/images/thumb/4/4b/Sassy_Chap_Collectable_6.png/150px-Sassy_Chap_Collectable_6.png'},
        { id: 'sassy_7', clue: 'Date the Dev!', description: 'Devin: Writer - Happiness-Maker.', image: 'https://dateeverything.wiki.gg/images/thumb/4/4a/Sassy_Chap_Collectable_7.png/150px-Sassy_Chap_Collectable_7.png'},
        { id: 'sassy_8', clue: 'Date the Dev!', description: 'Dom: Writer - Expressionista - Kopi.', image: 'https://dateeverything.wiki.gg/images/thumb/8/8b/Sassy_Chap_Collectable_8.png/150px-Sassy_Chap_Collectable_8.png'},
        { id: 'sassy_9', clue: 'Date the Dev!', description: 'Elle: Artistic beyond compare.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b5/Sassy_Chap_Collectable_9.png/150px-Sassy_Chap_Collectable_9.png'},
        { id: 'sassy_10', clue: 'Date the Dev!', description: 'Evan: Recording Engineer - VO Sound Design.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f9/Sassy_Chap_Collectable_10.png/150px-Sassy_Chap_Collectable_10.png'},
        { id: 'sassy_11', clue: 'Date the Dev!', description: 'Garrett: Music Man.', image: 'https://dateeverything.wiki.gg/images/thumb/9/96/Sassy_Chap_Collectable_11.png/150px-Sassy_Chap_Collectable_11.png'},
        { id: 'sassy_12', clue: 'Date the Dev!', description: 'Greg: Ink Relation.', image: 'https://dateeverything.wiki.gg/images/thumb/2/27/Sassy_Chap_Collectable_12.png/150px-Sassy_Chap_Collectable_12.png'},
        { id: 'sassy_13', clue: 'Date the Dev!', description: 'Jamie: Producer and Dialogue Feedback Champion.', image: 'https://dateeverything.wiki.gg/images/thumb/7/75/Sassy_Chap_Collectable_13.png/150px-Sassy_Chap_Collectable_13.png'},
        { id: 'sassy_14', clue: 'Date the Dev!', description: 'Jane: Menace, gremlin, beware.', image: 'https://dateeverything.wiki.gg/images/thumb/7/78/Sassy_Chap_Collectable_14.png/150px-Sassy_Chap_Collectable_14.png'},
        { id: 'sassy_15', clue: 'Date the Dev!', description: 'SopheeJay: House Builder.', image: 'https://dateeverything.wiki.gg/images/thumb/3/31/Sassy_Chap_Collectable_15.png/150px-Sassy_Chap_Collectable_15.png'},
        { id: 'sassy_16', clue: 'Date the Dev!', description: 'Jayperior: Writer and Anime Consultant.', image: 'https://dateeverything.wiki.gg/images/thumb/7/78/Sassy_Chap_Collectable_16.png/150px-Sassy_Chap_Collectable_16.png'},
        { id: 'sassy_17', clue: 'Date the Dev!', description: 'Jonathan: Writer with BCE (Big Cheerleading Energy).', image: 'https://dateeverything.wiki.gg/images/thumb/6/64/Sassy_Chap_Collectable_17.png/150px-Sassy_Chap_Collectable_17.png'},
        { id: 'sassy_18', clue: 'Date the Dev!', description: 'Julia: Writer with the Biggest Heart.', image: 'https://dateeverything.wiki.gg/images/thumb/c/ce/Sassy_Chap_Collectable_18.png/150px-Sassy_Chap_Collectable_18.png'},
        { id: 'sassy_19', clue: 'Date the Dev!', description: 'Logan: Criminal Mastermind - Wanted in Several States.', image: 'https://dateeverything.wiki.gg/images/thumb/1/1a/Sassy_Chap_Collectable_19.png/150px-Sassy_Chap_Collectable_19.png'},
        { id: 'sassy_20', clue: 'Date the Dev!', description: 'Michael: Classical (in every sense of the word).', image: 'https://dateeverything.wiki.gg/images/thumb/a/a1/Sassy_Chap_Collectable_20.png/150px-Sassy_Chap_Collectable_20.png'},
        { id: 'sassy_21', clue: 'Date the Dev!', description: 'Nick: Writer - Script-prepper - Expressionista.', image: 'https://dateeverything.wiki.gg/images/thumb/4/48/Sassy_Chap_Collectable_21.png/150px-Sassy_Chap_Collectable_21.png'},
        { id: 'sassy_22', clue: 'Date the Dev!', description: 'Nij: One marvels that she\'s still standing.', image: 'https://dateeverything.wiki.gg/images/thumb/4/44/Sassy_Chap_Collectable_22.png/150px-Sassy_Chap_Collectable_22.png'},
        { id: 'sassy_23', clue: 'Date the Dev!', description: 'Pejnt: Artistic to the jnth degree.', image: 'https://dateeverything.wiki.gg/images/thumb/1/11/Sassy_Chap_Collectable_23.png/150px-Sassy_Chap_Collectable_23.png'},
        { id: 'sassy_24', clue: 'Date the Dev!', description: 'Ray: Inkromancer.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a7/Sassy_Chap_Collectable_24.png/150px-Sassy_Chap_Collectable_24.png'},
        { id: 'sassy_25', clue: 'Date the Dev!', description: 'Rebecca: Master of speadsheets.', image: 'https://dateeverything.wiki.gg/images/thumb/c/ca/Sassy_Chap_Collectable_25.png/150px-Sassy_Chap_Collectable_25.png'},
        { id: 'sassy_26', clue: 'Date the Dev!', description: 'Robbie: Writer, Producer, Critter.', image: 'https://dateeverything.wiki.gg/images/thumb/4/44/Sassy_Chap_Collectable_26.png/150px-Sassy_Chap_Collectable_26.png'},
        { id: 'sassy_27', clue: 'Date the Dev!', description: 'Samantha: Creator of Reggie.', image: 'https://dateeverything.wiki.gg/images/thumb/2/26/Sassy_Chap_Collectable_27.png/150px-Sassy_Chap_Collectable_27.png'},
        { id: 'sassy_28', clue: 'Date the Dev!', description: 'Samuel: Programmer - Put all the wiggles in.', image: 'https://dateeverything.wiki.gg/images/thumb/6/67/Sassy_Chap_Collectable_28.png/150px-Sassy_Chap_Collectable_28.png'},
        { id: 'sassy_29', clue: 'Date the Dev!', description: 'Souha: Knows how to write a real dating sim.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9d/Sassy_Chap_Collectable_29.png/150px-Sassy_Chap_Collectable_29.png'},
        { id: 'sassy_30', clue: 'Date the Dev!', description: 'Tay: Artistic beyond reason.', image: 'https://dateeverything.wiki.gg/images/thumb/4/41/Sassy_Chap_Collectable_30.png/150px-Sassy_Chap_Collectable_30.png'},
        { id: 'sassy_31', clue: 'Date the Dev!', description: 'Thiago: Lead Programmer - Master of Merges.', image: 'https://dateeverything.wiki.gg/images/thumb/f/ff/Sassy_Chap_Collectable_31.png/150px-Sassy_Chap_Collectable_31.png'},
        { id: 'sassy_32', clue: 'Date the Dev!', description: 'TJ: Writer, Dramaturg, DM.', image: 'https://dateeverything.wiki.gg/images/thumb/5/57/Sassy_Chap_Collectable_32.png/150px-Sassy_Chap_Collectable_32.png'},
        { id: 'sassy_33', clue: 'Date the Dev!', description: 'William: Writer, Scoundrel, Ink-breaker.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f9/Sassy_Chap_Collectable_33.png/150px-Sassy_Chap_Collectable_33.png'}
    ],
    
    // Scandalabra - Wick (ID: 64)
    64: [
        { id: 'scandalabra_1', clue: 'Investigate the rumors to their source...', description: 'Note of a Knock-Off: Nothing good ever comes out of New Jersey.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0f/Scandalabra_Collectable_1.png/150px-Scandalabra_Collectable_1.png'},
        { id: 'scandalabra_2', clue: 'Kiss the Scandalabra... with all you have.', description: 'Kiss from a candle: You really went for it.', image: 'https://dateeverything.wiki.gg/images/thumb/c/cf/Scandalabra_Collectable_2.png/150px-Scandalabra_Collectable_2.png'},
        { id: 'scandalabra_3', clue: 'Achieve the Scandalabra\'s esteem.', description: 'Scandalabra\'s Date-A-Dex: Unlicensed.', image: 'https://dateeverything.wiki.gg/images/thumb/5/5a/Scandalabra_Collectable_3.png/150px-Scandalabra_Collectable_3.png'}
    ],
    
    // Shelley - Shelf (ID: 10)
    10: [
        { id: 'shelley_1', clue: 'Speak to Shelley.', description: 'Feather Duster: Not used for dusting feathers.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e7/Shelley_Collectable_1.png/150px-Shelley_Collectable_1.png'},
        { id: 'shelley_2', clue: 'Speak to Shelley.', description: 'Shelf-Quake: Poor Stepford.', image: 'https://dateeverything.wiki.gg/images/thumb/a/ac/Shelley_Collectable_2.png/150px-Shelley_Collectable_2.png'},
        { id: 'shelley_3', clue: 'Achieve a Love ending with Shelley.', description: 'Congratulations - You Are A Shelf: It\'s got a seal and everything.', image: 'https://dateeverything.wiki.gg/images/thumb/7/79/Shelley_Collectable_3.png/150px-Shelley_Collectable_3.png'}
    ],
    
    // Sinclaire - Sink (ID: 34)
    34: [
        { id: 'sinclaire_1', clue: 'Speak with Sinclaire.', description: 'Sudsy: A good, clean, doggo.', image: 'https://dateeverything.wiki.gg/images/thumb/e/ea/Sinclaire_Collectable_1.png/150px-Sinclaire_Collectable_1.png'},
        { id: 'sinclaire_2', clue: 'Ask about Sinclaire\'s evidence.', description: 'A Warranty For an In-Sink Disposal: Not a loyalty card for a free shovel.', image: 'https://dateeverything.wiki.gg/images/thumb/2/21/Sinclaire_Collectable_2.png/150px-Sinclaire_Collectable_2.png'},
        { id: 'sinclaire_3', clue: 'Ask Sinclaire for a moment alone.', description: 'A Moment Alone: What more do you need to know? It\'s a moment alone.', image: 'https://dateeverything.wiki.gg/images/thumb/3/33/Sinclaire_Collectable_3.png/150px-Sinclaire_Collectable_3.png'}
    ],
    
    // Skylar - Dateviators (ID: 1)
    1: [
        { id: 'skylar_1', clue: 'Speak with Skylar about herself.', description: 'Suspension of Disbelief: It keeps the whole thing running...', image: 'https://dateeverything.wiki.gg/images/thumb/d/de/Skylar_Collectable_1.png/150px-Skylar_Collectable_1.png'},
        { id: 'skylar_2', clue: 'Achieve a Love ending with every dateable object.', description: 'Scum Gun: You passed! Works every time!', image: 'https://dateeverything.wiki.gg/images/thumb/1/17/Skylar_Collectable_2.png/150px-Skylar_Collectable_2.png'},
        { id: 'skylar_3', clue: 'Break the Suspension of Disbelief.', description: 'Broken Suspension of Disbelief.: Guess it\'s not as much fun anymore.', image: 'https://dateeverything.wiki.gg/images/thumb/3/31/Skylar_Collectable_3.png/150px-Skylar_Collectable_3.png'}
    ],
    
    // Sophia - Safe (ID: 89)
    89: [
        { id: 'sophia_1', clue: 'Do a Blissmas scenario with Sophia.', description: 'Elf Costume: The bow really sells it.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3a/Sophia_Collectable_1.png/150px-Sophia_Collectable_1.png'},
        { id: 'sophia_2', clue: 'Do a restaurant scenario with Sophia.', description: 'Sous Chef Costume: Kiss the cook.', image: 'https://dateeverything.wiki.gg/images/thumb/6/63/Sophia_Collectable_2.png/150px-Sophia_Collectable_2.png'},
        { id: 'sophia_3', clue: 'Do a business scenario with Sophia.', description: 'Taxpayer Costume: The most certain of abuses.', image: 'https://dateeverything.wiki.gg/images/thumb/f/fe/Sophia_Collectable_3.png/150px-Sophia_Collectable_3.png'}
    ],
    
    // Stefan - Stove (ID: 36)
    36: [
        { id: 'stefan_1', clue: 'Speak well to Stefan, and ask him to cook.', description: 'Sushi!: Heaping, cold, and festooned with garlands. Mr. Cluckles is not edible.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e6/Stefan_Collectable_1.png/150px-Stefan_Collectable_1.png'},
        { id: 'stefan_2', clue: 'Speak to Stefan.', description: 'Mr. Cluckles: Top tier character.', image: 'https://dateeverything.wiki.gg/images/thumb/9/97/Stefan_Collectable_2.png/150px-Stefan_Collectable_2.png'},
        { id: 'stefan_3', clue: 'Ask for dessert.', description: 'Baked Alaska: Legal in 49 states.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0b/Stefan_Collectable_3.png/150px-Stefan_Collectable_3.png'},
        { id: 'stefan_4', clue: 'Ask Stefan to cook.', description: 'Beef Wellington/ Mushroom Wellington: Easier to draw than bake.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f7/Stefan_Collectable_4.png/150px-Stefan_Collectable_4.png'},
        { id: 'stefan_5', clue: 'Ask Stefan to cook.', description: 'Nachos À La Estufa: Please do not eat your screen.', image: 'https://dateeverything.wiki.gg/images/thumb/6/6d/Stefan_Collectable_5.png/150px-Stefan_Collectable_5.png'},
        { id: 'stefan_7', clue: 'Ask Stefan for popcorn in another dateable\'s story.', description: 'Saffron Popped Corn: Just like Momma didn\'t make.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2a/Stefan_Collectable_6.png/150px-Stefan_Collectable_6.png'}
    ],
    
    // Stella - Stairs (ID: 6)
    6: [
        { id: 'stella_1', clue: 'Join Stella\'s Army.', description: 'Lieutenant Of The Airway Army: Find recruits! Join Today!', image: 'https://dateeverything.wiki.gg/images/thumb/b/b5/Stella_Collectable_1.png/150px-Stella_Collectable_1.png'},
        { id: 'stella_2', clue: 'Speak to Stella.', description: 'Airway Army Pamphlet: Every good Army has a good pamphlet.', image: 'https://dateeverything.wiki.gg/images/thumb/8/8c/Stella_Collectable_2.png/150px-Stella_Collectable_2.png'},
        { id: 'stella_3', clue: 'Convince Stella to start a new business.', description: 'Stella\'s Stilletos: A new business - a new frontier!', image: 'https://dateeverything.wiki.gg/images/thumb/8/81/Stella_Collectable_3.png/150px-Stella_Collectable_3.png'},
        { id: 'stella_4', clue: 'Speak to Stella.', description: 'Airway Sample: Free your lungs, but also your life.', image: 'https://dateeverything.wiki.gg/images/thumb/0/05/Stella_Collectable_4.png/150px-Stella_Collectable_4.png'}
    ],
    
    // Stepford - Trophy (ID: 83)
    83: [
        { id: 'stepford_1', clue: 'Help Stepford get a 1st place finish.', description: 'Gold Medal: 1st place for Stepford!', image: 'https://dateeverything.wiki.gg/images/thumb/a/a6/Stepford_Collectable_1.png/150px-Stepford_Collectable_1.png'},
        { id: 'stepford_2', clue: 'Help Stepford get a 2nd place finish.', description: 'Silver Medal: 2nd place isn\'t so bad.', image: 'https://dateeverything.wiki.gg/images/thumb/5/58/Stepford_Collectable_2.png/150px-Stepford_Collectable_2.png'},
        { id: 'stepford_3', clue: 'Help Stepford get a 3rd place finish.', description: 'Bronze Medal: Better than no medal at all.', image: 'https://dateeverything.wiki.gg/images/thumb/7/72/Stepford_Collectable_3.png/150px-Stepford_Collectable_3.png'},
        { id: 'stepford_4', clue: 'Ask Doug for help on Stepford\'s quest.', description: 'Doug Medal: why is this a thing?', image: 'https://dateeverything.wiki.gg/images/thumb/2/22/Stepford_Collectable_4.png/150px-Stepford_Collectable_4.png'}
    ],
    
    // Teddy - Teddy Bear (ID: 71)
    71: [
        { id: 'teddy_1', clue: 'Have Teddy read you a bedtime story.', description: 'Olly: The tiny octopus joins the underwater olympics! Suitable for all ages.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c7/Teddy_Collectable_1.png/150px-Teddy_Collectable_1.png'},
        { id: 'teddy_2', clue: 'Have Teddy read you a bedtime story.', description: 'Aris & Leo: A story of brotherly love and loss. Suitable for ages 6 and up.', image: 'https://dateeverything.wiki.gg/images/thumb/1/12/Teddy_Collectable_2.png/150px-Teddy_Collectable_2.png'},
        { id: 'teddy_3', clue: 'Have Teddy read you a bedtime story.', description: 'The Great Constructing of Beaver Proudtail: A longer story about building bridges. Suitable for ages 7 and up.', image: 'https://dateeverything.wiki.gg/images/thumb/e/ed/Teddy_Collectable_3.png/150px-Teddy_Collectable_3.png'}
    ],
    
    // Telly - TV (ID: 23)
    23: [
        { id: 'telly_1', clue: 'Speak with Telly.', description: '5,000 Channels!: 5,000 Channels!', image: 'https://dateeverything.wiki.gg/images/thumb/e/e1/Telly_Collectable_1.png/150px-Telly_Collectable_1.png'},
        { id: 'telly_2', clue: 'Speak with Telly.', description: '15,000 Shows!: There are 3 shows per channel...?', image: 'https://dateeverything.wiki.gg/images/thumb/f/f6/Telly_Collectable_2.png/150px-Telly_Collectable_2.png'},
        { id: 'telly_3', clue: 'Ask to see a tight end.', description: 'Tight End: Not dateable.', image: 'https://dateeverything.wiki.gg/images/thumb/9/90/Telly_Collectable_3.png/150px-Telly_Collectable_3.png'},
        { id: 'telly_4', clue: 'Watch public access.', description: 'Gerald Dabrowski: In a \'trial separation\' – so don\'t get any ideas.', image: 'https://dateeverything.wiki.gg/images/thumb/9/98/Telly_Collectable_4.png/150px-Telly_Collectable_4.png'}
    ],
    
    // Textbox-Chan - U.I. (ID: 94)
    94: [
        { id: 'textbox_1', clue: 'Pick a fight with Textbox-chan.', description: 'Textbox-chan\'s Stat Card: Check out that Rizz!', image: 'https://dateeverything.wiki.gg/images/thumb/8/83/Textbox-Chan_Collectable_1.png/150px-Textbox-Chan_Collectable_1.png'},
        { id: 'textbox_2', clue: 'Continue to speak to Textbox-chan, and don\'t be rude.', description: 'Lauren Ipsum: Suave, assured, and impossible to understand.', image: 'https://dateeverything.wiki.gg/images/thumb/6/62/Textbox-Chan_Collectable_2.png/150px-Textbox-Chan_Collectable_2.png'},
        { id: 'textbox_3', clue: 'Ask Textbox-chan to show her emotional range.', description: 'Uimmy: Given to the best emotes around.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f8/Textbox-Chan_Collectable_3.png/150px-Textbox-Chan_Collectable_3.png'}
    ],
    
    // Timothy - Clock (ID: 16)
    16: [
        { id: 'timothy_1', clue: 'Speak with Timothy.', description: 'Pocketwatch: A gorgeous array of ticking synchronicity.', image: 'https://dateeverything.wiki.gg/images/thumb/8/80/Timothy_Collectable_1.png/150px-Timothy_Collectable_1.png'},
        { id: 'timothy_2', clue: 'Speak with Timothy\'s alternate form.', description: 'Yarn: It\'s Timmy\'s yarn now.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c5/Timothy_Collectable_2.png/150px-Timothy_Collectable_2.png'},
        { id: 'timothy_3', clue: 'Glimpse Timothy\'s alternate form.', description: 'Timmy Form: He\'s adorable, and would never do anything wrong.', image: 'https://dateeverything.wiki.gg/images/thumb/3/32/Timothy_Collectable_3.png/150px-Timothy_Collectable_3.png'}
    ],
    
    // Tina - Musical Triangle (ID: 30)
    30: [
        { id: 'tina_1', clue: 'Speak with Tina.', description: 'Tina\'s Diary: The margins are impossible.', image: 'https://dateeverything.wiki.gg/images/thumb/7/7b/Tina_Collectable_1.png/150px-Tina_Collectable_1.png'},
        { id: 'tina_2', clue: 'Speak with Tina.', description: 'Love on Triangle Island: Sexy singles meet geometry!', image: 'https://dateeverything.wiki.gg/images/thumb/2/2b/Tina_Collectable_2.png/150px-Tina_Collectable_2.png'},
        { id: 'tina_3', clue: 'Agree to help Tina on her quest.', description: 'Tina\'s Dream: Where can you find someone who fits this description?', image: 'https://dateeverything.wiki.gg/images/thumb/6/61/Tina_Collectable_3.png/150px-Tina_Collectable_3.png'}
    ],
    
    // Tony - Toolbox (ID: 84)
    84: [
        { id: 'tony_1', clue: 'Speak with Tony.', description: 'Moat Blueprints: It could work, in theory.', image: 'https://dateeverything.wiki.gg/images/thumb/3/38/Tony_Collectable_1.png/150px-Tony_Collectable_1.png'},
        { id: 'tony_2', clue: 'Speak with Tony.', description: 'Indoor Slide Blueprints: It could work, in theory.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b5/Tony_Collectable_2.png/150px-Tony_Collectable_2.png'},
        { id: 'tony_3', clue: 'Attend Tony\'s Workshop.', description: 'Tony\'s Workshop Poster: Can you finally find true love with Tony\'s help?', image: 'https://dateeverything.wiki.gg/images/thumb/7/76/Tony_Collectable_3.png/150px-Tony_Collectable_3.png'},
        { id: 'tony_4', clue: 'Achieve a Love Triangle relationship.', description: 'Love Triangle: Perfect in every way.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9c/Tony_Collectable_4.png/150px-Tony_Collectable_4.png'}
    ],
    
    // Tydus - Detergent (ID: 77)
    77: [
        { id: 'tydus_1', clue: 'Speak with Tydus.', description: 'The Dipodgenes: They are adorable, and not in the least bit edible.', image: 'https://dateeverything.wiki.gg/images/thumb/5/56/Tydus_Collectable_1.png/150px-Tydus_Collectable_1.png'},
        { id: 'tydus_2', clue: 'Battle Tydus.', description: 'Stone: Crushes shears.', image: 'https://dateeverything.wiki.gg/images/thumb/9/99/Tydus_Collectable_2.png/150px-Tydus_Collectable_2.png'},
        { id: 'tydus_3', clue: 'Battle Tydus.', description: 'Shears: Slices parchment.', image: 'https://dateeverything.wiki.gg/images/thumb/0/0a/Tydus_Collectable_3.png/150px-Tydus_Collectable_3.png'},
        { id: 'tydus_4', clue: 'Battle Tydus.', description: 'Parchment: Covers stone.', image: 'https://dateeverything.wiki.gg/images/thumb/a/a2/Tydus_Collectable_4.png/150px-Tydus_Collectable_4.png'}
    ],
    
// Tyrell - Towel (ID: 51)
    51: [
        { id: 'tyrell_1', clue: 'Speak to Tyrell.', description: 'Towel Buddy - Swan Form: The neck is the hardest part to fold.', image: 'https://dateeverything.wiki.gg/images/thumb/9/9d/Tyrell_Collectable_1.png/150px-Tyrell_Collectable_1.png'},
        { id: 'tyrell_2', clue: 'Achieve a Love ending with Tyrell.', description: 'Towel Buddy - Pig Form: The nose is just right.', image: 'https://dateeverything.wiki.gg/images/thumb/6/69/Tyrell_Collectable_2.png/150px-Tyrell_Collectable_2.png'},
        { id: 'tyrell_3', clue: 'Achieve a Hate ending with Tyrell.', description: 'Towel Buddy - Monkey Form: That\'s one pissed-off Towel Buddy.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e4/Tyrell_Collectable_3.png/150px-Tyrell_Collectable_3.png'},
        { id: 'tyrell_4', clue: 'Speak to Tyrell.', description: 'Towel Buddy - Elephant Form: Achieve a Friend ending with Tyrell.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c6/Tyrell_Collectable_4.png/150px-Tyrell_Collectable_4.png'},
        { id: 'tyrell_5', clue: 'Speak to Tyrell.', description: 'Towel Buddy - Turtle Form: The neck is the hardest part to fold.', image: 'https://dateeverything.wiki.gg/images/thumb/b/b5/Tyrell_Collectable_5.png/150px-Tyrell_Collectable_5.png'}
    ],
    
    // Vaughn - Rat Trap (ID: 88)
    88: [
        { id: 'vaughn_1', clue: 'Order a dead rat for Vaughn.', description: 'Dead Rat: A dead rat.', image: 'https://dateeverything.wiki.gg/images/thumb/c/c0/Vaughn_Collectable_1.png/150px-Vaughn_Collectable_1.png'},
        { id: 'vaughn_2', clue: 'Order a stuffed rat for Vaughn.', description: 'Stuffed Rat: You just wanna squish him.', image: 'https://dateeverything.wiki.gg/images/thumb/3/34/Vaughn_Collectable_2.png/150px-Vaughn_Collectable_2.png'},
        { id: 'vaughn_3', clue: 'Get some cheese for Vaughn from the fridge.', description: 'Cheese: Cheddar, plated.', image: 'https://dateeverything.wiki.gg/images/thumb/f/f3/Vaughn_Collectable_3.png/150px-Vaughn_Collectable_3.png'}
    ],
    
    // Wallace - Wall (ID: 3)
    3: [
        { id: 'wallace_1', clue: 'Keep at it, steady, true, unwaveringly firm.', description: 'Prophecy Medallion: Given to those who uphold the Prophecy. Heavy.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d6/Wallace_Collectable_1.png/150px-Wallace_Collectable_1.png'},
        { id: 'wallace_2', clue: 'Bring up Wallace\'s trust, then dash it to pieces.', description: 'Cracked Wall: Supported, then crushed.', image: 'https://dateeverything.wiki.gg/images/thumb/6/67/Wallace_Collectable_2.png/150px-Wallace_Collectable_2.png'},
        { id: 'wallace_3', clue: 'Flirt with Wallace.', description: 'The Studs: Behind every Wall is a good stud.', image: 'https://dateeverything.wiki.gg/images/thumb/d/da/Wallace_Collectable_3.png/150px-Wallace_Collectable_3.png'}
    ],
    
    // Washford - Washer (ID: 73)
    73: [
        { id: 'washford_1', clue: 'Speak to Washford about Macbeth.', description: 'Macbeth: Very much a Washford kinda thing.', image: 'https://dateeverything.wiki.gg/images/thumb/7/71/Washford_Collectable_1.png/150px-Washford_Collectable_1.png'},
        { id: 'washford_2', clue: 'Clean out Jerry\'s drawer.', description: 'Old Washcloths: Did Washford really miss these? Suppose so.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3f/Washford_Collectable_2.png/150px-Washford_Collectable_2.png'},
        { id: 'washford_3', clue: 'Speak with Washford.', description: 'Shattered Drysdale: The breakup heard \'round the laundry room.', image: 'https://dateeverything.wiki.gg/images/thumb/e/e9/Washford_Collectable_3.png/150px-Washford_Collectable_3.png'}
    ],
    
    // Willi - Work (ID: 57)
    57: [
        { id: 'willi_1', clue: 'Speak with Willi.', description: 'Hanks LTD. Business Card: The Hanks are in some form of business...', image: 'https://dateeverything.wiki.gg/images/thumb/b/bf/Willi_Collectable_1.png/150px-Willi_Collectable_1.png'},
        { id: 'willi_2', clue: 'Speak with Willi.', description: 'Dunk\'s Cleat: Perhaps Dunk isn\'t meant for the business world...', image: 'https://dateeverything.wiki.gg/images/thumb/c/c4/Willi_Collectable_2.png/150px-Willi_Collectable_2.png'},
        { id: 'willi_3', clue: 'Speak with Willi.', description: 'Scandalabra\'s Contract: Unsigned.', image: 'https://dateeverything.wiki.gg/images/thumb/1/16/Willi_Collectable_3.png/150px-Willi_Collectable_3.png'}
    ],
    
    // Winnifred - Water Heater (ID: 62)
    62: [
        { id: 'winnifred_1', clue: 'Speak to Winnifred.', description: 'Invitation From A Bath...: Why is it so sexy?', image: 'https://dateeverything.wiki.gg/images/thumb/4/49/Winnifred_Collectable_1.png/150px-Winnifred_Collectable_1.png'},
        { id: 'winnifred_2', clue: 'Speak to Winnifred.', description: 'A Heated Argument.: Is it okay to love more than one?', image: 'https://dateeverything.wiki.gg/images/thumb/f/f5/Winnifred_Collectable_2.png/150px-Winnifred_Collectable_2.png'},
        { id: 'winnifred_3', clue: 'Take Winnifred all for yourself.', description: 'One cold heater.: You\'ve drained the warmth out of this relationship.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2d/Winnifred_Collectable_3.png/150px-Winnifred_Collectable_3.png'}
    ],
    
    // Wyndolyn - Window (ID: 8)
    8: [
        { id: 'wyndolyn_1', clue: 'Speak with Wyndolyn at the South windows.', description: 'It is Your House Party Banner: This feels rather festive.', image: 'https://dateeverything.wiki.gg/images/thumb/1/17/Wyndolyn_Collectable_1.png/150px-Wyndolyn_Collectable_1.png'},
        { id: 'wyndolyn_2', clue: 'Speak with Wyndolyn at the West windows.', description: 'Birdtha: The drama with this one never ends.', image: 'https://dateeverything.wiki.gg/images/thumb/2/25/Wyndolyn_Collectable_2.png/150px-Wyndolyn_Collectable_2.png'},
        { id: 'wyndolyn_3', clue: 'Speak with Wyndolyn at the East windows.', description: 'Windows and Pains: The world outside is a soap opera waiting to be made...', image: 'https://dateeverything.wiki.gg/images/thumb/8/80/Wyndolyn_Collectable_3.png/150px-Wyndolyn_Collectable_3.png'},
        { id: 'wyndolyn_4', clue: 'Speak with Wyndolyn at the North windows.', description: 'Baby Window: Big windows gotta come from somewhere.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d8/Wyndolyn_Collectable_4.png/150px-Wyndolyn_Collectable_4.png'}
    ],
    
    // xxXShadowl0rd420Xxx - Darkness (ID: 97)
    97: [
        { id: 'shadow_1', clue: 'Speak with xxXShadowl0rd420Xxx.', description: 'Silverfish: They\'re actually kinda cute.', image: 'https://dateeverything.wiki.gg/images/thumb/2/2b/Shadow_Collectable_1.png/150px-Shadow_Collectable_1.png'},
        { id: 'shadow_2', clue: 'Speak with xxXShadowl0rd420Xxx.', description: 'The Hanged Man: What could the answer to the age old riddle be?', image: 'https://dateeverything.wiki.gg/images/thumb/5/50/Shadow_Collectable_2.png/150px-Shadow_Collectable_2.png'},
        { id: 'shadow_3', clue: 'Achieve a hate ending with xxXShadowl0rd420Xxx.', description: 'Omega Shadowlord Form: A being of unimaginable darkness.', image: 'https://dateeverything.wiki.gg/images/thumb/2/25/Shadow_Collectable_3.png/150px-Shadow_Collectable_3.png'}
    ],
    
    // Zoey Bennett - Ghost (ID: 96)
    96: [
        { id: 'zoey_1', clue: 'Found where old objects are kept.', description: 'Zoey\'s Necklace: Beautiful and simple.', image: 'https://dateeverything.wiki.gg/images/thumb/d/d8/Zoey_Collectable_1.png/150px-Zoey_Collectable_1.png'},
        { id: 'zoey_2', clue: 'Speak with Zoey.', description: 'Golden Wings Pin: All Zoey wanted to do was fly.', image: 'https://dateeverything.wiki.gg/images/thumb/3/3c/Zoey_Collectable_2.png/150px-Zoey_Collectable_2.png'},
        { id: 'zoey_3', clue: 'Speak with Zoey.', description: 'The Seance: The bridge between life, death, and thing-hood...', image: 'https://dateeverything.wiki.gg/images/thumb/b/b9/Zoey_Collectable_3.png/150px-Zoey_Collectable_3.png'}
    ]
};

// Function to get collectables for a character
function getCharacterCollectables(characterId) {
    return collectables[characterId] || [];
}

// Function to check if user has a collectable
function hasCollectable(characterId, collectableId) {
    const state = getCurrentGameState();
    if (!state.collectables) {
        state.collectables = {};
    }
    if (!state.collectables[characterId]) {
        state.collectables[characterId] = {};
    }
    return state.collectables[characterId][collectableId] || false;
}

// Function to toggle collectable status
function toggleCollectable(characterId, collectableId) {
    const state = getCurrentGameState();
    if (!state.collectables) {
        state.collectables = {};
    }
    if (!state.collectables[characterId]) {
        state.collectables[characterId] = {};
    }
    
    state.collectables[characterId][collectableId] = !state.collectables[characterId][collectableId];
    saveStateUnified();
    
    // Update only the specific item and summary stats if we're on the collections tab
    if (document.getElementById('collections-tab').classList.contains('active')) {
        updateCollectableItem(characterId, collectableId);
        updateCollectionsSummary();
    }
}