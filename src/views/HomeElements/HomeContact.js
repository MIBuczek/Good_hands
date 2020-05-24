import React, {useState, useContext} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import bgContact from '../../assets/Background-Contact-Form.jpg';
import imgMotto from '../../assets/Decoration.svg';
import {ButtonAction} from '../../componets/Buttons'
import FooterHome from '../../componets/Footer';
import {DataContext} from '../../context/DataContext';

const ContactWrapper = styled.section`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content: space-between;
background: linear-gradient(
   to bottom,
   rgba(255, 255, 255, 0.6),
   rgba(255, 255, 255, 0.6)
  ),
  url(${bgContact});
background-size:cover;
background-position:top;
@media(max-width:996px){
    background-position:right;
}
`;
const ContactForm = styled.div`
width:35%;
height:60%;
margin: 5rem 2rem 0 auto;
h2{
    font-family: 'Open Sans';
    width:100%;
    font-size:2rem;
    font-weight:300;
    margin-top:1.8rem;
}
button{
    width: 150px;
    height: 50px;
    font-size:16px;
}
@media(max-width:996px){
  width:90%;
  height:auto;
  margin:0;
  h2{
      font-size:1.6rem;
  }
}
`;

const Form = styled.div`
width:100%;
height:60%;
margin-top:5rem;
font-family:'Open Sans';
font-weight:300;
font-size:1rem;
color:#3C3C3C;
text-align:left;
@media(max-width:996px){
height:auto;
button{

}
}
`;

const FormElement = styled.div`
width: ${props => props.full ? "100%" : "44%" };
height: ${props => props.full ? "97px" : "62px" };
text-align:left;
display:inline-block;
margin:1.5rem 1rem;
label{
    width:100%;
    height:22px;
}
input{
    width:100%;
    height:30px;
    font-size: 0.8rem;  
    background:none;
    border:none;
    border-bottom:0.75px solid #3C3C3C26;
    outline:none;
    margin-top:12px;
    font-family: 'Open Sans';
    color:#3C3C3C;
    &:focus{
        border-bottom:1.5px solid #3C3C3C26;
    }
    &::placeholder{
        font-size: 1.1rem;
        font-family: 'Open Sans';
        color: #3C3C3C26;
    }
}
textarea{
    width:90%;
    height:97px;
    background:none;
    border:none;
    border-bottom:0.75px solid #3C3C3C26;
    margin-top:12px;
    outline:none;
    font-family: 'Open Sans';
    color:#3C3C3C;
    resize: none;
    padding:10px;
    &::placeholder{
        font-size: 1.1rem;
        font-family: 'Open Sans';
        color: #3C3C3C26;
    }
    &:focus{
        padding:10px;
        border-bottom:1.5px solid #3C3C3C26;
    }
    &:active{
        font-size: 1.1rem;
        font-family: 'Open Sans';
    }
}
@media(max-width:996px){
    width:80%;
}
`;

const Error = styled.span`
display:block;
font-size:12px;
font-family: 'Open Sans';
color:tomato;
`;

const HomeContact = () => {
    const {sendMessage} = useContext(DataContext);
    const [ nameMess , setNameMess ] = useState();
    const [ emailMess, setEmailMess ] = useState();
    const [ message , setMessage] = useState();
    const { register, handleSubmit, errors } = useForm()

    const checkMessage = () =>{
        sendMessage(nameMess , emailMess , message);
        setNameMess('');
        setNameMess('');
        setMessage('');
    }
    return ( 
        <ContactWrapper>
            <ContactForm id='contact'>
                <h2>Skontaktuj się z nami</h2>
                <img src={imgMotto} alt="decoration element"/>
                <Form>
                    <FormElement>
                    <label htmlFor={nameMess}>Wpisz swoje imie</label>
                    <input type="text" name='nameMess' onChange={e=>setNameMess(e.target.value)}  placeholder="imie" ref={register({ required: true, minLength:4 ,maxLength: 20 })}/>
                    {errors.nameMess && <Error>Pole wymagane</Error>}
                    </FormElement>
                    <FormElement>
                    <label htmlFor={emailMess}>Wpisz swoj email</label>
                    <input type="text" name='emailMess' onChange={e=>setEmailMess(e.target.value)} placeholder="e-mail" ref={register({ required: true, minLength:4 , maxLength: 20,  pattern: /^\S+@\S+$/i})}/>
                    {errors.emailMess && <Error>Pole wymagane</Error>}
                    </FormElement>
                    <FormElement full>
                    <label htmlFor={message}>Wpisz swoja wiadomość</label>
                    <textarea type="text" name='message' onChange={e=>setMessage(e.target.value)} placeholder="treść wiadomości..." ref={register({ required: true, minLength:4 , maxLength: 150  })}/>
                    {errors.message && <Error>Pole wymagane</Error>}
                    </FormElement>
                </Form>
                <ButtonAction type='button' onClick={handleSubmit(checkMessage)}>Wyślij</ButtonAction>           
        </ContactForm>
        <FooterHome/>
        </ContactWrapper>
     );
}
 
export default HomeContact;
