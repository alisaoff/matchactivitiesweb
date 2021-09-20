import React from 'react';
import { AreaHeader } from './styled';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../logo.png"></img>
                </div>

                <nav>
                    <ul>
                        <Link to="/login"><li>Entrar</li></Link>
                        <Link to="/register"><li>Cadastro</li></Link>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;