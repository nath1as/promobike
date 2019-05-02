import React from 'react';
import Header from './Header';
import StyledLink from './StyledLink';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import {BrowserRouter as Router, Route} from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
const Nav = styled.menu`
    background: red;
    display: flex;
    justify-content: space-between;

`;
const Body = styled.div`
    max-width: 30%;
    background: purple;
`;
const Head = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

`;
const App = () =>
<Router>
  <Container>
    <Head>
      <Header />
      <Nav>
        <StyledLink to="/domov">Domov</StyledLink>
        <StyledLink to="/o nas">O nas</StyledLink>
        <StyledLink to="/galerija">Galerija</StyledLink>
        <StyledLink to="/kontakt">Kontakt</StyledLink>
      </Nav>
    </Head>
    <Body>
      <Route
      path="/domov"
      component={ () => <Home />
      } />
      <Route
      path="/o nas"
      component={ () => <About />
      } />
      <Route
      path="/galerija"
      component={ () => <Gallery />
      } />
      <Route
      path="/kontakt"
      component={ () => <Contact />
      } />
    </Body>
  </Container>
</Router>

export default App;
