import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import { ButtonLog } from '../componets/Buttons';
import NavRuter from '../componets/NavRuter';
import imgMotto from '../assets/Decoration.svg';
import {LogConsole, LogForm, LogWrapper , LogNav, LogPannel, LogHero, Label } from './LogElements/LogElements';
import {DataContext} from '../context/DataContext';



const Login = () => {
  const {singNewUser} = useContext(DataContext);
  const [ newUserEmail , setNewUserEmail ] = useState('');
  const [ newUserPassword , setNewUserPassword ] = useState('');
  const [ newUserPasswordRepeat , setNewUserPasswordRepeat ] = useState('');

  const handleSingIn = e =>{
    e.preventDefault();
    if(newUserPassword === newUserPasswordRepeat){
    singNewUser( newUserEmail , newUserPasswordRepeat);
    setNewUserEmail('');
    setNewUserPassword('');
    setNewUserPasswordRepeat('');
    }
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
          <h1>Załóż konto</h1>
          <img src={imgMotto} alt='decoration img'></img>
        </LogHero>
        <LogForm>
          <Label>
            <label>Email</label>
            <input type='text' name='userEmail' value={newUserEmail} onChange={e=>setNewUserEmail(e.target.value)}/>
            <label>Hasło</label>
            <input type='password' name='userPassword' value={newUserPassword} onChange={e=>setNewUserPassword(e.target.value)}/>
            <label>Powtórz hasło</label>
            <input type='password' name='userPasswordRepeat' value={newUserPasswordRepeat} onChange={e=>setNewUserPasswordRepeat(e.target.value)}/>
          </Label>
        </LogForm>
        <LogHero>
          <Link to="/rejestracj" label="rejestracj"><ButtonLog onClick={e=>handleSingIn(e)}>Załóż konto</ButtonLog></Link>
        </LogHero>
      </LogConsole>
    </LogWrapper >)
  );
}

export default Login;