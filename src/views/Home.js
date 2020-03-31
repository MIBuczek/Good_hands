import React from 'react';
import styled from 'styled-components';
import HomeHeader from './HomeElements/HomeHeader';
import HomeThreeColumns from './HomeElements/HomeThreeColumns';

const HomeWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeThreeColumns />
    </HomeWrapper >);
}

export default Home;