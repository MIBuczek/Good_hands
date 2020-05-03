import React, {useContext , useState} from 'react';
import styled from 'styled-components';
import imgMotto from '../../assets/Decoration.svg';
import { ButtonAction } from '../../componets/Buttons'
import { DataContext } from '../../context/DataContext';
import Pagination from '../../componets/Pagination';

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
@media(max-width:996px){
  h1{
      font-size:1.6rem;
  }
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
    border:none;
    font-size:1.4rem;
    outline:none;
    &:focus{
     border: 0.75px solid #3C3C3C;
    }
}
@media(max-width:996px){
  height:auto;
  flex-direction:column;
  button{
      margin:0;
      padding:10px 20px;
      font-size: 1.2rem;

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
@media(max-width:996px){
    width:90%;
    height:auto;
    span{
        font-size:1rem;
    }
}
`;

const OrgGrupe = styled.div`
width:70%;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width:996px){
  width:90%;
}
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
@media(max-width:996px){
text-align:center;
}
`;

const HomeOrganizations = () => {
    const { organizations } = useContext(DataContext);
    const [ orgToShow , setOrgToShow] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ postPerPage ] = useState(3);

    const filterOrg = (type)=>{
        let currentOrg = organizations.filter(org=>{
            return org.typ === type;
        })
        setOrgToShow(currentOrg);
    }

    //Pagination 
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const curentOrg = orgToShow.slice(indexOfFirstPost , indexOfLastPost);

    //switch page
    const nextPage = (number) => setCurrentPage(number);

    return (  
    <OrgWrapper id='organization'>
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
            { orgToShow.length !== 0 && curentOrg.map((org, index)=>{
              return( <OrgElement key={index}>
                  <h3>{org.nazwa}</h3>
                  <span>Cel i misja: {org.cel}</span>
                  <span>Datki: {org.datki}</span>
                </OrgElement>
            )}) }
        </OrgGrupe>
        <Pagination postPerPage={postPerPage} totalPost={orgToShow.length} nextPage={nextPage}/>
    </OrgWrapper>
    );
}
 
export default HomeOrganizations;