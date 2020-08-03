import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart/cartActions';
// import './CollectionItem.scss';

import styled from 'styled-components';

const Image = styled.div`
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px; 
`;

const CustomButtonStyled = styled(CustomButton)`
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;
`;

const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    @media screen and (max-width: 500px) {
        width: 100%
    }

    &:hover ${Image} {
        opacity: 0.8;
    }

    &:hover ${CustomButtonStyled} {
        display: initial;
        opacity: 0.85;
        display: flex;
    }
`;

const CollectionFooter = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
`;

const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

const Price = styled.span`
    width: 10%;
`;

function CollectionItem(props) {
    const { name, imageUrl, price, id} = props.item;
    let quantities = 1;
    return (
        <CollectionItemContainer>
            <Image style={{ backgroundImage: `url(${imageUrl})` }} />
            <CollectionFooter>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </CollectionFooter>
            <CustomButtonStyled inverted onClick={() => props.addItem({imageUrl, name, price, id, quantities})}> ADD TO CART </CustomButtonStyled>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: ({imageUrl, name, price, id, quantities}) => dispatch(addItem({imageUrl, name, price, id, quantities})) 
});

export default connect(null, mapDispatchToProps)(CollectionItem);