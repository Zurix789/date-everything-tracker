// walkthrough.js - Complete walkthrough system with interactions

// Walkthrough state object
let walkthroughState = {
    characters: {},
    interactions: {}
};

// Initialize walkthrough state for all characters
function initializeWalkthroughState() {
    characters.forEach(char => {
        if (!walkthroughState.characters[char.id]) {
            walkthroughState.characters[char.id] = {
                met: false,
                storyComplete: false,
                realized: false,
                relationship: null,
                chosenStat: char.stat === 'choosable' ? null : char.stat,
                interactions: {},
                portraitVariant: 'default',
                portraitCycle: 0
            };
        }
    });
    
    // Initialize interaction states - handles both single-step and multi-step
    Object.keys(characterInteractions).forEach(charId => {
        const interactions = characterInteractions[charId].interactions;
        interactions.forEach(interaction => {
            if (!walkthroughState.interactions[interaction.id]) {
                if (interaction.type === 'multi-step') {
                    // Multi-step interaction initialization
                    walkthroughState.interactions[interaction.id] = {
                        completed: false,
                        type: 'multi-step',
                        currentStep: 0,
                        stepChoices: {}, // Store choices for each step
                        allStepsComplete: false
                    };
                } else {
                    // Single-step interaction initialization (backward compatible)
                    walkthroughState.interactions[interaction.id] = {
                        completed: false,
                        type: 'single-step',
                        chosenPath: null
                    };
                }
            }
        });
    });
}

// Initialize walkthrough tab
function initializeWalkthrough() {
    initializeWalkthroughState();
    loadWalkthroughState(); // Load saved state if it exists
    renderWalkthroughCharacters();
    updateWalkthroughStats();
    
    // Add global controls after a short delay to ensure DOM is ready
    setTimeout(() => {
        addWalkthroughGlobalControls();
    }, 100);
}

// Load walkthrough state and ensure all characters are initialized
function loadWalkthroughState() {
    const saved = localStorage.getItem('walkthroughState');
    if (saved) {
        try {
            const savedState = JSON.parse(saved);
            walkthroughState = { ...walkthroughState, ...savedState };
        } catch (e) {
            console.error('Failed to load walkthrough state:', e);
        }
    }
    // Always ensure all characters are initialized after loading
    initializeWalkthroughState();
}

// Save walkthrough state
function saveWalkthroughState() {
    try {
        localStorage.setItem('walkthroughState', JSON.stringify(walkthroughState));
    } catch (e) {
        console.error('Failed to save walkthrough state:', e);
    }
}

// Render walkthrough characters with filtering
function renderWalkthroughCharacters() {
    const grid = document.getElementById('walkthroughCharacterGrid');
    if (!grid) return;
    
    // Ensure walkthrough state is initialized before rendering
    if (!walkthroughState.characters || Object.keys(walkthroughState.characters).length === 0) {
        initializeWalkthroughState();
    }
    
    const filters = currentFilters.walkthrough;
    let filteredCharacters = characters.filter(char => {
        const charState = walkthroughState.characters[char.id];
        
        // Apply filters similar to main tab
        if (filters.statFilter) {
            const charStat = char.stat === 'choosable' ?
                (charState.chosenStat || 'choosable') : char.stat;
            if (charStat !== filters.statFilter) return false;
        }
        
        if (filters.relationshipFilter) {
            if (filters.relationshipFilter === 'none' && charState.relationship) return false;
            if (filters.relationshipFilter !== 'none' && charState.relationship !== filters.relationshipFilter) return false;
        }
        
        if (filters.searchTerm) {
            const searchTerm = filters.searchTerm.toLowerCase();
            const name = char.name.toLowerCase();
            const object = char.object.toLowerCase();
            if (!name.includes(searchTerm) && !object.includes(searchTerm)) return false;
        }
        
        return true;
    });
    
    // Apply sorting
    filteredCharacters.sort((a, b) => {
        switch (filters.sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'stat':
                const aStat = a.stat === 'choosable' ? 
                    (walkthroughState.characters[a.id].chosenStat || 'choosable') : a.stat;
                const bStat = b.stat === 'choosable' ? 
                    (walkthroughState.characters[b.id].chosenStat || 'choosable') : b.stat;
                return aStat.localeCompare(bStat);
            case 'relationship':
                const aRel = walkthroughState.characters[a.id].relationship || 'zzz';
                const bRel = walkthroughState.characters[b.id].relationship || 'zzz';
                return aRel.localeCompare(bRel);
            default:
                return a.id - b.id;
        }
    });
    
    grid.innerHTML = '';
    
    filteredCharacters.forEach(char => {
        const card = createWalkthroughCharacterCard(char);
        grid.appendChild(card);
    });
}

// Create walkthrough character card - Updated to match UI.js structure
function createWalkthroughCharacterCard(char) {
    // Ensure character state exists
    if (!walkthroughState.characters[char.id]) {
        walkthroughState.characters[char.id] = {
            met: false,
            storyComplete: false,
            realized: false,
            relationship: null,
            chosenStat: char.stat === 'choosable' ? null : char.stat,
            interactions: {},
            portraitVariant: 'default',
            portraitCycle: 0
        };
    }
    
    const charState = walkthroughState.characters[char.id];
    const div = document.createElement('div');
    
    // Set up card classes including relationship background (matching ui.js)
    let cardClasses = 'walkthrough-character-card';
    if (charState.met) {
        cardClasses += ' met';
    }
    
    // Add relationship-specific classes (matching ui.js)
    if (charState.realized) {
        cardClasses += ' realized';
    } else if (charState.relationship) {
        cardClasses += ` relationship-${charState.relationship}`;
    }
    
    div.className = cardClasses;
    div.id = `walkthrough-char-${char.id}`;
    div.setAttribute('data-char-id', char.id);
    
    // Enhanced display name handling for dual characters (matching main tab)
    let displayName = charState.met ? `${char.id}. ${char.name}` : `${char.id}. ???`;
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
    
    // Enhanced stat display handling for choosable characters (matching ui.js)
    let statDisplay = char.stat;
    if (char.stat === 'choosable') {
        if (charState.chosenStat) {
            statDisplay = `${charState.chosenStat.charAt(0).toUpperCase() + charState.chosenStat.slice(1)} (+5)`;
        } else {
            statDisplay = charState.met ? 'Choose a stat' : 'Choosable';
        }
    } else {
        statDisplay = char.stat.charAt(0).toUpperCase() + char.stat.slice(1);
    }
    
    // Add stat icon if available (matching ui.js)
    if (typeof getStatIcon === 'function') {
        const actualStat = char.stat === 'choosable' ? (charState.chosenStat || char.stat) : char.stat;
        statDisplay = `${getStatIcon(actualStat)}${statDisplay}`;
    }
    
    // Enhanced portrait handling with character portrait system (matching ui.js)
    let characterPortrait;
    if (typeof characterPortraitUrls !== 'undefined' && characterPortraitUrls[char.id]) {
        // Build portrait classes (matching ui.js)
        let portraitClasses = 'character-portrait';
        if (!charState.met) {
            portraitClasses += ' not-met';
        } else if (charState.realized) {
            portraitClasses += ' realized';
        } else if (charState.relationship) {
            portraitClasses += ` ${charState.relationship}`;
        }
        
        // Get portrait URL with variant support (matching ui.js)
        const portraitUrl = typeof getCharacterPortraitUrl === 'function' ? 
            getCharacterPortraitUrl(char, charState) : 
            characterPortraitUrls[char.id].default;
        
        const urls = characterPortraitUrls[char.id];
        
        const portraitStyle = `
            --portrait-url: url('${portraitUrl}');
            --portrait-love-url: url('${urls.love}');
            --portrait-friend-url: url('${urls.friend}');
            --portrait-hate-url: url('${urls.hate}');
            --portrait-realized-url: url('${urls.realized}');
        `;
        
        characterPortrait = `<div class="${portraitClasses}" style="${portraitStyle}"></div>`;
    } else {
        // Fallback to simple image if portrait system not available
        characterPortrait = `<div class="character-portrait" style="background-image: url('char${char.id}.webp')"></div>`;
    }
    
    // Variant button for dual characters (matching main tab)
    let variantButton = '';
    if ((char.id === 9 || char.id === 19) && charState.met && typeof getVariantButtonText === 'function') {
        const buttonText = getVariantButtonText(char, charState);
        variantButton = `
            <button class="btn btn-primary" onclick="toggleWalkthroughCharacterVariant(${char.id})">
                ${buttonText}
            </button>
        `;
    }
    
    // Use the same flex layout structure as ui.js
    div.innerHTML = `
        <div style="display: flex; gap: 15px;">
            <div class="character-icon" style="flex-shrink: 0;">${characterPortrait}</div>
            <div style="flex: 1;">
                <div class="character-name">${displayName}</div>
                <div class="walkthrough-character-stat" style="color: #764ba2; font-weight: bold; margin-bottom: 10px;">${statDisplay}</div>
                <div class="character-controls">
                    <button class="btn ${charState.met ? 'btn-success' : 'btn-primary'}" 
                            onclick="toggleWalkthroughCharacterMet(${char.id})">
                        ${charState.met ? 'Met' : 'Not Met'}
                    </button>
                    ${charState.met ? `
                        <button class="btn ${charState.storyComplete ? 'btn-success' : 'btn-secondary'}" 
                                onclick="toggleWalkthroughStoryComplete(${char.id})">
                            ${charState.storyComplete ? 'Story Complete' : 'Story Incomplete'}
                        </button>
                        <button class="btn ${charState.realized ? 'btn-success' : 'btn-secondary'}" 
                                onclick="toggleWalkthroughRealized(${char.id})">
                            ${charState.realized ? 'Realized' : 'Not Realized'}
                        </button>
                        ${!charState.storyComplete && !charState.realized ? `
                            <button class="btn btn-primary" onclick="toggleWalkthroughExpanded(${char.id})">
                                <span id="expand-text-${char.id}">Expand</span>
                            </button>
                        ` : ''}
                        ${variantButton}
                    ` : ''}
                </div>
                ${!charState.storyComplete && !charState.realized ? `
                    <div class="interactions-section" id="interactions-${char.id}" style="display: none; margin-top: 15px;">
                        ${createWalkthroughInteractionsSection(char)}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Update interaction progress if interactions exist
    const interactions = typeof characterInteractions !== 'undefined' ? characterInteractions[char.id] : null;
    if (interactions) {
        setTimeout(() => updateWalkthroughInteractionProgress(char.id), 10);
    }
    
    return div;
}

// Create walkthrough interactions section with choices displayed
function createWalkthroughInteractionsSection(char) {
    const charState = walkthroughState.characters[char.id];
    const interactions = typeof characterInteractions !== 'undefined' ? characterInteractions[char.id] : null;
    
    if (!interactions || !interactions.interactions || interactions.interactions.length === 0) {
        return `
            <div class="interactions-header">
                <span class="interactions-title">Character Interactions</span>
            </div>
            <p style="color: #6c757d; font-style: italic;">No specific interactions documented yet. Check back for updates!</p>
        `;
    }
    
    let interactionsHtml = `
        <div class="interactions-header">
            <span class="interactions-title">Character Interactions</span>
            <span class="interaction-progress-text" id="progress-${char.id}">0/${interactions.interactions.length} completed</span>
        </div>
        <div class="interaction-progress">
            <div class="interaction-progress-bar" id="progress-bar-${char.id}" style="width: 0%"></div>
        </div>
        <div class="interactions-controls" style="margin: 15px 0; display: flex; gap: 10px; justify-content: center;">
            <button class="btn btn-danger" onclick="resetWalkthroughCharacterInteractions(${char.id})">
                Reset Conversations
            </button>
        </div>
    `;
    
    interactions.interactions.forEach((interaction, index) => {
        const interactionState = walkthroughState.interactions[interaction.id] || {};
        const completed = interactionState.completed || false;
        
        interactionsHtml += `
            <div class="interaction-item ${completed ? 'completed' : ''}" id="interaction-${interaction.id}">
                <div class="interaction-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="interaction-checkbox">
                        <input type="checkbox" id="check-${interaction.id}" 
                               ${completed ? 'checked' : ''}
                               onchange="toggleWalkthroughInteraction('${interaction.id}', ${char.id})">
                        <label for="check-${interaction.id}" class="interaction-title">${interaction.title}</label>
                        ${completed ? '<span class="completion-indicator"> ✓ Completed</span>' : ''}
                    </div>
                    <button class="btn btn-primary expand-btn" onclick="toggleWalkthroughInteractionExpansion('${interaction.id}')" id="expand-interaction-${interaction.id}">
                        Expand
                    </button>
                </div>
                <div class="conversation-choices" id="choices-${interaction.id}" style="display: none;">
                    ${createWalkthroughInteractionChoices(interaction, interactionState)}
                </div>
            </div>
        `;
    });
    
    return interactionsHtml;
}

// Create interaction choices for walkthrough - handles both single-step and multi-step
function createWalkthroughInteractionChoices(interaction, interactionState) {
    if (interaction.type === 'multi-step') {
        return createWalkthroughMultiStepChoices(interaction, interactionState);
    } else {
        return createWalkthroughSingleStepChoices(interaction, interactionState);
    }
}

// Create single-step choices for walkthrough
function createWalkthroughSingleStepChoices(interaction, interactionState) {
    const chosenPath = interactionState.chosenPath || null;
    
    return `
        <h5>Conversation Choices:</h5>
        ${Object.entries(interaction.choices).map(([key, text]) => `
            <div class="choice-option">
                <input type="radio" name="choice-${interaction.id}" id="${key}-${interaction.id}" 
                       value="${key}" ${chosenPath === key ? 'checked' : ''}
                       onchange="setWalkthroughSingleStepChoice('${interaction.id}', '${key}')">
                <span class="relationship-path-indicator ${getWalkthroughPathIndicatorClass(key)}"></span>
                <label for="${key}-${interaction.id}" class="choice-${key}">${text}</label>
            </div>
        `).join('')}
    `;
}

// Create multi-step choices for walkthrough
function createWalkthroughMultiStepChoices(interaction, interactionState) {
    const currentStep = interactionState.currentStep || 0;
    const stepChoices = interactionState.stepChoices || {};
    
    let stepsHtml = '';
    
    interaction.steps.forEach((step, stepIndex) => {
        const isCurrentStep = stepIndex === currentStep;
        const isPastStep = stepIndex < currentStep;
        const stepChoice = stepChoices[step.stepId];
        const hasChoice = stepChoice !== undefined && stepChoice !== null;
        
        let stepClass = 'conversation-step';
        if (hasChoice) stepClass += ' completed-step';
        if (!isCurrentStep && !isPastStep) stepClass += ' future-step';
        
        stepsHtml += `
            <div class="${stepClass}" id="step-${step.stepId}">
                <h5 class="step-question">
                    <span class="step-number">Step ${stepIndex + 1}:</span> 
                    ${step.question}
                    ${hasChoice ? `<span class="step-choice-indicator">✓ ${stepChoice}</span>` : ''}
                </h5>
                ${isCurrentStep || isPastStep ? `
                    <div class="step-choices">
                        ${Object.entries(step.choices).map(([key, text]) => `
                            <div class="choice-option">
                                <input type="radio" name="step-${step.stepId}" id="${key}-${step.stepId}" 
                                       value="${key}" ${stepChoice === key ? 'checked' : ''}
                                       onchange="setWalkthroughMultiStepChoice('${interaction.id}', '${step.stepId}', '${key}', ${stepIndex})">
                                <span class="relationship-path-indicator ${getWalkthroughPathIndicatorClass(key)}"></span>
                                <label for="${key}-${step.stepId}" class="choice-${key}">${text}</label>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    return stepsHtml;
}

// Helper function for walkthrough path indicator classes
function getWalkthroughPathIndicatorClass(choice) {
    if (choice === 'love') return 'path-love';
    if (choice === 'friend') return 'path-friend';
    if (choice === 'hate') return 'path-hate';
    return 'path-neutral';
}

// Toggle functions for walkthrough
function toggleWalkthroughCharacterMet(charId) {
    if (!walkthroughState.characters[charId]) {
        initializeWalkthroughState();
    }
    
    walkthroughState.characters[charId].met = !walkthroughState.characters[charId].met;
    
    // If setting to not met, reset other states
    if (!walkthroughState.characters[charId].met) {
        walkthroughState.characters[charId].storyComplete = false;
        walkthroughState.characters[charId].realized = false;
        walkthroughState.characters[charId].relationship = null;
    }
    
    saveWalkthroughState();
    renderWalkthroughCharacters();
    updateWalkthroughStats();
}

function toggleWalkthroughStoryComplete(charId) {
    if (!walkthroughState.characters[charId]) {
        initializeWalkthroughState();
    }
    
    walkthroughState.characters[charId].storyComplete = !walkthroughState.characters[charId].storyComplete;
    
    saveWalkthroughState();
    renderWalkthroughCharacters();
    updateWalkthroughStats();
}

function toggleWalkthroughRealized(charId) {
    if (!walkthroughState.characters[charId]) {
        initializeWalkthroughState();
    }
    
    walkthroughState.characters[charId].realized = !walkthroughState.characters[charId].realized;
    
    saveWalkthroughState();
    renderWalkthroughCharacters();
    updateWalkthroughStats();
}

function setWalkthroughRelationship(charId, relationship) {
    if (!walkthroughState.characters[charId]) {
        initializeWalkthroughState();
    }
    
    walkthroughState.characters[charId].relationship = walkthroughState.characters[charId].relationship === relationship ? null : relationship;
    
    saveWalkthroughState();
    renderWalkthroughCharacters();
    updateWalkthroughStats();
}

function toggleWalkthroughCharacterVariant(charId) {
    if (!walkthroughState.characters[charId]) {
        initializeWalkthroughState();
    }
    
    const character = walkthroughState.characters[charId];
    
    // Toggle between default and alt variants for dual characters
    if (charId === 9 || charId === 19) { // Curt & Rod (9), Eddie & Volt (19)
        if (character.portraitVariant === 'default') {
            character.portraitVariant = 'alt';
            character.portraitCycle = 0;
        } else {
            // Cycle through the two individual portraits in alt variant
            character.portraitCycle = (character.portraitCycle + 1) % 2;
        }
    }
    
    saveWalkthroughState();
    renderWalkthroughCharacters();
}

function toggleWalkthroughExpanded(charId) {
    const interactionsSection = document.getElementById(`interactions-${charId}`);
    const expandText = document.getElementById(`expand-text-${charId}`);
    const card = document.getElementById(`walkthrough-char-${charId}`);
    
    if (interactionsSection.style.display === 'none') {
        interactionsSection.style.display = 'block';
        expandText.textContent = 'Collapse';
        card.classList.add('expanded');
    } else {
        interactionsSection.style.display = 'none';
        expandText.textContent = 'Expand';
        card.classList.remove('expanded');
    }
}

// Interaction handling functions
function toggleWalkthroughInteraction(interactionId, charId) {
    if (!walkthroughState.interactions[interactionId]) {
        walkthroughState.interactions[interactionId] = {
            completed: false,
            chosenPath: null
        };
    }
    
    const wasCompleted = walkthroughState.interactions[interactionId].completed;
    walkthroughState.interactions[interactionId].completed = !wasCompleted;
    
    // Update completion indicator
    const indicatorElement = document.querySelector(`#interaction-${interactionId} .completion-indicator`);
    const checkboxLabel = document.querySelector(`label[for="check-${interactionId}"]`);
    
    if (walkthroughState.interactions[interactionId].completed) {
        if (!indicatorElement && checkboxLabel) {
            checkboxLabel.insertAdjacentHTML('afterend', '<span class="completion-indicator"> ✓ Completed</span>');
        }
    } else {
        if (indicatorElement) {
            indicatorElement.remove();
        }
    }
    
    updateWalkthroughInteractionProgress(charId);
    saveWalkthroughState();
}

// Create single-step choices for walkthrough with proper green styling
function createWalkthroughSingleStepChoices(interaction, interactionState) {
    const chosenPath = interactionState.chosenPath || null;
    const hasChoice = chosenPath !== null && chosenPath !== undefined;
    
    // Use the same styling structure as multi-step interactions
    let choicesClass = 'conversation-step';
    if (hasChoice) choicesClass += ' completed-step';
    
    return `
        <div class="${choicesClass}">
            <h5 class="step-question">
                <span class="step-number">Choices:</span>
                Conversation Choices
                ${hasChoice ? `<span class="step-choice-indicator">✓ ${chosenPath}</span>` : ''}
            </h5>
            <div class="step-choices">
                ${Object.entries(interaction.choices).map(([key, text]) => `
                    <div class="choice-option">
                        <input type="radio" name="choice-${interaction.id}" id="${key}-${interaction.id}" 
                               value="${key}" ${chosenPath === key ? 'checked' : ''}
                               onchange="setWalkthroughSingleStepChoice('${interaction.id}', '${key}')">
                        <span class="relationship-path-indicator ${getWalkthroughPathIndicatorClass(key)}"></span>
                        <label for="${key}-${interaction.id}" class="choice-${key}">${text}</label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Handle multi-step choice selection
function setWalkthroughMultiStepChoice(interactionId, stepId, choice, stepIndex) {
    if (!walkthroughState.interactions[interactionId]) {
        walkthroughState.interactions[interactionId] = {
            completed: false,
            type: 'multi-step',
            currentStep: 0,
            stepChoices: {},
            allStepsComplete: false
        };
    }
    
    const interactionState = walkthroughState.interactions[interactionId];
    interactionState.stepChoices[stepId] = choice;
    
    // Get the interaction definition to check total steps
    const interaction = findWalkthroughInteractionById(interactionId);
    if (!interaction) return;
    
    const totalSteps = interaction.steps.length;
    const nextStep = stepIndex + 1;
    
    // Update current step to show next available step, but don't force progression
    if (nextStep < totalSteps) {
        interactionState.currentStep = Math.max(interactionState.currentStep, nextStep);
    } else {
        interactionState.currentStep = totalSteps;
    }
    
    // Always re-render the choices to update indicators
    const choicesContainer = document.querySelector(`#interaction-${interactionId} .conversation-choices`);
    if (choicesContainer) {
        choicesContainer.innerHTML = createWalkthroughInteractionChoices(interaction, interactionState);
    }
    
    // Find character ID for progress update
    const charId = findWalkthroughCharacterIdForInteraction(interactionId);
    if (charId) updateWalkthroughInteractionProgress(charId);
    
    saveWalkthroughState();
}

// Helper functions
function addWalkthroughCompletionIndicator(interactionId) {
    const checkboxLabel = document.querySelector(`label[for="check-${interactionId}"]`);
    const existingIndicator = document.querySelector(`#interaction-${interactionId} .completion-indicator`);
    
    if (!existingIndicator && checkboxLabel) {
        checkboxLabel.insertAdjacentHTML('afterend', '<span class="completion-indicator"> ✓ Completed</span>');
    }
}

function findWalkthroughCharacterIdForInteraction(interactionId) {
    for (const [charId, charInteractions] of Object.entries(characterInteractions)) {
        if (charInteractions.interactions.some(interaction => interaction.id === interactionId)) {
            return parseInt(charId);
        }
    }
    return null;
}

function findWalkthroughInteractionById(interactionId) {
    for (const charInteractions of Object.values(characterInteractions)) {
        const interaction = charInteractions.interactions.find(int => int.id === interactionId);
        if (interaction) return interaction;
    }
    return null;
}

function updateWalkthroughInteractionProgress(charId) {
    const interactions = characterInteractions[charId];
    if (!interactions) return;
    
    const totalInteractions = interactions.interactions.length;
    const completedInteractions = interactions.interactions.filter(interaction => 
        walkthroughState.interactions[interaction.id] && 
        walkthroughState.interactions[interaction.id].completed
    ).length;
    
    const progressPercent = totalInteractions > 0 ? (completedInteractions / totalInteractions) * 100 : 0;
    
    // Update progress text
    const progressText = document.getElementById(`progress-${charId}`);
    if (progressText) {
        progressText.textContent = `${completedInteractions}/${totalInteractions} completed`;
    }
    
    // Update progress bar
    const progressBar = document.getElementById(`progress-bar-${charId}`);
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }
}

// Stats functions for walkthrough
function updateWalkthroughStats() {
    const totalCharacters = characters.length;
    const metCharacters = Object.values(walkthroughState.characters).filter(char => char.met).length;
    const storyCompleteCharacters = Object.values(walkthroughState.characters).filter(char => char.storyComplete).length;
    const realizedCharacters = Object.values(walkthroughState.characters).filter(char => char.realized).length;
    
    // Update stat displays if elements exist
    const metStat = document.getElementById('walkthrough-met-stat');
    const storyStat = document.getElementById('walkthrough-story-stat');
    const realizedStat = document.getElementById('walkthrough-realized-stat');
    
    if (metStat) metStat.textContent = `${metCharacters}/${totalCharacters}`;
    if (storyStat) storyStat.textContent = `${storyCompleteCharacters}/${totalCharacters}`;
    if (realizedStat) realizedStat.textContent = `${realizedCharacters}/${totalCharacters}`;
}

// Clear all walkthrough data
function clearWalkthroughData() {
    if (confirm('Are you sure you want to clear all walkthrough data? This cannot be undone.')) {
        walkthroughState = {
            characters: {},
            interactions: {}
        };
        localStorage.removeItem('walkthroughState');
        initializeWalkthroughState();
        renderWalkthroughCharacters();
        updateWalkthroughStats();
}
}

// Export walkthrough state for backup
function exportWalkthroughState() {
    const dataStr = JSON.stringify(walkthroughState, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'walkthrough-state.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Import walkthrough state from backup
function importWalkthroughState(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedState = JSON.parse(e.target.result);
            walkthroughState = importedState;
            saveWalkthroughState();
            initializeWalkthroughState(); // Ensure all characters are present
            renderWalkthroughCharacters();
            updateWalkthroughStats();
            alert('Walkthrough state imported successfully!');
        } catch (error) {
            alert('Error importing walkthrough state: ' + error.message);
        }
    };
    reader.readAsText(file);
}

// Sync walkthrough data with main game state (if needed)
function syncWalkthroughWithMainState() {
    const mainState = getCurrentGameState();
    let syncCount = 0;
    
    Object.keys(walkthroughState.characters).forEach(charId => {
        const walkChar = walkthroughState.characters[charId];
        const mainChar = mainState.characters[charId];
        
        if (mainChar && mainChar.met && !walkChar.met) {
            walkChar.met = true;
            syncCount++;
        }
        
        if (mainChar && mainChar.storyComplete && !walkChar.storyComplete) {
            walkChar.storyComplete = true;
            syncCount++;
        }
        
        if (mainChar && mainChar.realized && !walkChar.realized) {
            walkChar.realized = true;
            syncCount++;
        }
        
        if (mainChar && mainChar.relationship && !walkChar.relationship) {
            walkChar.relationship = mainChar.relationship;
            syncCount++;
        }
    });
    
    if (syncCount > 0) {
        saveWalkthroughState();
        renderWalkthroughCharacters();
        updateWalkthroughStats();
        console.log(`Synced ${syncCount} character states from main game`);
    }
    
    return syncCount;
}

// Filter functions for walkthrough (matching main tab functionality)
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

function clearWalkthroughFilters() {
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
}

// Bulk operations for walkthrough
function bulkSetWalkthroughMet(value) {
    if (confirm(`Are you sure you want to set all characters to ${value ? 'met' : 'not met'}?`)) {
        Object.keys(walkthroughState.characters).forEach(charId => {
            walkthroughState.characters[charId].met = value;
            if (!value) {
                // Reset dependent states if setting to not met
                walkthroughState.characters[charId].storyComplete = false;
                walkthroughState.characters[charId].realized = false;
                walkthroughState.characters[charId].relationship = null;
            }
        });
        
        saveWalkthroughState();
        renderWalkthroughCharacters();
        updateWalkthroughStats();
    }
}

function bulkSetWalkthroughStoryComplete(value) {
    if (confirm(`Are you sure you want to set all met characters' stories to ${value ? 'complete' : 'incomplete'}?`)) {
        Object.keys(walkthroughState.characters).forEach(charId => {
            const char = walkthroughState.characters[charId];
            if (char.met) {
                char.storyComplete = value;
            }
        });
        
        saveWalkthroughState();
        renderWalkthroughCharacters();
        updateWalkthroughStats();
    }
}

function bulkSetWalkthroughRealized(value) {
    if (confirm(`Are you sure you want to set all met characters to ${value ? 'realized' : 'not realized'}?`)) {
        Object.keys(walkthroughState.characters).forEach(charId => {
            const char = walkthroughState.characters[charId];
            if (char.met) {
                char.realized = value;
            }
        });
        
        saveWalkthroughState();
        renderWalkthroughCharacters();
        updateWalkthroughStats();
    }
}

// Advanced walkthrough features
function getWalkthroughCompletionPercentage() {
    const totalCharacters = characters.length;
    const metCount = Object.values(walkthroughState.characters).filter(char => char.met).length;
    const storyCount = Object.values(walkthroughState.characters).filter(char => char.storyComplete).length;
    const realizedCount = Object.values(walkthroughState.characters).filter(char => char.realized).length;
    
    return {
        met: (metCount / totalCharacters) * 100,
        story: (storyCount / totalCharacters) * 100,
        realized: (realizedCount / totalCharacters) * 100,
        overall: ((metCount + storyCount + realizedCount) / (totalCharacters * 3)) * 100
    };
}

function getWalkthroughRecommendations() {
    const recommendations = [];
    
    // Check for characters that are met but have no interactions completed
    Object.entries(walkthroughState.characters).forEach(([charId, charState]) => {
        if (charState.met && !charState.storyComplete && characterInteractions[charId]) {
            const interactions = characterInteractions[charId].interactions;
            const completedInteractions = interactions.filter(interaction => 
                walkthroughState.interactions[interaction.id] && 
                walkthroughState.interactions[interaction.id].completed
            );
            
            if (completedInteractions.length === 0) {
                const character = characters.find(c => c.id === parseInt(charId));
                recommendations.push({
                    type: 'start_interactions',
                    character: character,
                    message: `Start interactions with ${character.name} to progress their story`
                });
            } else if (completedInteractions.length < interactions.length) {
                const character = characters.find(c => c.id === parseInt(charId));
                recommendations.push({
                    type: 'continue_interactions',
                    character: character,
                    message: `Continue interactions with ${character.name} (${completedInteractions.length}/${interactions.length} complete)`
                });
            }
        }
    });
    
    // Check for characters ready to be realized
    Object.entries(walkthroughState.characters).forEach(([charId, charState]) => {
        if (charState.met && charState.storyComplete && !charState.realized && charState.relationship) {
            const character = characters.find(c => c.id === parseInt(charId));
            recommendations.push({
                type: 'ready_to_realize',
                character: character,
                message: `${character.name} is ready to be realized (story complete + relationship set)`
            });
        }
    });
    
    return recommendations;
}

// Statistics and analysis functions
function getWalkthroughStatsByRelationship() {
    const stats = {
        love: 0,
        friend: 0,
        hate: 0,
        none: 0
    };
    
    Object.values(walkthroughState.characters).forEach(char => {
        if (char.met) {
            if (char.relationship) {
                stats[char.relationship]++;
            } else {
                stats.none++;
            }
        }
    });
    
    return stats;
}

function getWalkthroughInteractionStats() {
    let totalInteractions = 0;
    let completedInteractions = 0;
    
    Object.values(characterInteractions).forEach(charInteractions => {
        totalInteractions += charInteractions.interactions.length;
        charInteractions.interactions.forEach(interaction => {
            if (walkthroughState.interactions[interaction.id] && 
                walkthroughState.interactions[interaction.id].completed) {
                completedInteractions++;
            }
        });
    });
    
    return {
        total: totalInteractions,
        completed: completedInteractions,
        percentage: totalInteractions > 0 ? (completedInteractions / totalInteractions) * 100 : 0
    };
}

// Character-specific interaction helpers
function getCharacterInteractionProgress(charId) {
    const interactions = characterInteractions[charId];
    if (!interactions) return { completed: 0, total: 0, percentage: 0 };
    
    const total = interactions.interactions.length;
    const completed = interactions.interactions.filter(interaction => 
        walkthroughState.interactions[interaction.id] && 
        walkthroughState.interactions[interaction.id].completed
    ).length;
    
    return {
        completed,
        total,
        percentage: total > 0 ? (completed / total) * 100 : 0
    };
}

function resetCharacterInteractions(charId) {
    if (confirm(`Reset all interactions for this character? This cannot be undone.`)) {
        const interactions = characterInteractions[charId];
        if (interactions) {
            interactions.interactions.forEach(interaction => {
                if (walkthroughState.interactions[interaction.id]) {
                    delete walkthroughState.interactions[interaction.id];
                }
            });
            
            saveWalkthroughState();
            renderWalkthroughCharacters();
            updateWalkthroughStats();
        }
    }
}
function toggleWalkthroughInteractionExpansion(interactionId) {
    const choicesElement = document.getElementById(`choices-${interactionId}`);
    const expandBtn = document.getElementById(`expand-interaction-${interactionId}`);
    
    if (!choicesElement || !expandBtn) return;
    
    // Close all other interactions first
    closeAllWalkthroughInteractions(interactionId);
    
    if (choicesElement.style.display === 'none') {
        choicesElement.style.display = 'block';
        expandBtn.textContent = 'Collapse';
    } else {
        choicesElement.style.display = 'none';
        expandBtn.textContent = 'Expand';
    }
}
function closeAllWalkthroughInteractions(exceptInteractionId = null) {
    // Find all interaction choice elements
    const allChoiceElements = document.querySelectorAll('[id^="choices-"]');
    
    allChoiceElements.forEach(element => {
        const interactionId = element.id.replace('choices-', '');
        
        if (interactionId !== exceptInteractionId) {
            element.style.display = 'none';
            const expandBtn = document.getElementById(`expand-interaction-${interactionId}`);
            if (expandBtn) {
                expandBtn.textContent = 'Expand';
            }
        }
    });
}
function resetWalkthroughCharacterInteractions(charId) {
    if (!confirm(`Reset all conversations for this character? This cannot be undone.`)) {
        return;
    }
    
    const interactions = characterInteractions[charId];
    if (interactions) {
        interactions.interactions.forEach(interaction => {
            if (walkthroughState.interactions[interaction.id]) {
                delete walkthroughState.interactions[interaction.id];
            }
        });
        
        saveWalkthroughState();
        renderWalkthroughCharacters();
        updateWalkthroughStats();
    }
}
function resetWalkthroughData() {
    if (!confirm(`Reset ALL walkthrough data? This will clear all character progress and conversations. This cannot be undone.`)) {
        return;
    }
    
    // Reset the entire walkthrough state
    walkthroughState = {
        characters: {},
        interactions: {}
    };
    
    // Reinitialize with default values
    initializeWalkthroughState();
    saveWalkthroughState();
    renderWalkthroughCharacters();
    updateWalkthroughStats();
    
    alert('Walkthrough data has been reset.');
}
function addWalkthroughGlobalControls() {
    // Look for the walkthrough stats or header area to add the global reset button
    const walkthroughContainer = document.querySelector('#walkthrough .tab-content') || 
                                  document.querySelector('#walkthrough') ||
                                  document.getElementById('walkthroughCharacterGrid')?.parentElement;
    
    if (walkthroughContainer) {
        // Check if global controls already exist
        if (!document.getElementById('walkthrough-global-controls')) {
            const globalControlsHtml = `
                <div id="walkthrough-global-controls" style="background: white; border: 2px solid #e9ecef; border-radius: 15px; padding: 20px; margin-bottom: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                    <h3 style="color: #495057; margin-bottom: 10px; font-size: 1.2rem;">Walkthrough Controls</h3>
                    <p style="color: #6c757d; margin-bottom: 20px; font-size: 0.95rem;">Manage your walkthrough progress and reset options.</p>
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-danger" onclick="resetWalkthroughData()" style="min-width: 180px;">
                            Reset All Walkthrough Data
                        </button>
                    </div>
                </div>
            `;
            
            // Insert at the beginning of the walkthrough content
            const firstChild = walkthroughContainer.firstElementChild;
            if (firstChild) {
                firstChild.insertAdjacentHTML('beforebegin', globalControlsHtml);
            } else {
                walkthroughContainer.insertAdjacentHTML('afterbegin', globalControlsHtml);
            }
        }
    }
}

// Debug and development functions
function debugWalkthroughState() {
    console.log('=== WALKTHROUGH DEBUG INFO ===');
    console.log('Characters:', walkthroughState.characters);
    console.log('Interactions:', walkthroughState.interactions);
    console.log('Completion:', getWalkthroughCompletionPercentage());
    console.log('Recommendations:', getWalkthroughRecommendations());
    console.log('Relationship Stats:', getWalkthroughStatsByRelationship());
    console.log('Interaction Stats:', getWalkthroughInteractionStats());
    console.log('==============================');
}

// Initialize walkthrough when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if we're on the walkthrough tab or if the elements exist
    if (document.getElementById('walkthroughCharacterGrid')) {
        initializeWalkthrough();
    }
});

// Make functions globally available
window.initializeWalkthrough = initializeWalkthrough;
window.renderWalkthroughCharacters = renderWalkthroughCharacters;
window.toggleWalkthroughCharacterMet = toggleWalkthroughCharacterMet;
window.toggleWalkthroughStoryComplete = toggleWalkthroughStoryComplete;
window.toggleWalkthroughRealized = toggleWalkthroughRealized;
window.setWalkthroughRelationship = setWalkthroughRelationship;
window.toggleWalkthroughCharacterVariant = toggleWalkthroughCharacterVariant;
window.toggleWalkthroughExpanded = toggleWalkthroughExpanded;
window.toggleWalkthroughInteraction = toggleWalkthroughInteraction;
window.setWalkthroughSingleStepChoice = setWalkthroughSingleStepChoice;
window.setWalkthroughMultiStepChoice = setWalkthroughMultiStepChoice;
window.updateWalkthroughStats = updateWalkthroughStats;
window.clearWalkthroughData = clearWalkthroughData;
window.exportWalkthroughState = exportWalkthroughState;
window.importWalkthroughState = importWalkthroughState;
window.syncWalkthroughWithMainState = syncWalkthroughWithMainState;
window.applyWalkthroughFilters = applyWalkthroughFilters;
window.clearWalkthroughFilters = clearWalkthroughFilters;
window.bulkSetWalkthroughMet = bulkSetWalkthroughMet;
window.bulkSetWalkthroughStoryComplete = bulkSetWalkthroughStoryComplete;
window.bulkSetWalkthroughRealized = bulkSetWalkthroughRealized;
window.getWalkthroughRecommendations = getWalkthroughRecommendations;
window.resetCharacterInteractions = resetCharacterInteractions;
window.debugWalkthroughState = debugWalkthroughState;
window.toggleWalkthroughInteractionExpansion = toggleWalkthroughInteractionExpansion;
window.closeAllWalkthroughInteractions = closeAllWalkthroughInteractions;
window.resetWalkthroughCharacterInteractions = resetWalkthroughCharacterInteractions;
window.resetWalkthroughData = resetWalkthroughData;
window.addWalkthroughGlobalControls = addWalkthroughGlobalControls;