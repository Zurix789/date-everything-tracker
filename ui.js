// Complete ui.js file with all enhancements

// Global filter state
let currentFilters = {
    main: { sort: 'dex', statFilter: '', relationshipFilter: '', nameSearch: '', storyFilter: '', timeslotFilter: '' },
    ng: { sort: 'dex', statFilter: '', relationshipFilter: '', nameSearch: '', storyFilter: '', timeslotFilter: '' },
    collections: { sort: 'dex', completionFilter: '', metFilter: '', nameSearch: '' },
    walkthrough: { sort: 'dex', statFilter: '', relationshipFilter: '', nameSearch: '', storyFilter: '' }
};

// Add this to the switchTab function in ui.js:
function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Update global state
    currentTab = tabName;
    isNgPlus = (tabName === 'ngplus');
    
    // Force recalculation when switching tabs
    recalculateStatsUnified();
    
    // Update displays when switching tabs
    updateStats();
    updateSummaryStats();
    updateTimeSlots();
    renderCharacters();
    
    // Initialize specific tabs
    if (tabName === 'collections') {
        renderCollections();
        updateCollectionsSummary();
    } else if (tabName === 'walkthrough') {
        // Properly initialize walkthrough instead of just rendering
        if (typeof initializeWalkthrough === 'function') {
            initializeWalkthrough();
        } else {
            // Fallback if function doesn't exist yet
            console.warn('initializeWalkthrough function not found, trying direct render');
            if (typeof renderWalkthroughCharacters === 'function') {
                renderWalkthroughCharacters();
            }
            if (typeof updateWalkthroughStats === 'function') {
                updateWalkthroughStats();
            }
        }
    }
}

// Filter functions
function toggleFilters(tabPrefix) {
    const filtersContent = document.getElementById(`${tabPrefix}-filters`);
    const toggleBtn = document.querySelector(`[onclick="toggleFilters('${tabPrefix}')"]`);
    
    if (filtersContent.classList.contains('expanded')) {
        filtersContent.classList.remove('expanded');
        toggleBtn.textContent = 'Show Filters';
    } else {
        filtersContent.classList.add('expanded');
        toggleBtn.textContent = 'Hide Filters';
    }
}

function applyFilters(tabPrefix) {
    if (tabPrefix === 'collections') {
        applyCollectionsFilters();
        return;
    } else if (tabPrefix === 'walkthrough') {
        applyWalkthroughFilters();
        return;
    }
    
    const sort = document.getElementById(`${tabPrefix}-sort`).value;
    const statFilter = document.getElementById(`${tabPrefix}-stat-filter`).value;
    const relationshipFilter = document.getElementById(`${tabPrefix}-relationship-filter`).value;
    const storyFilter = document.getElementById(`${tabPrefix}-story-filter`).value;
    const timeslotFilter = document.getElementById(`${tabPrefix}-timeslot-filter`).value;
    const nameSearch = document.getElementById(`${tabPrefix}-name-search`).value.toLowerCase();
    
    currentFilters[tabPrefix === 'main' ? 'main' : 'ng'] = {
        sort, statFilter, relationshipFilter, storyFilter, timeslotFilter, nameSearch
    };
    
    renderCharacters();
}

function clearFilters(tabPrefix) {
    if (tabPrefix === 'walkthrough') {
        document.getElementById('walkthrough-sort').value = 'dex';
        document.getElementById('walkthrough-stat-filter').value = '';
        document.getElementById('walkthrough-relationship-filter').value = '';
        document.getElementById('walkthrough-story-filter').value = '';
        document.getElementById('walkthrough-name-search').value = '';
        
        currentFilters.walkthrough = {
            sort: 'dex',
            statFilter: '',
            relationshipFilter: '',
            storyFilter: '',
            nameSearch: ''
        };
        
        renderWalkthroughCharacters();
        return;
    }
    if (tabPrefix === 'collections') {
        clearCollectionsFilters();
        return;
    }
    
    document.getElementById(`${tabPrefix}-sort`).value = 'dex';
    document.getElementById(`${tabPrefix}-stat-filter`).value = '';
    document.getElementById(`${tabPrefix}-relationship-filter`).value = '';
    document.getElementById(`${tabPrefix}-story-filter`).value = '';
    document.getElementById(`${tabPrefix}-timeslot-filter`).value = '';
    document.getElementById(`${tabPrefix}-name-search`).value = '';
    
    currentFilters[tabPrefix === 'main' ? 'main' : 'ng'] = {
        sort: 'dex', statFilter: '', relationshipFilter: '', storyFilter: '', timeslotFilter: '', nameSearch: ''
    };
    
    renderCharacters();
}

function filterAndSortCharacters(charactersToRender) {
    const filterKey = isNgPlus ? 'ng' : 'main';
    const filters = currentFilters[filterKey];
    const state = getCurrentGameState();
    
    // Apply filters
    let filteredCharacters = charactersToRender.filter(char => {
        const charState = state.characters[char.id];
        
        // Stat filter
        if (filters.statFilter) {
            const charStat = char.stat === 'choosable' ? (charState.chosenStat || 'choosable') : char.stat;
            if (charStat !== filters.statFilter) return false;
        }
        
// Relationship filter
if (filters.relationshipFilter) {
    if (filters.relationshipFilter === 'none') {
        if (charState.relationship !== null) return false;
    } else if (filters.relationshipFilter === 'not-met') {
        if (charState.met !== false) return false;
    } else if (filters.relationshipFilter === 'hide-completed') {
        if (charState.storyComplete === true) return false;
    } else if (filters.relationshipFilter === 'favorites') {
        // ADD THIS NEW CASE
        if (!isCharacterFavorited(char.id)) return false;
    } else {
        if (charState.relationship !== filters.relationshipFilter) return false;
    }
}
        
// Name search - search both name and object, works for met and unmet characters
if (filters.nameSearch) {
    const searchTerm = filters.nameSearch.toLowerCase();
    const charName = char.name.toLowerCase(); // Always use the actual character name
    const objectName = (char.object || '').toLowerCase();
    
    if (!charName.includes(searchTerm) && !objectName.includes(searchTerm)) {
        return false;
    }
}
// Story status filter
if (filters.storyFilter) {
    if (filters.storyFilter === 'incomplete') {
        // Show characters who are met but story not complete
        if (!charState.met || charState.storyComplete) return false;
    } else if (filters.storyFilter === 'complete') {
        // Show characters who have completed stories BUT are NOT realizable and NOT realized
        if (!charState.storyComplete) return false;
        // Exclude characters that can be realized
        if (canBeRealizedUnified(char)) return false;
        // Exclude characters that are already realized
        if (charState.realized) return false;
    } else if (filters.storyFilter === 'realizable') {
        // Show characters who can be realized (story complete + can realize) BUT not yet realized
        if (!charState.storyComplete || !canBeRealizedUnified(char)) return false;
        // Exclude characters that are already realized
        if (charState.realized) return false;
    } else if (filters.storyFilter === 'realized') {
        // Show characters who are already realized
        if (!charState.realized) return false;
    }
}
// Time slot filter
if (filters.timeslotFilter) {
    const scheduledCharacterIds = Object.values(state.timeSlots)
        .filter(charId => charId !== '')
        .map(charId => parseInt(charId));
    
    if (filters.timeslotFilter === 'scheduled') {
        // Show only characters scheduled in time slots
        if (!scheduledCharacterIds.includes(char.id)) return false;
    } else if (filters.timeslotFilter === 'not-scheduled') {
        // Show only characters NOT scheduled in time slots
        if (scheduledCharacterIds.includes(char.id)) return false;
    }
}
        
        return true;
    });
    
    // Apply sorting
    filteredCharacters.sort((a, b) => {
        switch (filters.sort) {
            case 'dex':
                return a.id - b.id;
case 'name':
    // Sort by character name only, not the display name with numbers
    const aName = a.name;
    const bName = b.name;
    return aName.localeCompare(bName);
            case 'stat':
                const aStatDisplay = a.stat === 'choosable' ? (state.characters[a.id].chosenStat || 'choosable') : a.stat;
                const bStatDisplay = b.stat === 'choosable' ? (state.characters[b.id].chosenStat || 'choosable') : b.stat;
                
                // Define stat order: Smarts, Poise, Empathy, Charm, Sass, then Choosable
                const statOrder = ['smarts', 'poise', 'empathy', 'charm', 'sass', 'choosable'];
                const aIndex = statOrder.indexOf(aStatDisplay);
                const bIndex = statOrder.indexOf(bStatDisplay);
                
                // If either stat is not in the order array, sort alphabetically
                if (aIndex === -1 || bIndex === -1) {
                    return aStatDisplay.localeCompare(bStatDisplay);
                }
                
                return aIndex - bIndex;
            case 'relationship':
                const aRel = state.characters[a.id].relationship || 'none';
                const bRel = state.characters[b.id].relationship || 'none';
                return aRel.localeCompare(bRel);
            default:
                return a.id - b.id;
        }
    });
    
    return filteredCharacters;
}

// Update stats display - fixed to work with both states
function updateStats() {
    const state = getCurrentGameState();
    
    if (isNgPlus) {
        // NG+ stat elements
        const smartsEl = document.getElementById('ngSmartsValue');
        const poiseEl = document.getElementById('ngPoiseValue');
        const empathyEl = document.getElementById('ngEmpathyValue');
        const charmEl = document.getElementById('ngCharmValue');
        const sassEl = document.getElementById('ngSassValue');
        
        if (smartsEl) {
            smartsEl.textContent = state.stats.smarts;
            updateStatMaxEffect(smartsEl, state.stats.smarts);
        }
        if (poiseEl) {
            poiseEl.textContent = state.stats.poise;
            updateStatMaxEffect(poiseEl, state.stats.poise);
        }
        if (empathyEl) {
            empathyEl.textContent = state.stats.empathy;
            updateStatMaxEffect(empathyEl, state.stats.empathy);
        }
        if (charmEl) {
            charmEl.textContent = state.stats.charm;
            updateStatMaxEffect(charmEl, state.stats.charm);
        }
        if (sassEl) {
            sassEl.textContent = state.stats.sass;
            updateStatMaxEffect(sassEl, state.stats.sass);
        }
    } else {
        // Main game stat elements
        const smartsEl = document.getElementById('smartsValue');
        const poiseEl = document.getElementById('poiseValue');
        const empathyEl = document.getElementById('empathyValue');
        const charmEl = document.getElementById('charmValue');
        const sassEl = document.getElementById('sassValue');
        
        if (smartsEl) {
            smartsEl.textContent = state.stats.smarts;
            updateStatMaxEffect(smartsEl, state.stats.smarts);
        }
        if (poiseEl) {
            poiseEl.textContent = state.stats.poise;
            updateStatMaxEffect(poiseEl, state.stats.poise);
        }
        if (empathyEl) {
            empathyEl.textContent = state.stats.empathy;
            updateStatMaxEffect(empathyEl, state.stats.empathy);
        }
        if (charmEl) {
            charmEl.textContent = state.stats.charm;
            updateStatMaxEffect(charmEl, state.stats.charm);
        }
        if (sassEl) {
            sassEl.textContent = state.stats.sass;
            updateStatMaxEffect(sassEl, state.stats.sass);
        }
    }
    
    // Also update walkthrough stats if on walkthrough tab
    if (currentTab === 'walkthrough') {
        updateWalkthroughStatEffects();
    }
}

function updateStatMaxEffect(statElement, statValue) {
    if (!statElement) return;
    
    const statItem = statElement.closest('.stat-item');
    if (!statItem) return;
    
    if (statValue >= 100) {
        statItem.classList.add('max-stat');
        statElement.classList.add('max-stat');
    } else {
        statItem.classList.remove('max-stat');
        statElement.classList.remove('max-stat');
    }
}

// Update summary stats - fixed to work with both states
function updateSummaryStats() {
    const state = getCurrentGameState();
    
    const metCount = Object.values(state.characters).filter(c => c.met).length;
    const storiesComplete = Object.values(state.characters).filter(c => c.storyComplete).length;
    const realizedCount = Object.values(state.characters).filter(c => c.realized).length;
    const totalCharacters = characters.length;
    const completionRate = Math.round((realizedCount / totalCharacters) * 100);

    if (isNgPlus) {
        // NG+ summary elements
        const metEl = document.getElementById('ngMetCount');
        const storiesEl = document.getElementById('ngStoriesComplete');
        const realizedEl = document.getElementById('ngRealizedCount');
        const completionEl = document.getElementById('ngCompletionRate');
        
        if (metEl) metEl.textContent = metCount;
        if (storiesEl) storiesEl.textContent = storiesComplete;
        if (realizedEl) realizedEl.textContent = realizedCount;
        if (completionEl) completionEl.textContent = `${completionRate}%`;
    } else {
        // Main game summary elements
        const metEl = document.getElementById('metCount');
        const storiesEl = document.getElementById('storiesComplete');
        const realizedEl = document.getElementById('realizedCount');
        const completionEl = document.getElementById('completionRate');
        
        if (metEl) metEl.textContent = metCount;
        if (storiesEl) storiesEl.textContent = storiesComplete;
        if (realizedEl) realizedEl.textContent = realizedCount;
        if (completionEl) completionEl.textContent = `${completionRate}%`;
    }
    updateRelationshipStats();
}

// Update time slots dropdown - fixed to work with both states and hide already scheduled characters
function updateTimeSlots() {
    const state = getCurrentGameState();
    const slots = ['9am', '12pm', '3pm', '6pm', '9pm'];
    
    // Get all currently scheduled character IDs (excluding empty slots)
    const scheduledCharacterIds = Object.values(state.timeSlots).filter(charId => charId !== '');
    
    const availableCharacters = characters.filter(char => {
        const charState = state.characters[char.id];
        return charState && charState.met && !charState.storyComplete && canMeetCharacterUnified(char);
    });

    slots.forEach(slot => {
        const selectId = isNgPlus ? `ngSlot${slot}` : `slot${slot}`;
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="">Select Character</option>';
            
            availableCharacters.forEach(char => {
                // Only show character if they're not already scheduled in another slot
                // OR if they're scheduled in the current slot (so user can see/change their current selection)
                const isScheduledElsewhere = scheduledCharacterIds.includes(char.id.toString()) && 
                                           state.timeSlots[slot] !== char.id.toString();
                
                if (!isScheduledElsewhere) {
                    const option = document.createElement('option');
                    option.value = char.id;
                    option.textContent = char.name;
                    if (state.timeSlots[slot] == char.id) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                }
            });
        }
    });
}


// Reset all time slots (clear all selections)
function resetTimeSlots() {
    if (confirm('Are you sure you want to clear all time slot selections?')) {
        const state = getCurrentGameState();
        const slots = ['9am', '12pm', '3pm', '6pm', '9pm'];
        
        // Clear all time slots
        slots.forEach(slot => {
            state.timeSlots[slot] = '';
        });
        
        saveStateUnified();
        updateTimeSlots();
        // Auto-refresh filters if time slot filter is active
        refreshFiltersIfNeeded();
        alert('🔄 All time slots have been cleared!');
    }
}

// Update starting stats for NG+ - ensure recalculation happens
function updateStartingStats() {
    // Get the current values from the input fields
    const smartsInput = document.getElementById('ngPlusSmarts');
    const poiseInput = document.getElementById('ngPlusPoise');
    const empathyInput = document.getElementById('ngPlusEmpathy');
    const charmInput = document.getElementById('ngPlusCharm');
    const sassInput = document.getElementById('ngPlusSass');
    
    // Update the starting stats with 100 cap
    ngPlusGameState.startingStats = capStatsAt100({
        smarts: parseInt(smartsInput.value) || 0,
        poise: parseInt(poiseInput.value) || 0,
        empathy: parseInt(empathyInput.value) || 0,
        charm: parseInt(charmInput.value) || 0,
        sass: parseInt(sassInput.value) || 0
    });
    
    // Force immediate recalculation and display update
    if (isNgPlus) {
        // Copy starting stats to current stats
        ngPlusGameState.stats = { ...ngPlusGameState.startingStats };
        
        // Add relationship bonuses
        characters.forEach(char => {
            const charState = ngPlusGameState.characters[char.id];
            if (charState && charState.relationship && charState.statGiven) {
                const statToIncrease = char.stat === 'choosable' ? charState.chosenStat : char.stat;
                if (statToIncrease) {
                    ngPlusGameState.stats[statToIncrease] += 5;
                }
            }
        });
        
        // Cap all stats at 100 after adding relationship bonuses
        ngPlusGameState.stats = capStatsAt100(ngPlusGameState.stats);
        
        // Update the display immediately
        updateStats();
        updateSummaryStats();
        
        // Apply shimmer effects after a small delay
        setTimeout(() => {
            refreshAllStatEffects();
        }, 50);
    }
    
    // Save the state
    saveNgPlusState();
}

// Helper function to get stat icon HTML
function getStatIcon(statName) {
    return `<span class="stat-icon ${statName}"></span>`;
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

// Main character rendering function with enhanced dual character support
function renderCharacters() {
    const gridId = isNgPlus ? 'ngCharacterGrid' : 'characterGrid';
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    // Get characters that can be met or are already met
    let charactersToRender = characters.filter(char => {
        return canMeetCharacterUnified(char) || getCurrentGameState().characters[char.id].met;
    });

    // Apply filters and sorting
    charactersToRender = filterAndSortCharacters(charactersToRender);

    charactersToRender.forEach(char => {
        const charState = getCurrentGameState().characters[char.id];
        const card = document.createElement('div');
        
        // Enhanced card classes with relationship colors
        let cardClasses = `character-card ${charState.met ? 'met' : ''}`;
        
        // Add relationship-specific classes
        if (charState.realized) {
            cardClasses += ' realized';
        } else if (charState.relationship) {
            cardClasses += ` relationship-${charState.relationship}`;
        }
        
        card.className = cardClasses;
        card.setAttribute('data-char-id', char.id);

        // Enhanced display name for dual characters
        let displayName = getCharacterDisplayNameUnified(char);
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
        
        // Enhanced character portrait with full individual support
        let characterPortrait = '';
        if (characterPortraitMap[char.id] && characterPortraitUrls[char.id]) {
            let portraitClasses = `character-portrait ${characterPortraitMap[char.id]}`;
            
            if (!charState.met) {
                portraitClasses += ' not-met';
            } else if (charState.realized) {
                portraitClasses += ' realized';
                // NEW: Add relationship class for realized characters to enable specific styling
                if (charState.relationship === 'love') {
                    portraitClasses += ' love';
                } else if (charState.relationship === 'friend') {
                    portraitClasses += ' friend';
                }
                // Note: hate relationship typically can't be realized
            } else if (charState.relationship === 'love') {
                portraitClasses += ' love';
            } else if (charState.relationship === 'friend') {
                portraitClasses += ' friend';
            } else if (charState.relationship === 'hate') {
                portraitClasses += ' hate';
            }
            
            // Use the enhanced portrait URL function
            const portraitUrl = getCharacterPortraitUrl(char, charState);
            const urls = characterPortraitUrls[char.id];
            
            const portraitStyle = `
                --portrait-url: url('${portraitUrl}');
                --portrait-love-url: url('${urls.love}');
                --portrait-friend-url: url('${urls.friend}');
                --portrait-hate-url: url('${urls.hate}');
                --portrait-realized-url: url('${urls.realized}');
                --portrait-realized-love-url: url('${urls.realizedLove || urls.realized}');
                --portrait-realized-friend-url: url('${urls.realizedFriend || urls.realized}');
            `;
            
            characterPortrait = `<div class="${portraitClasses}" style="${portraitStyle}"></div>`;
        }

        // Get requirements and dependencies
        const canRealize = canBeRealizedUnified(char);
        const requirements = getRequirementsStatusUnified(char);
        const storyRequirements = getStoryRequirementsStatusUnified(char);
        const realizationDependencies = getRealizationDependenciesStatusUnified(char);
        const canCompleteStoryNow = canCompleteStoryUnified(char);
        
        // Check if character is hated (prevents realization)
        const isHated = charState.met && charState.relationship === 'hate';
        
        // Build location tracker
        let locationTracker = '';
        if (char.hasLocations && locationData[char.id] && charState.met && !charState.storyComplete) {
            locationTracker = `
                <div class="location-tracker">
                    <h4>${locationData[char.id].name}</h4>
                    <div class="location-grid">
                        ${locationData[char.id].locations.map(loc => `
                            <div class="location-item">
                                <input type="checkbox" class="checkbox" 
                                       ${charState.locations[loc] ? 'checked' : ''}
                                       onchange="toggleLocationUnified(${char.id}, '${loc}')">
                                <span>${loc}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Build requirements display (only show if not hated)
        let requirementsDisplay = '';
        if (charState.met && requirements.length > 0 && !canRealize && !isHated) {
            // Filter out met requirements, only show unmet ones
            const unmetRequirements = requirements.filter(req => !req.met);
            
            if (unmetRequirements.length > 0) {
                requirementsDisplay = `
                    <div class="requirements-list">
                        <strong>Realization Requirements:</strong>
                        <ul>
                            ${unmetRequirements.map(req => `
                                <li class="unmet-requirement">
                                    ${req.text}${req.current !== undefined ? ` (Current: ${req.current})` : ''}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }
        }

        // Build story requirements display
        let storyRequirementsDisplay = '';
        if (charState.met && storyRequirements.length > 0 && !canCompleteStoryNow) {
            // Filter out met requirements, only show unmet ones
            const unmetStoryRequirements = storyRequirements.filter(req => !req.met);
            
            if (unmetStoryRequirements.length > 0) {
                storyRequirementsDisplay = `
                    <div class="story-requirements">
                        <strong>Story Completion Requirements:</strong>
                        <ul>
                            ${unmetStoryRequirements.map(req => `
                                <li class="unmet-requirement">
                                    ${req.text}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }
        }

        // Build dependencies display (only show if not hated)
        let dependenciesDisplay = '';
        if (charState.met && realizationDependencies.length > 0 && !canRealize && !isHated) {
            const bidirectionalDeps = realizationDependencies.filter(dep => dep.type === 'bidirectional');
            const onewayDeps = realizationDependencies.filter(dep => dep.type === 'oneway');
            
            // Filter out met dependencies, only show unmet ones
            const unmetBidirectionalDeps = bidirectionalDeps.filter(dep => !dep.met);
            const unmetOnewayDeps = onewayDeps.filter(dep => !dep.met);
            
            if (unmetBidirectionalDeps.length > 0 || unmetOnewayDeps.length > 0) {
                dependenciesDisplay = `
                    <div class="dependency-requirements">
                        <strong>Character Story Dependencies:</strong>
                        <ul>
                            ${unmetBidirectionalDeps.map(dep => `
                                <li class="unmet-requirement">
                                    ${dep.name}'s story needs to be complete for Realization
                                </li>
                            `).join('')}
                            ${unmetOnewayDeps.map(dep => `
                                <li class="unmet-requirement">
                                    ${dep.name}'s story needs to be complete for Realization
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }
        }

        // Build manual dependencies display (only show if not hated)
        let manualDependenciesDisplay = '';
        if (charState.met && char.realizationDependencies.length === 0 && !canRealize && !isHated) {
            const noOneRequired = [68].includes(char.id);
            if (!noOneRequired) {
                manualDependenciesDisplay = `
                    <div class="manual-dependency">
                        <strong>⚠️ Dependencies Under Investigation</strong>
                        <p style="margin: 5px 0; font-size: 0.9rem; color: #666;">
                            This character's realization requirements are still being tested and documented. 
                            Check back for updates!
                        </p>
                    </div>
                `;
            } else {
                manualDependenciesDisplay = `
                    <div class="manual-dependency">
                        <strong>No story dependencies required for realization</strong>
                    </div>
                `;
            }
        }

        // Add content warning if applicable - UPDATED TO USE SETTINGS
        let contentWarning = '';
        if (shouldShowContentWarning(char.id)) {
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

        // Special message for hate relationship preventing realization - UPDATED
        let hateMessage = '';
        if (isHated) {
            hateMessage = `
                <div class="manual-dependency" style="background: #ffebee; border-left-color: #f44336;">
                    <strong>💔 Cannot Realize</strong>
                    <p style="margin: 5px 0; font-size: 0.9rem; color: #c62828;">
                        This character hates you and cannot be realized.
                    </p>
                </div>
            `;
        }

        // Enhanced variant button for dual characters with clear naming
        let variantButton = '';
        if ((char.id === 9 || char.id === 19) && charState.met) {
            const buttonText = getVariantButtonText(char, charState);
            
            variantButton = `
                <button class="btn btn-primary" onclick="toggleCharacterVariant(${char.id})">
                    ${buttonText}
                </button>
            `;
        }

        // Collapsible details section
        const detailsContent = `
            ${requirementsDisplay}
            ${storyRequirementsDisplay}
            ${dependenciesDisplay}
            ${manualDependenciesDisplay}
            ${locationTracker}
        `;

        const hasDetails = requirementsDisplay || storyRequirementsDisplay || dependenciesDisplay || manualDependenciesDisplay || locationTracker;

        // Enhanced stat display with icons
        const statDisplay = char.stat === 'choosable' ? 
            (charState.chosenStat ? `${getStatIcon(charState.chosenStat)}${charState.chosenStat.charAt(0).toUpperCase() + charState.chosenStat.slice(1)} (+5)` : 'Choose a stat') : 
            `${getStatIcon(char.stat)}${char.stat.charAt(0).toUpperCase() + char.stat.slice(1)}`;

        card.innerHTML = `
            <div style="display: flex; gap: 15px;">
                <div class="character-icon" style="flex-shrink: 0;">${characterPortrait}</div>
                <div style="flex: 1;">
                    <div class="character-name">${displayName}</div>
                    ${contentWarning}
                    
                    ${charState.realized ? `
                        <!-- REALIZED STATE - Hide most buttons, show only icon and essential info -->
                        <div class="character-controls" style="margin-bottom: 8px;">
                            <div class="realized-icon-button" onclick="toggleRealizedUnified(${char.id})" style="cursor: pointer; transition: all 0.2s ease;">
                                <img src="realized_icon.png" alt="Realized" style="width: 100%; height: 100%; filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));" />
                            </div>
                            ${hasDetails ? `
                                <button class="btn btn-primary" onclick="toggleCharacterDetails(${char.id})" id="expand-btn-${char.id}">
                                    Expand
                                </button>
                            ` : ''}
                        </div>
                    ` : `
                        <!-- NORMAL STATE - Show all buttons when not realized -->
                        
                        <!-- LINE 1: Met button and Expand/Collapse button -->
                        <div class="character-controls" style="margin-bottom: 8px;">
                            <button class="btn ${charState.met ? 'btn-success' : 'btn-primary'} ${!charState.met && !canMeetCharacterUnified(char) ? 'disabled' : ''}" 
                                    onclick="toggleCharacterMetUnified(${char.id})"
                                    ${!charState.met && !canMeetCharacterUnified(char) ? 'disabled' : ''}>
                                ${charState.met ? 'Met' : 'Not Met'}
                            </button>
                            ${hasDetails && charState.met ? `
                                <button class="btn btn-primary" onclick="toggleCharacterDetails(${char.id})" id="expand-btn-${char.id}">
                                    Expand
                                </button>
                            ` : ''}
                        </div>

                        <!-- LINE 2: Character variations (only if applicable)
                        ${variantButton ? `
                            <div class="character-controls" style="margin-bottom: 8px;">
                                ${variantButton}
                            </div>
                        ` : ''} -->

                        <!-- LINE 3: Relationship status (only when met and not realized) -->
                        ${charState.met ? `
                            <div class="relationship-buttons" style="margin-bottom: 8px;">
                                <button class="relationship-image-btn ${charState.relationship === 'love' ? 'active' : ''}" 
                                        onclick="setCharacterRelationshipUnified(${char.id}, 'love')"
                                        title="Love">
                                    <img src="love_icon.webp" alt="Love" />
                                    <span class="btn-text">Love</span>
                                </button>
                                <button class="relationship-image-btn ${charState.relationship === 'friend' ? 'active' : ''}" 
                                        onclick="setCharacterRelationshipUnified(${char.id}, 'friend')"
                                        title="Friend">
                                    <img src="friend_icon.webp" alt="Friend" />
                                    <span class="btn-text">Friend</span>
                                </button>
                                <button class="relationship-image-btn ${charState.relationship === 'hate' ? 'active' : ''}" 
                                        onclick="setCharacterRelationshipUnified(${char.id}, 'hate')"
                                        title="Hate">
                                    <img src="hate_icon.webp" alt="Hate" />
                                    <span class="btn-text">Hate</span>
                                </button>
                            </div>
                            ${char.stat === 'choosable' && charState.relationship ? `
                                <div style="margin-bottom: 8px;">
                                    <strong>Choose Stat:</strong>
                                    <select onchange="setChosenStatUnified(${char.id}, this.value)" value="${charState.chosenStat || ''}">
                                        <option value="">Select Stat</option>
                                        <option value="smarts" ${charState.chosenStat === 'smarts' ? 'selected' : ''}>Smarts</option>
                                        <option value="poise" ${charState.chosenStat === 'poise' ? 'selected' : ''}>Poise</option>
                                        <option value="empathy" ${charState.chosenStat === 'empathy' ? 'selected' : ''}>Empathy</option>
                                        <option value="charm" ${charState.chosenStat === 'charm' ? 'selected' : ''}>Charm</option>
                                        <option value="sass" ${charState.chosenStat === 'sass' ? 'selected' : ''}>Sass</option>
                                    </select>
                                </div>
                            ` : ''}
                        ` : ''}

                        <!-- LINE 4: Story Complete/Incomplete (only when met) -->
                        ${charState.met ? `
                            <div class="character-controls" style="margin-bottom: 8px;">
                                <button class="btn ${charState.storyComplete ? 'btn-success' : 'btn-warning'} ${!charState.storyComplete && !canCompleteStoryNow ? 'disabled' : ''}" 
                                        onclick="toggleStoryCompleteUnified(${char.id})"
                                        ${!charState.storyComplete && !canCompleteStoryNow ? 'disabled' : ''}>
                                    Story: ${charState.storyComplete ? 'Complete' : 'Incomplete'}
                                </button>
                            </div>
                        ` : ''}

                        <!-- LINE 5: Realized button (only when met, not realized, and NOT hated) -->
                        ${charState.met && !isHated ? `
                            <div class="character-controls" style="margin-bottom: 8px;">
                                <button class="btn ${charState.realized ? 'btn-success' : 'btn-primary'} ${!charState.realized && !canRealize ? 'disabled' : ''}" 
                                        onclick="toggleRealizedUnified(${char.id})" 
                                        ${!charState.realized && !canRealize ? 'disabled' : ''}>
                                    ${charState.realized ? 'Realized' : 'Not Realized'}
                                </button>
                            </div>
                        ` : ''}

                        <!-- Stat Display (only when met) -->
                        ${charState.met ? `
                            <div class="character-stat-display">
                                <strong>Stat:</strong> ${statDisplay}
                            </div>
                        ` : ''}
                    `}

                    <!-- Hate Message (if applicable) -->
                    ${hateMessage}

                    <!-- Collapsible Details -->
                    ${hasDetails ? `
                        <div class="character-details collapsed" id="character-details-${char.id}">
                            ${detailsContent}
                        </div>
                    ` : ''}

                    <!-- Requirements to meet (when not met and cannot meet) -->
                    ${!charState.met && !canMeetCharacterUnified(char) ? `
                        <div style="margin-top: 10px; padding: 10px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #ffc107;">
                            <strong>Requirements to meet:</strong>
                            <ul style="margin-left: 20px; margin-top: 5px;">
                                ${char.locationRequirement === 'attic' ? '<li>Attic must be unlocked</li>' : ''}
                                ${char.locationRequirement === 'dlc' ? '<li>DLC content must be enabled</li>' : ''}
                                ${char.locationRequirement === 'ngplus' ? '<li>NG+ must be enabled</li>' : ''}
                                ${char.genderRequirement && char.genderRequirement !== 'both' ? `<li>Player must be ${char.genderRequirement}</li>` : ''}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        addFavoriteStarToCharacterCard(card, char.id);
        grid.appendChild(card);
    });
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


// Update relationship stats
function updateRelationshipStats() {
    const state = getCurrentGameState();
    let loveCount = 0;
    let friendCount = 0;
    let hateCount = 0;
    let noRelationshipCount = 0;
    
    characters.forEach(char => {
        const charState = state.characters[char.id];
        if (charState && charState.met) {
            switch (charState.relationship) {
                case 'love':
                    loveCount++;
                    break;
                case 'friend':
                    friendCount++;
                    break;
                case 'hate':
                    hateCount++;
                    break;
                default:
                    noRelationshipCount++;
                    break;
            }
        }
    });
    
    // Update the appropriate elements based on current tab
    if (isNgPlus) {
        const loveEl = document.getElementById('ngLoveCount');
        const friendEl = document.getElementById('ngFriendCount');
        const hateEl = document.getElementById('ngHateCount');
        const noneEl = document.getElementById('ngNoRelationshipCount');
        
        if (loveEl) loveEl.textContent = loveCount;
        if (friendEl) friendEl.textContent = friendCount;
        if (hateEl) hateEl.textContent = hateCount;
        if (noneEl) noneEl.textContent = noRelationshipCount;
    } else {
        const realizedEl = document.getElementById('realizedCount');
        const loveEl = document.getElementById('loveCount');
        const friendEl = document.getElementById('friendCount');
        const hateEl = document.getElementById('hateCount');
        const noneEl = document.getElementById('noRelationshipCount');
        
        if (loveEl) loveEl.textContent = loveCount;
        if (friendEl) friendEl.textContent = friendCount;
        if (hateEl) hateEl.textContent = hateCount;
        if (noneEl) noneEl.textContent = noRelationshipCount;
    }
}

// Collections filtering and sorting functions
function filterAndSortCollections(charactersToRender) {
    const filters = currentFilters.collections;
    
    // Apply filters
    let filteredCharacters = charactersToRender.filter(char => {
        const charCollectables = getCharacterCollectables(char.id);
        const hasBeenMet = hasBeenMetInEitherMode(char.id);
        
        // Completion filter
        if (filters.completionFilter) {
            const collectedCount = charCollectables.filter(c => hasCollectable(char.id, c.id)).length;
            const isCompleted = collectedCount === charCollectables.length;
            
            if (filters.completionFilter === 'completed' && !isCompleted) return false;
            if (filters.completionFilter === 'incomplete' && isCompleted) return false;
        }
        
        // Met filter
if (filters.metFilter) {
    if (filters.metFilter === 'met' && !hasBeenMet) return false;
    if (filters.metFilter === 'not-met' && hasBeenMet) return false;
    // ADD THIS NEW CASE
    if (filters.metFilter === 'favorites' && !isCharacterFavorited(char.id)) return false;
}
        
        // Name search - search both name and object
        if (filters.nameSearch) {
            const searchTerm = filters.nameSearch.toLowerCase();
            const charName = char.name.toLowerCase();
            const objectName = (char.object || '').toLowerCase();
            
            if (!charName.includes(searchTerm) && !objectName.includes(searchTerm)) {
                return false;
            }
        }
        
        return true;
    });
    
    // Apply sorting
    filteredCharacters.sort((a, b) => {
        const aCollectables = getCharacterCollectables(a.id);
        const bCollectables = getCharacterCollectables(b.id);
        
        switch (filters.sort) {
            case 'dex':
                return a.id - b.id;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'completion-max':
                const aPercent = aCollectables.length > 0 ? 
                    (aCollectables.filter(c => hasCollectable(a.id, c.id)).length / aCollectables.length) : 0;
                const bPercent = bCollectables.length > 0 ? 
                    (bCollectables.filter(c => hasCollectable(b.id, c.id)).length / bCollectables.length) : 0;
                return bPercent - aPercent; // Max first (descending)
            case 'completion-min':
                const aPercentMin = aCollectables.length > 0 ? 
                    (aCollectables.filter(c => hasCollectable(a.id, c.id)).length / aCollectables.length) : 0;
                const bPercentMin = bCollectables.length > 0 ? 
                    (bCollectables.filter(c => hasCollectable(b.id, c.id)).length / bCollectables.length) : 0;
                return aPercentMin - bPercentMin; // Min first (ascending)
            default:
                return a.id - b.id;
        }
    });
    
    return filteredCharacters;
}

function applyCollectionsFilters() {
    const sort = document.getElementById('collections-sort').value;
    const completionFilter = document.getElementById('collections-completion-filter').value;
    const metFilter = document.getElementById('collections-met-filter').value;
    const nameSearch = document.getElementById('collections-name-search').value.toLowerCase();
    
    currentFilters.collections = {
        sort, completionFilter, metFilter, nameSearch
    };
    
    renderCollections();
}

function clearCollectionsFilters() {
    document.getElementById('collections-sort').value = 'dex';
    document.getElementById('collections-completion-filter').value = '';
    document.getElementById('collections-met-filter').value = '';
    document.getElementById('collections-name-search').value = '';
    
    currentFilters.collections = {
        sort: 'dex', completionFilter: '', metFilter: '', nameSearch: ''
    };
    
    renderCollections();
}
function applyWalkthroughFilters() {
    const sort = document.getElementById('walkthrough-sort').value;
    const statFilter = document.getElementById('walkthrough-stat-filter').value;
    const relationshipFilter = document.getElementById('walkthrough-relationship-filter').value;
    const storyFilter = document.getElementById('walkthrough-story-filter').value;
    const nameSearch = document.getElementById('walkthrough-name-search').value.toLowerCase();
    
    currentFilters.walkthrough = {
        sort,
        statFilter,
        relationshipFilter,
        storyFilter,
        nameSearch
    };
    
    renderWalkthroughCharacters();
}

function updateCharacterCardRealized(characterCard, charState) {
    if (!characterCard) return;
    
    if (charState.realized) {
        characterCard.classList.add('realized');
        // Remove any old realized styling if it exists
        characterCard.classList.remove('relationship-love', 'relationship-hate');
        
        // The CSS will handle the friends background and shimmer effect
    } else {
        characterCard.classList.remove('realized');
    }
}

function updateWalkthroughStatEffects() {
    const walkthroughStats = getWalkthroughStats(); // Get current walkthrough stats
    
    const statElements = [
        { element: document.getElementById('walkthroughSmartsValue'), value: walkthroughStats.smarts || 0 },
        { element: document.getElementById('walkthroughPoiseValue'), value: walkthroughStats.poise || 0 },
        { element: document.getElementById('walkthroughEmpathyValue'), value: walkthroughStats.empathy || 0 },
        { element: document.getElementById('walkthroughCharmValue'), value: walkthroughStats.charm || 0 },
        { element: document.getElementById('walkthroughSassValue'), value: walkthroughStats.sass || 0 }
    ];
    
    statElements.forEach(({ element, value }) => {
        if (element) {
            updateStatMaxEffect(element, value);
        }
    });
}

function getWalkthroughStats() {
    // Return walkthrough stats - you may need to adapt this based on your walkthrough implementation
    if (typeof walkthroughState !== 'undefined' && walkthroughState.stats) {
        return walkthroughState.stats;
    }
    // If walkthrough doesn't have its own stats, return zeros
    return { smarts: 0, poise: 0, empathy: 0, charm: 0, sass: 0 };
}

function refreshAllStatEffects() {
    const state = getCurrentGameState();
    
    // Update main/NG+ stats
    updateStats();
    
    // Update walkthrough stats if applicable
    if (currentTab === 'walkthrough') {
        updateWalkthroughStatEffects();
    }
}

function toggleRealizedUnified(charId) {
    const state = getCurrentGameState();
    const char = characters.find(c => c.id === charId);
    
    if (!state.characters[charId].realized && !canBeRealizedUnified(char)) {
        return;
    }
    
    state.characters[charId].realized = !state.characters[charId].realized;
    saveStateUnified(); // This is the correct function name
    renderCharacters();
    updateSummaryStats();
}

function generateContentWarningDisplay(char) {
    // Only show content warning if settings allow it AND character has a warning
    if (shouldShowContentWarning(char.id)) {
        return `
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
    return '';
}

function generateCollectionsContentWarning(char) {
    const isDLCChar = isDLCCharacter(char.id);
    const hasBeenMet = hasBeenMetInEitherMode(char.id);
    
    // Only show content warning if settings allow it
    if (!shouldShowContentWarning(char.id)) {
        return '';
    }
    
    if (isDLCChar) {
        // For DLC: show warning if (Spoilers ON) OR (MET)
        if (collectionsShowSpoilers || hasBeenMet) {
            return `
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
        // For regular characters: show warning if (Spoilers ON) OR (MET)
        if (collectionsShowSpoilers || hasBeenMet) {
            return `
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
    
    return '';
}

// Make these functions globally available from ui.js as well
window.getCharacterPortraitUrl = getCharacterPortraitUrl;
window.getVariantButtonText = getVariantButtonText;
window.toggleCharacterDetails = toggleCharacterDetails;
window.toggleFilters = toggleFilters;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;