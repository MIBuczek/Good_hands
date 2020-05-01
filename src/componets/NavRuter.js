import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';


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
font-size:1rem;
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
        <Link to='start' smooth={true} duration={1000}>
          <NavElement>Start</NavElement>
        </Link>
        <Link to='steps' smooth={true} duration={1000}>
          <NavElement>Formularz</NavElement>
        </Link>
        <Link to='contact' smooth={true} duration={1000}>
          <NavElement>Kontakt</NavElement>
        </Link>
      </NavList>
    </NavBar>
  );
}

export default NavRuter;