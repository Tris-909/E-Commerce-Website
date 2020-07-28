import React from 'react'
import './cart-icon.styles.scss';
import { connect } from 'react-redux'; 
import { triggerCartMenu } from '../../redux/actions/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={() => props.triggerCartMenu()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    triggerCartMenu: () => dispatch(triggerCartMenu())
});

export default connect(null, mapDispatchToProps)(CartIcon);
