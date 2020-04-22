import React, {useContext} from 'react';
import { HomeWrapper , HomeImg , HomeNav , HomePannel , LogInPannel, Romb1 , Romb2, Romb3, Romb4 } from '../../componets/HeaderElements';
import { Link } from "react-router-dom";
import { ButtonLog } from '../../componets/Buttons';
import imgMotto from '../../assets/Decoration.svg';
import NavRuter from '../../componets/NavRuter';
import {DataContext} from '../../context/DataContext';


const FormHeader = () => {
    const { userLoged, logOut } = useContext(DataContext);

    return ( 
    <HomeWrapper>
        <HomeImg></HomeImg>
        <HomeNav>
        <HomePannel>
            <LogInPannel>
            <span>Część {userLoged.email}</span>
            <Link to="/logowanie" label="logowaniee"><ButtonLog>Oddaj rzeczy</ButtonLog></Link>
            <Link to="/wylogowane" label="rejestracj"><ButtonLog typ='button' onClick={()=>logOut()}>Wyloguj</ButtonLog></Link>
            </LogInPannel>
            <NavRuter />
        </HomePannel>
        <HomePannel>
            <h1>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src={imgMotto} alt='decoration img' />
        </HomePannel>
        <HomePannel>
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
        </HomePannel>
        </HomeNav>
    </HomeWrapper >
    );
}
 
export default FormHeader;