import axios from 'axios';

const API_URL = "https://www.myntra.com/gateway/v2/product/31602544/cross-sell?maxCount=15";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.related[0].products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
