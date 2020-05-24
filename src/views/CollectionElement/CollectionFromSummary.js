import React, {useContext} from 'react';
import { Form , Buttons} from '../FormElemnts/FormElements';
import { CollectionSummaryElements } from './CollectionElements';
import { ButtonAction } from '../../componets/Buttons';
import { CollectionContext } from '../../context/CollectionContext';
import tshirt from '../../assets/Icon-1.svg';

const CollectionFormSummary = () => {
  const { colectionPl, sendOrganizationData, setStepBack } = useContext(CollectionContext);

    return ( 
        <Form>
        <h1>Podsumowanie dodanej organizacji</h1>
        <CollectionSummaryElements>
            <strong>Typ organizacji: <span>{colectionPl.typ}</span></strong>
            <strong>Nazwa organizacji: <span>{colectionPl.nazwa}</span></strong>
            <strong>Cel i misja organizacji: <span>{colectionPl.cel}</span></strong>
        </CollectionSummaryElements>
        <CollectionSummaryElements>
            <strong>Oddajesz:<img src={tshirt} alt='icone'/> <span>{colectionPl.datki}</span></strong>
        </CollectionSummaryElements>
        <Buttons>
            <ButtonAction type='button' onClick={()=>setStepBack()}>Wstecz</ButtonAction>
            <ButtonAction type='button' onClick={()=>{sendOrganizationData()}}>Potwierdzam</ButtonAction>
        </Buttons>
        </Form>
     );
}
 
export default CollectionFormSummary;