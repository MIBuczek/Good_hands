import React from 'react';
import styled from 'styled-components';
import fb from '../assets/Facebook.svg';
import insta from '../assets/Instagram.svg';

const FooterWrapper = styled.div`
width:100%;
height:38px;
background:transparent;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
span{
    margin: 0 auto;
    width:250px;
    font-family: 'Open Sans';
    font-size:1.1rem;
    font-weight:400;
}
@media(max-width:996px){
span{
    font-size:0.8rem;
}}
`;

const Social = styled.div`
width:100px;
height:100%;
margin-right:2rem;
img{
    width:30px;
    margin:0 5px;
}
@media(max-width:996px){
maring:0;
height:50%;
img{
    width:20px;
}
}
`
const HomeFooter = () => {
    return ( 
    <FooterWrapper>
        <span>Copyright by mibcoding</span>
        <Social>
            <img src={fb} alt="facebook"/>
            <img src={insta} alt="instagram"/>
        </Social>
    </FooterWrapper> );
}
 
export default HomeFooter;