import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <img src={props.image} alt="product-image" />
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    );
};

export default Product;
