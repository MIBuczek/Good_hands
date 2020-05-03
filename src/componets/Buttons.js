import styled from 'styled-components';


export const ButtonLog = styled.button`
margin-top:2.5rem;
margin-bottom:1.5rem;
padding:9px 10px;
justify-self:flex-end;
font-family: 'Open Sans';
font-weight:300;
background:none;
border:none;
width:100px;
height:36px;
font-size:13px;
border: 0.75px solid #fff;
outline:none;
&:hover,:active{
  border: 0.75px solid #FAD648;
}
`

export const ButtonAction = styled.button`
font-weight:300;
font-family: 'Open Sans';
width: 15rem;
height: 120px;
border: 0.75px solid #3C3C3C;
background:none;
text-align:center;
font-size:1.8rem;
padding:13px 43px;
color: #3C3C3C;
margin-right:44px;
outline:none;
&:hover,:active{
  border: 0.75px solid #FAD648;
}
@media(max-width:996px){
  width: 11rem;
  height: 82px;
  margin: 1rem auto;
  font-size:1.2rem;
}
`