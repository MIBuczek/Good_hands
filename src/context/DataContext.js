import React, {useState, createContext, useEffect} from 'react';
import db from '../Firebase';

export const DataContext = createContext();

const DataContextProvide = (props) => {
    const [ users , setUsers] = useState([]);
    const [ userLoged , setUserLoged] = useState({ email : '' , password: ''});
    const [ isLoged, setIsLoged] = useState(false);
    const [ organizations, setOrganization ] = useState();

    const loadData = ()=>{
        db.collection('users').get().then(snapshot => {
         const usersArr = [];
         snapshot.docs.map(doc => {
          let user = doc.data();
          user.id = doc.id;
          return usersArr.push(user);
         });
         setUsers(usersArr);
        });
        db
        .collection('organizacje')
        .get()
        .then(snapshot => {
         const orgArr = [];
         snapshot.docs.map(doc => {
          let organization = doc.data();
          organization.id = doc.id;
          return orgArr.push(organization);
         });
         setOrganization(orgArr);
        });
    }
   
    useEffect(()=>{ loadData()},[]);

    const getUser = (userEmail , userPassword) =>{
        const matchingUser = users.find(user => {
         return (user.email === userEmail && user.password === userPassword);
        });
        if (matchingUser) {
            setUserLoged(matchingUser);
            setIsLoged(true);
        } else {
            setIsLoged(false);
        }
    }

    const singNewUser=(newUserEmail,newUserPassword ) =>{
        const newUser = { name : newUserEmail, password : newUserPassword};
        db.collection('users').add(newUser).then(() =>loadData());
    }

    const sendMessage = ( name , email , message )=>{
        const newMess = { name , email , message};
        db.collection('wiadomosci').add(newMess).then(() =>loadData());
    }

    const logOut = () =>{
        setUserLoged({ email : '' , password: ''});
        setIsLoged(false);
    }
    return ( 
    <DataContext.Provider value={{users, organizations , getUser, singNewUser, sendMessage , isLoged , userLoged , logOut}} >
        {props.children}
    </DataContext.Provider> )
}
 
export default DataContextProvide;