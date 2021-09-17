import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Inicial from '../pages/Inicial';
//import Individual from '../pages/Individual/index'

import Navbar from '../components/Navbar';
import Home from '../pages/Home/index';
import  Agendas from '../pages/Agendas';
import Alunos from  '../pages/Alunos';
import Suporte from '../pages/Suporte/index';
//import Mensagens from '../pages/Mensagens/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Inicial} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/" component={Home} isPrivate />
    <Route path="/agendas" component={Agendas} isPrivate />
    <Route path="/alunos" component={Alunos} isPrivate />
    <Route path="/suporte" component={Suporte} isPrivate />
  </Switch>
);

export default Routes;









/*import React, {useContext} from 'react';

import useAuth from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes(){

  const { signed } = useContext(useAuth);
  return signed ? <AppRoutes/> : <AuthRoutes/>;

};

export default Routes;*/
