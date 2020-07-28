import React from 'react'
import './cart-item.styles.scss';

function CartItem(props) {
    const {imageUrl, name, price, quantities} = props.item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="cart item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span>{quantities} X ${price}</span>
            </div>
        </div>
    )
}


export default CartItem;