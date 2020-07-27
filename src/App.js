import React from 'react';
import './App.css';

import {Switch ,Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import signInContainer from './pages/signIn/signIn';

import { auth, createUserProfileDocument } from './firebase/firebase';

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
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data() );
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() 
            }
          });
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
      
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header user={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={signInContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
