const math = require('mathjs');

class RarityCalculator {
    constructor(tokens) {
        this.tokens = tokens;
        this.traitFrequencies = this.calculateTraitFrequencies();
    }

    calculateTraitFrequencies() {
        const traitCounts = {};

        this.tokens.forEach(token => {
            token.attributes.forEach(attribute => {
                const key = `${attribute.trait_type}:${attribute.value}`;
                if (!traitCounts[key]) {
                    traitCounts[key] = 0;
                }
                traitCounts[key] += 1;
            });
        });

        return traitCounts;
    }

    calculateRarityForToken(token) {
        let rarityScore = 0;

        token.attributes.forEach(attribute => {
            const key = `${attribute.trait_type}:${attribute.value}`;
            const frequency = this.traitFrequencies[key];
            rarityScore += math.log(this.tokens.length / frequency); 
        });

        return {
            id: token.id,
            score: rarityScore * 100, 
        };
    }

    calculateRarityForAllTokens() {
        return this.tokens.map(token => this.calculateRarityForToken(token));
    }
}

module.exports = RarityCalculator;
