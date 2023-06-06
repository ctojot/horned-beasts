// REBUILD AS A CLASS COMPONENT

// 1ST IMPORT
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'

// 2ND IMPORT
class App extends React.Component {
  render(){
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

// 3RD EXPORT THE CLASS FOR OTHER FILES TO USE IT
export default App;

