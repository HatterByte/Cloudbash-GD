const API_URL = "http://localhost:5000/api/products";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};