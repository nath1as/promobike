import React from 'react';
import styled from 'styled-components';
import CoffeeBike from './CoffeeBike';
import IceBike from './IceBike';
import SoupBike from './SoupBike';
import TradeBike from './TradeBike';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Home = () =>
<Container>
  <CoffeeBike />
  <IceBike />
  <SoupBike />
  <TradeBike />
</Container>;

export default Home;


