const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Route to fetch products
app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('https://www.myntra.com/gateway/v2/product/31602544/cross-sell?maxCount=15');
        const products = response.data.related[0].products;

        // Add headers to the response
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*'); // You can replace '*' with specific domain(s) for more security
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // Disable caching

        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error.message);

        // Handle error
        res.status(500).setHeader('Content-Type', 'application/json');
        res.send({ error: 'Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
