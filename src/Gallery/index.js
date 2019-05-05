import React from 'react';
import styled from 'styled-components';
import first from '../assets/slike za galerijo/47115811_10216724975413416_3445409957258723328_n.jpg';
import second from '../assets/slike za galerijo/51769679_10156996220374518_6720365457246781440_n.jpg';
import third from '../assets/slike za galerijo/51814809_10156996230129518_4580903210427875328_o.jpg';
import fourth from '../assets/slike za galerijo/TEKANE.jpg';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

`;
const Image = styled.img`
  width: 200px;
  margin: 1rem;
  padding: 1rem;
`;
const Gallery = () =>
<Container >
  <Image src={first} />
  <Image src={third} />
  <Image src={fourth} />
  <Image src={second} />
</Container>;

export default Gallery;


