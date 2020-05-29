import React,{Component} from 'react';
import Cloud from '../assets/hero.svg';
import '../Styles/index.css'


class Clouds extends Component {
    render(){
        return( <div id="container">
                
                <img id="image"src={Cloud} alt="Cloud"/>
            </div>
        );
    }
}

export default Clouds;
