import React from 'react';
import GlobalCard from './GlobalCard';
import { SliderData } from '../assets/images/sliderData';

const EventsCards = (props) => {
    return (
        <div>
            <div className="slider-title">
                <h3 className="clr-green alg-txt-c">MORE SHOWS</h3>
            </div>

            <div className="row">
            {SliderData.map((slide, index) => {
                return(

                    <div key={index} className="ac mt-2">
                        <GlobalCard image={slide.image} title={slide.title} date={slide.date} place={slide.place} />
                    </div>
                )
            })}
            
            </div>

        </div>
    )
}

export default EventsCards;