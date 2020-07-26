import React from 'react';
import Homepage from './pages/homepage/homepage';
import './App.css';

import {Switch ,Route} from 'react-router-dom';

function App() {
  const HatsPage = () =>  (
    <div><h1>Hats</h1></div>
  )

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
