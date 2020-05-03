import React, {useState, createContext} from 'react';
import db from '../Firebase';

export const UploadContext = createContext();

const UploadContextProvider = (props) =>{
    const [ checkedItems , setCheckedItems ] = useState({});
    const [ numberBags , setNumberBags]=useState('');
    const [ step , setStep] = useState(6);
    const [ city , setCity] = useState('');
    const [ checkedItemsThree , setCheckedItemsThree ] = useState({});
    const [ extraOption, setExtraOption] =useState('');
    const [ address, setAddress] = useState({});
    const [ form , setForm ] = useState({});

    const fromObjectToString = (object) => {
        const props = Object.getOwnPropertyNames(object);
        if(props.length === 0 ){
            return null;
        }
        const strings = props.reduce( ( a , b ) => a +', '+ b );
        return strings;
    };

    const uploadForm = () => {
       const  newForm = {
        items: fromObjectToString(checkedItems),
        bags: numberBags,
        whom : fromObjectToString(checkedItemsThree),
        place: city.length !== 0 ? city : extraOption,
        pickUpAddress: address !== undefined ? address : {}
        }
       setForm(newForm);
    }

    const sendForm = () =>{
        db.collection('collections').add(form);
        setCheckedItems({});
        setNumberBags('');
        setStep(1);
        setCity('');
        setCheckedItemsThree({});
        setExtraOption('');
        setAddress({});
        setForm({});
    } 
   
    const setStepBack = ()=>{
        setStep(old => old - 1)
    }
    
    return (  
        <UploadContext.Provider value={
            {   uploadForm,
                checkedItems, 
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
                setExtraOption,
                address,
                setAddress,
                form,
                sendForm,
                fromObjectToString
            }} >
            {props.children}
        </UploadContext.Provider>
    );
}
 
export default UploadContextProvider;