import React from 'react';
import styled from 'styled-components';
import { ButtonAction } from '../../componets/Buttons';
import imgMotto from '../../assets/Decoration.svg';
import imgInst1 from '../../assets/Icon-1.svg';
import imgInst2 from '../../assets/Icon-2.svg';
import imgInst3 from '../../assets/Icon-3.svg';
import imgInst4 from '../../assets/Icon-4.svg';

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
flex-direction:row;
justify-content:center;
align-items:center;
`;
const InstructionElement = styled.div`
margin:0 4rem;
width:12%;
height:78%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
img{
  width:46%;
  height:auto;
}
span{
margin: .6rem 0;
font-family:'Open Sans';
font-weight:400;
font-size:1rem;
letter-spacing: 0px;
color: #3C3C3C;
}
div{
  width:70px;
  height:1px;
  background:#707070;
}
p{
  font-size:16px;
}
`;


const HomeSteps = () => {
  return (
    <HomeStepsWrapper id='steps'>
      <StepsMotto>
        <h1>Wystarczą 4 proste kroki</h1>
        <img src={imgMotto} alt='steps motto img' />
      </StepsMotto>
      <StepsInstruction>
        <InstructionElement>
          <img src={imgInst1} alt='img thinks'></img>
          <span>Wybierz rzeczy</span>
          <div></div>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </InstructionElement>
        <InstructionElement>
          <img src={imgInst2} alt='img thinks'></img>
          <span>Spakuj je</span>
          <div></div>
          <p>skorzystaj z worków na śmieci</p>
        </InstructionElement>
        <InstructionElement>
          <img src={imgInst3} alt='img thinks'></img>
          <span>Zdecyduj komu chcesz pomóc</span>
          <div></div>
          <p>wybierz zaufane miejsce</p>
        </InstructionElement>
        <InstructionElement>
          <img src={imgInst4} alt='img thinks'></img>
          <span>Zamów kuriera</span>
          <div></div>
          <p>Zamów kuriera</p>
        </InstructionElement>
      </StepsInstruction>
      <StepsMotto>
        <ButtonAction>ODDAJ RZECZY</ButtonAction>
      </StepsMotto>
    </HomeStepsWrapper>
  );
}

export default HomeSteps;