import React, { Fragment, useState, useEffect} from 'react';
import Slider from 'react-slick';
import { returnIcon } from '../assets/icons/icons';
import GlobalCard from './GlobalCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CardsData } from '../assets/images/cardsImagesData';

const CardsCarousel = (props) => {

  const [eventsTypes, setEventsTypes] = useState([]);

  useEffect(() => {
    const eventsTypes = [
      {name:'Rock'},
      {name: 'Hip Hop'}, 
      {name:'Pop'}
    ]
    setEventsTypes(eventsTypes)
  }, [])

    //FUNTION TO RETURN CUSTOM RIGTH ARROW
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
        className={className}
        style={{ ...style, display: "block", width:"10px" }}
        onClick={onClick}
        >
          {returnIcon('chevron-rigth')}
        </div>
      );
    }
    
    //FUNTION TO RETURN CUSTOM LEFT ARROW
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", width:"10px" }}
          onClick={onClick}
        >
          {returnIcon('chevron-rigth')}
        </div>
      );
    }

     let settings = {
         dot: true,
         lazyLoad: true,
         infinite: false,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         cssEase: "liner",
         nextArrow: <SampleNextArrow />,
         prevArrow: <SamplePrevArrow />,
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

            {eventsTypes.map((types, index) => (
            
            <Fragment key={index}> 
                <div className="container-cards-slides">
                  <div className="slider-title"><h3 className="clr-green">{ types.name }</h3></div>
                    <div className="container-sliders">
                        <Slider {...settings}>
                            {CardsData.map((slide, index) => {
                                return (
                                  <div key={index}>
                                    <div className="card-wrapper">
                                      <GlobalCard image={slide.image} title={slide.title} date={slide.date} place={slide.place} />
                                    </div>
                                  </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </Fragment>
            
            ))}

        </div>
    )
}

export default CardsCarousel
