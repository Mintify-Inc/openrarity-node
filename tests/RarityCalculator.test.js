const {calculateRarity} = require('../src/controllers/rarityController');
const { expect } = require('@jest/globals');

test('Calculate rarity', () => {
    const attributes = { score: 100 };
    const rarity = calculateRarity(attributes);
    expect(rarity).toBeCloseTo(460.51701859880916, 5); // Adjust based on exact value
});
