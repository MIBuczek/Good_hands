import React from 'react';
import { ThankYou } from '../FormElemnts/FormElements';
import decorationImg from '../../assets/Decoration.svg'


const CollectionFormThankYou = () => {
  
    return ( 
       <ThankYou>
           <div>
               <h2>Dziękujemy za dodanie organizacji do naszej bazy.</h2>
               <img src={decorationImg} alt='decoration icone'/>
           </div>
       </ThankYou>
     );
}
 
export default CollectionFormThankYou;