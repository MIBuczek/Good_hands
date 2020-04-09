import React from 'react';
import { FormStep, Form, Step} from './FormElements';
import {ButtonAction} from '../../componets/Buttons';
import { useState } from 'react';


const FormStep2 = ({setStepBack , setStepTwo}) => {
    return ( 
        <Form>
      <h4>Krok 2/4</h4>
      <FormStep>
        <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
        <Step>
        <label htmlFor="bags">Liczba 60l worków:</label>
        <select name='bags'>
            <option value="-wybierz-">-wybierz-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">4</option>
        </select>
        </Step>
      </FormStep>
        <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
        <ButtonAction type='button' onClick={()=>setStepTwo()}>Dalej</ButtonAction>
    </Form>
     );
}
 
export default FormStep2;