import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/logo.jpg';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component{
    render(){
        return(
            <div>
                <Container style={{ background: '#060808' , color : '#febd00' , width: '100%',maxWidth:"100%"}}>
                    <br></br>
                    <Row>
                        <Col>
                            <img
                                src={logo}
                                alt="Logo"
                                style={{width:"60%"}}
                            ></img>
                        </Col>
                        <Col>
                            <Row><h4>Home</h4></Row>
                            <Row><h4>Services</h4></Row>
                            <Row><h4>About Us</h4></Row>
                        </Col>
                        <Col>
                            <Row><h3>Contct Us</h3></Row>
                            <Row><p>Abhishek Sharma</p></Row>
                            <Row><p>Contact No.: +91 8511244642</p></Row>
                            <Row><p>Address: Shop-4, central plaza,near taluka panchayat<br></br> Dahod,389151</p></Row>
                            
                        </Col>
                    </Row>
                    <Row>
                                <Col>
                                    <SocialIcon url="whatsapp.com"/>
                                </Col>
                                <Col>
                                    <SocialIcon url="https://www.instagram.com/wealthstonefinancialadvisor/"/>
                                </Col>
                                <Col>
                                    <SocialIcon url="facebook.com"/>
                                </Col>
                                <Col>
                                    <SocialIcon url="twitter.com"/>
                                </Col>
                            </Row>
                    <br></br>
                </Container>
                @Developed By: Ravi Patel &git Dhaval Lila
            </div>
        );
    }
}


export default Footer;