// Collections UI functions

// Global spoiler toggle state - DEFAULT TO ON
let collectionsShowSpoilers = false;

// Function to check if character has been met in either main or NG+ mode
function hasBeenMetInEitherMode(characterId) {
    return gameState.characters[characterId].met || ngPlusGameState.characters[characterId].met;
}

// Function to initialize collections spoiler toggle
function initializeCollectionsSpoilers() {
    const spoilerBtn = document.getElementById('collectionsSpoilerToggle');
    if (spoilerBtn) {
        spoilerBtn.textContent = `Spoilers: ${collectionsShowSpoilers ? 'ON' : 'OFF'}`;
        spoilerBtn.classList.toggle('active', collectionsShowSpoilers);
    }
}

// Function to render the collections tab
function renderCollections() {
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (!collectionsGrid) return;
    
    // Initialize spoiler toggle if not already done
    initializeCollectionsSpoilers();
    
    collectionsGrid.innerHTML = '';

    characters.forEach(char => {
        const charState = getCurrentGameState().characters[char.id];
        const charCollectables = getCharacterCollectables(char.id);
        
        // Skip characters with no collectables
        if (charCollectables.length === 0) return;

        // Skip characters that can't be met and haven't been met (only when spoilers are OFF)
        if (!collectionsShowSpoilers && !canMeetCharacterUnified(char) && !hasBeenMetInEitherMode(char.id)) {
            return;
        }

        // Check if character has been met in either mode for styling
        const hasBeenMet = hasBeenMetInEitherMode(char.id);

        const card = document.createElement('div');
        card.className = `collection-character-card ${hasBeenMet ? 'met' : ''}`;

        // Get display name based on spoiler settings and met status
        let displayName;
        if (!collectionsShowSpoilers && !hasBeenMet) {
            displayName = `${char.id}. ???`;
        } else {
            displayName = `${char.id}. ${char.name}`;
        }
        
        // Character portrait - always use default
        let characterPortrait = '';
        if (characterPortraitMap[char.id] && characterPortraitUrls[char.id]) {
            let portraitClasses = `character-portrait ${characterPortraitMap[char.id]}`;
            
            // Only apply not-met filter if character hasn't been met in either mode
            if (!collectionsShowSpoilers && !hasBeenMet) {
                portraitClasses += ' not-met';
            }
            
            const urls = characterPortraitUrls[char.id];
            const portraitStyle = `--portrait-url: url('${urls.default}');`;
            
            characterPortrait = `<div class="${portraitClasses}" style="${portraitStyle}"></div>`;
        }

        // Add content warning if applicable and spoilers are shown OR character has been met
        let contentWarning = '';
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

        collectionsGrid.appendChild(card);
    });
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
    
    if (collectablesGrid.classList.contains('collapsed')) {
        collectablesGrid.classList.remove('collapsed');
        expandBtn.textContent = 'Collapse';
    } else {
        collectablesGrid.classList.add('collapsed');
        expandBtn.textContent = 'Expand';
    }
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

// Function to get collections statistics
function getCollectionsStats() {
    const TOTAL_COLLECTABLES = 409; // Hardcoded total
    let collectedCount = 0;
    
    characters.forEach(char => {
        const charCollectables = getCharacterCollectables(char.id);
        
        // Only count collectables for characters that would be shown
        if (collectionsShowSpoilers || canMeetCharacterUnified(char) || hasBeenMetInEitherMode(char.id)) {
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
    const summaryEl = document.getElementById('collectionsSummary');
    
    if (summaryEl) {
        summaryEl.innerHTML = `
            <div class="collections-stat">
                <span class="stat-number">${stats.collected}</span>
                <span class="stat-label">Collected</span>
            </div>
            <div class="collections-stat">
                <span class="stat-number">${stats.total}</span>
                <span class="stat-label">Total</span>
            </div>
            <div class="collections-stat">
                <span class="stat-number">${stats.percentage}%</span>
                <span class="stat-label">Complete</span>
            </div>
        `;
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

// Make functions globally available
window.toggleCollectable = toggleCollectable;
window.toggleCollectablesExpansion = toggleCollectablesExpansion;
window.toggleCollectionsSpoilers = toggleCollectionsSpoilers;
window.resetCollections = resetCollections;
window.renderCollections = renderCollections;
window.updateCollectionsSummary = updateCollectionsSummary;