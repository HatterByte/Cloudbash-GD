import React from 'react';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px", color: "#ff3f6c" }}>Myntra Products</h1>
            <ProductList />
        </div>
    );
};

export default App;
