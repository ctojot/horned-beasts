import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeastCard extends React.Component  {
    
    handleClick = () => {
        const {image_url, title, description} = this.props
        this.props.handleVotes()
        this.props.handleOpenModal({image_url, title, description})
      }
    
    render() {
        const {image_url, title, description, votes, handleVotes} = this.props
        return (
            <>
            <Card style={{ width: '18rem', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
                <Card.Img variant="top" src={image_url} onClick={this.handleClick} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Votes: {votes}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Card.Text style={{marginTop : 25}}>Click on an image or click the button to vote for your favorite Horned Beast!</Card.Text>
                <Button variant="primary" onClick={handleVotes}>Vote!</Button>
                </Card.Body>
            </Card>
            </>
        )
    }    
}

export default HornedBeastCard;