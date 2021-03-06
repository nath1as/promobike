import React from 'react';
import Logo from './Logo';
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
  margin-left: -2.5rem;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
`;
const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    width: 30%;
`;
const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    background: white;
    width: 100%;
`;
const App = () =>
<Router>
  <Container>
    <Header>
      <Head>
        <Logo />
        <Nav>
          <StyledLink to="/domov">Domov</StyledLink>
          <StyledLink to="/galerija">Galerija</StyledLink>
          <StyledLink to="/o nas">O nas</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
        </Nav>
      </Head>
    </Header>
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
