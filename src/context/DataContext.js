import React, {useState, createContext, useEffect} from 'react';
import db from '../Firebase';

export const DataContext = createContext();

const DataContextProvide = (props) => {
    const [ users , setUsers] = useState([]);
    const [ organizations, setOrganization ] = useState()

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
   
    useEffect(()=>{
        if(users.length === 0){
            loadData();
        } ;
    });

    const getUser = (userEmail , userPassword) =>{
        setUsers({ userEmail, userPassword});
    }

    const singNewUser=(newUserEmail,newUserPassword ) =>{
        const newUser = {newUserEmail,newUserPassword}
        db.collection('users').add(newUser).then(() =>loadData());
    }
    return ( 
    <DataContext.Provider value={{users, organizations , getUser, singNewUser}} >
        {props.children}
    </DataContext.Provider> )
}
 
export default DataContextProvide;