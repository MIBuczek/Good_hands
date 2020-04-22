import React, {useState, createContext} from 'react';
// import db from '../Firebase';

export const UploadContext = createContext();

const UploadContextProvider = (props) =>{
    const [ checkedItems , setCheckedItems ] = useState({});
    const [ numberBags , setNumberBags]=useState('');
    const [ step , setStep] = useState(1);
    const [ city , setCity] = useState('');
    const [ checkedItemsThree , setCheckedItemsThree ] = useState({});
    const [ extraOption, setExtraOption] =useState('');

    // const setLocaliztion = (e)=>{
    //     e.preventDefault();
    //     const cityName =  extraOption.length !== 0 ? extraOption : city;
    //     setStepThree([ cityName, checkedItemsThree]);
    //   }
    
    const setStepBack = ()=>{
        setStep(old => old - 1)
    }
    
    return (  
        <UploadContext.Provider value={
            {   checkedItems, 
                setCheckedItems, 
                setStep, 
                setStepBack, 
                step,
                numberBags,
                setNumberBags,
                city,
                setCity, 
                checkedItemsThree, 
                setCheckedItemsThree, 
                extraOption, 
                setExtraOption 
            }} >
            {props.children}
        </UploadContext.Provider>
    );
}
 
export default UploadContextProvider;