import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart/cartActions';
import './CollectionItem.scss';

function CollectionItem(props) {
    const { name, imageUrl, price, id} = props;
    let quantities = 1;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton inverted onClick={() => props.addItem({imageUrl, name, price, id, quantities})}> ADD TO CART </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: ({imageUrl, name, price, id, quantities}) => dispatch(addItem({imageUrl, name, price, id, quantities})) 
});

export default connect(null, mapDispatchToProps)(CollectionItem);