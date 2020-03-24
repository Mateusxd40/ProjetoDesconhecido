import {Switch,Route} from 'react-router-dom';
import React from 'react';
import Ovo from './meuovo';
import Galinha from './Galinha';

export default function pages() {
  return (
  <Switch>
      <Route path='/' exact>Nada</Route>
      <Route path='/meuovo/galinha' exact>
        <Galinha/>
      </Route>
     <Route path='/meuovo' exact><Ovo/> </Route>
  </Switch>
  );
}
