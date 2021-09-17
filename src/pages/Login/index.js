import React, {useState} from 'react'
import {AreaLogin} from './styled';
import { BtnDefaultIcons, BtnDefault } from '../../components/Styled';
import {FaFacebook} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n'
//import api from '../../services/api'
//import { Redirect } from 'react-router-dom';
import {useAuth} from '../../contexts/auth';


export default () => {

    const { signIn } = useAuth();

    const [campos, setCampos] = useState({
        name: '',
        email: '',
        password: ''
        
    });

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit() {

        signIn(campos);  
    }

    return (
        <div className="container">
        <AreaLogin>
        <h2> {
            i18n.t('titles.login')
        } </h2>

        <BtnDefaultIcons >
        <FaFacebook />
        <div className = "center" > {
            i18n.t('messages.faclogin')
        } </div>  </BtnDefaultIcons >

        <BtnDefaultIcons >
        <FcGoogle/>
        <div className = "center" > {
            i18n.t('messages.goologin')
        } </div>  </BtnDefaultIcons >

        <p> {
            i18n.t('messages.oulogin')
        } </p> 
        
        <form onSubmit={handleFormSubmit}>

        <div className = "form--input">
            <label> {i18n.t('messages.nomeregister')} </label>  
            <input type = "text" name = "name" id = "name" minLength = {2} maxLength = {50} onChange = {handleInputChange} required/>
        </div>

        <div className = "form--input" >
        <label> {i18n.t('messages.emaillogin')} </label>  <input type = "email"
        name = "email"
        id = "email"
        onChange = {
            handleInputChange
        }
        required/>
        </div>

        <div className = "form--input" >
        <label> {
            i18n.t('messages.senhalogin')
        } </label>  <input type = "password"
        minLength = "8"
        maxLength = "16"
        name = "password"
        onChange = {handleInputChange}
        required/>
        </div>  

        
       <BtnDefault type = "submit">
        <div className = "center" > {
            i18n.t('buttons.login')
        } </div>  
        </BtnDefault>

        </form>

        <div className = "footerLogin" > {
            i18n.t('messages.perlogin')
        } < Link to = "/register" > {
            i18n.t('messages.gunlogin')
        } </Link>  </div >

        </AreaLogin>
        </div>
    );
}