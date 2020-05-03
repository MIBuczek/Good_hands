import React, { useState } from 'react';
import styled from 'styled-components';
import bgThreeCol from '../../assets/bgthreecol.png';

const ThreeColWrapper = styled.section`
width:100%;
height:360px;
background: url(${bgThreeCol})no-repeat;
background-size:cover;
background-position:right;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
@media(max-width:996px){
  flex-direction:column;
  height:auto;
  padding-bottom:2rem;
}
`;

const Column = styled.div`
width:20%;
height:70%;
text-align:center;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-family: 'Open Sans';
@media(max-width:996px){
  width:90%;
}
`;

const H1 = styled.h1`
  color: #5E5322;
  font-size: 6rem;
  font-weight:300;
  margin:.8rem;
  @media(max-width:996px){
    font-size: 4rem;
}
`;

const Span = styled.span`
font-size:1rem;
font-weight:400;
letter-spacing: -0.36px;
color: #3C3C3C;
margin:0.4rem;
`;

const P = styled.p`
font-size:0.85rem;
font-weight:300;
font-family:'Merriweather';
letter-spacing: -0.32px;
color: #3C3C3C;
`;

const HomeThreeColumns = () => {
  const [bags] = useState(10);
  const [events] = useState(5);
  const [collections] = useState(7);
  return (<ThreeColWrapper>
    <Column>
      <H1>{bags}</H1>
      <Span>ODDANYCH WORKÓW</Span>
      <P>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</P>
    </Column>
    <Column>
      <H1>{events}</H1>
      <Span>WSPARTYCH ORGANIZACJI</Span>
      <P>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</P>
    </Column>
    <Column>
      <H1>{collections}</H1>
      <Span>ZORGANIZOWANY ZBIÓREK</Span>
      <P>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</P>
    </Column>
  </ThreeColWrapper>);
}

export default HomeThreeColumns;