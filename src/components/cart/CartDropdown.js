import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/actions/cart/cartSelector';
import { triggerCartMenu } from '../../redux/actions/cart/cartActions';
import {withRouter} from 'react-router-dom';

const CartDropdown = (props) => {
    const { items } = props;
    let content = items.map((item) => <CartItem key={item.id} item={item} />);

    const onClickHandler = () => {
        props.dispatch(triggerCartMenu());
        props.history.push('/checkout');
    }

    return(
        <div className="cart-dropdown">
            <div className="cart-items" />
            {items.length ? content : (
                <span className="empty-message">Your cart is empty</span>
            )}
            <CustomButton onClick={() => onClickHandler()}> GO TO CHECK OUT </CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
