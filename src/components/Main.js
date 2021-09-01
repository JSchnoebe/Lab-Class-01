import React from 'react';
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
      <div>
        <p>My name is {this.state.name}</p>
        <ol>
          {
            this.state.beasts.map((HornedBeast, beastIndex) => (
              <li key={beastIndex}>
                <HornedBeast
                name={HornedBeast.name}

                {...HornedBeast}
                />
              </li>
            ))
          }
        </ol>
            
      </div>
    )
  }
}

export default Main