import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

//por ser classe Homepage, NÃO deve tem que ter { ... }
import Homepage from "./pages/homepage/homepage.component.jsx"

import './App.scss';

const Hats = () => {
  return (
    <div>
      <Link to='/'>Voltar</Link>
      <div>Aqui tem Chapéus!!!</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
