import React from 'react';
import FormHeader from './FormHeader';
import HomeContact from '../HomeElements/HomeContact';
import { FormWrapper, FromWarrning, FormSteps} from './FormElements';
import { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';

const Form = () => {
    const [step , setStep] = useState(1);
    const [form, setForm] =useState({
        gifts: [],
    });

    const setStepOne = (gifts) =>{
        setStep(2)
        setForm({ gifts: gifts});
    }
    const setStepTwo = (size) =>{
        console.log(size);
    }
    const setStepBack = ()=>{
        setStep(1)
    }
    
    return ( 
    <FormWrapper>
      <FormHeader/>
      <FromWarrning>
        <h2>Ważne!</h2>
        <span>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</span>  
      </FromWarrning>
      <FormSteps>
        {step === 1 && <FormStep1 setStepOne={setStepOne}/> }
        {step === 2 && <FormStep2 setStepOne={setStepTwo} setStepBack={setStepBack} />}
      </FormSteps>
      <HomeContact/>
    </FormWrapper>
     );
}
 
export default Form;