import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Inicial from '../pages/Inicial';
import  Agendas from '../pages/Agendas';
import Navbar from '../components/Navbar';
import Individual from '../pages/Individual/index'

function AuthRoutes(){
    return(
        <>
            
            <Switch>
                <Route exact path="/">
                    <Inicial/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>     
            </Switch>
        </>
    
    )
}



export default AuthRoutes;
