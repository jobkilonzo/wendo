import React, {Component} from 'react';
import {
    Card,
    Row,
    Col
} from 'react-bootstrap';
import Cyberone from '../images/cyberone.jpg';
import mpesa from '../images/mpesa.jpeg';
import camera from '../images/camera3.jpg';
import cafe from '../images/cafe.jpg';


class Cards extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mpesa} />
                        <Card.Body>
                            <Card.Title>Mpesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={camera} />
                        <Card.Body>
                            <Card.Title>Camera</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cafe} />
                        <Card.Body>
                            <Card.Title>Cyber Caffe</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cards;