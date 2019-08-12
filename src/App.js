import React from 'react';
import { Route, Switch } from 'react-router-dom';

//por ser classe Homepage, NÃO deve tem que ter { ... }
import Header from './components/header/header.component'
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from './pages/shop-page/shop-page.component.jsx'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'
import { auth } from './firebase/firebase.utils';

import './App.scss';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //recebe este método da biblioteca auth 
    //e o firestore cuida de atualizar o estado de login
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user })
      console.log(user);
    });
  }

  componentWillUnmount() {
    //desloga a conexão com o firestore ao sair
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div className='app'>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/sign-in-sign-up' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
