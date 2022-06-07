/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { AreaLogin } from './styled';
import { BtnDefaultIcons, BtnDefault } from '../../components/styled';
import { FaFacebook  } from 'react-icons/fa';
import { FaGooglePlus} from 'react-icons/fa';
import { FaChevronLeft} from 'react-icons/fa';


export default () =>{
    return (
        <BrowserRouter>
        <Switch>
         <Route exact path="/registrar">
         <AreaLogin> 
         <h1 ClasseName="organize">
             <Link to="/">  <FaChevronLeft/>  </Link>
             Crie sua conta 
         </h1>
         
         <p>Crie seu acesso para o Olympus</p>
         <form>
         <div className="form--imput">
                  <label>Nome</label>
                  <input type="text" />
               </div>

              <div className="form--imput">
                  <label>E-mail</label>
                  <input type="email" />
               </div>
          
              <div className="form--imput">
                  <label>Senha</label>
                  <input type="password" />
               </div>

               <BtnDefault>Registrar </BtnDefault>

               <div classeName="footerLogin">
                  Já tem uma conta?
                   <Link to="/">Fazer Login</Link>
               </div>
          </form>

         </AreaLogin>
        </Route>

            <Route exact path="/">
            <AreaLogin>
      <h1> Faça Login em Sua Conta !! </h1>

          <BtnDefaultIcons>
              <FaFacebook/>
              <div className ="center">  Fazer Login com o Facebook</div>
          </BtnDefaultIcons>

          <BtnDefaultIcons>
          <FaGooglePlus/>
              <div className ="center">  Fazer Login com o Google</div>
          </BtnDefaultIcons>

          <p> OU</p>

          <form>
              <div className="form--imput">
                  <label>E-mail</label>
                  <input type="email" />
               </div>
          
              <div className="form--imput">
                  <label>Senha</label>
                  <input type="password" />
               </div>

               <BtnDefault>Entrar </BtnDefault>

               <div classeName="footerLogin">
                   Não tem uma conta?
                   <Link to="/Registrar">Registre-se</Link>
               </div>
          </form>
        </AreaLogin>
        </Route>
        </Switch>
        </BrowserRouter>
    
    );

}