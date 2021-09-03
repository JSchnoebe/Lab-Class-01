import React from 'react';
import { CardColumns } from 'react-bootstrap';
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

  render () {

    return (
      <>
        <p>My name is {this.state.name}</p>
          <CardColumns>
            {animalData.map((beast, i) => (
                <HornedBeast
                name={beast.name}
                key={i}
                beastIndex={i}
                displayModalForIndex={this.props.handleSelectBeast}
                title={beast.title}
                imageUrl={beast.image_url}
                />
            ))}
           </CardColumns>
      </>
    )
  }
}

export default Main