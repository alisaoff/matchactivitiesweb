import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { i18n } from '../../translate/i18n'

export default () => {
    return ( <>
        <Header/>

        <div className = "text-one" >
            <label> { i18n.t('texts.introducao') } </label>   
        </div> 

        <div className = "text-two" >
            <label> { i18n.t('texts.site') } </label>   
        </div> 

        <div className = "text-three" >
            <label> { i18n.t('texts.app') } </label>   
        </div> 
        <Footer/>
        </>
    );
}