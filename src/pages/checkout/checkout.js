import React from 'react'
import './checkout.styles.scss';
import {connect} from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/actions/cart/cartSelector';

function Checkout({ items, total }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                items.map((item) => <CheckoutItem key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} quantities={item.quantities} price={item.price} />)
            }
            <div className="total"><span>TOTAL: ${ total }</span></div>
        </div>  
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);