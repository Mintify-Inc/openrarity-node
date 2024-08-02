const RarityCalculator = require('../models/RarityCalculator');

function calculateRarity(tokens) {
    try {
        const calculator = new RarityCalculator(tokens);
        let rarities = calculator.calculateRarityForAllTokens();
        // Sort by rarity score desc and add rank
        rarities = rarities.sort((a, b) => b.score - a.score).map((rarity, index) => ({ id: rarity.id, rank: index + 1, score: rarity.score }));
        return rarities;
        
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = { calculateRarity };