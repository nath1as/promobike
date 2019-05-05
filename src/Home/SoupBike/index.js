import React from 'react';
import styled from 'styled-components';
import soup from '../../assets/soup bike/kolo-prava-zadnja.jpg';

const Container = styled.div`
    display: flex;
    width: 100%;
    border: 2px solid black;
    border-radius: 4px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
`;

const Image = styled.img`
  height: 220px;
  width: 320px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;

`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;

`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Row = styled.div`
  display: flex;
`;
const RowTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
const RowValue = styled.div`
  padding: 0 1rem;
`;
const Home = () =>
<Container>
  <Image src={soup} />
  <Data>
    <Title>
      Technical Data
    </Title>
      <Table>
        <Column>
          <Row>
            <RowTitle>
              Overall width:
            </RowTitle>
            <RowValue>
              88 cm
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Overall height:
            </RowTitle>
            <RowValue>
              108 cm
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Overall length:
            </RowTitle>
            <RowValue>
              235 cm
            </RowValue>
          </Row>
        </Column>
        <Column>
          <Row>
            <RowTitle>
              Box width:
            </RowTitle>
            <RowValue>
              63 cm
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Box height:
            </RowTitle>
            <RowValue>
              52.5 cm
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Box length:
            </RowTitle>
            <RowValue>
              90 cm
            </RowValue>
          </Row>
        </Column>
        <Column>
          <Row>
            <RowTitle>
              Wieght:
            </RowTitle>
            <RowValue>
              60 kg
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Wheel size:
            </RowTitle>
            <RowValue>
              20'' front / 24'' rear
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Max. load:
            </RowTitle>
            <RowValue>
              150 kg
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Rider height:
            </RowTitle>
            <RowValue>
             155-190 cm
            </RowValue>
          </Row>
        </Column>
    </Table>
    <Title>
      Components
    </Title>
    <Table>
      <Column>
          <Row>
            <RowTitle>
              Frame:
            </RowTitle>
            <RowValue>
              Aluminum 6061 T6
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Tires:
            </RowTitle>
            <RowValue>
             20x1.75'' front / 24x1.75'' rear
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Rim:
            </RowTitle>
            <RowValue>
              Aluminum alloy
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Front brake:
            </RowTitle>
            <RowValue>
              Disc brake
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Rear brake:
            </RowTitle>
            <RowValue>
              V-brake
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Gears:
            </RowTitle>
            <RowValue>
              Shimano 6 gears
            </RowValue>
          </Row>
      </Column>
    </Table>
    <Table>
    <Title>
      Option (M-CB04E)
    </Title>
      <Column>
          <Row>
            <RowTitle>
              Motor:
            </RowTitle>
            <RowValue>
              DAPU 36v 250w rear hub motor
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Battery:
            </RowTitle>
            <RowValue>
              36v 13Ah lithium battery
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Display:
            </RowTitle>
            <RowValue>
              DAPU LCD display
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Crankset:
            </RowTitle>
            <RowValue>
              Cadence sensor pedal assist
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              With:
            </RowTitle>
            <RowValue>
              two soup kettles (20L of soup)
            </RowValue>
          </Row>
        </Column>
    </Table>
  </Data>
</Container>

export default Home;


