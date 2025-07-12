
// Complete main.js file with all enhancements including main game stat adjustments
let characterFavorites = new Set();

// Initialize app
function init() {
    // Load states first
    loadState();
    loadNgPlusState();
    
    // Initialize starting stats if they don't exist
    if (!gameState.startingStats) {
        gameState.startingStats = {
            smarts: 0,
            poise: 0,
            empathy: 0,
            charm: 0,
            sass: 0
        };
    }
    
    // Then initialize characters (this ensures any new characters are added and new properties are set)
    initializeCharacters();
    initializeNgPlusCharacters();
    initializeFavorites();
    
    // Update displays for main game (default tab)
    updateStats();
    updateSummaryStats();
    updateTimeSlots();
    renderCharacters();
    
    // Set up event listeners
    setupEventListeners();
    updateUIStates();
}

// Set up all event listeners
function setupEventListeners() {
    // Main game controls
    document.getElementById('hintMode').addEventListener('click', () => {
        gameState.hintMode = !gameState.hintMode;
        document.getElementById('hintMode').textContent = `Hint Mode: ${gameState.hintMode ? 'ON' : 'OFF'}`;
        document.getElementById('hintMode').classList.toggle('active', gameState.hintMode);
        saveState();
        if (!isNgPlus) renderCharacters();
    });

    document.getElementById('atticUnlocked').addEventListener('click', () => {
        gameState.atticUnlocked = !gameState.atticUnlocked;
        document.getElementById('atticUnlocked').textContent = `Attic: ${gameState.atticUnlocked ? 'Unlocked' : 'Locked'}`;
        document.getElementById('atticUnlocked').classList.toggle('active', gameState.atticUnlocked);
        saveState();
        if (!isNgPlus) renderCharacters();
    });

    document.getElementById('dlcPurchased').addEventListener('click', () => {
        gameState.dlcPurchased = !gameState.dlcPurchased;
        document.getElementById('dlcPurchased').textContent = `DLC: ${gameState.dlcPurchased ? 'Purchased' : 'Not Purchased'}`;
        document.getElementById('dlcPurchased').classList.toggle('active', gameState.dlcPurchased);
        saveState();
        if (!isNgPlus) {
            renderCharacters();
        }
        // Update collections if on collections tab
        if (currentTab === 'collections') {
            updateCollectionsSummary();
        }
    });

    document.getElementById('resetData').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
            localStorage.removeItem('dateEverythingTracker');
            location.reload();
        }
    });

    // NG+ controls
    document.getElementById('ngHintMode').addEventListener('click', () => {
        ngPlusGameState.hintMode = !ngPlusGameState.hintMode;
        document.getElementById('ngHintMode').textContent = `Hint Mode: ${ngPlusGameState.hintMode ? 'ON' : 'OFF'}`;
        document.getElementById('ngHintMode').classList.toggle('active', ngPlusGameState.hintMode);
        saveNgPlusState();
        if (isNgPlus) {
            renderCharacters();
        }
        // Update collections if on collections tab
        if (currentTab === 'collections') {
            updateCollectionsSummary();
        }
    });

    document.getElementById('ngAtticUnlocked').addEventListener('click', () => {
        ngPlusGameState.atticUnlocked = !ngPlusGameState.atticUnlocked;
        document.getElementById('ngAtticUnlocked').textContent = `Attic: ${ngPlusGameState.atticUnlocked ? 'Unlocked' : 'Locked'}`;
        document.getElementById('ngAtticUnlocked').classList.toggle('active', ngPlusGameState.atticUnlocked);
        saveNgPlusState();
        if (isNgPlus) {
            renderCharacters();
        }
        // Update collections if on collections tab
        if (currentTab === 'collections') {
            updateCollectionsSummary();
        }
    });

    document.getElementById('ngDlcPurchased').addEventListener('click', () => {
        ngPlusGameState.dlcPurchased = !ngPlusGameState.dlcPurchased;
        document.getElementById('ngDlcPurchased').textContent = `DLC: ${ngPlusGameState.dlcPurchased ? 'Purchased' : 'Not Purchased'}`;
        document.getElementById('ngDlcPurchased').classList.toggle('active', ngPlusGameState.dlcPurchased);
        saveNgPlusState();
        if (isNgPlus) {
            renderCharacters();
        }
        // Update collections if on collections tab
        if (currentTab === 'collections') {
            updateCollectionsSummary();
        }
    });

    document.getElementById('ngResetData').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all NG+ data? This cannot be undone.')) {
            localStorage.removeItem('dateEverythingTrackerNgPlus');
            location.reload();
        }
    });

    // Time slot change handlers for main game and NG+
    ['9am', '12pm', '3pm', '6pm', '9pm'].forEach(slot => {
        const mainSlot = document.getElementById(`slot${slot}`);
        if (mainSlot) {
            mainSlot.addEventListener('change', (e) => {
                gameState.timeSlots[slot] = e.target.value;
                saveState();
                // Refresh all time slot dropdowns to reflect the change
                updateTimeSlots();
                // Re-render character cards to show updated time slot info
                if (!isNgPlus) {
                    renderCharacters();
                }
                // Auto-refresh filters if time slot filter is active
                refreshFiltersIfNeeded();
            });
        }
        
        const ngSlot = document.getElementById(`ngSlot${slot}`);
        if (ngSlot) {
            ngSlot.addEventListener('change', (e) => {
                ngPlusGameState.timeSlots[slot] = e.target.value;
                saveNgPlusState();
                // Refresh all time slot dropdowns to reflect the change
                updateTimeSlots();
                // Re-render character cards to show updated time slot info
                if (isNgPlus) {
                    renderCharacters();
                }
                // Auto-refresh filters if time slot filter is active
                refreshFiltersIfNeeded();
            });
        }
    });

    // NG+ starting stats - Add both 'input' and 'change' events
    ['ngPlusSmarts', 'ngPlusPoise', 'ngPlusEmpathy', 'ngPlusCharm', 'ngPlusSass'].forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                validateStatInput(this);
                updateStartingStats();
            });
            input.addEventListener('change', function() {
                validateStatInput(this);
                updateStartingStats();
            });
        }
    });

    // NEW: Main game stat adjustments event listeners
    setupMainStatAdjustmentListeners();
}

// NEW: Setup event listeners for main game stat adjustments
function setupMainStatAdjustmentListeners() {
    // Toggle button
    const toggleButton = document.getElementById('toggleStatAdjustments');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleStatAdjustments);
    }
    
    // Real-time updates for all stat inputs - both input and change events
    ['mainStartingSmarts', 'mainStartingPoise', 'mainStartingEmpathy', 'mainStartingCharm', 'mainStartingSass'].forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                validateStatInput(this);
                updateMainStartingStatsRealtime();
            });
            input.addEventListener('change', function() {
                validateStatInput(this);
                updateMainStartingStatsRealtime();
            });
        }
    });
}

// NEW: Toggle stat adjustments panel
function toggleStatAdjustments() {
    const panel = document.getElementById('statAdjustmentsPanel');
    const button = document.getElementById('toggleStatAdjustments');
    
    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        button.textContent = '📊 Hide Stat Adjustments';
        button.classList.add('active');
        loadStartingStatsToInputs();
    } else {
        panel.style.display = 'none';
        button.textContent = '📊 Stat Adjustments';
        button.classList.remove('active');
    }
}

// NEW: Load current starting stats into input fields
function loadStartingStatsToInputs() {
    document.getElementById('mainStartingSmarts').value = gameState.startingStats.smarts || 0;
    document.getElementById('mainStartingPoise').value = gameState.startingStats.poise || 0;
    document.getElementById('mainStartingEmpathy').value = gameState.startingStats.empathy || 0;
    document.getElementById('mainStartingCharm').value = gameState.startingStats.charm || 0;
    document.getElementById('mainStartingSass').value = gameState.startingStats.sass || 0;
}

// NEW: Update main game starting stats with real-time updates
function updateMainStartingStatsRealtime() {
    // Get the current values from the input fields
    const smartsInput = document.getElementById('mainStartingSmarts');
    const poiseInput = document.getElementById('mainStartingPoise');
    const empathyInput = document.getElementById('mainStartingEmpathy');
    const charmInput = document.getElementById('mainStartingCharm');
    const sassInput = document.getElementById('mainStartingSass');
    
    // Update the starting stats with 100 cap (using the same capStatsAt100 function)
    gameState.startingStats = capStatsAt100({
        smarts: parseInt(smartsInput.value) || 0,
        poise: parseInt(poiseInput.value) || 0,
        empathy: parseInt(empathyInput.value) || 0,
        charm: parseInt(charmInput.value) || 0,
        sass: parseInt(sassInput.value) || 0
    });
    
    // Save the updated state
    saveState();
    
    // Force immediate recalculation and display update
    recalculateStatsUnified();
    
    // Re-render character cards to show updated realization requirements
    if (!isNgPlus) {
        renderCharacters();
    }
}

// Update UI states
function updateUIStates() {
    // Main game UI states
    document.getElementById('hintMode').classList.toggle('active', gameState.hintMode);
    document.getElementById('atticUnlocked').classList.toggle('active', gameState.atticUnlocked);
    document.getElementById('dlcPurchased').classList.toggle('active', gameState.dlcPurchased);
    document.getElementById('hintMode').textContent = `Hint Mode: ${gameState.hintMode ? 'ON' : 'OFF'}`;
    document.getElementById('atticUnlocked').textContent = `Attic: ${gameState.atticUnlocked ? 'Unlocked' : 'Locked'}`;
    document.getElementById('dlcPurchased').textContent = `DLC: ${gameState.dlcPurchased ? 'Purchased' : 'Not Purchased'}`;

    // NG+ UI states
    document.getElementById('ngHintMode').classList.toggle('active', ngPlusGameState.hintMode);
    document.getElementById('ngAtticUnlocked').classList.toggle('active', ngPlusGameState.atticUnlocked);
    document.getElementById('ngDlcPurchased').classList.toggle('active', ngPlusGameState.dlcPurchased);
    document.getElementById('ngHintMode').textContent = `Hint Mode: ${ngPlusGameState.hintMode ? 'ON' : 'OFF'}`;
    document.getElementById('ngAtticUnlocked').textContent = `Attic: ${ngPlusGameState.atticUnlocked ? 'Unlocked' : 'Locked'}`;
    document.getElementById('ngDlcPurchased').textContent = `DLC: ${ngPlusGameState.dlcPurchased ? 'Purchased' : 'Not Purchased'}`;

    // Set NG+ starting stat values
    document.getElementById('ngPlusSmarts').value = ngPlusGameState.startingStats.smarts;
    document.getElementById('ngPlusPoise').value = ngPlusGameState.startingStats.poise;
    document.getElementById('ngPlusEmpathy').value = ngPlusGameState.startingStats.empathy;
    document.getElementById('ngPlusCharm').value = ngPlusGameState.startingStats.charm;
    document.getElementById('ngPlusSass').value = ngPlusGameState.startingStats.sass;
    
    // Initialize stats properly for both tabs
    recalculateStatsUnified();
}

// Enhanced character reset function to handle new properties
function resetCharacterState(charId) {
    const state = getCurrentGameState();
    const character = characters.find(c => c.id === charId);
    
    if (state.characters[charId]) {
        state.characters[charId] = {
            met: false,
            relationship: null,
            storyComplete: false,
            realized: false,
            statGiven: false,
            chosenStat: character.stat === 'choosable' ? null : character.stat,
            locations: character.hasLocations ? Object.fromEntries(character.locations.map(loc => [loc, false])) : {},
            portraitVariant: 'default',
            portraitCycle: 0
        };
        
        saveStateUnified();
        renderSingleCharacterInPlace(charId);
        updateSummaryStats();
    }
}

function validateStatInput(inputElement) {
    const value = parseInt(inputElement.value);
    if (value > 100) {
        inputElement.value = 100;
    } else if (value < 0) {
        inputElement.value = 0;
    }
}

function setupEnhancedNGPlusEventListeners() {
    ['ngPlusSmarts', 'ngPlusPoise', 'ngPlusEmpathy', 'ngPlusCharm', 'ngPlusSass'].forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                validateStatInput(this);
                updateStartingStats();
            });
            input.addEventListener('change', function() {
                validateStatInput(this);
                updateStartingStats();
            });
        }
    });
}

// Favorites system
function toggleCharacterFavorite(characterId) {
    if (characterFavorites.has(characterId)) {
        characterFavorites.delete(characterId);
    } else {
        characterFavorites.add(characterId);
    }
    saveFavorites();
    updateAllFavoriteStarButtons(characterId);
}

function isCharacterFavorited(characterId) {
    return characterFavorites.has(characterId);
}

function loadFavorites() {
    const savedFavorites = localStorage.getItem('characterFavorites');
    if (savedFavorites) {
        try {
            const favoritesArray = JSON.parse(savedFavorites);
            characterFavorites = new Set(favoritesArray);
        } catch (e) {
            console.error('Failed to load favorites:', e);
            characterFavorites = new Set();
        }
    }
}

function saveFavorites() {
    const favoritesArray = Array.from(characterFavorites);
    localStorage.setItem('characterFavorites', JSON.stringify(favoritesArray));
}

function initializeFavorites() {
    loadFavorites();
}

function updateAllFavoriteStarButtons(characterId) {
    // Method 1: Find by data attribute on card
    const cards = document.querySelectorAll(`[data-character-id="${characterId}"]`);
    cards.forEach(card => {
        const starBtn = card.querySelector('.favorite-star-btn');
        if (starBtn) {
            if (characterFavorites.has(characterId)) {
                starBtn.classList.add('favorited');
                starBtn.innerHTML = '★';
            } else {
                starBtn.classList.remove('favorited');
                starBtn.innerHTML = '☆';
            }
        }
    });
    
    // Method 2: Find by direct selector (backup)
    const directButtons = document.querySelectorAll('.favorite-star-btn');
    directButtons.forEach(btn => {
        const card = btn.closest('[data-character-id]');
        if (card) {
            const charId = parseInt(card.getAttribute('data-character-id'));
            if (charId === characterId) {
                if (characterFavorites.has(characterId)) {
                    btn.classList.add('favorited');
                    btn.innerHTML = '★';
                } else {
                    btn.classList.remove('favorited');
                    btn.innerHTML = '☆';
                }
            }
        }
    });
}

// Add favorite star button to character card
function addFavoriteStarToCharacterCard(card, characterId) {
    // Create the favorite star button
    const starButton = document.createElement('button');
    starButton.className = 'favorite-star-btn';
    starButton.onclick = () => toggleCharacterFavorite(characterId);
    
    // Set initial state
    if (isCharacterFavorited(characterId)) {
        starButton.classList.add('favorited');
        starButton.innerHTML = '★';
    } else {
        starButton.innerHTML = '☆';
    }
    
    // Add to character card
    card.appendChild(starButton);
    
    // Add data attribute to card for easy selection
    card.setAttribute('data-character-id', characterId);
}

// Function to toggle character portrait variant (for Curt & Rod and Eddie & Volt)
function toggleCharacterVariant(charId) {
    console.log('Toggling variant for character:', charId, 'isNgPlus:', isNgPlus);
    
    const state = getCurrentGameState();
    
    // Initialize variant state if it doesn't exist
    if (!state.characters[charId].portraitVariant) {
        state.characters[charId].portraitVariant = 'default';
    }
    if (!state.characters[charId].portraitCycle) {
        state.characters[charId].portraitCycle = 0;
    }
    
    const currentVariant = state.characters[charId].portraitVariant;
    const currentCycle = state.characters[charId].portraitCycle;
    
    console.log('Current variant:', currentVariant, 'Current cycle:', currentCycle);
    
    if (charId === 9) { // Curt & Rod
        if (currentVariant === 'default') {
            // Switch to individual mode, show Curt first
            state.characters[charId].portraitVariant = 'alt';
            state.characters[charId].portraitCycle = 0;
        } else if (currentCycle === 0) {
            // Currently showing Curt, switch to Rod
            state.characters[charId].portraitCycle = 1;
        } else {
            // Currently showing Rod, go back to together
            state.characters[charId].portraitVariant = 'default';
            state.characters[charId].portraitCycle = 0;
        }
    } else if (charId === 19) { // Eddie & Volt
        if (currentVariant === 'default') {
            // Switch to individual mode, show Eddie first
            state.characters[charId].portraitVariant = 'alt';
            state.characters[charId].portraitCycle = 0;
        } else if (currentCycle === 0) {
            // Currently showing Eddie, switch to Volt
            state.characters[charId].portraitCycle = 1;
        } else {
            // Currently showing Volt, go back to together
            state.characters[charId].portraitVariant = 'default';
            state.characters[charId].portraitCycle = 0;
        }
    }
    
    console.log('New variant:', state.characters[charId].portraitVariant, 'New cycle:', state.characters[charId].portraitCycle);
    
    // Save state and update just this character in place
    saveStateUnified();
    renderSingleCharacterInPlace(charId);
}

// Make functions global for onclick handlers
window.toggleCharacterMetUnified = toggleCharacterMetUnified;
window.setCharacterRelationshipUnified = setCharacterRelationshipUnified;
window.setChosenStatUnified = setChosenStatUnified;
window.toggleStoryCompleteUnified = toggleStoryCompleteUnified;
window.toggleRealizedUnified = toggleRealizedUnified;
window.toggleLocationUnified = toggleLocationUnified;
window.switchTab = switchTab;
window.toggleCharacterDetails = toggleCharacterDetails;
window.toggleCharacterVariant = toggleCharacterVariant;
window.resetCharacterState = resetCharacterState;
window.getCharacterPortraitUrl = getCharacterPortraitUrl;
window.getVariantButtonText = getVariantButtonText;
window.toggleFilters = toggleFilters;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.toggleCharacterFavorite = toggleCharacterFavorite;
window.isCharacterFavorited = isCharacterFavorited;
window.loadFavorites = loadFavorites;
window.saveFavorites = saveFavorites;
window.initializeFavorites = initializeFavorites;

// NEW: Make stat adjustment functions global
window.toggleStatAdjustments = toggleStatAdjustments;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);