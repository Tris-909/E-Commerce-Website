import React from 'react'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => {  
    console.log(match);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        );
}

export default ShopPage;
