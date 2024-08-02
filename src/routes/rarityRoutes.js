const express = require('express');
const { calculateRarity } = require('../controllers/rarityController');

const router = express.Router();

router.post('/calculate-rarity', calculateRarity);

module.exports = router;
