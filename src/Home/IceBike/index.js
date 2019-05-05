import React from 'react';
import styled from 'styled-components';
import ice from '../../assets/ice bike/icebike.jpg';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin: 2rem;
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
  <Image src={ice} />
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
              87 cm
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Overall height:
            </RowTitle>
            <RowValue>
              115 cm
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Overall length:
            </RowTitle>
            <RowValue>
              237 cm
            </RowValue>
          </Row>
        </Column>
        <Column>
          <Row>
            <RowTitle>
              Weight:
            </RowTitle>
            <RowValue>
              130 kg
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
              High carbon steel
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
              Rear brake:
            </RowTitle>
            <RowValue>
              V-brake
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Brake lever:
            </RowTitle>
            <RowValue>
              Aluminum alloy
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
          <Row>
            <RowTitle>
              Freezer capacity:
            </RowTitle>
            <RowValue>
              156 L
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Freezer battery:
            </RowTitle>
            <RowValue>
              12v 80Ah lead acid battery
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              Bucket:
            </RowTitle>
            <RowValue>
              18 L x 2
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
              DAPU 38T with torque sensor pedal assist
            </RowValue>
          </Row>
          <Row>
            <RowTitle>
              With:
            </RowTitle>
            <RowValue>
              Sink, Tap, Bucket, Pump and Parasol
            </RowValue>
          </Row>
        </Column>
    </Table>
  </Data>
</Container>

export default Home;


