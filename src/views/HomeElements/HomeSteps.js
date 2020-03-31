import React from 'react';
import styled from 'styled-components';
import imgMotto from '../../assets/Decoration.svg';

const HomeStepsWrapper = styled.section`
width:100%;
height:620px;
display:flex;
flex-direction:column;
`;

const StepsMotto = styled.div`
margin-top:2.5rem;
width:100%;
height:30%;
h1{
  font-family: 'Open Sans';
  font-weight: 400;
  font-size:2.2rem;
  letter-spacing: -0.76px;
  color: #3C3C3C;
}
`;

const StepsInstruction = styled.div`
width:100%;
height:45%;
background: #F0F1F1;
display:flex;
flex:row;
justify-content:space-evenly;
`;

const HomeSteps = () => {
  return (
    <HomeStepsWrapper>
      <StepsMotto>
        <h1>Wystarczą 4 proste kroki</h1>
        <img src={imgMotto} alt='steps motto img' />
      </StepsMotto>
      <StepsInstruction>

      </StepsInstruction>
    </HomeStepsWrapper>
  );
}

export default HomeSteps;