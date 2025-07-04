// Tab switching function
function switchTab(tabName) {
    console.log('Switching to tab:', tabName); // Debug log
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Update global state
    currentTab = tabName;
    isNgPlus = (tabName === 'ngplus');
    
    console.log('isNgPlus set to:', isNgPlus); // Debug log
    console.log('Current state:', getCurrentGameState()); // Debug log
    
    // Force recalculation when switching tabs
    recalculateStatsUnified();
    
    // Update displays when switching tabs
    updateStats();
    updateSummaryStats();
    updateTimeSlots();
    renderCharacters();
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
function updateTimeSlots() {
    const state = getCurrentGameState();
    const slots = ['9am', '12pm', '3pm', '6pm', '9pm'];
    
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
                const option = document.createElement('option');
                option.value = char.id;
                option.textContent = char.name;
                if (state.timeSlots[slot] == char.id) {
                    option.selected = true;
                }
                select.appendChild(option);
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

// Main character rendering function
function renderCharacters() {
    const gridId = isNgPlus ? 'ngCharacterGrid' : 'characterGrid';
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    characters.forEach(char => {
        if (!canMeetCharacterUnified(char) && !getCurrentGameState().characters[char.id].met) {
            return;
        }

        const charState = getCurrentGameState().characters[char.id];
        const card = document.createElement('div');
        card.className = `character-card ${charState.met ? 'met' : ''} ${charState.realized ? 'realized' : ''}`;

        const displayName = getCharacterDisplayNameUnified(char);
        
        // Character portrait
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
            
            const urls = characterPortraitUrls[char.id];
            const portraitStyle = `
                --portrait-url: url('${urls.default}');
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
        
        // Build various displays
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

        let manualDependenciesDisplay = '';
        if (charState.met && char.realizationDependencies.length === 0 && !canRealize) {
            const noOneRequired = [14, 16, 20, 23, 24, 37, 42, 46, 54, 68, 89, 93, 94, 95, 99, 100].includes(char.id);
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
                        ${charState.met ? `
                            <div class="relationship-buttons">
                                <button class="relationship-btn ${charState.relationship === 'love' ? 'active love' : ''}" 
                                        onclick="setCharacterRelationshipUnified(${char.id}, 'love')">Love</button>
                                <button class="relationship-btn ${charState.relationship === 'friend' ? 'active friend' : ''}" 
                                        onclick="setCharacterRelationshipUnified(${char.id}, 'friend')">Friend</button>
                                <button class="relationship-btn ${charState.relationship === 'hate' ? 'active hate' : ''}" 
                                        onclick="setCharacterRelationshipUnified(${char.id}, 'hate')">Hate</button>
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
                        <div style="margin-top: 10px; font-size: 0.9rem;">
                            <strong>Stat:</strong> ${char.stat === 'choosable' ? 
                                (charState.chosenStat ? `${charState.chosenStat.charAt(0).toUpperCase() + charState.chosenStat.slice(1)} (+5)` : 'Choose a stat') : 
                                `${char.stat.charAt(0).toUpperCase() + char.stat.slice(1)}`}
                        </div>
                        ${hateMessage}
                        ${requirementsDisplay}
                        ${storyRequirementsDisplay}
                        ${dependenciesDisplay}
                        ${manualDependenciesDisplay}
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
                    ${locationTracker}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}