import React, {Component} from 'react';
import {
    Container
} from 'react-bootstrap';
import Cyberone from '../images/cyberone.jpg';
import Cards from './Cards';


class Body extends Component{
    render(){
        return(
            <Container>
                <div>
                <img src={Cyberone}/>
                
                </div>
                <Cards />
                
            </Container>
        );
    }
}

export default Body;