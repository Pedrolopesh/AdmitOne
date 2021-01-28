import React from 'react';
import Slider from 'react-slick';
import GlobalCard from './GlobalCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderData } from '../assets/images/sliderData';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/all';


const CardsCarousel = (props) => {
     let settings = {
         dot: true,
         lazyLoad: true,
         infinite: false,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         cssEase: "liner",
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
     }

    return (
        <div className="container ac mt-8">

            <div className="container-cards-slides">
                <div className="slider-title"><h3 className="clr-green">Country</h3></div>
                <div>
                    <Slider {...settings}>
                        {SliderData.map((slide, index) => {
                            return (
                            <div key={index} className="card-wrapper">
                              <GlobalCard image={slide.image} title={slide.title} date={slide.date} place={slide.place} />
                            </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default CardsCarousel
