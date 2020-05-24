import React, { useContext, useState } from 'react';
import { FormStep, Form, Step , Error , Buttons} from '../FormElemnts/FormElements';
import { SlectedColection, InputMission, CollectionStep } from './CollectionElements';
import { ButtonAction } from '../../componets/Buttons';
import { CollectionContext } from '../../context/CollectionContext';
import { CheckboxTyp , checkboxesStepOne } from '../../componets/CheckboxStepOne';

const CollectionFormStep1 = () => {
  const {
    organization,
    setOrganization,
    setStep,
    mission,
    setMission,
    checkedCollectionItems,
    setCheckedCollectionItems,
    nameOranization,
    setNameOrganization,
    uploadCollection
  } = useContext(CollectionContext);
  const [ empty , setEmpty] = useState(false);

  const checkInputCollectionOne = ( e ) =>{
    setCheckedCollectionItems( {...checkedCollectionItems, [e.target.name ] : e.target.checked });
  }

  const checkFormOrganization =()=>{
    const value = Object.values(checkedCollectionItems);
    if(value.length !== 0 && value.some( i => i === true )
    && organization.length !== 0
    && mission.length !== 0
    && nameOranization.length !== 0 ){
      uploadCollection()
      setEmpty(false);
      setStep(2);
    } 
    setEmpty(true);
  }
  return (
    <Form>
      <FormStep>
        <h2>Wybierz oragnizacje której chcesz pomóc:</h2>
        <CollectionStep>
          <SlectedColection name='organization' id='organization' onChange={e =>setOrganization(e.target.value)}>
            <option value={organization}>-wybierz-</option>
            <option value="fundacja">Fundacja</option>
            <option value="organizacja">Organizacja pozarządowa</option>
            <option value="zbiórka">Lokalna zbiórka</option>
          </SlectedColection>
          { empty === true && <Error>Proszę wybrać typ organizacji.</Error>}
        </CollectionStep>
        <CollectionStep>
          <h4>Nazwa organizacji:</h4>
          <InputMission type='text' name='nameOrganization' value={nameOranization} placeholder='>Nazwa organizacji' onChange={e=>setNameOrganization(e.target.value)}/>
          { empty === true && <Error>Proszę podać nazwę organizacji.</Error>}
        </CollectionStep>
        <CollectionStep>
          <h4>Opisz cel danje fundacji/zbiórki:</h4>
          <InputMission type='text' name='mission' value={mission} placeholder='Cel fundacji/zbiórki' onChange={e=>setMission(e.target.value)}/>
          { empty === true && <Error>Prosze opisać cel i misje zbiórki.</Error>}
        </CollectionStep>
        <h2>Zaznacz co chcesz oddać:</h2>
        {checkboxesStepOne.map( input => {
          return (
          <Step key={input.key}>
            <CheckboxTyp name={input.name} checked={checkedCollectionItems[input.name]} onChange={e=>checkInputCollectionOne(e)}/>
            <label htmlFor={input.name} >{input.label}</label>
          </Step>)
        })}
        { empty === true && <Error>Prosze zaznaczyć minimum jedno pole.</Error>}
       
      </FormStep>
      <Buttons>
        <ButtonAction type='button' onClick={()=>checkFormOrganization()}>Dalej</ButtonAction>
      </Buttons>
    </Form>
  );
}

export default CollectionFormStep1;