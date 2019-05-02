import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const LinkStyled = (props) => (
  <StyledLink {...props}>
    {props.children}
  </StyledLink>
);

export default LinkStyled;

