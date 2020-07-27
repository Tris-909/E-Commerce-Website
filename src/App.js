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

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      createUserProfileDocument(user);
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
