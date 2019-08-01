import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

//por ser classe Homepage, NÃO deve tem que ter { ... }
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from './pages/shop-page/shop-page.component.jsx'
import Header from './components/header/header.component'

import './App.scss';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
