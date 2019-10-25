import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

class Services extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 style={{padding : "2%"}}>Services</h1>
                    
                </div>
                <div class="d-inline-flex justify-content-around flex-wrap" style={{width : "100%"}}>
                    <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Create more money</Card.Title>
                        <Card.Text>
                            We started creating this page! You start investing. In both cases reward be great!
                        </Card.Text>
                        <Button variant="primary">Contact Us</Button>
                    </Card.Body>
                </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img2}/>
                    <Card.Body>
                        <Card.Title>Invest in Stockmarket</Card.Title>
                        <Card.Text>
                        We invested our efforts here! You invest money. In both cases final product be huge!
                        </Card.Text>
                        <Button variant="primary">Contact Us</Button>
                    </Card.Body>
                </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Plan Wisely</Card.Title>
                        <Card.Text>
                            We planned very carefully! You also plan wisely for your money! In both cases, We will achieve tremendeus success!
                        </Card.Text>
                        <Button variant="primary">Contact Us</Button>
                    </Card.Body>
                </Card>
                </div>
                </div>
            </div>
        );
    }
}


export default Services;