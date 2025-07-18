// Unified functions that work for both main and NG+

function capStatsAt100(stats) {
    return {
        smarts: Math.min(stats.smarts || 0, 100),
        poise: Math.min(stats.poise || 0, 100),
        empathy: Math.min(stats.empathy || 0, 100),
        charm: Math.min(stats.charm || 0, 100),
        sass: Math.min(stats.sass || 0, 100)
    };
}

function canMeetCharacterUnified(char) {
    const state = getCurrentGameState();
    if (char.locationRequirement === 'attic' && !state.atticUnlocked) return false;
    if (char.locationRequirement === 'dlc' && !state.dlcPurchased) return false;
    return true;
}

function canCompleteStoryUnified(char) {
    const state = getCurrentGameState();
    const charState = state.characters[char.id];
    if (!charState.met) return false;
    
    // Check attic requirement
    if (char.storyRequirements.attic && !state.atticUnlocked) return false;
    
    // Check stat requirements for story completion
    if (char.storyRequirements.smarts && state.stats.smarts < char.storyRequirements.smarts) return false;
    if (char.storyRequirements.poise && state.stats.poise < char.storyRequirements.poise) return false;
    if (char.storyRequirements.empathy && state.stats.empathy < char.storyRequirements.empathy) return false;
    if (char.storyRequirements.charm && state.stats.charm < char.storyRequirements.charm) return false;
    if (char.storyRequirements.sass && state.stats.sass < char.storyRequirements.sass) return false;
    
    // Check special requirement for Textbox-Chan
    if (char.id === 94) {
        const metCount = Object.values(state.characters).filter(c => c.met).length;
        return metCount >= 80;
    }
    
    return true;
}

function canBeRealizedUnified(char) {
    const state = getCurrentGameState();
    const charState = state.characters[char.id];
    if (!charState.met || !charState.storyComplete) return false;
    
    // Cannot realize if character hates you
    if (charState.relationship === 'hate') return false;
    
    // Check stat requirements
    if (state.stats.smarts < char.requirements.smarts ||
        state.stats.poise < char.requirements.poise ||
        state.stats.empathy < char.requirements.empathy ||
        state.stats.charm < char.requirements.charm ||
        state.stats.sass < char.requirements.sass) {
        return false;
    }
    
    // Check bidirectional dependencies
    if (char.bidirectionalDependencies.length > 0) {
        const bidirectionalDependenciesMet = char.bidirectionalDependencies.every(depId => 
            state.characters[depId].storyComplete
        );
        if (!bidirectionalDependenciesMet) return false;
    }
    
    // Check realization dependencies
    if (char.realizationDependencies.length > 0) {
        const dependenciesMet = char.realizationDependencies.every(depId => 
            state.characters[depId].storyComplete
        );
        if (!dependenciesMet) return false;
    }
    
// Check manual dependencies for characters with empty realizationDependencies
if (char.realizationDependencies.length === 0 && char.id > 2) {
    const manualDeps = charState.manualDependencies || {};
    const noOneRequired = [68].includes(char.id);
    // Allow realization if under investigation (no manual dependencies set yet)
    if (!noOneRequired && Object.keys(manualDeps).length === 0) {
        return true; // Changed from false to true - allow realization when under investigation
    }
    
    for (const depName in manualDeps) {
        if (manualDeps[depName]) {
            const depChar = characters.find(c => c.name === depName);
            if (depChar && !state.characters[depChar.id].storyComplete) {
                return false;
            }
        }
    }
}
    
    return true;
}

function getCharacterDisplayNameUnified(char) {
    const state = getCurrentGameState();
    if (!state.characters[char.id].met) {
        if (state.hintMode) {
            return `${char.id}. ${char.object}`;
        } else {
            return `${char.id}. ???`;
        }
    }
    return `${char.id}. ${char.name}`;
}

function getRequirementsStatusUnified(char) {
    const state = getCurrentGameState();
    const requirements = [];
    
    if (char.requirements.smarts > 0) {
        const met = state.stats.smarts >= char.requirements.smarts;
        requirements.push({
            text: `Smarts: ${char.requirements.smarts}`,
            met: met,
            current: !met ? state.stats.smarts : undefined
        });
    }
    if (char.requirements.poise > 0) {
        const met = state.stats.poise >= char.requirements.poise;
        requirements.push({
            text: `Poise: ${char.requirements.poise}`,
            met: met,
            current: !met ? state.stats.poise : undefined
        });
    }
    if (char.requirements.empathy > 0) {
        const met = state.stats.empathy >= char.requirements.empathy;
        requirements.push({
            text: `Empathy: ${char.requirements.empathy}`,
            met: met,
            current: !met ? state.stats.empathy : undefined
        });
    }
    if (char.requirements.charm > 0) {
        const met = state.stats.charm >= char.requirements.charm;
        requirements.push({
            text: `Charm: ${char.requirements.charm}`,
            met: met,
            current: !met ? state.stats.charm : undefined
        });
    }
    if (char.requirements.sass > 0) {
        const met = state.stats.sass >= char.requirements.sass;
        requirements.push({
            text: `Sass: ${char.requirements.sass}`,
            met: met,
            current: !met ? state.stats.sass : undefined
        });
    }
    return requirements;
}

function getStoryRequirementsStatusUnified(char) {
    const state = getCurrentGameState();
    const requirements = [];
    
    if (char.storyRequirements.attic) {
        requirements.push({
            text: 'Attic must be unlocked',
            met: state.atticUnlocked
        });
    }
    
    // Add stat requirements
    ['smarts', 'poise', 'empathy', 'charm', 'sass'].forEach(stat => {
        if (char.storyRequirements[stat]) {
            requirements.push({
                text: `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${char.storyRequirements[stat]}`,
                met: state.stats[stat] >= char.storyRequirements[stat]
            });
        }
    });
    
    // Special requirements
    if (char.id === 94) {
        const metCount = Object.values(state.characters).filter(c => c.met).length;
        requirements.push({
            text: `Must have met 80 other characters (${metCount}/80)`,
            met: metCount >= 80
        });
    }

    
    return requirements;
}

function getRealizationDependenciesStatusUnified(char) {
    const state = getCurrentGameState();
    const dependencies = [];
    
    if (char.bidirectionalDependencies.length > 0) {
        char.bidirectionalDependencies.forEach(depId => {
            const depChar = characters.find(c => c.id === depId);
            if (depChar) {
                dependencies.push({
                    id: depId,
                    name: depChar.name,
                    met: state.characters[depId].storyComplete,
                    type: 'bidirectional'
                });
            }
        });
    }
    
    if (char.realizationDependencies.length > 0) {
        char.realizationDependencies.forEach(depId => {
            const depChar = characters.find(c => c.id === depId);
            if (depChar && !char.bidirectionalDependencies.includes(depId)) {
                dependencies.push({
                    id: depId,
                    name: depChar.name,
                    met: state.characters[depId].storyComplete,
                    type: 'oneway'
                });
            }
        });
    }
    
    return dependencies;
}

// Unified character interaction functions
function toggleCharacterMetUnified(charId) {
    const state = getCurrentGameState();
    const char = characters.find(c => c.id === charId);
    
    // Ensure character state exists
    if (!state.characters[charId]) {
        console.error(`Character ${charId} not found in state`);
        return;
    }
    
    if (!state.characters[charId].met && !canMeetCharacterUnified(char)) {
        return;
    }
    
    if (!state.characters[charId].met) {
        state.characters[charId].met = true;
    } else {
        state.characters[charId].met = false;
        state.characters[charId].relationship = null;
        state.characters[charId].storyComplete = false;
        state.characters[charId].realized = false;
        state.characters[charId].statGiven = false;
        recalculateStatsUnified();
    }
    
    saveStateUnified();
    updateTimeSlots();
    renderCharacters();
    updateSummaryStats();
}

function setCharacterRelationshipUnified(charId, relationship) {
    const state = getCurrentGameState();
    const oldRelationship = state.characters[charId].relationship;
    
    if (oldRelationship === relationship) {
        state.characters[charId].relationship = null;
        state.characters[charId].statGiven = false;
    } else {
        state.characters[charId].relationship = relationship;
        state.characters[charId].statGiven = true;
    }
    
    console.log('Character relationship changed:', charId, relationship); // Debug log
    console.log('Character state:', state.characters[charId]); // Debug log
    
    recalculateStatsUnified();
    saveStateUnified();
    updateStats(); // Add explicit update
    updateSummaryStats(); // Add explicit update
    renderCharacters();
}

function setChosenStatUnified(charId, stat) {
    const state = getCurrentGameState();
    state.characters[charId].chosenStat = stat;
    
    console.log('Chosen stat changed:', charId, stat); // Debug log
    
    recalculateStatsUnified();
    saveStateUnified();
    updateStats(); // Add explicit update
    updateSummaryStats(); // Add explicit update
    renderCharacters();
}

function toggleStoryCompleteUnified(charId) {
    const state = getCurrentGameState();
    const char = characters.find(c => c.id === charId);
    
    if (!state.characters[charId].storyComplete && !canCompleteStoryUnified(char)) {
        return;
    }
    
    state.characters[charId].storyComplete = !state.characters[charId].storyComplete;
    saveStateUnified();
    updateTimeSlots();
    renderCharacters();
    updateSummaryStats();
}

function toggleRealizedUnified(charId) {
    const state = getCurrentGameState();
    const char = characters.find(c => c.id === charId);
    
    if (!state.characters[charId].realized && !canBeRealizedUnified(char)) {
        return;
    }
    
    state.characters[charId].realized = !state.characters[charId].realized;
    saveStateUnified();
    renderCharacters();
    updateSummaryStats();
}

function toggleLocationUnified(charId, location) {
    const state = getCurrentGameState();
    state.characters[charId].locations[location] = !state.characters[charId].locations[location];
    saveStateUnified();
}

// FIXED: Modified recalculateStatsUnified function to handle main game starting stats
function recalculateStatsUnified() {
    const state = getCurrentGameState();
    
    if (isNgPlus) {
        // Reset to starting stats for NG+ - make sure to copy the object properly
        state.stats = {
            smarts: state.startingStats.smarts || 0,
            poise: state.startingStats.poise || 0,
            empathy: state.startingStats.empathy || 0,
            charm: state.startingStats.charm || 0,
            sass: state.startingStats.sass || 0
        };
    } else {
        // FIXED: For main game, use starting stats if they exist, otherwise zero
        state.stats = {
            smarts: state.startingStats ? state.startingStats.smarts || 0 : 0,
            poise: state.startingStats ? state.startingStats.poise || 0 : 0,
            empathy: state.startingStats ? state.startingStats.empathy || 0 : 0,
            charm: state.startingStats ? state.startingStats.charm || 0 : 0,
            sass: state.startingStats ? state.startingStats.sass || 0 : 0
        };
    }
    
    // Add stats from relationships
    characters.forEach(char => {
        const charState = state.characters[char.id];
        if (charState && charState.relationship && charState.statGiven) {
            // For choosable characters, use chosenStat; for others, use the character's default stat
            const statToIncrease = char.stat === 'choosable' ? charState.chosenStat : char.stat;
            if (statToIncrease) {
                state.stats[statToIncrease] += 5;
            }
        }
    });
    
    // Cap all stats at 100
    state.stats = capStatsAt100(state.stats);
    
    // Update the display and apply shimmer effects
    updateStats();
    
    // Apply shimmer effects after a small delay to ensure DOM updates
    setTimeout(() => {
        refreshAllStatEffects();
    }, 50);
}