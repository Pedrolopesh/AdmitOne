import React from 'react';
import Slider from 'react-slick';
import { SliderData } from '../assets/images/sliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
                                <div className="card">

                                    <div className="card-image">
                                        <div className="image-box">
                                            <img src={slide.image}/>
                                            <div className="image-details alg-txt-c">
                                                <h3 className="mb-2 mt-0 font-w-700"> {slide.title} </h3>
                                                <p className="mb-2 clr-pink"> <strong> {slide.date} </strong> </p>
                                                <p className="mb-2"> {slide.place} </p>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="social-icons">
                                        <li> <a href="#" target="_blank"> <FaFacebook className="fa fa-facebook"/> </a></li>
                                        <li> <a href="#" target="_blank"> <FaInstagram className="fa fa-instagram"/> </a></li>
                                        <li> <a href="#" target="_blank"> <FaTwitter className="fa fa-twitter"/> </a></li>
                                    </ul>

                                </div>
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
