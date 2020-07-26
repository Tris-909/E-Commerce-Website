import React, { Component } from 'react'
import SHOP_DATA from './shop.data';

import PreviewCollection from '../../components/preview-collection/PreviewCollection';

export class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }
    
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(collection => (
                    <PreviewCollection key={collection.id} name={collection.title} items={collection.items} />
                ))}
            </div>
        )
    }
}

export default ShopPage
