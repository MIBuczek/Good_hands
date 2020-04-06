import React from 'react';
import styled from 'styled-components';
import imgMotto from '../../assets/Decoration.svg';
import imgSign from '../../assets/Signature.svg';
import imgAbout from '../../assets/People.jpg';


const AboutWrapper = styled.section`
margin-top:2rem;
width:100%;
height:80vh;
display: flex;
flex-direction: row;
font-family: 'Open Sans';
`
const AboutText = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#F0F1F1;
color:#3C3C3C;
h2{
  letter-spacing: -0.76px;
  font-size:2.2rem;
  font-weight:400;
}
span{
  margin:3rem 0;
  width:70%;
  font-size:1.6rem;
  font-weight:400;
}
img:nth-of-type(2){
  margin-left:auto;
  margin-right:8rem;
}
`
const AboutImg = styled.div`
width:50%;
background: url(${imgAbout})no-repeat;
background-size:cover;
background-position:right;
`;

const HomeAbout = () => {
  return (<AboutWrapper>
    <AboutText id='about'>
      <h2>O nas</h2>
      <img src={imgMotto} alt="img decoration" />
      <span>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
      Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</span>
      <img src={imgSign} alt="img sign" />
    </AboutText>
    <AboutImg></AboutImg>
  </AboutWrapper>);
}

export default HomeAbout;
