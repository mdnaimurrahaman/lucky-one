import React from 'react';
import "./Cart.css";

const Cart = ({item}) => {
    console.log(item)
    const {name,image} = item;
    return (
        
            <div className='cart'>
                <div className='cart-info'>
                    <img src={image} alt="" srcset="" />
                    <p className='phone-name'>{name}</p>
                </div>
            </div>
        
    );
};

export default Cart;