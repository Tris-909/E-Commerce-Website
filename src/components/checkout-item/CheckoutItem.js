import React from 'react'
import {connect} from 'react-redux';
import {removeItem, incrementItemQuantity, decrementItemQuantity} from '../../redux/actions/cart/cartActions';
import styled from 'styled-components';

const CheckOutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
    width:18%;
    padding-right: 15px;

    .image {
        width: 100%;
        height: 100%;
    }
`;

const Name = styled.div`
width: 23%;
`;

const Quantity = styled.div`
width: 23%;
display: flex;
padding-left: 20px;
`;

const Price = styled.div`
width: 23%;
`;

const Arrow = styled.div`
cursor: pointer;
`;

const Value = styled.div`
margin: 0 10px;
`;

const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;


function CheckoutItem(props) {
    const {imageUrl, name, quantities, price, id} = props;
    return (
        <CheckOutItem>
            <ImageContainer>
                <img className="image" src={imageUrl} alt="Item" />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                {quantities === 0 ? null : (
                    <Arrow onClick={() => props.decrementItemQuantity(id)}>&#10094;</Arrow>
                )}
                    <Value>{quantities}</Value>
                    <Arrow onClick={() => props.incrementItemQuantity(id)}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>

            <RemoveButton onClick={() => props.removeItem(id)}>
            &#10005;
            </RemoveButton>

        </CheckOutItem>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch(removeItem(id)),
    incrementItemQuantity: (id) => dispatch(incrementItemQuantity(id)),
    decrementItemQuantity: (id) => dispatch(decrementItemQuantity(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);