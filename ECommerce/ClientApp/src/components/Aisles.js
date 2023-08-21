import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Aisles.css'; // Import your custom CSS file

export class Aisles extends Component {
    render() {
        return (
            <Container>
                <Row className="aisle-row">
                    <Col xs={6}><Button variant="primary">Groceries</Button></Col>
                    <Col xs={6}><Button variant="primary">Clothes</Button></Col>
                </Row>
                <Row className="aisle-row">
                    <Col xs={6}><Button variant="primary">Electronics</Button></Col>
                    <Col xs={6}><Button variant="primary">Jewelry</Button></Col>
                </Row>
                <Row className="aisle-row">
                    <Col xs={6}><Button variant="primary">Home Appliances</Button></Col>
                    <Col xs={6}><Button variant="primary">Instrumental</Button></Col>
                </Row>
            </Container>
        );
    }
}




