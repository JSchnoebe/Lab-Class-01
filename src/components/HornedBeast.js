import React from 'react';
import { Button, Card } from 'react-bootstrap';

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

  render () {

    return (
      <div>
      <h2>{this.props.title}</h2>
      <strong>{this.props.name} ❤️ = {this.state.votes} votes!</strong>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url} onClick={this.addVoteClickHandler}/>
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