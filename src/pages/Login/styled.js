import styled from 'styled-components';

export const AreaLogin = styled.div`

    background-color:#fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;

    body{
        background-color: #6a0c8d;
    }
    
    h1{
        font-size: 24px;
    }

    .form--input{
        text-align: left;

        label{
            display: block;
            margin-top: 15px;
        }

        input{
            margin-bottom: 10px;
            padding: 8px;
            font-size: 16px;
            outline: none;
            border: 1px solid #acc;
            border-radius: 5px;
            width: 240px;
            transition 0.3s;

            &:hover{
                border: 2px solid #6a0c8d;
            }


        }

    }

    .footerLogin{
        font-size: 15px;

        a{
            
            margin-left 5px;
            color: #4e129c;
            transition: 0.4s;
            cursor: pointer;
            
            &:hover{
                color: #00ffc9;
            }   
        }
    }
    

`;


