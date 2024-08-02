const {calculateRarity} = require('./src/controllers/rarityController');
const fs = require('fs');
const tokens = require('./tests/datasets/inputs/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.json');

const rarity = calculateRarity(tokens);
console.log(rarity);
fs.writeFileSync('./tests/datasets/outputs/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.json', JSON.stringify(rarity, null, 2));
console.log('done')

module.exports = { calculateRarity };