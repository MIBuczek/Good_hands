import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
width:100%;
height:5%;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
`

const NavList = styled.ul`
width:100%;
height:100%;
align-items:center;
display:flex;
justify-content:flex-end;
align-items:center;
list-style: none;
margin: 25px 0;
`
const NavElement = styled.li`
padding:9px 20px;
display:inline-block;
font-family: 'Open Sans';
font-size:1.1rem;
font-weight:400;
letter-spacing: 0;
color: #3C3C3C;
border: 0.75px solid #fff;
&:hover , &:active{
  border: 0.75px solid #3C3C3C;

}
`
const NavRuter = () => {
  return (
    <NavBar>
      <NavList>
        <NavElement>Start</NavElement>
        <NavElement>O co chodzi?</NavElement>
        <NavElement>O nas</NavElement>
        <NavElement>Fundacja i organizacje</NavElement>
        <NavElement>Kontakt</NavElement>
      </NavList>
    </NavBar>
  );
}

export default NavRuter;