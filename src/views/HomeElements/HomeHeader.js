import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { ButtonLog, ButtonAction } from '../../componets/Buttons';
import imgMotto from '../../assets/Decoration.svg';
import { NavRuter } from '../../componets/NavRuter';
import {DataContext} from '../../context/DataContext';
import {HomeWrapper , HomeImg , HomeNav , HomePannel , LogInPannel } from '../../componets/HeaderElements';


const HomeHeader = () => {
  const { isLoged, userLoged, logOut } = useContext(DataContext);

  const logNot = <>
    <Link to="/logowanie" label="logowaniee"><ButtonLog>Zaloguj</ButtonLog></Link>
    <Link to="/rejestracj" label="rejestracj"><ButtonLog>Załóż konto</ButtonLog></Link>
  </>;
  const logIn = <>
    <span>Część {userLoged.email}</span>
    <Link to="/" label="strona główna"><ButtonLog>Strona główna</ButtonLog></Link>
    <Link to="/oddaj-rzeczy" label="oddaj-rzeczy"><ButtonLog>Oddaj rzeczy</ButtonLog></Link>
    <Link to="/zbiorka" label="zbiorka"><ButtonLog>Zorganizuj zbiórkę</ButtonLog></Link>
    <Link to="/wylogowane" label="rejestracj"><ButtonLog typ='button' onClick={()=>logOut()}>Wyloguj</ButtonLog></Link>
  </>

  return (<HomeWrapper id='start'>
    <HomeImg></HomeImg>
    <HomeNav>
      <HomePannel>
        <LogInPannel>
          { isLoged ? logIn : logNot }
        </LogInPannel>
        <NavRuter />
      </HomePannel>
      <HomePannel>
        <h1>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={imgMotto} alt='decoration img' />
      </HomePannel>
      <HomePannel>
        <Link to='/oddaj-rzeczy'>
          <ButtonAction>ODDAJ RZECZY</ButtonAction>
        </Link>
        <Link to="/zbiorka">
          <ButtonAction>ZORGANIZUJ ZBIÓRKĘ</ButtonAction>
        </Link>
      </HomePannel>
    </HomeNav>
  </HomeWrapper >)
}

export default HomeHeader;