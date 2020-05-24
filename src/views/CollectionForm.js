import React, { useContext } from 'react';
import HomeContact from './HomeElements/HomeContact';
import { FormWrapper, FromWarrning, FormSteps} from './FormElemnts/FormElements';
import FormStepLogIn from './FormElemnts/FormStepLogIn';
import { CollectionContext } from '../context/CollectionContext';
import { DataContext } from '../context/DataContext';
import CollectionFormHeader from './CollectionElement/CollectionHeader';
import CollectionFormStep1 from './CollectionElement/CollectionFormStep1';
import CollectionFormSummary from './CollectionElement/CollectionFromSummary';
import CollectionFormThankYou from './CollectionElement/CollectionFormThankYou';



const ColectionForm = () => {
  const { step } = useContext(CollectionContext);
  const { isLoged } = useContext(DataContext);

  const formForLoged = (
  <FormSteps id='steps'>
    {step === 1 && <CollectionFormStep1 /> }
    {step === 2 && <CollectionFormSummary />}
    {step === 3 && <CollectionFormThankYou />}
  </FormSteps>
  );

  const fromForNotLogedv = (
    <FormSteps id='steps'>
      <FormStepLogIn/>
    </FormSteps>
  );

    return (
      <FormWrapper>
        <CollectionFormHeader/>
        <FromWarrning>
          <h2>Ważne!</h2>
          <span>Uzupełnij szczegóły dotyczące zbiórki którą chcesz rozpocząć.</span>  
        </FromWarrning>
        { isLoged !== true ? fromForNotLogedv : formForLoged }
        <HomeContact/>
      </FormWrapper>
     );
}
 
export default ColectionForm;