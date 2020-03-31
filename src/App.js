import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import FormStep1 from './views/FormElemnts/FormStep1';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Reqister';

import './App.css';

const theme = {
  font_base: 'Open Sans',
  font_alt: 'Merriweather'
}


const Wrapper = styled.div`
 text-align: center;
 box-sizing: border-box;
 font-family: ${(props) => (props.font_alt ? 'Merriweather, serife' : 'Open Sans')};
 width: 100%;
 height: 100vh;
 padding: 0;
 margin: 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route path="/oddaj-rzeczy" component={() => <FormStep1 />} />
            <Route path="/logowanie" component={() => <Login />} />
            <Route path="/wylogowane" component={() => <Logout />} />
            <Route path="/rejestracj" component={() => <Register />} />
          </Switch>
        </BrowserRouter>
      </Wrapper>;
    </ThemeProvider>
  )
}

export default App;
