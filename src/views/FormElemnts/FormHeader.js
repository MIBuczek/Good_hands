import React, {useContext} from 'react';
import { HomeWrapper , HomeImg , HomeNav , HomePannel ,HomePannelRombs, LogInPannel, Romb1 , Romb2, Romb3, Romb4 } from '../../componets/HeaderElements';
import { Link } from "react-router-dom";
import { ButtonLog } from '../../componets/Buttons';
import imgMotto from '../../assets/Decoration.svg';
import NavRuter from '../../componets/NavRuter';
import {DataContext} from '../../context/DataContext';


const FormHeader = () => {
    const { isLoged, userLoged, logOut } = useContext(DataContext);

    const logNot = (<>
        <Link to="/logowanie" label="logowaniee"><ButtonLog>Zaloguj</ButtonLog></Link>
        <Link to="/rejestracj" label="rejestracj"><ButtonLog>Załóż konto</ButtonLog></Link>
    </>);

  const logIn = (<>
    <span>Część {userLoged.email}</span>
    <Link to="/" label="strona główna"><ButtonLog>Strona główna</ButtonLog></Link>
    <Link to="/zbiorka" label="zbiorka"><ButtonLog>Zorganizuj zbiórkę</ButtonLog></Link>
    <Link to="/wylogowane" label="rejestracj"><ButtonLog typ='button' onClick={()=>logOut()}>Wyloguj</ButtonLog></Link>
  </>);


    return ( 
    <HomeWrapper id='start'>
        <HomeImg></HomeImg>
        <HomeNav>
        <HomePannel>
            <LogInPannel>
                { isLoged !== true ? logNot : logIn }
            </LogInPannel>
            <NavRuter />
        </HomePannel>
        <HomePannel>
            <h1>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src={imgMotto} alt='decoration img' />
        </HomePannel>
        <HomePannelRombs>
            <section>
                <Romb1>
                    <span>1</span>
                    <p>Wybierz rzeczy</p>
                </Romb1>
                <Romb2>
                    <span>2</span>
                    <p>Spakuj je w worek</p>
                </Romb2>
                <Romb3>
                    <span>3</span>
                    <p>Wybierz funkcje</p>
                </Romb3>
                <Romb4>
                    <span>4</span>
                    <p>Zamów kuriera</p>
                </Romb4>
            </section>
        </HomePannelRombs>
        </HomeNav>
    </HomeWrapper >
    );
}
 
export default FormHeader;