import React from 'react'

//** PACKAGES */
import styled from 'styled-components';

//** REDUX */
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/actions/cart/cartSelector';

//** COMPONENTS */
import CollectionItem from '../../components/collection-item/CollectionItem';

//** CSS */
const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 20px;
        grid-template-rows: 1fr;
        justify-content: space-between;
    }
`;

const CollectionItemContainer = styled(CollectionItem)`
    margin-bottom: 30px;
`;

//** COMPONENTS */
const CollectionPage  = ({ collection }) => {
    const {title, items} = collection;
    return (
        <CollectionPageContainer>
            <Title>{title}</Title>
            <ItemsContainer>
                {
                    items.map(item => <CollectionItemContainer key={item.id} item={item}/>)
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
}) 

export default connect(mapStateToProps)(CollectionPage);