// Complete main.js file with all enhancements
let characterFavorites = new Set();

// Initialize app
function init() {
    // Load states first
    loadState();
    loadNgPlusState();
    
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
        if (isNgPlus) renderCharacters();
    });

    document.getElementById('ngAtticUnlocked').addEventListener('click', () => {
        ngPlusGameState.atticUnlocked = !ngPlusGameState.atticUnlocked;
        document.getElementById('ngAtticUnlocked').textContent = `Attic: ${ngPlusGameState.atticUnlocked ? 'Unlocked' : 'Locked'}`;
        document.getElementById('ngAtticUnlocked').classList.toggle('active', ngPlusGameState.atticUnlocked);
        saveNgPlusState();
        if (isNgPlus) renderCharacters();
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

    // Time slot change handlers for main game
// Time slot change handlers for main game
['9am', '12pm', '3pm', '6pm', '9pm'].forEach(slot => {
    const mainSlot = document.getElementById(`slot${slot}`);
    if (mainSlot) {
        mainSlot.addEventListener('change', (e) => {
            gameState.timeSlots[slot] = e.target.value;
            saveState();
            // Refresh all time slot dropdowns to reflect the change
            updateTimeSlots();
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
            // Auto-refresh filters if time slot filter is active
            refreshFiltersIfNeeded();
        });
    }
});

    // NG+ starting stats - Add both 'input' and 'change' events
    ['ngPlusSmarts', 'ngPlusPoise', 'ngPlusEmpathy', 'ngPlusCharm', 'ngPlusSass'].forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', updateStartingStats);
            input.addEventListener('change', updateStartingStats);
        }
    });
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
            locations: character.hasLocations ? {} : null,
            manualDependencies: {},
            portraitVariant: 'default',
            portraitCycle: 0
        };
        
        // Reinitialize locations if character has them
        if (character.hasLocations && locationData[character.id]) {
            locationData[character.id].locations.forEach(loc => {
                state.characters[charId].locations[loc] = false;
            });
        }
        
        // Reinitialize manual dependencies
        if (character.realizationDependencies.length === 0 && character.id > 2) {
            state.characters[charId].manualDependencies = {};
        }
    }
}

// Function to toggle character details expansion
function toggleCharacterDetails(charId) {
    const detailsElement = document.getElementById(`character-details-${charId}`);
    const expandBtn = document.getElementById(`expand-btn-${charId}`);
    
    if (detailsElement && expandBtn) {
        if (detailsElement.classList.contains('collapsed')) {
            detailsElement.classList.remove('collapsed');
            expandBtn.textContent = 'Collapse';
        } else {
            detailsElement.classList.add('collapsed');
            expandBtn.textContent = 'Expand';
        }
    }
}

// Enhanced portrait selection function
function getCharacterPortraitUrl(char, charState) {
    const urls = characterPortraitUrls[char.id];
    if (!urls) return null;
    
    // Handle dual characters with individual variants
    if (char.id === 9 || char.id === 19) {
        const currentVariant = charState.portraitVariant || 'default';
        const currentCycle = charState.portraitCycle || 0;
        
        if (currentVariant === 'alt') {
            // Show individual characters
            const characterPrefix = char.id === 9 ? 
                (currentCycle === 0 ? 'curt' : 'rod') :
                (currentCycle === 0 ? 'eddie' : 'volt');
            
            // Get the appropriate individual portrait based on relationship state
            if (charState.realized) {
                return urls[`${characterPrefix}Realized`] || urls.realized || urls.default;
            } else if (charState.relationship === 'love') {
                return urls[`${characterPrefix}Love`] || urls.love || urls.default;
            } else if (charState.relationship === 'friend') {
                return urls[`${characterPrefix}Friend`] || urls.friend || urls.default;
            } else if (charState.relationship === 'hate') {
                return urls[`${characterPrefix}Hate`] || urls.hate || urls.default;
            } else {
                return urls[`${characterPrefix}Default`] || urls.default;
            }
        } else {
            // Show together - normal logic
            if (charState.realized) {
                return urls.realized || urls.default;
            } else if (charState.relationship === 'love') {
                return urls.love || urls.default;
            } else if (charState.relationship === 'friend') {
                return urls.friend || urls.default;
            } else if (charState.relationship === 'hate') {
                return urls.hate || urls.default;
            } else {
                return urls.default;
            }
        }
    } else {
        // Normal characters - existing logic
        if (charState.realized) {
            return urls.realized || urls.default;
        } else if (charState.relationship === 'love') {
            return urls.love || urls.default;
        } else if (charState.relationship === 'friend') {
            return urls.friend || urls.default;
        } else if (charState.relationship === 'hate') {
            return urls.hate || urls.default;
        } else {
            return urls.default;
        }
    }
}

// Enhanced variant button text function
function getVariantButtonText(char, charState) {
    if (char.id !== 9 && char.id !== 19) return '';
    
    const currentVariant = charState.portraitVariant || 'default';
    const currentCycle = charState.portraitCycle || 0;
    
    if (char.id === 9) { // Curt & Rod
        if (currentVariant === 'default') {
            return 'Show Curt';
        } else if (currentCycle === 0) {
            return 'Show Rod';
        } else {
            return 'Show Together';
        }
    } else if (char.id === 19) { // Eddie & Volt
        if (currentVariant === 'default') {
            return 'Show Eddie';
        } else if (currentCycle === 0) {
            return 'Show Volt';
        } else {
            return 'Show Together';
        }
    }
    
    return '';
}

// Enhanced function to render a single character in place (maintains position)
function renderSingleCharacterInPlace(charId) {
    console.log('Rendering single character in place:', charId, 'isNgPlus:', isNgPlus);
    
    const char = characters.find(c => c.id === charId);
    if (!char) {
        console.log('Character not found:', charId);
        return;
    }
    
    // Use the correct grid selector based on current mode
    const gridSelector = isNgPlus ? '#ngCharacterGrid' : '#characterGrid';
    const existingCard = document.querySelector(`${gridSelector} [data-char-id="${charId}"]`);
    if (!existingCard) {
        console.log('Existing card not found for character:', charId, 'in grid:', gridSelector);
        // Try finding it without grid selector as fallback
        const fallbackCard = document.querySelector(`[data-char-id="${charId}"]`);
        if (!fallbackCard) {
            console.log('No card found anywhere for character:', charId);
            return;
        }
        console.log('Found card using fallback selector');
    }
    
    const cardElement = existingCard || document.querySelector(`[data-char-id="${charId}"]`);
    const charState = getCurrentGameState().characters[char.id];
    console.log('Character state:', charState);
    
    // Update the portrait using the enhanced function
    const portraitElement = cardElement.querySelector('.character-portrait');
    if (portraitElement && characterPortraitUrls[char.id]) {
        const portraitUrl = getCharacterPortraitUrl(char, charState);
        console.log('New portrait URL:', portraitUrl);
        if (portraitUrl) {
            // Update the main portrait URL
            portraitElement.style.setProperty('--portrait-url', `url('${portraitUrl}')`);
            
            // CRITICAL FIX: Also update all relationship-specific CSS variables to match
            // This ensures the CSS doesn't use the old "together" URLs when character has a relationship
            portraitElement.style.setProperty('--portrait-love-url', `url('${portraitUrl}')`);
            portraitElement.style.setProperty('--portrait-friend-url', `url('${portraitUrl}')`);
            portraitElement.style.setProperty('--portrait-hate-url', `url('${portraitUrl}')`);
            portraitElement.style.setProperty('--portrait-realized-url', `url('${portraitUrl}')`);
            
            console.log('Updated all CSS variables to:', portraitUrl);
        }
    }
    
    // Update the variant button text using enhanced function
    const variantButton = cardElement.querySelector(`button[onclick="toggleCharacterVariant(${char.id})"]`);
    if (variantButton && (char.id === 9 || char.id === 19)) {
        const buttonText = getVariantButtonText(char, charState);
        console.log('New button text:', buttonText);
        variantButton.textContent = buttonText;
    }
    
    // Update character name - always update for consistency
    const nameElement = cardElement.querySelector('.character-name');
    if (nameElement) {
        let newDisplayName;
        
        // Special handling for dual characters
        if ((char.id === 9 || char.id === 19) && charState.met) {
            const currentVariant = charState.portraitVariant || 'default';
            const currentCycle = charState.portraitCycle || 0;
            
            console.log('Dual character - variant:', currentVariant, 'cycle:', currentCycle);
            
            if (currentVariant === 'alt') {
                if (char.id === 9) { // Curt & Rod
                    const individualName = currentCycle === 0 ? 'Curt' : 'Rod';
                    newDisplayName = `${char.id}. ${individualName}`;
                } else if (char.id === 19) { // Eddie & Volt
                    const individualName = currentCycle === 0 ? 'Eddie' : 'Volt';
                    newDisplayName = `${char.id}. ${individualName}`;
                }
            } else {
                newDisplayName = getCharacterDisplayNameUnified(char);
            }
        } else {
            newDisplayName = getCharacterDisplayNameUnified(char);
        }
        
        console.log('OLD name element text:', nameElement.textContent);
        console.log('Setting NEW name to:', newDisplayName);
        nameElement.textContent = newDisplayName;
        console.log('FINAL name element text:', nameElement.textContent);
        
        // Force a repaint
        nameElement.style.display = 'none';
        nameElement.offsetHeight; // Trigger reflow
        nameElement.style.display = '';
    } else {
        console.log('Name element not found in card');
    }
}

// Enhanced display name function (duplicate to ensure availability)
function getEnhancedDisplayName(char, charState) {
    let displayName = getCharacterDisplayNameUnified(char);
    
    // Enhanced display name for dual characters when they're met
    if ((char.id === 9 || char.id === 19) && charState.met) {
        const currentVariant = charState.portraitVariant || 'default';
        const currentCycle = charState.portraitCycle || 0;
        
        if (currentVariant === 'alt') {
            if (char.id === 9) { // Curt & Rod
                const individualName = currentCycle === 0 ? 'Curt' : 'Rod';
                displayName = `${char.id}. ${individualName}`;
            } else if (char.id === 19) { // Eddie & Volt
                const individualName = currentCycle === 0 ? 'Eddie' : 'Volt';
                displayName = `${char.id}. ${individualName}`;
            }
        }
    }
    
    return displayName;
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
// Check if time slot filter is active and refresh the display
function refreshFiltersIfNeeded() {
    const filterKey = isNgPlus ? 'ng' : 'main';
    const filters = currentFilters[filterKey];
    
    // If time slot filter is active, re-render characters to show updated results
    if (filters.timeslotFilter && filters.timeslotFilter !== '') {
        renderCharacters();
    }
}
// Load favorites from localStorage on page load
function loadFavorites() {
    const saved = localStorage.getItem('characterFavorites');
    if (saved) {
        characterFavorites = new Set(JSON.parse(saved));
    }
}

// Save favorites to localStorage
function saveFavorites() {
    localStorage.setItem('characterFavorites', JSON.stringify([...characterFavorites]));
}

// Toggle favorite status for a character
function toggleCharacterFavorite(characterId) {
    if (characterFavorites.has(characterId)) {
        characterFavorites.delete(characterId);
    } else {
        characterFavorites.add(characterId);
    }
    saveFavorites();
    
    // Use the more robust update method
    updateAllFavoriteStarButtons(characterId);
    
    // Check if favorites filter is active and re-render appropriate tabs
    const filterKey = isNgPlus ? 'ng' : 'main'; 
    const filters = currentFilters[filterKey];
    const collectionsFilters = currentFilters.collections;
    
    // Re-render main/NG+ tabs if favorites filter is active
    if (filters.relationshipFilter === 'favorites') {
        renderCharacters();
    }
    
    // Re-render collections tab if favorites filter is active
    if (collectionsFilters.metFilter === 'favorites') {
        renderCollections();
    }
}

function updateFavoriteStarButton(characterId) {
    // Find ALL star buttons for this character across ALL tabs
    const allStarButtons = document.querySelectorAll(`[data-character-id="${characterId}"] .favorite-star-btn`);
    
    allStarButtons.forEach(starBtn => {
        if (characterFavorites.has(characterId)) {
            starBtn.classList.add('favorited');
            starBtn.innerHTML = '★';
        } else {
            starBtn.classList.remove('favorited');
            starBtn.innerHTML = '☆';
        }
    });
}

// Check if a character is favorited
function isCharacterFavorited(characterId) {
    return characterFavorites.has(characterId);
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

// Initialize favorites system - call this in your init() function
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
// Complete Sync Integration Script
// Add this to your main.js or create as a new file: syncIntegration.js

// Enhanced integration with existing walkthrough functions
function integrateEnhancedSyncWithWalkthrough() {
    // Override existing walkthrough functions to trigger sync updates
    const originalWalkthroughFunctions = {
        toggleWalkthroughCharacterMet: window.toggleWalkthroughCharacterMet,
        toggleWalkthroughStoryComplete: window.toggleWalkthroughStoryComplete,
        toggleWalkthroughRealized: window.toggleWalkthroughRealized,
        setWalkthroughRelationship: window.setWalkthroughRelationship
    };

    // Enhanced wrapper functions that trigger immediate sync
    window.toggleWalkthroughCharacterMet = function(charId) {
        if (originalWalkthroughFunctions.toggleWalkthroughCharacterMet) {
            originalWalkthroughFunctions.toggleWalkthroughCharacterMet(charId);
            triggerManualChange('walkthrough', charId);
        }
    };

    window.toggleWalkthroughStoryComplete = function(charId) {
        if (originalWalkthroughFunctions.toggleWalkthroughStoryComplete) {
            originalWalkthroughFunctions.toggleWalkthroughStoryComplete(charId);
            triggerManualChange('walkthrough', charId);
        }
    };

    window.toggleWalkthroughRealized = function(charId) {
        if (originalWalkthroughFunctions.toggleWalkthroughRealized) {
            originalWalkthroughFunctions.toggleWalkthroughRealized(charId);
            triggerManualChange('walkthrough', charId);
        }
    };

    window.setWalkthroughRelationship = function(charId, relationship) {
        if (originalWalkthroughFunctions.setWalkthroughRelationship) {
            originalWalkthroughFunctions.setWalkthroughRelationship(charId, relationship);
            triggerManualChange('walkthrough', charId);
        }
    };
}

// Enhanced integration with main game functions
function integrateEnhancedSyncWithMainGame() {
    // Override main game functions to trigger sync updates
    const originalMainFunctions = {
        toggleCharacterMetUnified: window.toggleCharacterMetUnified,
        toggleStoryCompleteUnified: window.toggleStoryCompleteUnified,
        toggleRealizedUnified: window.toggleRealizedUnified,
        setCharacterRelationshipUnified: window.setCharacterRelationshipUnified
    };

    window.toggleCharacterMetUnified = function(charId) {
        if (originalMainFunctions.toggleCharacterMetUnified) {
            originalMainFunctions.toggleCharacterMetUnified(charId);
            const source = isNgPlus ? 'ngplus' : 'main';
            triggerManualChange(source, charId);
        }
    };

    window.toggleStoryCompleteUnified = function(charId) {
        if (originalMainFunctions.toggleStoryCompleteUnified) {
            originalMainFunctions.toggleStoryCompleteUnified(charId);
            const source = isNgPlus ? 'ngplus' : 'main';
            triggerManualChange(source, charId);
        }
    };

    window.toggleRealizedUnified = function(charId) {
        if (originalMainFunctions.toggleRealizedUnified) {
            originalMainFunctions.toggleRealizedUnified(charId);
            const source = isNgPlus ? 'ngplus' : 'main';
            triggerManualChange(source, charId);
        }
    };

    window.setCharacterRelationshipUnified = function(charId, relationship) {
        if (originalMainFunctions.setCharacterRelationshipUnified) {
            originalMainFunctions.setCharacterRelationshipUnified(charId, relationship);
            const source = isNgPlus ? 'ngplus' : 'main';
            triggerManualChange(source, charId);
        }
    };
}

// Trigger manual change tracking for immediate sync
function triggerManualChange(source, charId) {
    if (enhancedAutoSync.enabled) {
        // Mark this character as recently changed for priority sync
        enhancedAutoSync.recentChanges = enhancedAutoSync.recentChanges || {};
        enhancedAutoSync.recentChanges[charId] = {
            source: source,
            timestamp: Date.now()
        };
        
        // Trigger immediate sync check on next cycle
        if (enhancedAutoSync.interval) {
            // Clear and restart interval to sync immediately
            clearInterval(enhancedAutoSync.interval);
            performEnhancedAutoSync();
            
            // Restart normal interval
            enhancedAutoSync.interval = setInterval(() => {
                performEnhancedAutoSync();
            }, enhancedAutoSync.syncFrequency);
        }
    }
}

// Enhanced UI event handlers for walkthrough tab
function setupEnhancedWalkthroughEventHandlers() {
    // Hint mode toggle for walkthrough
    const walkthroughHintBtn = document.getElementById('walkthroughHintMode');
    if (walkthroughHintBtn) {
        walkthroughHintBtn.addEventListener('click', () => {
            if (typeof walkthroughState !== 'undefined') {
                walkthroughState.hintMode = !walkthroughState.hintMode;
                walkthroughHintBtn.textContent = `Hint Mode: ${walkthroughState.hintMode ? 'ON' : 'OFF'}`;
                walkthroughHintBtn.classList.toggle('active', walkthroughState.hintMode);
                if (typeof saveWalkthroughState === 'function') {
                    saveWalkthroughState();
                }
                if (typeof renderWalkthroughCharacters === 'function') {
                    renderWalkthroughCharacters();
                }
            }
        });
    }

    // Attic toggle for walkthrough
    const walkthroughAtticBtn = document.getElementById('walkthroughAtticUnlocked');
    if (walkthroughAtticBtn) {
        walkthroughAtticBtn.addEventListener('click', () => {
            if (typeof walkthroughState !== 'undefined') {
                walkthroughState.atticUnlocked = !walkthroughState.atticUnlocked;
                walkthroughAtticBtn.textContent = `Attic: ${walkthroughState.atticUnlocked ? 'Unlocked' : 'Locked'}`;
                walkthroughAtticBtn.classList.toggle('active', walkthroughState.atticUnlocked);
                if (typeof saveWalkthroughState === 'function') {
                    saveWalkthroughState();
                }
                if (typeof renderWalkthroughCharacters === 'function') {
                    renderWalkthroughCharacters();
                }
            }
        });
    }

    // DLC toggle for walkthrough
    const walkthroughDlcBtn = document.getElementById('walkthroughDlcPurchased');
    if (walkthroughDlcBtn) {
        walkthroughDlcBtn.addEventListener('click', () => {
            if (typeof walkthroughState !== 'undefined') {
                walkthroughState.dlcPurchased = !walkthroughState.dlcPurchased;
                walkthroughDlcBtn.textContent = `DLC: ${walkthroughState.dlcPurchased ? 'Purchased' : 'Not Purchased'}`;
                walkthroughDlcBtn.classList.toggle('active', walkthroughState.dlcPurchased);
                if (typeof saveWalkthroughState === 'function') {
                    saveWalkthroughState();
                }
                if (typeof renderWalkthroughCharacters === 'function') {
                    renderWalkthroughCharacters();
                }
            }
        });
    }
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
window.renderSingleCharacterInPlace = renderSingleCharacterInPlace;
window.resetCharacterState = resetCharacterState;
window.getCharacterPortraitUrl = getCharacterPortraitUrl;
window.getVariantButtonText = getVariantButtonText;
window.getEnhancedDisplayName = getEnhancedDisplayName;
window.toggleFilters = toggleFilters;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.toggleCharacterFavorite = toggleCharacterFavorite;
window.isCharacterFavorited = isCharacterFavorited;
window.loadFavorites = loadFavorites;
window.saveFavorites = saveFavorites;
window.initializeFavorites = initializeFavorites;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);