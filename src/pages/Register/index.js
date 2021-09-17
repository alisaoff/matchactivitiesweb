import React, {useState} from 'react'
import {AreaRegister} from './styled';
import {BtnDefaultIcons,BtnDefault} from '../../components/Styled';
import {FaFacebook} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import './register.css';
import {Link} from 'react-router-dom';
import {i18n} from '../../translate/i18n';
import api from '../../services/api'


export default () => {


    const [campos, setCampos] = useState({
        name: '',
        email: '',
        password: ''
    });

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    //function handleFormSubmit(event){
    //event.preventDefault();
    //console.log(campos);
    //}


    function handleFormSubmit(event) {
        event.preventDefault();
        api.post('api/user', campos).then(res => {
            alert(res.data);
        })
    }

    function validaSenha()
    {

    var campo1 = document.getElementById('senha1').value;
    var campo2 = document.getElementById('senha2').value;
    
    if(campo1 == campo2){
      document.getElementById('resultado').style.color = "#34f531";
      document.getElementById('resultado').style.fontWeight = "bold";
      document.getElementById('resultado').innerHTML = "As senhas são iguais";
    }
    else {
      document.getElementById('resultado').style.color = "#eb2626";
      document.getElementById('resultado').style.fontWeight = "bold";
      document.getElementById('resultado').innerHTML = "As senhas não correspondem";
    }
  }

  function verifyPass(p){
    var senha = document.getElementById('senha1').value;
    
    var retorno = false;
    var letrasMaiusculas="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros="0123456789";
    var especiais="@$%&!";
  
    var auxMaiuscula = 0;
    var auxNumero = 0;
    var auxEspecial = 0;

    for(var i=0; i<p.length; i++){
      if(letrasMaiusculas.test(p[i])){
      auxMaiuscula++;}
      else if(numeros.test(p[i]))
      auxNumero++;
      else if(especiais.test(p[i]))
      auxEspecial++;
 }
    if (auxMaiuscula > 0){
    if (auxNumero > 0){
    if (auxEspecial) {
    retorno = true;}}
     return retorno;
} 
}

    return (

            <AreaRegister >
            <h2> {i18n.t('titles.register')} </h2>  

            <BtnDefaultIcons>
            <FaFacebook/>
            <div className = "center" >{i18n.t('messages.facregister')} </div>  
            </BtnDefaultIcons> 

            <BtnDefaultIcons>
            <FcGoogle/>
            <div className = "center" > {i18n.t('messages.gooregister')} </div>  
            </BtnDefaultIcons> 

            <p> {i18n.t('messages.ouregister')} </p> 
            <form onSubmit = {handleFormSubmit}>

            <div className = "form--input">
            <label> {i18n.t('messages.nomeregister')} </label>  
            <input type = "text" name = "name" id = "name" minLength = {2} maxLength = {50} onChange = {handleInputChange} required notnull notblank/>
            </div>

            <div className = "form--input" >
            <label> {i18n.t('messages.emailregister')} </label>  
            <input type = "email" name = "email" id = "email" onChange = { handleInputChange } required notnull notblank />
            </div> 

            <div className = "form--input">
            <label > { i18n.t('messages.senharegister')} </label>  
            <input type = "password" name = "password1" id = "senha1" onKeyUp={ validaSenha } minLength = {8} maxLength = {16} onChange = {handleInputChange} required notnull notblank />
            </div>

            <div className = "form--input">
            <label> {i18n.t('messages.confsenha')} </label>  
            <input type = "password" name = "password2" id = "senha2" onKeyUp={ validaSenha } minLength = {8} maxLength = {16} onChange = {handleInputChange} required notnull notblank />
            </div>


            <div className = "form--input">
            <td colSpan="2"><p id="resultado"></p></td>
            </div>

            <BtnDefault type = "submit">
            <div className = "center"> {i18n.t('buttons.register')} </div>  
            </BtnDefault >
            </form>

            <div className = "footerRegister" > {i18n.t('messages.perregister')} <Link to = "/login" > {i18n.t('messages.gunregister')} </Link> </div >
            </AreaRegister>);}