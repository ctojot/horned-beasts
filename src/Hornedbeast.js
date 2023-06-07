import React from 'react';
import HornedBeastCard from './HornedBeastCard';


class HornedBeast extends React.Component {
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
    
    render(){
        return(
            <>
                <HornedBeastCard title={this.props.title} votes={this.state.votes} description={this.props.description} image_url={this.props.image_url} handleVotes={this.handleVotes} />
            </>
            
        )
    }
    
}

export default HornedBeast;
