import React from 'react';
import './Hornedbeast.css'


class Hornedbeast extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            waves: 0
        }

    }
    
    handleWave = () => {
        this.setState({
            waves: this.state.waves + 1
        })
    }
    
    render(){
        return(
            <>
                <h2><p>{this.props.title}</p></h2>
                <p onClick={}></p>
                <img src={this.props.img_url} alt={this.props.title} title={this.props.title}></img>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default Hornedbeast;