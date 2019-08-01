import React from 'react';
import { Route, Switch } from 'react-router-dom';

//por ser classe Homepage, NÃO deve tem que ter { ... }
import Header from './components/header/header.component'
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from './pages/shop-page/shop-page.component.jsx'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'


import './App.scss';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/sign-in-sign-up' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
