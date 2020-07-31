import React from 'react';
import './App.css';

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

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubcribeFromAuth = null;

  //** LOGIN/SIGNUP will lead to the exist of {AuthUser}  */
  //** If we have {AuthUser}, take a snapShot then save data to the current state  */
  //** If we don't have it, state simply equal to null */
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setUser({
            id: snapShot.id,
            ...snapShot.data() 
          });
        })
      } else {
        this.props.setUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInContainer /> ) } />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: settUser(state)
}); 

const mapDispatchToProps = (dispatch) => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
