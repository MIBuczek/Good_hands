import React from 'react';
import { FormStep, Form, BookCurier, CourierData} from './FormElements';
import {ButtonAction} from '../../componets/Buttons';
import styled from 'styled-components';
// import { useState } from 'react';

const CurierWrapper = styled.div`
width:90%;
height:90%;
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
`;

const FormStep2 = ({setStepBack}) => {
  
  const setCurierData = ()=>{
    // setStepFour();
    // setStepFour()
  }
    return ( 
        <Form>
      <h4>Krok 4/4</h4>
      <FormStep>
        <h2>Podaj adres oraz termin odbioru rzecz przez kuriera:</h2>
        <CurierWrapper>
          <BookCurier>
           <h4>Adres odbioru :</h4>
            <CourierData>
              <label>Ulica</label>
              <input type='text' name='street'/>
            </CourierData>
            <CourierData>
               <label>Miasto</label>
                <input type='text' name='city'/>
            </CourierData>
            <CourierData>
                <label>Kod Pocztowy</label>
                <input type='text' name='zipCode'/>
            </CourierData>
            <CourierData>
               <label>Numer telefonu</label>
               <input type='text' name='phone'/>
            </CourierData>
          </BookCurier>
          <BookCurier> 
            <h4>Termin odbioru:</h4>
            <CourierData>
            <label>Data</label>
              <input type='text' name='street'/>
            </CourierData>
            <CourierData>
                <label>Godzina</label>
                  <input type='text' name='city'/>
            </CourierData>
            <CourierData>
                  <label>Uwagi dla kuriera</label>
                  <textarea type='text' name='zipCode'/>
            </CourierData>
          </BookCurier>
        </CurierWrapper>
      </FormStep>
        <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
        <ButtonAction type='button' onClick={console.log('yes')}>Dalej</ButtonAction>
    </Form>
     );
}
 
export default FormStep2;