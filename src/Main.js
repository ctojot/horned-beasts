import React from 'react';
import './Main.css'
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {
    render() {
        return (
            <main>
                {this.props.data.map(hornedBeastObj => {
                    return <Hornedbeast
                    key={hornedBeastObj.title}
                    title={hornedBeastObj.title}
                    image_url={hornedBeastObj.image_url}
                    description={hornedBeastObj.description}
                    handleOpenModal={this.props.handleOpenModal}
                    />
                })}
            </main>
        )
    }
}

export default Main;