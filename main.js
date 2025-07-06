// Complete main.js file with all enhancements

// Initialize app
function init() {
    // Load states first
    loadState();
    loadNgPlusState();
    
    // Then initialize characters (this ensures any new characters are added and new properties are set)
    initializeCharacters();
    initializeNgPlusCharacters();
    
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
['9am', '12pm', '3pm', '6pm', '9pm'].forEach(slot => {
    const mainSlot = document.getElementById(`slot${slot}`);
    if (mainSlot) {
        mainSlot.addEventListener('change', (e) => {
            gameState.timeSlots[slot] = e.target.value;
            saveState();
            // Refresh all time slot dropdowns to reflect the change
            updateTimeSlots();
        });
    }
    
    const ngSlot = document.getElementById(`ngSlot${slot}`);
    if (ngSlot) {
        ngSlot.addEventListener('change', (e) => {
            ngPlusGameState.timeSlots[slot] = e.target.value;
            saveNgPlusState();
            // Refresh all time slot dropdowns to reflect the change
            updateTimeSlots();
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);