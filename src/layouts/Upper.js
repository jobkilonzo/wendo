import React, {Component} from 'react';
import {
    Container,
    Navbar
} from 'react-bootstrap';

class Upper extends Component{
    render(){
        return(
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Wendo Technologies</Navbar.Brand>
                </Navbar>
            </Container>
        );
    }
}

export default Upper;

