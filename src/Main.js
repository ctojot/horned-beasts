import React from 'react';
import data from './data/data.json';
import './Main.css'
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {
    render(){
        return (
            <main>
                {data.map(hornedBeastObj => {
                    return <Hornedbeast key={hornedBeastObj.title} title={hornedBeastObj.title} image_url={hornedBeastObj.image_url} description={hornedBeastObj.description}/>
                })}
            </main>
        )
    }
}

export default Main;