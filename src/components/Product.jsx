import React from 'react';

function Product({ name, id }) {
    return (
        <div>
            <h3>Product Name: {name}</h3>
            <p>Product ID: {id}</p>
        </div>
    );
}

export default Product;
