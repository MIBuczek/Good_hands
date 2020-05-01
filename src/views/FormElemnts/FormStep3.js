import React , {useState, useContext } from 'react';
import { CheckboxTyp , checkboxesStepThree } from '../../componets/CheckboxStepThree';
import { FormStep, Form, Step ,Slected , InputExtra, Error} from './FormElements';
import {ButtonAction} from '../../componets/Buttons';
import { UploadContext } from '../../context/UploadContext';


const FormStep2 = () => {
  const { city, setCity, checkedItemsThree, setCheckedItemsThree, setStep, setStepBack, extraOption, setExtraOption } = useContext(UploadContext);
  const [ empty , setEmpty] = useState(false);

  const checkInputsThree = ( e ) =>{
    setCheckedItemsThree({...checkedItemsThree, [e.target.name ] : e.target.checked });
  }

  const checkStepTree = () => {
    const value = Object.values(checkedItemsThree);
    if(value.length !== 0 && value.some( i => i === true ) && city.length !== 0){
      setStep(4)
      setEmpty(false)
    }
    setEmpty(true)
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
            <InputExtra type='text' name='extraOption' value={extraOption} placeholder='Fundacja pomocy dla powodzian' onChange={e=>setExtraOption(e.target.value)}/>
            { empty === true && <Error>Prosze zaznaczyć miasto i wybrać dla kogo ma być datek.</Error>}
        </Step>
      </FormStep>
        <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
        <ButtonAction type='button' onClick={()=>checkStepTree()}>Dalej</ButtonAction>
    </Form>
  );
}
 
export default FormStep2;