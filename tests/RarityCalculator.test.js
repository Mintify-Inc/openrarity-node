const RarityCalculator = require('../src/models/RarityCalculator');
const { expect } = require('@jest/globals');

test('Calculate rarity', () => {
    const attributes = { score: 100 };
    const calculator = new RarityCalculator(attributes);
    const rarity = calculator.calculateRarity();
    expect(rarity).toBeCloseTo(460.51701859880916, 5); // Adjust based on exact value
});
