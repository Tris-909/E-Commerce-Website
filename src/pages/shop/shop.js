import React from 'react'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection';
import {RetrieveShopDataAsync} from '../../redux/actions/shop/shopActions';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/withSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner  = WithSpinner(CollectionPage);

class ShopPage extends React.Component {  
    componentDidMount() {   
        this.props.RetrieveShopDataAsync();
    }
     
    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={this.props.isLoading} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={this.props.isLoading} {...props} /> } />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.shopData.isLoading
});

const mapDispatchToProps = dispatch => ({
    RetrieveShopDataAsync: () => dispatch(RetrieveShopDataAsync()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
