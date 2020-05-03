import React, {useState, useContext} from 'react';
import { FormStep, Form, BookCurier, Error , CurierWrapper, Buttons} from './FormElements';
import {ButtonAction} from '../../componets/Buttons';
import { UploadContext } from '../../context/UploadContext';
import { InputsAddress, dataAddressOne , dataAddressTwo ,CourierData} from '../../componets/InputsAddress';

const FormStep4 = () => {
  const { uploadForm, address, setAddress, setStep, setStepBack } = useContext(UploadContext);
  const [ empty , setEmpty] = useState(false);

  const checkInput = ( e ) =>{
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setAddress( {...address, [inputName] : inputValue });
  }

  const checkStepFour = () => {
    const value = Object.values(address);
    if(value.length >= 6){
      setEmpty(false)
      uploadForm();
      setStep(5)
    } 
    setEmpty(true)
  }

    return ( 
      <Form>
        <h4>Krok 4/4</h4>
        <FormStep>
          <h2>Podaj adres oraz termin odbioru rzecz przez kuriera:</h2>
          <CurierWrapper>
            <BookCurier>
            <h4>Adres odbioru :</h4>
              {dataAddressOne.map( input =>(
                <InputsAddress key={input.name} label={input.label} name={input.name} placeholder={input.placeholder} value={address[input.name]} onChange={e =>checkInput(e)}/>
              ))}
            </BookCurier>
            <BookCurier> 
              <h4>Termin odbioru:</h4>
              {dataAddressTwo.map( input =>(
                <InputsAddress key={input.name} label={input.label} name={input.name} placeholder={input.placeholder} value={address[input.name]} onChange={e =>checkInput(e)}/>
              ))}
              <CourierData>
                    <label htmlFor='CourierNote'>Uwagi dla kuriera</label>
                    <textarea type='text' name='courierNote' value={address['courierNote']} onChange={e =>checkInput(e)}/>
              </CourierData>
            </BookCurier>
          </CurierWrapper>
          { empty === true && <Error>Prosze wypełnić wszytskie pola dla kuriera.</Error>}
        </FormStep>
        <Buttons>
          <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
          <ButtonAction type='button' onClick={()=>checkStepFour()}>Dalej</ButtonAction>
        </Buttons>
      </Form>
     );
}
 
export default FormStep4;