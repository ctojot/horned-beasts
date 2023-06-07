import React from 'react';
import data from './data/data.json';
import './Main.css'
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render(){
        return (
            <main>
                {data.map(hornedBeastObj => {
                    return <HornedBeast key={hornedBeastObj.title} title={hornedBeastObj.title} image_url={hornedBeastObj.image_url} description={hornedBeastObj.description}/>
                })}
            </main>
        )
    }
}

export default Main;