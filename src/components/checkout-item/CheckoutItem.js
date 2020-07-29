import React from 'react'
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItem} from '../../redux/actions/cart/cartActions';

function CheckoutItem(props) {
    const {imageUrl, name, quantities, price, id} = props;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">{quantities}</div>
            <div className="price">{price}</div>

            <div className="remove-button" onClick={() => props.removeItem(id)}>
            &#10005;
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch(removeItem(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);