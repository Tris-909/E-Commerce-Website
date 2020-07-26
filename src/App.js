import React from 'react';
import './App.css';

import {Switch ,Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import signInContainer from './pages/signIn/signIn';

function App() {
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

export default App;
