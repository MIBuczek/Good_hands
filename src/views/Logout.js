import React from 'react';
import { Link } from "react-router-dom";
import { ButtonLog } from '../componets/Buttons';
import imgMotto from '../assets/Decoration.svg';
import {LogConsole, LogWrapper , LogNav, LogPannel, LogHero, LogMain } from './LogElements/LogElements';



const Logout = () => {
  return (
    (<LogWrapper>
      <LogNav>
          <LogPannel>
            <Link to="/" label="strona główna"><ButtonLog>Strona główna</ButtonLog></Link>
            <Link to="/logowanie" label="logowanie"><ButtonLog>Zaloguj</ButtonLog></Link>
            <Link to="/rejestracja" label="rejestracj"><ButtonLog>Załóż konto</ButtonLog></Link>
          </LogPannel>
      </LogNav>
      <LogConsole>
        <LogHero>
          <h1>Wylogowanie nastąpiło pomyślnie!</h1>
          <img src={imgMotto} alt='decoration img'></img>
        </LogHero>
        <LogMain>
         <Link to="/">
            <ButtonLog>Strona główna</ButtonLog>
         </Link>
        </LogMain>
      </LogConsole>
    </LogWrapper >)
  );
}

export default Logout;