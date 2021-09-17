import React, {useState} from 'react';
import './App.css';
import Login from '../src/pages/Login/index';
import Register from '../src/pages/Register/index';
import Inicial from './pages/Inicial/index';
import Navbar from './components/Navbar';
import Home from './pages/Home/index';
import  Agendas from './pages/Agendas';
import Alunos from  './pages/Alunos/index';
import Suporte from './pages/Suporte/index';
import Mensagens from './pages/Mensagens/index';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { AuthProvider } from './contexts/auth';

//import Routes from './Routes/';
import Routes from './routes/index';

/*<AuthProvider value={{signed: false}}>*/


function App() {
	return (
    <>
		<BrowserRouter>
            <AuthProvider>
				<Routes/>
			</AuthProvider>
		</BrowserRouter>
    </>
	);
}

export default App;


/*const Layout = ({ children }) => {

    const { signed, user } = useAuth();

    return (

        <div className='layout'>
            <header>
                
                <div>
                    <Link to='./'>Home</Link>
                    <Link to='./dashboard'>Dashboard</Link>
                </div>
                
                { signed
                    ? <Link to='./user' >{ user.name }</Link>
                    : <Link to='./signin'>sign in</Link>
                }
            
            </header>
            
            <main>
            
                { children }
            
            </main>
        </div>
    )
}

export default Layout;*/


/*function App() {
    const [signed, setSigned] = useState(true);

    return ( 
    signed ?
        <>
            <BrowserRouter>
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
            </BrowserRouter>
        </>
    :
    <>
    <Router>
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
    </Router>
    </>

    );
}

export default App;

*/
