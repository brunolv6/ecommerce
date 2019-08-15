import React from 'react';
import { Route, Switch } from 'react-router-dom';

//por ser classe Homepage, NÃO deve tem que ter { ... }
import Header from './components/header/header.component'
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from './pages/shop-page/shop-page.component.jsx'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
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
