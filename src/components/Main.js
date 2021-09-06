import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import animalData from '../data.json';

class Main extends React.Component {

  constructor (props) {
    super(props);

    console.log (animalData);

    this.state = {
      name: 'Jaren',
      beasts: animalData

    };
  }

  render() {

    return (
      <>
        <p>My name is {this.state.name}</p>
        <Container>
          <Row>
            {animalData.map((beast, i) => (
              <Col key={i}>
                <HornedBeast
                  name={beast.name}
                  beastIndex={i}
                  displayModalForIndex={this.props.handleSelectBeast}
                  title={beast.title}
                  imageUrl={beast.image_url}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    )
  }
}

export default Main