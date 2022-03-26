import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Answer from '../Qustion-Ans/Answer';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
   
    const handleAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart,product];
        setCart(newCart)
    }

    const chooseOneItem = () => {
        const newCart = [...cart]
        let randomItems = newCart[Math.floor(Math.random() * newCart.length)]
        const { name } = randomItems;
        alert(name);
      }

    const removeItem =()=>{
        setCart([])
    }

    return (
        <div className='shop-container container'>
            <div className='products-container'>
                 {
                     products.map(product=><Product key={product.id}product={product} handleAddToCart={handleAddToCart}></Product>)
                 }
            </div>
            <div className='cart-container'>
                 <h4 className='cart-title'>Selected Phones</h4>
                 {
                     cart.map(item => <Cart key={item.id}item={item}></Cart>)
                 }
                 <div className='sidebar-btn'>
                     <button onClick={chooseOneItem} className='btn-cart'>Choose one for me</button>
                     <button onClick={removeItem} className='btn-cart'>Choose Again</button>
                 </div>
            </div>
            <Answer></Answer>
        </div>
    );
};

export default Shop;