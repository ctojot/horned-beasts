import React from 'react';


class Hornedbeast extends React.Component {
    render(){
        return(
            <>
                <h2>
                    <p>{this.props.title}</p>
                </h2>
                <img src={this.props.img_url} alt={this.props.title} title={this.props.title}></img>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default Hornedbeast;