import React, {useContext , useState} from 'react';
import styled from 'styled-components';
import imgMotto from '../../assets/Decoration.svg';
import {ButtonAction} from '../../componets/Buttons'
import { DataContext } from '../../context/DataContext';

const OrgWrapper = styled.section`
margin-top:2rem;
width:100%;
display: flex;
flex-direction: column;
font-family: 'Open Sans';
`;
const OrgHeader = styled.div`
margin-top:2rem;
width:100%;
height:130px;
h1{
color: #5E5322;
  font-size: 2.2rem;
  font-weight:300;
  margin:.8rem;
}
`;

const OrgButtons=styled.div`
width:100%;
height:130px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
button{
    margin:0 2rem;
    width:208;
    height:79;
    border:none;
    font-size:1.4rem;
    outline:none;
    &:focus{
     border: 0.75px solid #3C3C3C;
    }
}
`;
const OrgMotto = styled.div`
width:43%;
height:130px;
margin:1rem auto;
span{
    color: #3C3C3C;
    font-size:22px;
}
`;
const OrgGrupe = styled.div`
width:70%;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const OrgElement = styled.div`
margin-top:20px;
width:85%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
border-bottom:0.75px solid  #3C3C3C;
text-align:left;
font-family: 'Open Sans';
justify-content:space-between;
&:nth-of-type(3){
    border-bottom:none;
}
h3{
    width:100%;
    font-size:20px;
    font-weight:300;
    margin-top:.8rem;
}
span{
    font-size:14px;
    margin-bottom:1.2rem;
}

`;

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
&:focus{
    border: 1px solid #707070;
    outline:none;
}

`;

const HomeOrganizations = () => {
    const { organizations } = useContext(DataContext);
    const [ orgToShow , setOrgToShow] = useState([]);

    const filterOrg = (type)=>{
        let currentOrg = organizations.filter(org=>{
            return org.typ === type;
        })
        setOrgToShow(currentOrg);
    }

    return (  
    <OrgWrapper>
        <OrgHeader>
            <h1>Komu pomagamy?</h1>
            <img src={imgMotto} alt="decoration element"/>
        </OrgHeader>
        <OrgButtons>
            <ButtonAction onClick={()=>filterOrg('fundacja')}>Fundacjom</ButtonAction>
            <ButtonAction onClick={()=>filterOrg('organizacja')}>Organizacjom pozarządowym </ButtonAction>
            <ButtonAction onClick={()=>filterOrg('zbiórka')}>Lokalnym zbiórkom</ButtonAction>
        </OrgButtons>
        <OrgMotto> 
            <span>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, Organizacji pozarządowych czy Zbiórek lokalnych z którymi współpracujemy. 
            Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </span>
        </OrgMotto>
        <OrgGrupe>
            { orgToShow.length !== 0 && orgToShow.map((org, index)=>{
              return( <OrgElement key={index}>
                  <h3>{org.nazwa}</h3>
                  <span>Cel i misja: {org.cel}</span>
                  <span>Datki: {org.datki}</span>
                </OrgElement>
            )}) }
        </OrgGrupe>
        <OrgaPages>
            <ButtonPage>1</ButtonPage>
            <ButtonPage>2</ButtonPage>
            <ButtonPage>3</ButtonPage>
        </OrgaPages>
    </OrgWrapper>
    );
}
 
export default HomeOrganizations;