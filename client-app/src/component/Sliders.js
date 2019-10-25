import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
class Sliders extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First Image"
                            style={{height:"600px"}}
                        />
                        <Carousel.Caption>
                            <h3>Want to make money?</h3>
                            <p>We provide the best advice to make more money</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second Image"
                            style={{height:"600px"}}
                        />

                        <Carousel.Caption>
                            <h3 style={{color:"#060808"}}>Interested in Stockmarket?</h3>
                            <p style={{color:"#060808"}}>Connect with us and get the best benefits of stock market</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third Image"
                            style={{height:"600px"}}
                        />

                        <Carousel.Caption>
                            <h3>Financial Plan?</h3>
                            <p>Start Investing Early. The sooner, The better!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Sliders;