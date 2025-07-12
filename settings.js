// Add this settings system code to your main.js or create a new settings.js file

// Global settings object
let userSettings = {
    showContentWarnings: true,  // Default: ON
    // Add other settings here as needed
};

// Initialize settings from localStorage
function initializeSettings() {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
        try {
            userSettings = {...userSettings, ...JSON.parse(savedSettings)};
        } catch (e) {
            console.error('Error loading settings:', e);
            // Use default settings if there's an error
        }
    }
    
    // Apply settings to UI elements
    updateSettingsUI();
}

// Save settings to localStorage
function saveSettings() {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
}

// Update UI elements based on current settings
function updateSettingsUI() {
    const contentWarningToggle = document.getElementById('contentWarningToggle');
    if (contentWarningToggle) {
        contentWarningToggle.textContent = `Content Warnings: ${userSettings.showContentWarnings ? 'ON' : 'OFF'}`;
        contentWarningToggle.classList.toggle('active', userSettings.showContentWarnings);
    }
}

// Toggle content warnings setting
function toggleContentWarnings() {
    userSettings.showContentWarnings = !userSettings.showContentWarnings;
    saveSettings();
    updateSettingsUI();
    
    // Re-render current content to apply the change
    if (document.getElementById('main-tab').classList.contains('active')) {
        renderCharacters();
    } else if (document.getElementById('ng-tab').classList.contains('active')) {
        renderCharacters(); // Same function handles both main and NG+
    } else if (document.getElementById('collections-tab').classList.contains('active')) {
        renderCollections();
    } else if (document.getElementById('walkthrough-tab').classList.contains('active')) {
        renderWalkthroughCharacters();
    }
}

// Function to check if content warnings should be shown for a character
function shouldShowContentWarning(characterId) {
    return userSettings.showContentWarnings && contentWarnings[characterId];
}

// Make functions globally available
window.initializeSettings = initializeSettings;
window.saveSettings = saveSettings;
window.updateSettingsUI = updateSettingsUI;
window.toggleContentWarnings = toggleContentWarnings;
window.shouldShowContentWarning = shouldShowContentWarning;

// Initialize settings when the script loads
document.addEventListener('DOMContentLoaded', function() {
    initializeSettings();
});