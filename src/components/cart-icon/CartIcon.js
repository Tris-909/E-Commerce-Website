import React from 'react'
import { connect } from 'react-redux'; 
import { triggerCartMenu } from '../../redux/actions/cart/cartActions';
import { selectCartItemsCount } from '../../redux/actions/cart/cartSelector';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styled from 'styled-components';

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 24px;
    height: 24px;
`;

const ItemCount = styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;

const CartIcon = (props) => {
    return (
        <CartIconContainer onClick={() => props.triggerCartMenu()}>
            <ShoppingIconContainer />
            <ItemCount> {props.itemCount} </ItemCount>
        </CartIconContainer>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    triggerCartMenu: () => dispatch(triggerCartMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
