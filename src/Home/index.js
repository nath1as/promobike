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

const Title = styled.div`
  padding: 1rem 0;
  font-size: 30px;
  font-weight: bold;
`;
const Home = () =>
<Container>
  <Title>
    Contact us to rent one of our promo bikes:
  </Title>
  <Title>
    Coffee Bike:
  </Title>
  <CoffeeBike />
  <Title>
    Ice Bike:
  </Title>
  <IceBike />
  <Title>
    Soup Bike:
  </Title>
  <SoupBike />
  <Title>
    Trade Bike:
  </Title>
  <TradeBike />
</Container>;

export default Home;
