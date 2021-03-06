import React from 'react';
import styled from 'styled-components';
import HomeHeader from './HomeElements/HomeHeader';
import HomeThreeColumns from './HomeElements/HomeThreeColumns';
import HomeSteps from './HomeElements/HomeSteps';
import HomeAbout from './HomeElements/HomeAbout';
import HomeOrganizations from './HomeElements/HomeOrganizations';
import HomeContact from './HomeElements/HomeContact';

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
      <HomeSteps />
      <HomeAbout />
      <HomeOrganizations/>
      <HomeContact/>
    </HomeWrapper >);
}

export default Home;