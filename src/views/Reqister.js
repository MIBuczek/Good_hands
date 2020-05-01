import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { ButtonLog } from '../componets/Buttons';
import imgMotto from '../assets/Decoration.svg';
import {LogConsole, LogForm, LogWrapper , LogNav, LogPannel, LogHero, Label, Error } from './LogElements/LogElements';
import {DataContext} from '../context/DataContext';



const Login = () => {
  const {singNewUser} = useContext(DataContext);
  const { register, handleSubmit, errors } = useForm()
  const [ newUserEmail , setNewUserEmail ] = useState('');
  const [ newUserPassword , setNewUserPassword ] = useState('');
  const [ newUserPasswordRepeat , setNewUserPasswordRepeat ] = useState('');

  const handleSingIn = e =>{
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
            <Link to="/" label="strona główna"><ButtonLog>Strona główna</ButtonLog></Link>
            <Link to="/logowanie" label="logowaniee"><ButtonLog>Zaloguj</ButtonLog></Link>
            <Link to="/rejestracj" label="rejestracj"><ButtonLog>Załóż konto</ButtonLog></Link>
          </LogPannel>
      </LogNav>
      <LogConsole>
        <LogHero>
          <h1>Załóż konto</h1>
          <img src={imgMotto} alt='decoration img'></img>
        </LogHero>
        <LogForm>
          <Label>
            <label>Email</label>
            <input type='text' name='userEmail' value={newUserEmail} onChange={e=>setNewUserEmail(e.target.value)}  ref={register({ required: true, minLength:4 , maxLength: 20,  pattern: /^\S+@\S+$/i})}/>
            {errors.userEmail && <Error>niepoprawny adres e-mail</Error>}
            <label>Hasło</label>
            <input type='password' name='userPassword' value={newUserPassword} onChange={e=>setNewUserPassword(e.target.value)} ref={register({ required: true, minLength:4 , maxLength: 20})}/>
            {errors.userPassword && <Error>niepoprawne hasło</Error>}
            <label>Powtórz hasło</label>
            <input type='password' name='userPasswordRepeat' value={newUserPasswordRepeat} onChange={e=>setNewUserPasswordRepeat(e.target.value)} ref={register({ required: true, minLength:4 , maxLength: 20})}/>
            {errors.userPassword && <Error>niepoprawne hasło</Error>}
          </Label>
        </LogForm>
        <LogHero>
          <ButtonLog type='button' onClick={handleSubmit(handleSingIn)}>Załóż konto</ButtonLog>
        </LogHero>
      </LogConsole>
    </LogWrapper >)
  );
}

export default Login;