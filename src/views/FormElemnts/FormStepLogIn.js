import React from 'react';
import { Link } from "react-router-dom";
import { ThankYou } from './FormElements';
import { ButtonAction } from '../../componets/Buttons';


const FormStepLogIn = () => {
    return ( 
       <ThankYou>
           <div>
               <h2>Prosze zaloguj sie zanim zaczniesz wypełniać formularz.</h2>
               <Link to="/logowanie">
                    <ButtonAction type='button'>Zaloguj się</ButtonAction>
               </Link>
           </div>
       </ThankYou>
     );
}
 
export default FormStepLogIn;