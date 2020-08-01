import React from 'react'
import {connect} from 'react-redux';
import PreviewCollection from '../preview-collection/PreviewCollection';
import styled from 'styled-components';

const Collectionoverview = styled.div`
    display: flex;
    flex-direction: column;
`;

function CollectionOverview(props) {
    const { collections } = props;
    return (
        <Collectionoverview>
                {Object.keys(collections).map(key => collections[key]).map(collection => (
                    <PreviewCollection key={collection.id} name={collection.title} items={collection.items} />
                ))}
        </Collectionoverview>
    )
}

const mapStateToProps = (state) => ({
    collections: state.shopData.shopData
});

export default connect(mapStateToProps)(CollectionOverview);
