import React, { useContext } from 'react';
import { CheckboxTyp , checkboxesStepOne } from '../../componets/CheckboxStepOne';
import { FormStep, Form, Step} from './FormElements';
import { ButtonAction } from '../../componets/Buttons';
import { UploadContext } from '../../context/UploadContext';


const FormSterp1 = () => {
  const { checkedItems, setCheckedItems, setStep } = useContext(UploadContext);

  const checkStepOne = ( e ) =>{
    setCheckedItems( {...checkedItems, [e.target.name ] : e.target.checked });
  }
  return (
    <Form>
      <h4>Krok 1/4</h4>
      <FormStep>
        <h2>Zaznacz co chcesz oddać:</h2>
        {checkboxesStepOne.map( input => {
          return (
          <Step key={input.key}>
            <CheckboxTyp type='checkbox' name={input.name} checked={checkedItems[input.name]} onChange={e=>checkStepOne(e)}/>
            <label htmlFor={input.name} >{input.label}</label>
          </Step>)
        })}
      </FormStep>
        <ButtonAction type='button' onClick={()=>setStep(2)}>Dalej</ButtonAction>
    </Form>
  );
}

export default FormSterp1;