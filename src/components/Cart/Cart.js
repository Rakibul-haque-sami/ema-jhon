
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;

    }
    return (
        <div>
            <div className='c1'>
                <h2>order summary</h2>
                <h3>Items Ordered: {props.cart.length}</h3>
            </div>
            <div className='c2'>
                <p>Items:</p>
                <p>Shipping & Handling:</p>
                <p>Total before tax:</p>
                <p>Estimated Tax:</p>
                <h3>Order Total:{total}</h3>
                <button className='cart-btn'>Review Your Order</button>
            </div>
        </div>
    );
};

export default Cart; 