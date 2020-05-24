import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxLabel = styled.label`
min-width: 90px;
padding:10px 22px;
background:none;
margin:0.4rem 1.2rem 0.4rem 0;
font-weight:300;
font-size:1.2rem;
font-family: 'Open Sans';
text-align:center;
line-height:1.6rem;
position:relative;
z-index:0;
`;

const CheckboxBig = styled.input`
  width:100%;
  height:100%;
  visibility:hidden;
  position:absolute;
  top:0;
  left:0;
  margin:0;
  &:before{
    position:absolute;
    bottom:0;
    left:0;
    content:'';
    width:100%;
    height:100%;
    z-index:-2;
    visibility:visible;
    border: 0.75px solid #3C3C3C;
  }
  &:checked::before{
    position:absolute;
    bottom:0;
    left:0;
    content:'';
    width:100%;
    height:100%;
    z-index:-2;
    background:#FAD648;
    visibility:visible;
  }
`;


export const CheckboxTyp = ({ type = 'checkbox', name, checked = false, onChange, label}) => (
<CheckboxLabel htmlFor={name}>{label}<CheckboxBig type={type} name={name} checked={checked} onChange={onChange} id={name}/></CheckboxLabel>
);

CheckboxBig.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export const checkboxesStepThree = [
    { 
      name : 'kides',
      label: 'dzieciom',
    },
    {
      name : 'aloneMothers',
      label: 'samotnym matką',
    },
    {
      name : 'homeless',
      label: 'bezdomnym',
    },
    {
      name : 'disabled',
      label: 'niepełnosprawnym',
    },
    {
      name : 'oldPerson',
      label: 'osoba starszym',
    },
  ];
  