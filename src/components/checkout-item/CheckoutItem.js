import React from 'react'
import './checkout-item.styles.scss';


function CheckoutItem({imageUrl, name, quantities, price}) {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">{quantities}</div>
            <div className="price">{price}</div>

            <div className="remove-button">
            &#10005;
            </div>

        </div>
    )
}

export default CheckoutItem;