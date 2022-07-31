import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Hero.css'

class Hero extends React.Component{
    render(){
        return(

          <section class="top-banner-section">
            <div class="banner-image-div">
              <img class="banner-image" src="https://tgooge.s3.amazonaws.com/pexels-skyler-ewing-12889858.jpg" alt="Banner" />
            </div>
            <div class="banner-overlay-div"></div>
            <div class="banner-text-div">
              <span class="banner-text">
                <p class="banner-h1-text">I am John Doe</p>
                <p class="banner-body-text">And I'm a Photographer</p>
                <p class="banner-btn">
                <Link to = "#">
                  <Button variant="secondary"> See my work </Button>
                </Link>
                </p>
              </span>
            </div>
          </section>  
        )
    }
}

export default Hero