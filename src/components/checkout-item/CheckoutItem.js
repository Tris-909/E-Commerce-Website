import React from 'react'
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItem, incrementItemQuantity, decrementItemQuantity} from '../../redux/actions/cart/cartActions';

function CheckoutItem(props) {
    const {imageUrl, name, quantities, price, id} = props;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity flex">
                {quantities === 0 ? null : (
                    <div className="arrow" onClick={() => props.decrementItemQuantity(id)}>&#10094;</div>
                )}
                    <span className="value">{quantities}</span>
                    <div className="arrow" onClick={() => props.incrementItemQuantity(id)}>&#10095;</div>
            </div>
            <div className="price">{price}</div>

            <div className="remove-button" onClick={() => props.removeItem(id)}>
            &#10005;
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch(removeItem(id)),
    incrementItemQuantity: (id) => dispatch(incrementItemQuantity(id)),
    decrementItemQuantity: (id) => dispatch(decrementItemQuantity(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);