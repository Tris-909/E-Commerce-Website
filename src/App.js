import React from 'react';
import './App.css';

import {Switch ,Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import signInContainer from './pages/signIn/signIn';

import { auth, createUserProfileDocument } from './firebase/firebase';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/actions/user/userActions';

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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={signInContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
