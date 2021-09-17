import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home/index';
import  Agendas from '../pages/Agendas';
import Alunos from  '../pages/Alunos';
import Suporte from '../pages/Suporte/index';
import Mensagens from '../pages/Mensagens/index';


function AppRoutes(){
    return(
    <>
        <Navbar />
        <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route exact path="/agendas" component={Agendas}>
                </Route>
                <Route exact path="/alunos" component={Alunos}>
                </Route>
                <Route exact path="/messages" component={Mensagens}>
                </Route>
                <Route exact path="/suporte" component={Suporte}>
                </Route>
        </Switch>
    </>
    )
}


export default AppRoutes;