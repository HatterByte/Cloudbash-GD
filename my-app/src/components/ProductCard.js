import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "16px", margin: "8px", borderRadius: "8px", width: "250px" }}>
            <img src={product.defaultImage.secureSrc.replace('($height)', '300').replace('($width)', '250').replace('($qualityPercentage)', '80')} 
                 alt={product.name} 
                 style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ fontSize: "16px", marginTop: "8px" }}>{product.name}</h3>
            <p style={{ color: "#888" }}>{product.info}</p>
            <p style={{ fontWeight: "bold" }}>₹{product.price.discounted}</p>
            <a href={`https://www.myntra.com/${product.landingPageUrl}`} target="_blank" rel="noreferrer">
                <button style={{ background: "#ff3f6c", color: "#fff", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    View Product
                </button>
            </a>
        </div>
    );
};

export default ProductCard;
