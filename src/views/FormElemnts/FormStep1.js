import React, { useContext, useState } from 'react';
import { CheckboxTyp , checkboxesStepOne } from '../../componets/CheckboxStepOne';
import { FormStep, Form, Step , Error} from './FormElements';
import { ButtonAction } from '../../componets/Buttons';
import { UploadContext } from '../../context/UploadContext';

const FormSterp1 = () => {
  const { checkedItems, setCheckedItems, setStep } = useContext(UploadContext);
  const [ empty , setEmpty] = useState(false);

  const checkInputOne = ( e ) =>{
    setCheckedItems( {...checkedItems, [e.target.name ] : e.target.checked });
  }

  const checkStepOne = ()=>{
    const value = Object.values(checkedItems);
    if(value.length !== 0 && value.some( i => i === true )){
      setEmpty(false);
      setStep(2);
    } 
    setEmpty(true);
  }
  return (
    <Form>
      <h4>Krok 1/4</h4>
      <FormStep>
        <h2>Zaznacz co chcesz oddać:</h2>
        {checkboxesStepOne.map( input => {
          return (
          <Step key={input.key}>
            <CheckboxTyp name={input.name} checked={checkedItems[input.name]} onChange={e=>checkInputOne(e)}/>
            <label htmlFor={input.name} >{input.label}</label>
          </Step>)
        })}
        { empty === true && <Error>Prosze zaznaczyć minimum jedno pole.</Error>}
      </FormStep>
        <ButtonAction type='button' onClick={()=>checkStepOne()}>Dalej</ButtonAction>
    </Form>
  );
}

export default FormSterp1;