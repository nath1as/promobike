import React from 'react';
import logo from '../assets/promobikelogo.png';
import StyledLink from '../StyledLink';
import styled from 'styled-components';

const Img = styled.img`
    width: 22rem;
    min-width: 5rem;
`;

const Logo = () =>
  <StyledLink to="/domov">
    <Img src={logo} />
  </StyledLink>


export default Logo;
