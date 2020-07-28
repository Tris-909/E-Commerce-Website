import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux';

const CartDropdown = (props) => {
    const { items } = props;
    let content = items.map((item) => <CartItem item={item} />);
    return(
        <div className="cart-dropdown">
            <div className="cart-items" />
            {content}
            <CustomButton> GO TO CHECK OUT </CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: state.cart.itemsList
});

export default connect(mapStateToProps)(CartDropdown);
