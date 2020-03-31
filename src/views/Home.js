import React from 'react';
import styled from 'styled-components';
import heroImg from '../assets/Home-Hero-Image.jpg';
import { ButtonLog, ButtonAction } from '../componets/Buttons';
import imgMotto from '../assets/Decoration.svg';
import NavRuter from '../componets/NavRuter';

const HomeWrapper = styled.div`
width:100%;
display: flex;
flex-direction: row;
font-family: 'Open Sans';
`;
const HomeImg = styled.div`
width:47%;
height:763px;
background: url(${heroImg})no-repeat;
background-size:cover;
background-position:right;
`;

const HomeNav = styled.div`
width:53%;
height:763px;
display:flex;
flex-direction: column;
`;

const HomePannel = styled.div`
width:80%;
margin-right: 5rem;
h1{
margin-top:5rem;
text-align: center;
font-size:2rem;
font-weight:400;
letter-spacing: -0.76px;
color: #3C3C3C;
}
img{
  margin-top:10px;
  margin-bottom :65px;
}
`;

const LogInPannel = styled.div`
width:40%;
height:50%;
margin-left:auto;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeImg></HomeImg>
      <HomeNav>
        <HomePannel>
          <LogInPannel>
            <ButtonLog>Zaloguj</ButtonLog>
            <ButtonLog>Załóż konto</ButtonLog>
          </LogInPannel>
          <NavRuter />
        </HomePannel>
        <HomePannel>
          <h1>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
          <img src={imgMotto} alt='decoration img' />
        </HomePannel>
        <HomePannel>
          <ButtonAction>ODDAJ RZECZY</ButtonAction>
          <ButtonAction>ZORGANIZUJ ZBIÓRKĘ</ButtonAction>
        </HomePannel>
      </HomeNav>
    </HomeWrapper >);
}

export default Home;