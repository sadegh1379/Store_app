import React from 'react';
import DemoCarousel from '../slideshow/Slider';
import  { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container mt-4 text-center">
                        <p className="display-2 mb-2">About Us</p>
                        <p>This app is for online shopping</p>
                        <div className="mx-auto" style={{width:'29%'}}>
                        <DemoCarousel/>
                        </div>
                        <p>about more designer_app click <a className="ml-1" href="http://sadeghakbari.gigfa.com">Sadegh Akbari</a></p>
            <Link  to="/">Back To Home</Link>
                      
        </div>
    )
}

export default About;
