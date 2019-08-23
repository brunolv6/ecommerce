import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//por ser classe Homepage, NÃO deve tem que ter { ... }
import Header from './components/header/header.component';
import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from './pages/shop-page/shop-page.component.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from '../src/redux/user/user.actions';

import './App.scss';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className='app'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/sign-in-sign-up' component={SignInSignUp}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(App);
