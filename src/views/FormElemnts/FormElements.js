import styled from 'styled-components';
import bgImgForm from '../../assets/Background-Form.jpg';

export const FormWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column;
`;
export const FormSteps = styled.section`
width:100%;
height:80vh;
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
`;

export const Form = styled.div`
  width:55%;
  height:100%;
  margin-left:6rem;
  text-align:left;
  h4{
  width:100%;
  font-size:1.5rem;
  color: #3C3C3C;
  margin-bottom:70px;
  font-family: 'Open Sans';
  }
  button{
    width:150px;
    height:50px;
    margin:0;
    padding: 0 1rem;
    font-size:1.4rem;
    margin-right:50px;
  }
`;

export const FormStep = styled.form`
width:80%;
height:65%;
font-family: 'Open Sans';
h2{
  font-size:1.8rem;
}
`;

export const Step = styled.div`
 width:100%;
 height:50px;
 margin:1.2rem 0 ;
 display:flex;
 flex-direction:row;
 align-items:center;
 input{
   position: relative;
   width:30px;
   height:30px;
   visibility: hidden;
   &:checked::before{
    position:absolute;
     bottom:0;
     left:0;
     content:'';
     width:30px;
     height:30px;
     border: 0.75px solid #3C3C3C;
     z-index:2;
     background:#FAD648;
   }
    &::before{
     position:absolute;
     bottom:0;
     left:0;
     content:'';
     width:30px;
     height:30px;
     border: 0.75px solid #3C3C3C;
     z-index:2;
     visibility:visible;
   }
 }
 label{
   min-width:30%;
   height:100%;
   margin-left:1rem;
   font-size:22px;
   margin-top:1.2rem;
 }
 select{
  width: 300px;
  height: 39px;
  border: 0.75px solid #3C3C3C;
  background:none;
  outline:none;
  margin-right:auto;
  font-size: 1.4rem;
  font-family: 'Open Sans';
  font-weight:300;
  color:  #3C3C3C;
  &:active{
    background:none;
  }
  option{
    background:none;
    text-align:center;
  }
  
 }
`;
