import React from 'react';
import { FormStep, Form, Step} from './FormElements';
import {ButtonAction} from '../../componets/Buttons';
import { useState } from 'react';


const FormSterp1 = ({setStepOne}) => {
  const [clothesGood, setClothesGood]= useState('');
  const [clothesBad, setClothesBad]= useState('');
  const [books, setBooks]= useState('');
  const [toys, setToys]= useState('');
  const [others, setOthers]= useState('');

  const checkStepOne = () =>{
    let gifts = []
    gifts.push(clothesGood,clothesBad,books,toys,others);
    setStepOne(gifts);
  }
  return (
    <Form>
      <h4>Krok 1/4</h4>
      <FormStep>
        <h2>Zaznacz co chcesz oddać:</h2>
        <Step>
          <input type='checkbox' name='clothesGood' value='clothesGood' onChange={e=>setClothesGood(e.target.name)}/>
          <label>ubrania, które nadają się do ponownego użycia</label>
        </Step>
        <Step>
          <input type='checkbox' name='clothesBad' value='clothesBad' onChange={e=>setClothesBad(e.target.name)}/>
          <label>ubrania, do wyrzucenia</label>
        </Step>
        <Step>
          <input type='checkbox' name='books' value='books' onChange={e=>setBooks(e.target.name)}/>
          <label>książki</label>
        </Step>
        <Step>
          <input type='checkbox' name='toys' value='toys' onChange={e=>setToys(e.target.name)}/>
          <label>zabawki</label>
        </Step>
        <Step>
          <input type='checkbox' name='others' value='others' onChange={e=>setOthers(e.target.name)}/>
          <label>Inne</label>
        </Step>
      </FormStep>
        <ButtonAction type='button' onClick={()=>checkStepOne()}>Dalej</ButtonAction>
    </Form>
  );
}

export default FormSterp1;