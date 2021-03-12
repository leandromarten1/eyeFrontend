import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './pages/Menu';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <Route exact path='/checkout'>
        <Checkout />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/cardapio'>
        <Menu />
      </Route>
      <Route exact path='/cardapio/:id'>
        <Product />
      </Route>
    </Switch>
  );
}

export default App;
