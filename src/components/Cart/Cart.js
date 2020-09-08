import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart)
    const total =cart.reduce((total,product)=> total+product.price,0);
    return (
        <div>
            <div className="cart-des">
                    <h4>Your Cart: <span className="text-success">{cart.length}</span> </h4><br/>
                    <h4>Your Total Course Price: <span className="text-success">${total}</span>   </h4>
                </div>
        </div>
    );
};

export default Cart;