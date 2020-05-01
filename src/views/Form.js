import React, { useContext } from 'react';
import FormHeader from './FormElemnts/FormHeader';
import HomeContact from './HomeElements/HomeContact';
import { FormWrapper, FromWarrning, FormSteps} from './FormElemnts/FormElements';
import FormStep1 from './FormElemnts/FormStep1';
import FormStep2 from './FormElemnts/FormStep2';
import FormStep3 from './FormElemnts/FormStep3';
import FormStep4 from './FormElemnts/FormStep4';
import FormSummary from './FormElemnts/FormSummary';
import FormThankYou from './FormElemnts/FormThankYou';
import FormStepLogIn from './FormElemnts/FormStepLogIn';

import { UploadContext } from '../context/UploadContext';
import { DataContext } from '../context/DataContext';


const Form = () => {
  const { step } = useContext(UploadContext);
  const { isLoged } = useContext(DataContext);

  const formForLoged = (
  <FormSteps id='steps'>
    {step === 1 && <FormStep1 /> }
    {step === 2 && <FormStep2 />}
    {step === 3 && <FormStep3 />}
    {step === 4 && <FormStep4 />}
    {step === 5 && <FormSummary />}
    {step === 6 && <FormThankYou />}
  </FormSteps>
  );

  const fromForNotLogedv = (
    <FormSteps id='steps'>
      <FormStepLogIn/>
    </FormSteps>
  );

    return (
      <FormWrapper>
        <FormHeader/>
        <FromWarrning>
          <h2>Ważne!</h2>
          <span>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</span>  
        </FromWarrning>
        { isLoged !== true ? fromForNotLogedv : formForLoged }
        <HomeContact/>
      </FormWrapper>
     );
}
 
export default Form;