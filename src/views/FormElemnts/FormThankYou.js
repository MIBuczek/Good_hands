import React from 'react';
import { ThankYou } from './FormElements';
import decorationImg from '../../assets/Decoration.svg'


const FormThankYou = () => {
  
    return ( 
       <ThankYou>
           <div>
               <h2>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.</h2>
               <img src={decorationImg} alt='decoration icone'/>
           </div>
       </ThankYou>
     );
}
 
export default FormThankYou;