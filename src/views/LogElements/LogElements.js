import styled from 'styled-components';


export const LogWrapper = styled.div`
width:100%;
height:80vh;
display: flex;
flex-direction: column;
font-family: 'Open Sans';
`;

export const LogNav = styled.div`
margin-top:1rem;
width:92%;
height:25%;
display:flex;
flex-direction: column;
`;

export const LogPannel = styled.div`
width:40%;
height:50%;
margin-left:auto;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
`;

export const LogConsole = styled.div`
width:100%;
height:90%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

export const LogHero = styled.div`
width:380px;
height:  ${props => props.short ? '50px' : '100px'} 
margin-bottom:1rem;
h1{
text-align: center;
font-size:1.8rem;
font-weight:400;
letter-spacing: -0.76px;
color: #3C3C3C;
margin:0;
}
img{
    margin:1rem 0;
}
button{
  margin:1rem 3rem;
}
`;
export const LogForm = styled.div`
width:30%;
min-height:47%;
background: #F0F1F1;
`;

export const Label = styled.form`
  width:70%;
  height:100%;
  display:flex;
  flex-direction:column;
  margin: 2rem auto;  
  font-family:'Open Sans';
  letter-spacing: 0px;
  font-weight: 600;
  color: #3C3C3C;
  text-align:left;
  label{
    font-size:0.8rem;
    width:100%;
    height:32px;
    margin-top:1.5rem;
  }
  input{
    width:100%;
    height:28px;
    background:none;
    border:none;
    border-bottom:0.8px solid #3C3C3C;
    &:focus{
      outline:none;
      border:none;
      border-bottom:1.5px solid #3C3C3C;
      font-family:'Open Sans';
      padding: 2px 5px;
    }
  }
`;

export const LogMain = styled.div`
width:380px;
height:100px;
margin: 1.2rem auto;
button{
 width:150px;
 height:50px;
 border: 0.75px solid #3C3C3C;
 font-size:1.1rem;
}

`;

export const Error = styled.span`
font-size:10px;
font-family: 'Open Sans';
color:tomato;
`;