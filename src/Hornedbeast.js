import React from 'react';
import HornedBeastCard from './HornedBeastCard';

class Hornedbeast extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            votes: 0
        }

    }
    
    handleVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }
    
    render() {
        const {image_url, title, description, horns} = this.props
        return(
            <>
                <HornedBeastCard 
                title={title}
                votes={this.state.votes}
                description={description}
                image_url={image_url}
                horns={horns}
                handleVotes={this.handleVotes}
                handleOpenModal={this.props.handleOpenModal}
                />
            </>
            
        )
    }
}

export default Hornedbeast;
