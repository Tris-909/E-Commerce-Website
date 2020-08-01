import React from 'react'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection';
import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase';
import {GetShopData} from '../../redux/actions/shop/shopActions';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/withSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner  = WithSpinner(CollectionPage);

class ShopPage extends React.Component {  
    state = {
        isLoading: true
    }
    
    unsubscribeFormSnapShot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const data = convertCollectionsSnapShotToMap(snapshot);  
            this.props.getShopData(data);
            this.setState({ isLoading: false });
        });
        
    }
     
    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props} /> } />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getShopData: (data) => dispatch(GetShopData(data)) 
});

export default connect(null, mapDispatchToProps)(ShopPage);
