import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HornedBeastCard ({image_url, title, description, votes, handleVotes}) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} onClick={handleVotes}/>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Votes: {votes}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Card.Text style={{marginTop : 25}}>Click on an image or click on the button to vote for your favorite Horned Beast!</Card.Text>
                <Button variant="primary" onClick={handleVotes}>Vote!</Button>
                </Card.Body>
            </Card>
    )
}

export default HornedBeastCard;