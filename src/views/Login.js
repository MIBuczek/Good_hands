import React, {useContext , useState} from 'react';
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { ButtonLog } from '../componets/Buttons';
import imgMotto from '../assets/Decoration.svg';
import {LogConsole, LogForm, LogWrapper , LogNav, LogPannel, LogHero, Label, Error} from './LogElements/LogElements';
import { DataContext } from '../context/DataContext';



const Login = () => {
  const { getUser } = useContext(DataContext);
  const { register, handleSubmit, errors } = useForm()
  const [ userEmail , setUserEmail ] = useState('');
  const [ userPassword , setUserPassword ] = useState('');

  const handleInput= () =>{
    getUser(userEmail, userPassword);
    setUserPassword('');
    setUserEmail('');
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
          <h1>Zaloguj się</h1>
          <img src={imgMotto} alt='decoration img'></img>
        </LogHero>
        <LogForm>
          <Label>
            <label>Email</label>
            <input type='text' name='userEmail' value={userEmail} onChange={e=>setUserEmail(e.target.value)}  ref={register({ required: true, minLength:4 , maxLength: 20,  pattern: /^\S+@\S+$/i})}/>
            {errors.userEmail && <Error>niepoprawny adres e-mail</Error>}
            <label>Hasło</label>
            <input type='password' name='userPassword' value={userPassword} onChange={e=>setUserPassword(e.target.value)}  ref={register({ required: true, minLength:4 , maxLength: 20})}/>
            {errors.userPassword && <Error>niepoprawne hasło</Error>}
          </Label>
        </LogForm>
        <LogHero short>
          <Link to="/"><ButtonLog type='button' onClick={handleSubmit(handleInput)}>Zaloguj</ButtonLog></Link>
        </LogHero>
      </LogConsole>
    </LogWrapper >)
  );
}

export default Login;