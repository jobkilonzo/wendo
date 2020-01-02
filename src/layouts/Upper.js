import React, {Component} from 'react';
import {
    Container,
    Navbar
} from 'react-bootstrap';

class Upper extends Component{
    render(){
        return(
            <Navbar expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand href="#">Wendo Technologies</Navbar.Brand>
                    </Container>
                </Navbar>
        );
    }
}

export default Upper;

