const localeChanges = {
    "assets": {
        "images": {
            "game": {
                "common": {
                    "files": {
                        // ! ignore so we dont load these as the japanese version doesnt need the wizard
                        "character": { "ignore": true },
                        "characterShadow": { "ignore": true },
                    },
                },
                "locale": {
                    "baseUrl": "assets/images/ja-jp/",
                    "files": {
                        // ! ignore so we dont load these as the japanese version doesnt need the wizard
                        "betterLuckSpeechBubble": { "ignore": true },
                        "chooseEnemySpeechBubble": { "ignore": true },
                        "chooseWeaponSpeechBubble": { "ignore": true },
                        "greatJobSpeechBubble": { "ignore": true },
                        "scoreHitSpeechBubble": { "ignore": true },
                        "startSpinningSpeechBubble": { "ignore": true },
                        "timeNearlyUpSpeechBubble": { "ignore": true },
                        "underAttackSpeechBubble": { "ignore": true },
                    },
                },
            },
        },
        "sounds": {
            "game": {
                "common": {
                    "baseUrl": "assets/sounds/common/",
                    "files": {
                        // ! ignore so we dont load these as the japanese version doesnt need the wizard
                        "wizardSpeech": { "ignore": true },
                    },
                },
            },
        },
    },
    "soundPlayer": {
        // ! use the default framework SlotMastersSoundPlayer
        "type": "SlotMastersSoundPlayer",
    },
    "ui": {
        "layout": {
            "character": {
                // ! ignore so we dont load these as the japanese version doesnt need the wizard
                "ignore": true,
            },
        },
    },
};
export default localeChanges;
