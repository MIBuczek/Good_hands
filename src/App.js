import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import DataContextProvider from './context/DataContext';
import UploadContextProvider from './context/UploadContext';
import Home from './views/Home';
import Form from './views/Form';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Reqister';
import ColectionForm from './views/ColectionForm';
import './App.css';

const Wrapper = styled.div`
 text-align: center;
 box-sizing: border-box;
 font-family: ${(props) => (props.font_alt ? 'Merriweather, serife' : 'Open Sans')};
 width: 100%;
 padding: 0;
 margin: 0;
`;

function App() {

  return (
      <DataContextProvider>
        <UploadContextProvider>
          <Wrapper>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/oddaj-rzeczy" component={() => <Form />} />
                <Route path="/logowanie" component={() => <Login />} />
                <Route path="/wylogowane" component={() => <Logout />} />
                <Route path="/rejestracj" component={() => <Register />} />
                <Route path="/zbiorka" component={() => <ColectionForm />} />
              </Switch>
            </BrowserRouter>
          </Wrapper>
        </UploadContextProvider>
      </DataContextProvider>
  )
}

export default App;


//Linki nawigacja
//podlinkowanie buttonów do sekcji dadawania organizacji
//paginacja 
