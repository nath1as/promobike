import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    padding: 0 1rem;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:focus {
     color: #21a9b2;
    }
    &:active {
     color: #21a9b2;
    }
`;
const LinkStyled = (props) => (
  <StyledLink {...props}>
    {props.children}
  </StyledLink>
);

export default LinkStyled;

