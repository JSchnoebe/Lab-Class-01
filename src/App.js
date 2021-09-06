import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import animalData from './data.json'; 

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      selectedBeast: null,
    };
  }

  handleSelectBeast = beastIndex => {
    this.setState({
      SelectedBeast: animalData[beastIndex],
      showModal: true,
    });
  }

  handleClose = () => {
    console.log('Hiding Modal');
    this.setState({ showModal: false });
  }

  render() {
    let theme = 'dark';
 

  return (
    <div>
   
    <Header theme={theme}/>
    {/* Your Main needs to be able handle the selected beast */}
    <Main beasts={animalData}
          handleSelectBeast={this.handleSelectBeast}

    
    />

    <Footer theme={theme} />


    <SelectedBeast
      beast={this.state.selectedBeast}
      show={this.state.showModal}
      handleClose={this.handleClose}
    />
    </div>
  );
  }
}

export default App;
