import styled from 'styled-components';

export const SlectedColection = styled.select`
  width: 560px;
  height: 49px;
  border: 0.75px solid #3C3C3C;
  background:none;
  outline:none;
  margin-right:auto;
  font-size: 1.6rem;
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
      width:90%;
      height:42px;
      margin-right:0;
      font-size:1.2rem;
    }
`;

export const InputMission = styled.input`
    width:70%;
    height:49px;
    border: 0.75px solid #3C3C3C;
    background:none;
    font-weight:300;
    font-size:1.4rem;
    font-family: 'Open Sans';
    padding: 0 10px;
    margin-bottom:10px;
    outline:none;
    &::placeholder{
    opacity:0.5;
    text-align:center;
    }
    @media(max-width:996px){
      width:90%;
      height:42px;
      margin-right:0;
      font-size:1.2rem
  }
`;

export const CollectionStep = styled.div`
 width:100%;
 min-height:50px;
 margin:1.2rem 0 ;
 display:flex;
 flex-direction:column;
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


export const CollectionSummaryElements = styled.div`
 width:80%;
 min-height:25%;
 margin:1rem 0;
 display:flex;
 flex-direction: column;
 justify-content: space-evenly;
 align-items: flex-start;
 font-family: 'Open Sans';
 font-size:1.4rem;
 strong{
    font-size:2rem;
    font-weight:600;
    margin:1rem 0;
  img{
    width:40px;
    height:40px;
    margin: auto 1rem;
  }
  span{
    font-weight:300;
  }
 }
 @media(max-width:996px){
  width:100%;
  strong{
    height:50px;
  }
}
`;
