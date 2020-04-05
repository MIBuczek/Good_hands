import React from 'react';
import styled from 'styled-components';
import bgContact from '../../assets/Background-Contact-Form.jpg';
import imgMotto from '../../assets/Decoration.svg';
import {ButtonAction} from '../../componets/Buttons'
import FooterHome from '../../componets/Footer';

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
`;

const HomeContact = () => {
    return ( 
        <ContactWrapper>
            <ContactForm>
                <h2>Skontaktuj się z nami</h2>
                <img src={imgMotto} alt="decoration element"/>
                <Form>
                    <FormElement>
                    <label>Wpisz swoje imie</label>
                    <input type="text" placeholder="Krzysztof"/>
                    </FormElement>
                    <FormElement>
                    <label>Wpisz swoj email</label>
                    <input type="text" placeholder="abc@xyz.pl"/>
                    </FormElement>
                    <FormElement full>
                    <label>Wpisz swoja wiadomość</label>
                    <textarea type="text" placeholder="treść wiadomości..."/>
                    </FormElement>
                </Form>
                <ButtonAction>Wyślij</ButtonAction>           
        </ContactForm>
        <FooterHome/>
        </ContactWrapper>
     );
}
 
export default HomeContact;
