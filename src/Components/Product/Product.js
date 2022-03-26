import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name,image,price} = product
    return (
        <div>
            <img src={image} alt="" srcset="" />
            <div>
                <h3>{name}</h3>
                <h5>${price}</h5>
            </div>
            <button className='btn-card'>Add to card</button>
        </div>
    );
};

export default Product;