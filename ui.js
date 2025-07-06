// Complete ui.js file with all enhancements

// Global filter state
let currentFilters = {
    main: { sort: 'dex', statFilter: '', relationshipFilter: '', nameSearch: '' },
    ng: { sort: 'dex', statFilter: '', relationshipFilter: '', nameSearch: '' }
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
    
    // Initialize collections tab if selected
    if (tabName === 'collections') {
        renderCollections();
        updateCollectionsSummary();
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
    const sort = document.getElementById(`${tabPrefix}-sort`).value;
    const statFilter = document.getElementById(`${tabPrefix}-stat-filter`).value;
    const relationshipFilter = document.getElementById(`${tabPrefix}-relationship-filter`).value;
    const nameSearch = document.getElementById(`${tabPrefix}-name-search`).value.toLowerCase();
    
    currentFilters[tabPrefix === 'main' ? 'main' : 'ng'] = {
        sort, statFilter, relationshipFilter, nameSearch
    };
    
    renderCharacters();
}

function clearFilters(tabPrefix) {
    document.getElementById(`${tabPrefix}-sort`).value = 'dex';
    document.getElementById(`${tabPrefix}-stat-filter`).value = '';
    document.getElementById(`${tabPrefix}-relationship-filter`).value = '';
    document.getElementById(`${tabPrefix}-name-search`).value = '';
    
    currentFilters[tabPrefix === 'main' ? 'main' : 'ng'] = {
        sort: 'dex', statFilter: '', relationshipFilter: '', nameSearch: ''
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
            } else {
                if (charState.relationship !== filters.relationshipFilter) return false;
            }
        }
        
        // Name search
        if (filters.nameSearch) {
            const displayName = getCharacterDisplayNameUnified(char);
            if (!displayName.toLowerCase().includes(filters.nameSearch)) return false;
        }
        
        return true;
    });
    
    // Apply sorting
    filteredCharacters.sort((a, b) => {
        switch (filters.sort) {
            case 'dex':
                return a.id - b.id;
            case 'name':
                return getCharacterDisplayNameUnified(a).localeCompare(getCharacterDisplayNameUnified(b));
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
        
        if (smartsEl) smartsEl.textContent = state.stats.smarts;
        if (poiseEl) poiseEl.textContent = state.stats.poise;
        if (empathyEl) empathyEl.textContent = state.stats.empathy;
        if (charmEl) charmEl.textContent = state.stats.charm;
        if (sassEl) sassEl.textContent = state.stats.sass;
    } else {
        // Main game stat elements
        const smartsEl = document.getElementById('smartsValue');
        const poiseEl = document.getElementById('poiseValue');
        const empathyEl = document.getElementById('empathyValue');
        const charmEl = document.getElementById('charmValue');
        const sassEl = document.getElementById('sassValue');
        
        if (smartsEl) smartsEl.textContent = state.stats.smarts;
        if (poiseEl) poiseEl.textContent = state.stats.poise;
        if (empathyEl) empathyEl.textContent = state.stats.empathy;
        if (charmEl) charmEl.textContent = state.stats.charm;
        if (sassEl) sassEl.textContent = state.stats.sass;
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
}

// Update time slots dropdown - fixed to work with both states
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

// Update starting stats for NG+ - ensure recalculation happens
function updateStartingStats() {
    // Get the current values from the input fields
    const smartsInput = document.getElementById('ngPlusSmarts');
    const poiseInput = document.getElementById('ngPlusPoise');
    const empathyInput = document.getElementById('ngPlusEmpathy');
    const charmInput = document.getElementById('ngPlusCharm');
    const sassInput = document.getElementById('ngPlusSass');
    
    // Update the starting stats
    ngPlusGameState.startingStats = {
        smarts: parseInt(smartsInput.value) || 0,
        poise: parseInt(poiseInput.value) || 0,
        empathy: parseInt(empathyInput.value) || 0,
        charm: parseInt(charmInput.value) || 0,
        sass: parseInt(sassInput.value) || 0
    };
    
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
        
        // Update the display immediately
        updateStats();
        updateSummaryStats();
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
            `;
            
            characterPortrait = `<div class="${portraitClasses}" style="${portraitStyle}"></div>`;
        }

        // Get requirements and dependencies
        const canRealize = canBeRealizedUnified(char);
        const requirements = getRequirementsStatusUnified(char);
        const storyRequirements = getStoryRequirementsStatusUnified(char);
        const realizationDependencies = getRealizationDependenciesStatusUnified(char);
        const canCompleteStoryNow = canCompleteStoryUnified(char);
        
        // Build location tracker
        let locationTracker = '';
        if (char.hasLocations && locationData[char.id] && charState.met) {
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

        // Build requirements display
        let requirementsDisplay = '';
        if (charState.met && requirements.length > 0 && !canRealize) {
            requirementsDisplay = `
                <div class="requirements-list">
                    <strong>Realization Requirements:</strong>
                    <ul>
                        ${requirements.map(req => `
                            <li class="${req.met ? 'met-requirement' : 'unmet-requirement'}">
                                ${req.text}${req.current !== undefined ? ` (Current: ${req.current})` : ''}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        // Build story requirements display
        let storyRequirementsDisplay = '';
        if (charState.met && storyRequirements.length > 0 && !canCompleteStoryNow) {
            storyRequirementsDisplay = `
                <div class="story-requirements">
                    <strong>Story Completion Requirements:</strong>
                    <ul>
                        ${storyRequirements.map(req => `
                            <li class="${req.met ? 'met-requirement' : 'unmet-requirement'}">
                                ${req.text}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        // Build dependencies display
        let dependenciesDisplay = '';
        if (charState.met && realizationDependencies.length > 0 && !canRealize) {
            const bidirectionalDeps = realizationDependencies.filter(dep => dep.type === 'bidirectional');
            const onewayDeps = realizationDependencies.filter(dep => dep.type === 'oneway');
            
            dependenciesDisplay = `
                <div class="dependency-requirements">
                    <strong>Character Story Dependencies:</strong>
                    <ul>
                        ${bidirectionalDeps.map(dep => `
                            <li class="${dep.met ? 'met-requirement' : 'unmet-requirement'}">
                                ${dep.name}'s story needs to be complete for Realization
                            </li>
                        `).join('')}
                        ${onewayDeps.map(dep => `
                            <li class="${dep.met ? 'met-requirement' : 'unmet-requirement'}">
                                ${dep.name}'s story needs to be complete for Realization
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        // Build manual dependencies display
        let manualDependenciesDisplay = '';
        if (charState.met && char.realizationDependencies.length === 0 && !canRealize) {
            const noOneRequired = [].includes(char.id);
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

        // Add content warning if applicable
        let contentWarning = '';
        if (contentWarnings[char.id]) {
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

        // Special message for hate relationship preventing realization
        let hateMessage = '';
        if (charState.met && charState.storyComplete && charState.relationship === 'hate') {
            hateMessage = `
                <div class="manual-dependency" style="background: #ffebee; border-left-color: #f44336;">
                    <strong>💔 Cannot Realize</strong>
                    <p style="margin: 5px 0; font-size: 0.9rem; color: #c62828;">
                        This character hates you and cannot be realized. Try a different relationship outcome.
                    </p>
                </div>
            `;
        }

        // Enhanced variant button for dual characters with clear naming
        let variantButton = '';
        if ((char.id === 9 || char.id === 19) && charState.met) {
            const buttonText = getVariantButtonText(char, charState);
            
            variantButton = `
                <button class="btn btn-primary" onclick="toggleCharacterVariant(${char.id})" style="margin-left: 10px;">
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
                    <div class="character-controls">
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
                        ${variantButton}
                        ${charState.met ? `
<div class="relationship-buttons">
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
                                <div style="margin-top: 10px;">
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
                    </div>
                    ${charState.met ? `
                        <div style="margin-top: 10px;">
                            <button class="btn ${charState.storyComplete ? 'btn-success' : 'btn-warning'} ${!charState.storyComplete && !canCompleteStoryNow ? 'disabled' : ''}" 
                                    onclick="toggleStoryCompleteUnified(${char.id})"
                                    ${!charState.storyComplete && !canCompleteStoryNow ? 'disabled' : ''}>
                                Story: ${charState.storyComplete ? 'Complete' : 'Incomplete'}
                            </button>
                            <button class="btn ${charState.realized ? 'btn-success' : 'btn-primary'} ${!charState.realized && !canRealize ? 'disabled' : ''}" 
                                    onclick="toggleRealizedUnified(${char.id})" 
                                    ${!charState.realized && !canRealize ? 'disabled' : ''}>
                                ${charState.realized ? 'Realized' : 'Not Realized'}
                            </button>
                        </div>
<div class="character-stat-display">
    <strong>Stat:</strong> ${statDisplay}
</div>
                        ${hateMessage}
                        ${hasDetails ? `
                            <div class="character-details collapsed" id="character-details-${char.id}">
                                ${detailsContent}
                            </div>
                        ` : ''}
                    ` : ''}
                    ${!charState.met && !canMeetCharacterUnified(char) ? `
                        <div style="margin-top: 10px; padding: 10px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #ffc107;">
                            <strong>Requirements to meet:</strong>
                            <ul style="margin-left: 20px; margin-top: 5px;">
                                ${char.locationRequirement === 'attic' ? '<li>Attic must be unlocked</li>' : ''}
                                ${char.locationRequirement === 'dlc' ? '<li>DLC must be purchased</li>' : ''}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

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

// Make these functions globally available from ui.js as well
window.getCharacterPortraitUrl = getCharacterPortraitUrl;
window.getVariantButtonText = getVariantButtonText;
window.toggleCharacterDetails = toggleCharacterDetails;
window.toggleFilters = toggleFilters;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;