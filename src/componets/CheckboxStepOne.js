import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Checkbox = styled.input`
  position: relative;
  width:30px;
  height:30px;
  visibility: hidden;
  margin-right:1rem;
  &:checked::before{
    position:absolute;
    bottom:0;
    left:0;
    content:'';
    width:30px;
    height:30px;
    border: 0.75px solid #3C3C3C;
    z-index:2;
    background:#FAD648;
  }
  &::before{
    position:absolute;
    bottom:0;
    left:0;
    content:'';
    width:30px;
    height:30px;
    border: 0.75px solid #3C3C3C;
    z-index:2;
    visibility:visible;
  }
`;

export const CheckboxTyp = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <Checkbox type={type} name={name} checked={checked} onChange={onChange} id={name}/>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export const checkboxesStepOne = [
    {
      name: 'clothesGood',
      key: 'clothesGood',
      label: 'ubrania, które nadają się do ponownego użycia',
    },
    {
      name: 'clothesBad',
      key: 'clothesBad',
      label: 'ubrania, do wyrzucenia',
    },
    {
      name: 'books',
      key: 'books',
      label: 'książki',
    },
    {
      name: 'toys',
      key: 'toys',
      label: 'zabawki',
    },
    {
        name: 'others',
        key: 'others',
        label: 'Inne',
      },
  ];
  