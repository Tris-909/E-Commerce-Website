import React from 'react'
import './preview-collection.scss';

import CollectionItem from '../collection-item/CollectionItem';

export default function PreviewCollection({ name, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title"> {name.toUpperCase()} </h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map((item) => (
                        <CollectionItem key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}
