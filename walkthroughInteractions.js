// walkthroughInteractions.js - Database file for all character interactions

const characterInteractions = {
    1: {
        interactions: [
            {
                id: "calc_intro",
                title: "First Meeting",
                type: "multi-step", // New: indicates this has multiple conversation steps
                steps: [
                    {
                        stepId: "calc_intro_step1",
                        question: "How do you approach the calculator?",
                        choices: {
                            love: "Compliment their mathematical precision",
                            friend: "Ask about their calculations", 
                            hate: "Ignore their work completely"
                        }
                    },
                    {
                        stepId: "calc_intro_step2", 
                        question: "They respond positively. What's your next move?",
                        choices: {
                            option1: "Offer to help with their work",
                            option2: "Share a math joke",
                            option3: "Ask about their favorite equations",
                            option4: "Suggest working together on harder problems"
                        }
                    }
                ]
            },
            {
                id: "calc_homework",
                title: "Help with Homework", 
                type: "single-step", // Traditional single interaction
                choices: {
                    love: "Stay up all night helping them",
                    friend: "Offer to study together",
                    hate: "Tell them to figure it out themselves"
                }
            },
            {
                id: "calc_complex_study",
                title: "Advanced Study Session",
                type: "multi-step",
                steps: [
                    {
                        stepId: "study_approach",
                        question: "How do you start the study session?",
                        choices: {
                            gentle: "Start with easier problems",
                            direct: "Jump into advanced calculus",
                            collaborative: "Ask what they want to focus on"
                        }
                    },
                    {
                        stepId: "study_method",
                        question: "They're struggling with a concept. Your teaching approach?",
                        choices: {
                            visual: "Draw diagrams and visual aids",
                            practical: "Use real-world examples", 
                            theoretical: "Explain the underlying theory",
                            encouraging: "Focus on building confidence",
                            patient: "Take breaks and go slowly"
                        }
                    },
                    {
                        stepId: "study_conclusion",
                        question: "As the session ends, how do you wrap up?",
                        choices: {
                            love: "Suggest regular study dates together",
                            friend: "Exchange study notes and tips"
                        }
                    }
                ]
            }
        ]
    },
    2: {
        interactions: [
            {
                id: "pencil_first_talk",
                title: "First Conversation",
                type: "single-step",
                choices: {
                    love: "Admire their sharp wit",
                    friend: "Ask about their writing experience", 
                    hate: "Make fun of their point being dull"
                }
            },
            {
                id: "pencil_art_class",
                title: "Art Class Together",
                type: "multi-step",
                steps: [
                    {
                        stepId: "art_subject",
                        question: "What do you decide to draw together?",
                        choices: {
                            portrait: "Draw portraits of each other",
                            landscape: "Sketch the campus scenery",
                            abstract: "Create abstract art together",
                            still_life: "Draw objects around the classroom"
                        }
                    },
                    {
                        stepId: "art_feedback",
                        question: "How do you give feedback on their work?",
                        choices: {
                            love: "Praise every line they draw",
                            friend: "Give constructive suggestions",
                            honest: "Point out areas for improvement",
                            hate: "Criticize their technique harshly"
                        }
                    }
                ]
            }
        ]
    },
    3: {
        interactions: [
            {
                id: "mug_morning",
                title: "Morning Coffee",
                type: "single-step",
                choices: {
                    love: "Share a romantic morning brew",
                    friend: "Chat over coffee",
                    hate: "Refuse to share your coffee"
                }
            },
            {
                id: "mug_comfort",
                title: "Comfort During Hard Times",
                type: "single-step", 
                choices: {
                    love: "Hold them close while they're warm",
                    friend: "Offer them your favorite tea",
                    hate: "Use them only when convenient"
                }
            }
        ]
    }
    // Add more character interactions as needed
    // Template for new multi-step interactions:
    /*
    [CHARACTER_ID]: {
        interactions: [
            {
                id: "unique_interaction_id",
                title: "Interaction Title",
                type: "multi-step",
                steps: [
                    {
                        stepId: "step1_id",
                        question: "First choice question?",
                        choices: {
                            option1: "First option",
                            option2: "Second option", 
                            option3: "Third option"
                        }
                    },
                    {
                        stepId: "step2_id",
                        question: "Second choice question?",
                        choices: {
                            choice1: "First choice",
                            choice2: "Second choice",
                            choice3: "Third choice",
                            choice4: "Fourth choice",
                            choice5: "Fifth choice"
                        }
                    }
                ]
            },
            {
                id: "simple_interaction_id", 
                title: "Simple Interaction",
                type: "single-step",
                choices: {
                    love: "Romance option",
                    friend: "Friendship option",
                    hate: "Hostile option"
                }
            }
        ]
    }
    */
};

// Export for use in other files (if using modules)
// export { characterInteractions };