const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('https://www.myntra.com/gateway/v2/product/31602544/cross-sell?maxCount=15');
        const products = response.data.related[0].products;
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
