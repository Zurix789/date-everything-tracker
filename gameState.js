// Game state
let gameState = {
    hintMode: false,
    atticUnlocked: false,
    dlcPurchased: false,
    stats: {
        smarts: 0,
        poise: 0,
        empathy: 0,
        charm: 0,
        sass: 0
    },
    characters: {},
    timeSlots: {
        '9am': '',
        '12pm': '',
        '3pm': '',
        '6pm': '',
        '9pm': ''
    }
};

// NG+ Game state
let ngPlusGameState = {
    hintMode: false,
    atticUnlocked: false,
    dlcPurchased: false,
    stats: {
        smarts: 0,
        poise: 0,
        empathy: 0,
        charm: 0,
        sass: 0
    },
    startingStats: {
        smarts: 0,
        poise: 0,
        empathy: 0,
        charm: 0,
        sass: 0
    },
    characters: {},
    timeSlots: {
        '9am': '',
        '12pm': '',
        '3pm': '',
        '6pm': '',
        '9pm': ''
    }
};

let currentTab = 'main';
let isNgPlus = false;

// Helper function to get the current game state
function getCurrentGameState() {
    return isNgPlus ? ngPlusGameState : gameState;
}

// Helper function to get element ID prefix
function getElementPrefix() {
    return isNgPlus ? 'ng' : '';
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('dateEverythingTracker', JSON.stringify(gameState));
}

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('dateEverythingTracker');
    if (saved) {
        const loadedState = JSON.parse(saved);
        gameState = { ...gameState, ...loadedState };
        // Ensure all characters exist after loading
        initializeCharacters();
    }
}

// Save NG+ state
function saveNgPlusState() {
    localStorage.setItem('dateEverythingTrackerNgPlus', JSON.stringify(ngPlusGameState));
}

// Load NG+ state from localStorage
function loadNgPlusState() {
    const saved = localStorage.getItem('dateEverythingTrackerNgPlus');
    if (saved) {
        const loadedState = JSON.parse(saved);
        ngPlusGameState = { ...ngPlusGameState, ...loadedState };
        // Ensure all characters exist after loading
        initializeNgPlusCharacters();
    }
}

// Unified save function
function saveStateUnified() {
    if (isNgPlus) {
        saveNgPlusState();
    } else {
        saveState();
    }
}

// Add these updates to gameState.js to handle the new portrait variant properties

// Update the initializeCharacters function to include new properties
function initializeCharacters() {
    characters.forEach(char => {
        if (!gameState.characters[char.id]) {
            gameState.characters[char.id] = {
                met: false,
                relationship: null,
                storyComplete: false,
                realized: false,
                statGiven: false,
                chosenStat: char.stat === 'choosable' ? null : char.stat,
                locations: char.hasLocations ? {} : null,
                manualDependencies: {},
                // New properties for portrait variants
                portraitVariant: 'default',
                portraitCycle: 0
            };
            
            // Initialize location tracking for special characters
            if (char.hasLocations && locationData[char.id]) {
                locationData[char.id].locations.forEach(loc => {
                    gameState.characters[char.id].locations[loc] = false;
                });
            }
            
            // Initialize manual dependencies for characters with empty realizationDependencies
            if (char.realizationDependencies.length === 0 && char.id > 2) {
                gameState.characters[char.id].manualDependencies = {};
            }
        } else {
            // Ensure existing characters have the new properties
            if (gameState.characters[char.id].portraitVariant === undefined) {
                gameState.characters[char.id].portraitVariant = 'default';
            }
            if (gameState.characters[char.id].portraitCycle === undefined) {
                gameState.characters[char.id].portraitCycle = 0;
            }
        }
    });
}

// Update the initializeNgPlusCharacters function similarly
function initializeNgPlusCharacters() {
    characters.forEach(char => {
        if (!ngPlusGameState.characters[char.id]) {
            ngPlusGameState.characters[char.id] = {
                met: false,
                relationship: null,
                storyComplete: false,
                realized: false,
                statGiven: false,
                chosenStat: char.stat === 'choosable' ? null : char.stat,
                locations: char.hasLocations ? {} : null,
                manualDependencies: {},
                // New properties for portrait variants
                portraitVariant: 'default',
                portraitCycle: 0
            };
            
            // Initialize location tracking for special characters
            if (char.hasLocations && locationData[char.id]) {
                locationData[char.id].locations.forEach(loc => {
                    ngPlusGameState.characters[char.id].locations[loc] = false;
                });
            }
            
            // Initialize manual dependencies for characters with empty realizationDependencies
            if (char.realizationDependencies.length === 0 && char.id > 2) {
                ngPlusGameState.characters[char.id].manualDependencies = {};
            }
        } else {
            // Ensure existing characters have the new properties
            if (ngPlusGameState.characters[char.id].portraitVariant === undefined) {
                ngPlusGameState.characters[char.id].portraitVariant = 'default';
            }
            if (ngPlusGameState.characters[char.id].portraitCycle === undefined) {
                ngPlusGameState.characters[char.id].portraitCycle = 0;
            }
        }
    });
}