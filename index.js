const express = require('express');
const rarityRoutes = require('./src/routes/rarityRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/rarity', rarityRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
