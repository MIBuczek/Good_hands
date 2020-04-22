import React , { useContext } from 'react';
import { CheckboxTyp , checkboxesStepThree } from '../../componets/CheckboxStepThree';
import { FormStep, Form, Step ,Slected , InputExtra} from './FormElements';
import {ButtonAction} from '../../componets/Buttons';
import { UploadContext } from '../../context/UploadContext';


const FormStep2 = () => {
  const { city, setCity, checkedItemsThree, setCheckedItemsThree, setStep, setStepBack, extraOption, setExtraOption } = useContext(UploadContext);

  const checkInputsThree = ( e ) =>{
    setCheckedItemsThree({...checkedItemsThree, [e.target.name ] : e.target.checked });
}

    return ( 
        <Form>
      <h4>Krok 3/4</h4>
      <FormStep>
        <h2>Lokalizacja:</h2>
        <Step>
          <Slected name='localization' id='localization' onChange={e =>setCity(e.target.value)}>
              <option value={city}>-wybierz-</option>
              <option value="Poznań">Poznań</option>
              <option value="Warszawa">Warszawa</option>
              <option value="Kraków">Kraków</option>
              <option value="Wrocłąw">Wrocław</option>
              <option value="Katowice">Katowice</option>
          </Slected>
        </Step>
        <Step>
            <h4>Komu chcesz pomóc?</h4>
            {checkboxesStepThree.map( input => {
              return (
              <CheckboxTyp key={input.label} type='checkbox' label={input.label} name={input.name} checked={checkedItemsThree[input.name]} onChange={e=>checkInputsThree(e)}/>
              )
            })}
        </Step>
        <Step>
            <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
            <InputExtra type='text' name='extraOption' value={extraOption} placeholde='duzo tekstu' onChange={e=>setExtraOption(e.target.value)}/>
        </Step>
      </FormStep>
        <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
        <ButtonAction type='button' onClick={()=>setStep(4)}>Dalej</ButtonAction>
    </Form>
     );
}
 
export default FormStep2;