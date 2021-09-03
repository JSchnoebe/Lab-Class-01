import React from 'react';
import { Card } from 'react-bootstrap';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0,
    };
  }

  addVoteClickHandler = () => {

    this.setState({
      votes: this.state.votes + 1,
      lastUpdated: new Date(),
    });
    console.log(this.state);
  };

  showModal = () => {
      this.props.displayModalForIndex(this.props.beastIndex);
    }

  

  render () {

    return (
      <div>
        <h2>{this.props.title}</h2>
        <strong>{this.props.name} ❤️ = {this.state.votes} votes!</strong>
        <Card className="horned-card" onClick={this.showModal}>
          <Card.Img variant="top" src={this.props.imageUrl} onClick={this.addVoteClickHandler} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeast