const RarityCalculator = require('../models/RarityCalculator');

exports.calculateRarity = (req, res) => {
    try {
        const { attributes } = req.body;
        const calculator = new RarityCalculator(attributes);
        const rarity = calculator.calculateRarity();
        res.json({ rarity });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
