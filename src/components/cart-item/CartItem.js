import React from 'react'
import styled from 'styled-components';

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  .image {
    width: 30%;  
  }
`;

const ImageDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
        font-size: 16px;
    }
`;


function CartItem(props) {
    const {imageUrl, name, price, quantities} = props.item;
    return (
        <CartItemContainer>
            <img className="image" src={imageUrl} alt="cart item" />
            <ImageDetails>
                <span className="name">{name}</span>
                <span>{quantities} X ${price}</span>
            </ImageDetails>
        </CartItemContainer>
    )
}


export default CartItem;