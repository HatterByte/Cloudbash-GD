import axios from 'axios';

const API_URL = "https://www.myntra.com/gateway/v2/product/31602544/cross-sell?maxCount=15";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cache-Control': 'no-cache', // You can modify based on needs
                // Add any other headers you need here
            }
        });
        return response.data.related[0].products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
