import React from 'react';
import styled from 'styled-components';


export const InputsAddress = ({label, type='text', name, value, onChange, placeholder }) => (
    <CourierData>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} id={name} placeholder={placeholder}/>
    </CourierData>
  );
  
export const CourierData = styled.div`
width:100%;
min-height:50px;
display:flex;
flex-direction:row;
align-items:center;
label{
  width: 25%;
  font-size: 1rem;
  margin-right:1rem;
  color:black;
}
input{
  width:60%;
  height:60%;
  border: 0.75px solid #3C3C3C;
  background:none;
  font-weight:300;
  font-size:1.1rem;
  font-family: 'Open Sans';
  padding: 0 10px;
  outline:none;
  &::placeholder{
    opacity:0.5;
    text-align:center;
  }
}
textarea{
  background-color: transparent;
  border: 0.75px solid #3C3C3C;
  width:60%;
  height:80px;
  outline:none;
}
`;

export const dataAddressOne = [
{
    label: 'Ulica',
    name: 'street',
    placeholder: 'ulica'
},{
    label: 'Miasto',
    name : 'city',
    placeholder: 'miasto'

},
{
    label: 'Kod pocztowy',
    name: 'zipCode',
    placeholder: '00-000'
},
{
    label: 'Numer telefonu',
    name: 'phone',
    placeholder: '123-456-789'
}]

export const dataAddressTwo = [
{
    label: 'Data',
    name: 'pickUpDay',
    placeholder: '01.01.2020'
},
{
    label: 'Godzina',
    name: 'pickUpHour',
    placeholder: '12:00'
}
]