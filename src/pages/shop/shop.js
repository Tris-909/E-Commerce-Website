import React from 'react'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection';
import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase';

class ShopPage extends React.Component {  
    unsubscribeFormSnapShot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            convertCollectionsSnapShotToMap(snapshot);  
        })
    }
     
    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        );
    }
}

export default ShopPage;
