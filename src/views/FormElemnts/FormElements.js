import styled from 'styled-components';
import bgImgForm from '../../assets/Background-Form.jpg';

export const FormWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column;
`;

export const FormSteps = styled.section`
width:100%;
min-height:70vh;
background: url(${bgImgForm});
background-size:cover;
background-position:top;
`;

export const FromWarrning = styled.section`
width:100%;
height:160px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
background:#FAD648;
font-family: 'Open Sans';
text-align:left;
h2{
  margin: 0 0 0 8rem;
  font-size:1.8rem;
  font-weight:600;
}
span{
  margin-left:8rem;
  font-size:1.2rem;
}
@media(max-width:996px){
  height:auto;
  padding:1rem 0;
  align-items:center;
  text-align:center;
  h2{
    margin:0;
    font-size:1.6rem;
  }
  span{
    margin:0;
    font-size:1rem;
  }
}
`;

export const Form = styled.div`
  width:55%;
  min-height:65vh;
  margin-left:6rem;
  text-align:left;
  display:flex;
  flex-direction:column;
  h4{
  width:100%;
  font-size:1.5rem;
  color: #3C3C3C;
  margin-bottom:40px;
  font-family: 'Open Sans';
  }
  @media(max-width:996px){
    width:100%;
    min-height:533px;
    margin: 0 10px;
    h4{
      margin-right:0;
      margin-bottom:10px;
    }
    button{
      width:160px;
      height:50px;
      margin:0 10px 10px 0;
      padding: 0 0.5rem;
      font-size:1.2rem;
    }
  }
`;
export const Buttons = styled.div`
 width:100%;
 height:60px;
 margin-top: auto;
 align-self:flex-:end;
 button{
    width:200px;
    height:50px;
    margin:0;
    padding: 0 1rem;
    font-size:1.4rem;
    margin-right:50px;
  }
  @media(max-width:996px){
    button{
      width:160px;
      height:50px;
      margin:0 10px 10px 0;
      padding: 0 0.5rem;
      font-size:1.2rem;
    }
  }
`;

export const FormStep = styled.form`
width:80%;
height:65%;
font-family: 'Open Sans';
h2{
  font-size:1.8rem;
  margin: 0.6rem 0;
}
@media(max-width:996px){
  width:100%;
  height:auto;
  h2{
    margin-right:0;
    font-size:1.4rem;
  }
}
`;

export const Step = styled.div`
 width:100%;
 min-height:50px;
 margin:1.2rem 0 ;
 display:flex;
 flex-direction:row;
 align-items:center;
 flex-wrap:wrap;
  h4{
   margin:.6rem 0 ;
  }  
  label{
   height:100%;
   font-size:22px;
  }
  @media(max-width:996px){
    h4{
      font-size:1.2rem;
    }
    label{ 
      font-size:1rem;
    }
  }
`;

export const InputExtra = styled.input`
    width:80%;
    height:46px;
    border: 0.75px solid #3C3C3C;
    background:none;
    font-weight:300;
    font-size:1.1rem;
    font-family: 'Open Sans';
    padding: 0 10px;
    margin-bottom:10px;
    outline:none;
    &::placeholder{
    opacity:0.5;
    text-align:center;
  }
`;

export const Slected = styled.select`
  width: 260px;
  height: 39px;
  border: 0.75px solid #3C3C3C;
  background:none;
  outline:none;
  margin-right:auto;
  font-size: 1.4rem;
  font-family: 'Open Sans';
  font-weight:300;
  color:  #3C3C3C;
  text-align-last: center; 
  option{
    background: #3C3C3C26;
    outline:none;
    border:black;
    }
    @media(max-width:996px){
      width:180px;
      height: 29px;
      margin-right:0;
      font-size:1rem;
    }
`;

export const CurierWrapper = styled.div`
width:90%;
height:auto;
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
  @media(max-width:996px){
    flex-direction:column;
}
`;

export const BookCurier = styled.div`
width:45%;
min-height: 360px;
display:inline-block;
margin-right:2rem;
h4{
  font-size:1.4rem;
  margin: 1rem 0;
}
@media(max-width:996px){
  width:90%;
  margin-right:0;
  &:nth-of-type(2){
    margin-bottom:1.5rem;
  }
}
`;

export const SummaryElements = styled.div`
 width:80%;
 min-height:25%;
 margin:1.3rem 0;
 display:flex;
 flex-direction: column;
 justify-content: space-evenly;
 align-items: flex-start;
 font-family: 'Open Sans';
 font-size:1.4rem;
 div{
  display:flex;
  width:100%;
  height:100%;
 }
 img{
  width:40px;
  height:40px;
  margin-right:1rem;
 }
 strong{
   font-weight:600;
 }
 span{
  font-weight:300;
  width:100%;
  height:44px;
  display:flex;
  align-items: center;
  p{
    margin: 0 0 0 2.5rem;
  }
 }
 @media(max-width:996px){
  width:100%;
  span{
    height:50px;
  }
  div{
    flex-direction:column;
  }
}
`;
export const SummaryAddress = styled.div`
 width:45%;
 height:100%;
 display:flex;
 flex-direction:column;
 justify-content: space-evenly;
 align-items: flex-start;
span{
   width:100%;
   height:auto;
   font-size:1.2rem;
   margin:5px 0;
   p{
    margin: 0 0 0 2.5rem;
  }
 }
 @media(max-width:996px){
   margin-bottom:1rem;
 }
`;

export const ThankYou = styled.div`
width:70%;
height:800px;
display: flex;
justify-content:center;
align-items:center;
div{
  width:45%;
  height:40%;
  font-size: 1.4rem;
  font-family: 'Open Sans';
  h2{
    font-weight:300;
  }
  img{

  }
}
h2{
  font-weight:300;
}
@media(max-width:996px){
   width:100%;
   height:400px;
   div{
     width:90%;
     h2{
       font-size:1.6rem;
     }
   }
 }
`;

export const Error = styled.span`
color: red;
font-weight:300;
display:block;
margin:10px 0;
`;