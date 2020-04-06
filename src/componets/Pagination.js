import React from 'react';
import styled from 'styled-components';

const OrgaPages= styled.div`
width:50%;
height:70px;
display:flex;
flex-direction:row;
margin:0.5rem auto;
text-align:center;
justify-content:center;
`;

const ButtonPage = styled.button`
width:40px;
height:50px;
font-size:.8rem;
font-weight:300;
color: #3C3C3C;
background:none;
border:none;
margin:0 0.7rem;
&:hover{
    border: 1px solid #FAD648;
}
&:focus{
    border: 1px solid #707070;
    outline:none;
}
`;

const Pagination = ({postPerPage , totalPost, nextPage}) => {
    const pageNumbers = [];

    for(let i =1 ;  i<= Math.ceil(totalPost / postPerPage); i ++){
        pageNumbers.push(i);
    }
    return ( 
        <OrgaPages>
            {pageNumbers.map(number =>(
            <ButtonPage type='button' key={number} onClick={()=>nextPage(number)}>{number}</ButtonPage>
            ))}
        </OrgaPages>
     );
}
 
export default Pagination;