const RarityCalculator = require('../models/RarityCalculator');

function calculateRarity(attributes) {
    try {
        const calculator = new RarityCalculator(attributes);
        return calculator.calculateRarity();
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = { calculateRarity };