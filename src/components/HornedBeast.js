import React from 'react';
import { Card } from 'react-bootstrap';


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
    console.log('did this run the showModal?', this.props.beastIndex);
      this.props.displayModalForIndex(this.props.beastIndex);
    }

  

  render () {

    return (
      
      <Card style={{width:'18rem'}} onClick={this.showModal}>

          <Card.Img variant="top" src={this.props.imageUrl} onClick={this.addVoteClickHandler}/>
          <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.name} ❤️ = {this.state.votes} votes!
            {this.props.description}
          </Card.Text>
     </Card.Body>
</Card>


      
    )
  }
}

export default HornedBeast;