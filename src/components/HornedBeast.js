import React from 'react';

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
      <img src={this.props.image_url} alt="" />
      <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast