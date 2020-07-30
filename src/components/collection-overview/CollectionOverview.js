import React from 'react'
import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import PreviewCollection from '../preview-collection/PreviewCollection';

function CollectionOverview(props) {
    const { collections } = props;
    return (
        <div className="collections-overview">
                {collections.map(collection => (
                    <PreviewCollection key={collection.id} name={collection.title} items={collection.items} />
                ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    collections: state.shopData.shopData
});

export default connect(mapStateToProps)(CollectionOverview);
