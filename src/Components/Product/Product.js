import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    const {name,image,price} = product
    return (
        <div className='product'>
            <img src={image} alt="" srcset="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h5 className=''>${price}</h5>
            </div>
            <div className='cart-btn'>
                <button onClick={()=>handleAddToCart(product)} className='btn-cart'>Add to card <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;