// Initialize app
function init() {
    // Load states first
    loadState();
    loadNgPlusState();
    
    // Then initialize characters (this ensures any new characters are added)
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
        if (!isNgPlus) renderCharacters();
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
        if (isNgPlus) renderCharacters();
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
            });
        }
        
        const ngSlot = document.getElementById(`ngSlot${slot}`);
        if (ngSlot) {
            ngSlot.addEventListener('change', (e) => {
                ngPlusGameState.timeSlots[slot] = e.target.value;
                saveNgPlusState();
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

// Make functions global for onclick handlers
window.toggleCharacterMetUnified = toggleCharacterMetUnified;
window.setCharacterRelationshipUnified = setCharacterRelationshipUnified;
window.setChosenStatUnified = setChosenStatUnified;
window.toggleStoryCompleteUnified = toggleStoryCompleteUnified;
window.toggleRealizedUnified = toggleRealizedUnified;
window.toggleLocationUnified = toggleLocationUnified;
window.switchTab = switchTab;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);