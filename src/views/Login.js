import React, {useContext , useState} from 'react';
import { Link } from "react-router-dom";
import { ButtonLog } from '../componets/Buttons';
import NavRuter from '../componets/NavRuter';
import imgMotto from '../assets/Decoration.svg';
import {LogConsole, LogForm, LogWrapper , LogNav, LogPannel, LogHero, Label } from './LogElements/LogElements';
import { DataContext } from '../context/DataContext';


const Login = () => {
  const { getUser } = useContext(DataContext);

  const [ userEmail , setUserEmail ] = useState('');
  const [ userPassword , setUserPassword ] = useState('');

  const handleInput= e =>{
    e.preventDefault();
    getUser(userEmail, userPassword);
    setUserPassword('');
    setUserEmail('');
  }

  return (
    (<LogWrapper>
      <LogNav>
          <LogPannel>
            <Link to="/logowanie" label="logowaniee"><ButtonLog>Zaloguj</ButtonLog></Link>
            <Link to="/rejestracj" label="rejestracj"><ButtonLog>Załóż konto</ButtonLog></Link>
          </LogPannel>
          <NavRuter />
      </LogNav>
      <LogConsole>
        <LogHero>
          <h1>Zaloguj się</h1>
          <img src={imgMotto} alt='decoration img'></img>
        </LogHero>
        <LogForm>
          <Label>
            <label>Email</label>
            <input type='text' name='userEmail' value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
            <label>Hasło</label>
            <input type='password' name='userPassword' value={userPassword} onChange={e=>setUserPassword(e.target.value)}/>
          </Label>
        </LogForm>
        <LogHero>
          <Link to="/logowanie" label="logowaniee"><ButtonLog onClick={e=>handleInput(e)}>Zaloguj</ButtonLog></Link>
        </LogHero>
      </LogConsole>
    </LogWrapper >)
  );
}

export default Login;