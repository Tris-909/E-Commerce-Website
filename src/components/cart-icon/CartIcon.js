import React from 'react'
import './cart-icon.styles.scss';
import { connect } from 'react-redux'; 
import { triggerCartMenu } from '../../redux/actions/cart/cartActions';
import { selectCartItemsCount } from '../../redux/actions/cart/cartSelector';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={() => props.triggerCartMenu()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> {props.itemCount} </span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    triggerCartMenu: () => dispatch(triggerCartMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
