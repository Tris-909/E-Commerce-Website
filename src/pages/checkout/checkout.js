import React from 'react';

//** PACKAGES */
import styled from 'styled-components';

//** REDUX */
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/actions/cart/cartSelector';

//** COMPONENTS */
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckOutButton from '../../components/stripe-button/StripeButton';

//** CSS */
const CheckOutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckOutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

const CheckOutHeaderBlock = styled.div`
    text-transform: capitalize;
    font-size: 2em;
    width: 23%;

    [&:last-child]:  width: 8%;
`;

const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

//** COMPONENTS */
function Checkout({ items, total }) {
    return (
        <CheckOutPageContainer>
            <CheckOutHeader>
                <CheckOutHeaderBlock>
                    <span>Product</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Description</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Quantity</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Price</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Remove</span>
                </CheckOutHeaderBlock>
            </CheckOutHeader>
            {
                items.map((item) => <CheckoutItem key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} quantities={item.quantities} price={item.price} />)
            }
            <Total><span>TOTAL: ${ total }</span></Total>
            <StripeCheckOutButton price={total} />
        </CheckOutPageContainer>  
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);