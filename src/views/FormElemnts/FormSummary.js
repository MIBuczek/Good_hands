import React, {useContext} from 'react';
import { SummaryElements, SummaryAddress, Form , Buttons} from './FormElements';
import {ButtonAction} from '../../componets/Buttons';
import { UploadContext } from '../../context/UploadContext';
import tshirt from '../../assets/Icon-1.svg';
import arrow from '../../assets/Icon-4.svg';


const FormSummary = () => {
  const { form, sendForm, setStep, setStepBack } = useContext(UploadContext);

//   const address = form.pickUpAddress;
    const address = {};

    return ( 
     <Form>
        <h4>Podsumowanie Twojej darowizny</h4>
        <SummaryElements>
            <strong>Oddajesz:</strong>
            <span><img src={tshirt} alt='icone'/>{form.bags} worki, {form.items} {form.whom} </span>
            <span><img src={arrow} alt='icone'/>dla lokalizacji: {form.place}</span>
        </SummaryElements>
        <SummaryElements>
            <div>
                <SummaryAddress>
                    <strong>Adres odbioru:</strong>
                    <span>Ulica <p>{address.street !== undefined ? address.street : '' }</p></span>
                    <span>Miasto <p>{address.city !== undefined ? address.city : '' }</p></span>
                    <span>Kod <br/>pocztowy <p>{address.zipCode !== undefined ? address.zipCode : '' }</p></span>
                    <span>Numer <br/>telefonu <p>{address.phone !== undefined ? address.phone : '' }</p></span>
                </SummaryAddress>
                <SummaryAddress>
                    <strong>Termin odbioru:</strong>
                    <span>Data <p>{address.pickUpDay !== undefined ? address.pickUpDay : '' }</p></span>
                    <span>Godzina <p>{address.pickUpHour !== undefined ? address.pickUpHour : '' }</p></span>
                    <span>Uwagi<br/> dla kuriera <p>{address.courierNote !== undefined ? address.courierNote : '' }</p></span>
                </SummaryAddress>
            </div>
        </SummaryElements>
        <Buttons>
            <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
            <ButtonAction type='button' onClick={()=>{setStep(6) ; sendForm()}}>Potwierdzam</ButtonAction>
        </Buttons>
     </Form>
     );
}
 
export default FormSummary;