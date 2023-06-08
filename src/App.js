// REBUILD AS A CLASS COMPONENT

// 1ST IMPORT
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import SelectedBeast from './SelectedBeast';
import data from './data/data.json'

// 2ND IMPORT
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        showModal: false,
        selectedBeast: {},

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

  render() {
    return (
      <>
        <Header />
        <Main 
          handleOpenModal={this.handleOpenModal}
          data={data}
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

