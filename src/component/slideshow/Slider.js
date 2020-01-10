import React, { Component } from 'react';
import img1 from '../img/im1.jpg';
import img2 from '../img/im3.jpg';
import img3 from '../img/im4.jpg';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} />
                  
                </div>
                <div>
                    <img src={img2} />
                   
                </div>
                <div>
                    <img src={img3} />
                   
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;