// REBUILD AS A CLASS COMPONENT

// 1ST IMPORT
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from './data/data.json';


// 2ND IMPORT
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
        showModal: false,
        selectedBeast: {},
        selectedHorns: "0"
    }
  }

  handleOpenModal = (selectedBeast) => {
    this.setState({
      showModal: true,
      selectedBeast:selectedBeast
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      selectedBeast: {}
    })
  }

  handleSetSelectedHorns = (event) => {
    let selected = event.target.value;
    this.setState({
      selectedHorns: selected
    })

  }

  render() {
    const sortedData = data.filter(element => {
      console.log(this.state.selectedHorns, element.horns)
      if (this.state.selectedHorns === "0") {
        return true;
      }
      else if (this.state.selectedHorns === `${element.horns}`) {
        return true;
      }
      else {
        return false;
      }

    })

    return (
      <>
        <Header 
          handleSetSelectedHorns={this.handleSetSelectedHorns}
          
        />
        <Main 
          handleOpenModal={this.handleOpenModal}
          data={sortedData}
        />
        <SelectedBeast 
          selectedBeast={this.state.selectedBeast}
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
        />
        <Footer />
      </>
    )
  }
}

// 3RD EXPORT THE CLASS FOR OTHER FILES TO USE IT
export default App;
