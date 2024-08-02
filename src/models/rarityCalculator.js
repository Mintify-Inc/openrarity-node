const math = require('mathjs');

class RarityCalculator {
    constructor(attributes) {
        this.attributes = attributes;
    }

    calculateRarity() {
        const rarity = math.log(this.attributes.score) * 100;
        return rarity;
    }
}

module.exports = RarityCalculator;
