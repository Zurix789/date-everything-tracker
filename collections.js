// Collections UI functions

// Global spoiler toggle state - DEFAULT TO OFF
let collectionsShowSpoilers = false;
// Global DLC toggle state - DEFAULT TO OFF
let collectionsShowDLC = false;

// Function to check if character has been met in either main or NG+ mode
function hasBeenMetInEitherMode(characterId) {
    return gameState.characters[characterId].met || ngPlusGameState.characters[characterId].met;
}

// Function to check if character is DLC
function isDLCCharacter(characterId) {
    // DLC characters are ID 101 and 102 (Michael Transaction and Lucinda)
    return characterId === 101 || characterId === 102;
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

// Function to initialize collections spoiler toggle
function initializeCollectionsSpoilers() {
    const spoilerBtn = document.getElementById('collectionsSpoilerToggle');
    if (spoilerBtn) {
        spoilerBtn.textContent = `Spoilers: ${collectionsShowSpoilers ? 'ON' : 'OFF'}`;
        spoilerBtn.classList.toggle('active', collectionsShowSpoilers);
    }
    
    const dlcBtn = document.getElementById('collectionsDlcToggle');
    if (dlcBtn) {
        dlcBtn.textContent = `Show DLC: ${collectionsShowDLC ? 'ON' : 'OFF'}`;
        dlcBtn.classList.toggle('active', collectionsShowDLC);
    }
}

// Function to toggle DLC visibility
function toggleCollectionsDLC() {
    collectionsShowDLC = !collectionsShowDLC;
    
    const dlcBtn = document.getElementById('collectionsDlcToggle');
    if (dlcBtn) {
        dlcBtn.textContent = `Show DLC: ${collectionsShowDLC ? 'ON' : 'OFF'}`;
        dlcBtn.classList.toggle('active', collectionsShowDLC);
    }
    
    // Re-render collections with new DLC setting
    renderCollections();
    updateCollectionsSummary();
}

// Function to toggle spoiler visibility
function toggleCollectionsSpoilers() {
    collectionsShowSpoilers = !collectionsShowSpoilers;
    
    const spoilerBtn = document.getElementById('collectionsSpoilerToggle');
    if (spoilerBtn) {
        spoilerBtn.textContent = `Spoilers: ${collectionsShowSpoilers ? 'ON' : 'OFF'}`;
        spoilerBtn.classList.toggle('active', collectionsShowSpoilers);
    }
    
    // Re-render collections with new spoiler setting
    renderCollections();
    updateCollectionsSummary();
}

// Function to render individual collectable items
function renderCollectableItems(characterId, charCollectables) {
    return charCollectables.map(collectable => {
        const hasItem = hasCollectable(characterId, collectable.id);
        
        return `
            <div class="collectable-item ${hasItem ? 'collected' : ''}" id="collectable-item-${characterId}-${collectable.id}">
                <div class="collectable-image">
                    <img src="${collectable.image}" alt="Collectable" 
                         class="${hasItem ? '' : 'mystery'}" />
                    <div class="collection-checkbox">
                        <input type="checkbox" 
                               ${hasItem ? 'checked' : ''} 
                               onchange="toggleCollectable(${characterId}, '${collectable.id}')"
                               id="collectable-${characterId}-${collectable.id}">
                        <label for="collectable-${characterId}-${collectable.id}"></label>
                    </div>
                </div>
                <div class="collectable-details">
                    <div class="collectable-clue">${collectable.clue}</div>
                    ${hasItem ? `<div class="collectable-description">${collectable.description}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Function to render the collections tab
function renderCollections() {
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (!collectionsGrid) return;
    
    // Initialize spoiler toggle if not already done
    initializeCollectionsSpoilers();
    
    collectionsGrid.innerHTML = '';

// Get characters with collectables and apply filters
let charactersWithCollectables = characters.filter(char => {
    const charCollectables = getCharacterCollectables(char.id);
    return charCollectables.length > 0;
});

// Apply filters and sorting
charactersWithCollectables = filterAndSortCollections(charactersWithCollectables);

charactersWithCollectables.forEach(char => {
    // Rest of the existing forEach code stays the same...
        const charState = getCurrentGameState().characters[char.id];
        const charCollectables = getCharacterCollectables(char.id);
        
        // Skip characters with no collectables
        if (charCollectables.length === 0) return;

        // Check if character is DLC
        const isDLCChar = isDLCCharacter(char.id);
        const hasBeenMet = hasBeenMetInEitherMode(char.id);
        const canMeet = canMeetCharacterUnified(char);
        
        // Special logic for DLC characters (101/102)
        if (isDLCChar) {
            // DLC character visibility rules:
            // Spoilers OFF, DLC OFF - No show
            // Spoilers ON, DLC OFF - No Show
            // Spoilers OFF or NOT MET, DLC ON - Shows as ???
            // Spoilers ON or MET, DLC ON - Shows as full character
            
            if (!collectionsShowDLC) {
                // DLC is OFF - never show DLC characters regardless of spoilers
                return;
            }
            
            // DLC is ON - now check spoiler/met status for display name
            // (We'll continue to render the character, but name will be handled below)
        } else {
            // Regular character visibility rules (unchanged)
            if (!collectionsShowSpoilers && !hasBeenMet && !canMeet) {
                return;
            }
        }

        const card = document.createElement('div');
        card.className = `collection-character-card ${hasBeenMet ? 'met' : ''}`;

        // Get display name based on character type and rules
        let displayName;
        if (isDLCChar) {
            // DLC character naming logic:
            // Show ??? if: (Spoilers OFF) OR (NOT MET)
            // Show full name if: (Spoilers ON) OR (MET)
            if ((!collectionsShowSpoilers || !hasBeenMet) && !(collectionsShowSpoilers || hasBeenMet)) {
                // Both conditions are false, so show ???
                displayName = `${char.id}. ???`;
            } else {
                // At least one condition is true, so show full name
                displayName = `${char.id}. ${char.name}`;
            }
        } else {
            // Regular character naming (unchanged)
            if (!collectionsShowSpoilers && !hasBeenMet) {
                displayName = `${char.id}. ???`;
            } else {
                displayName = `${char.id}. ${char.name}`;
            }
        }
        
        // Character portrait - always use default
        let characterPortrait = '';
        if (characterPortraitMap[char.id] && characterPortraitUrls[char.id]) {
            let portraitClasses = `character-portrait ${characterPortraitMap[char.id]}`;
            
            // Apply not-met filter logic
            if (isDLCChar) {
                // For DLC: apply filter if (Spoilers OFF) OR (NOT MET), but not if both are true
                if ((!collectionsShowSpoilers || !hasBeenMet) && !(collectionsShowSpoilers || hasBeenMet)) {
                    portraitClasses += ' not-met';
                }
            } else {
                // For regular characters: apply filter if spoilers off AND not met
                if (!collectionsShowSpoilers && !hasBeenMet) {
                    portraitClasses += ' not-met';
                }
            }
            
            const urls = characterPortraitUrls[char.id];
            const portraitStyle = `--portrait-url: url('${urls.default}');`;
            
            characterPortrait = `<div class="${portraitClasses}" style="${portraitStyle}"></div>`;
        }

        // Content warning logic
        let contentWarning = '';
        if (isDLCChar) {
            // For DLC: show warning if (Spoilers ON) OR (MET)
            if ((collectionsShowSpoilers || hasBeenMet) && contentWarnings[char.id]) {
                contentWarning = `
                    <div class="content-warning">
                        <div class="content-warning-header">
                            ⚠️ Content Warning
                        </div>
                        <div class="content-warning-text">
                            ${contentWarnings[char.id]}
                        </div>
                    </div>
                `;
            }
        } else {
            // For regular characters: show if spoilers on OR met
            if ((collectionsShowSpoilers || hasBeenMet) && contentWarnings[char.id]) {
                contentWarning = `
                    <div class="content-warning">
                        <div class="content-warning-header">
                            ⚠️ Content Warning
                        </div>
                        <div class="content-warning-text">
                            ${contentWarnings[char.id]}
                        </div>
                    </div>
                `;
            }
        }

        // Count collected items
        const collectedCount = charCollectables.filter(collectable => 
            hasCollectable(char.id, collectable.id)
        ).length;

        // Build collectables section with expand functionality for all characters
        const collectablesSection = `
            <div class="collectables-section">
                <div class="collectables-header">
                    <h4>Collectables (${collectedCount}/${charCollectables.length})</h4>
                    <button class="expand-btn" onclick="toggleCollectablesExpansion(${char.id})" id="expand-btn-${char.id}">
                        Expand
                    </button>
                </div>
                <div class="collectables-grid collapsed" id="collectables-${char.id}">
                    ${renderCollectableItems(char.id, charCollectables)}
                </div>
            </div>
        `;

        card.innerHTML = `
            <div style="display: flex; gap: 15px;">
                <div class="character-icon" style="flex-shrink: 0;">${characterPortrait}</div>
                <div style="flex: 1; z-index: 1;">
                    <div class="character-name">${displayName}</div>
                    ${contentWarning}
                    ${collectablesSection}
                </div>
            </div>
        `;
        addFavoriteStarToCharacterCard(card, char.id);

        collectionsGrid.appendChild(card);
    });
}

// Function to update a specific collectable item without re-rendering everything
function updateCollectableItem(characterId, collectableId) {
    const charCollectables = getCharacterCollectables(characterId);
    const collectable = charCollectables.find(c => c.id === collectableId);
    
    if (!collectable) return;
    
    const hasItem = hasCollectable(characterId, collectableId);
    
    // Update the specific collectable item
    const itemElement = document.getElementById(`collectable-item-${characterId}-${collectableId}`);
    if (itemElement) {
        itemElement.className = `collectable-item ${hasItem ? 'collected' : ''}`;
        
        const img = itemElement.querySelector('img');
        const details = itemElement.querySelector('.collectable-details');
        
        if (img) {
            img.src = collectable.image;
            img.className = hasItem ? '' : 'mystery';
        }
        
        if (details) {
            details.innerHTML = `
                <div class="collectable-clue">${collectable.clue}</div>
                ${hasItem ? `<div class="collectable-description">${collectable.description}</div>` : ''}
            `;
        }
    }
    
    // Update the count for this character
    const collectedCount = charCollectables.filter(c => hasCollectable(characterId, c.id)).length;
    const headerElement = document.querySelector(`#collectables-${characterId}`).previousElementSibling.querySelector('h4');
    if (headerElement) {
        headerElement.textContent = `Collectables (${collectedCount}/${charCollectables.length})`;
    }
}

// Function to toggle collectables expansion (now for all characters)
function toggleCollectablesExpansion(characterId) {
    const collectablesGrid = document.getElementById(`collectables-${characterId}`);
    const expandBtn = document.getElementById(`expand-btn-${characterId}`);
    
    if (collectablesGrid && expandBtn) {
        if (collectablesGrid.classList.contains('collapsed')) {
            collectablesGrid.classList.remove('collapsed');
            expandBtn.textContent = 'Collapse';
        } else {
            collectablesGrid.classList.add('collapsed');
            expandBtn.textContent = 'Expand';
        }
    }
}

// Function to get collections statistics
function getCollectionsStats() {
    // Get the current DLC state to determine total
    const state = getCurrentGameState();
    const isDLCPurchased = state.dlcPurchased || collectionsShowDLC;
    
    // Base collectables: 404, DLC adds 5 more (409 total)
    const TOTAL_COLLECTABLES = isDLCPurchased ? 409 : 404;
    let collectedCount = 0;
    
    characters.forEach(char => {
        const charCollectables = getCharacterCollectables(char.id);
        
        // Skip DLC characters if DLC is not purchased/shown
        if (isDLCCharacter(char.id) && !isDLCPurchased) {
            return;
        }
        
        // Only count collectables for characters that would be shown
        const isDLCChar = isDLCCharacter(char.id);
        const hasBeenMet = hasBeenMetInEitherMode(char.id);
        const canMeet = canMeetCharacterUnified(char);
        
        let shouldCount = false;
        
        if (isDLCChar) {
            // DLC character: count if DLC is on (already checked above)
            shouldCount = true;
        } else {
            // Regular character: count if spoilers on OR can meet OR has been met
            shouldCount = collectionsShowSpoilers || canMeet || hasBeenMet;
        }
        
        if (shouldCount) {
            charCollectables.forEach(collectable => {
                if (hasCollectable(char.id, collectable.id)) {
                    collectedCount++;
                }
            });
        }
    });
    
    return {
        total: TOTAL_COLLECTABLES,
        collected: collectedCount,
        percentage: Math.round((collectedCount / TOTAL_COLLECTABLES) * 100)
    };
}

// Function to update collections summary
function updateCollectionsSummary() {
    const stats = getCollectionsStats();
    
    // Update the individual summary elements that exist in the HTML
    const totalEl = document.getElementById('totalCollectibles');
    const collectedEl = document.getElementById('collectedCount');
    const rateEl = document.getElementById('collectionRate');
    
    if (totalEl) {
        totalEl.textContent = stats.total;
    }
    
    if (collectedEl) {
        collectedEl.textContent = stats.collected;
    }
    
    if (rateEl) {
        rateEl.textContent = stats.percentage;
    }
}

// Function to reset all collections
function resetCollections() {
    if (confirm('Are you sure you want to reset all collection progress? This cannot be undone.')) {
        const state = getCurrentGameState();
        
        // Clear all collectables for all characters
        characters.forEach(char => {
            const charCollectables = getCharacterCollectables(char.id);
            charCollectables.forEach(collectable => {
                if (state.collectables && state.collectables[char.id]) {
                    delete state.collectables[char.id][collectable.id];
                }
            });
        });
        
        // Save the updated state
        saveStateUnified();
        
        // Re-render collections and update summary
        renderCollections();
        updateCollectionsSummary();
    }
}

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

// Make functions globally available immediately
window.toggleCollectable = toggleCollectable;
window.hasCollectable = hasCollectable;
window.toggleCollectablesExpansion = toggleCollectablesExpansion;
window.toggleCollectionsSpoilers = toggleCollectionsSpoilers;
window.toggleCollectionsDLC = toggleCollectionsDLC;
window.resetCollections = resetCollections;
window.renderCollections = renderCollections;
window.updateCollectionsSummary = updateCollectionsSummary;
window.applyCollectionsFilters = applyCollectionsFilters;
window.clearCollectionsFilters = clearCollectionsFilters;