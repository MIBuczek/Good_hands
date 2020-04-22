import React, {useContext} from 'react';
import { FormStep, Form, Step, Slected} from './FormElements';
import {  ButtonAction } from '../../componets/Buttons';
import { UploadContext } from '../../context/UploadContext';



const FormStep2 = () => {
  const { numberBags ,setNumberBags, setStep, setStepBack } = useContext(UploadContext);

    return ( 
        <Form>
      <h4>Krok 2/4</h4>
      <FormStep>
        <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
        <Step>
        <label htmlFor="bags">Liczba 60l worków:</label>
        <Slected name='bags' id='bags' onChange={e =>setNumberBags(e)}>
            <option value={numberBags}>-wybierz-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">4</option>
        </Slected>
        </Step>
      </FormStep>
        <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
        <ButtonAction type='button' onClick={()=>setStep(3)}>Dalej</ButtonAction>
    </Form>
     );
}
 
export default FormStep2;