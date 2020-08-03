import React, {useEffect} from 'react';
import { GlobalStyle } from './globalStyle'; 

import {Switch ,Route, Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import Checkout from './pages/checkout/checkout';
import SignInContainer from './pages/signIn/signIn';

import { auth, createUserProfileDocument } from './firebase/firebase';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/actions/user/userActions';
import {settUser} from './redux/actions/user/userSelector';
import {RetrieveShopDataAsync} from './redux/actions/shop/shopActions';

const App = (props) => {


  //** LOGIN/SIGNUP will lead to the exist of {AuthUser}  */
  //** If we have {AuthUser}, take a snapShot then save data to the current state  */
  //** If we don't have it, state simply equal to null */

  let unsubcribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          props.setUser({
            id: snapShot.id,
            ...snapShot.data() 
          });
        })
      } else {
        props.setUser(userAuth);
      }
    });
  }, []);

  useEffect(() => {
    props.RetrieveShopDataAsync();
  }, [props.RetrieveShopDataAsync]); 

  useEffect(() => {
    return () => unsubcribeFromAuth();
  }, [unsubcribeFromAuth]);

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => props.currentUser ? (<Redirect to="/" />) : (<SignInContainer /> ) } />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
}

const mapStateToProps = (state) => ({
  currentUser: settUser(state)
}); 

const mapDispatchToProps = (dispatch) => ({
  setUser: user => dispatch(setCurrentUser(user)),
  RetrieveShopDataAsync: () => dispatch(RetrieveShopDataAsync()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
