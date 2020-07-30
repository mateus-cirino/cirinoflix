import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Categoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/cadastro/categoria' component={Categoria} exact/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);