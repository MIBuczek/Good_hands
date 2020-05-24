import React, {useState, createContext} from 'react';
import db from '../Firebase';

export const CollectionContext = createContext();

export const switchToPlGoods = (object)=>{
    const polishWord = {}
    if(object.clothesGood){
      polishWord.clothesGood =  'ubrania, do ponownego użycia';
    }
    if(object.clothesBad){
      polishWord.clothesBad = 'ubrania, do wyrzucenia';
    }
    if(object.books){
      polishWord.books = 'książki';
    }
    if(object.toys){
      polishWord.toys = 'zabawki';
    }
    if(object.others){
        polishWord.others = "Inne";
    }
    if(object.kides){
        polishWord.kides = 'dzieciom';
    }
    if(object.aloneMothers){
        polishWord.aloneMothers = 'samotnym matką';
    }
    if(object.disabled){
        polishWord.disabled = 'niepełnosprawnym';
    }
    if(object.oldPerson){
        polishWord.oldPerson = 'osoba starszym';
    }
    return Object.values(polishWord);
  }
  
const switchToPlOrganization = ( string )=>{
      if( string === 'fundacja'){
          return 'Fundacja';
      }
      if( string === 'organizacja'){
          return 'Organizacja pozarządowa';
      }
      if( string === 'zbiórka'){
          return 'Lokalna zbiórka';
      }
      return '';
  }

const CollectionContextProvider = (props) =>{
    const [ step , setStep] = useState(1);
    const [ organization, setOrganization] = useState('');
    const [ nameOranization, setNameOrganization] = useState('');
    const [ mission, setMission ] =useState('');
    const [ checkedCollectionItems , setCheckedCollectionItems ] = useState({});
    const [ collection , setCollection ] = useState({});
    const [ colectionPl , setCollectionPl ] = useState({})

    const sendOrganizationData = () =>{
        db.collection('organizacje').add(collection);
        setCheckedCollectionItems({});
        setOrganization('');
        setStep(3);
        setMission('');
        setCollection({});
    } 
    
    const uploadCollection = () => {
        const  newCollection = {
         cel: mission,
         datki: switchToPlGoods(checkedCollectionItems).join('; '),
         nazwa: nameOranization,
         typ: organization
         }
        const newCollectionPl = {
            cel: mission,
            datki: switchToPlGoods(checkedCollectionItems).join(', '),
            nazwa: nameOranization,
            typ: switchToPlOrganization(organization)
        }
         setCollection(newCollection);
         setCollectionPl(newCollectionPl)
     }

    const setStepBack = ()=>{
        setStep(old => old - 1)
    }

    
    return (  
        <CollectionContext.Provider value={{
            colectionPl,
            uploadCollection,
            setStepBack,
            step,
            setStep,
            organization,
            setOrganization,
            mission,
            setMission,
            checkedCollectionItems,
            setCheckedCollectionItems,
            nameOranization,
            setNameOrganization,
            sendOrganizationData
        }} >
            {props.children}
        </CollectionContext.Provider>
    );
}
 
export default CollectionContextProvider;