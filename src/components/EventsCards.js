import React, { useEffect, useState } from 'react';
import GlobalCard from './GlobalCard';
import { SliderData } from '../assets/images/sliderData';

const EventsCards = (props) => {
    const [limitCard, setLimitCard] = useState(false)
    
    useEffect(() => {
        const limitCard = [0,1,2,3,4,5,6,7,8,9,10]

        setLimitCard(limitCard)
    }, [])

    function setLimittoAll(){

        console.log("ué")
        console.log(props.slides.length)
        let newLimit = props.slides
        // setLimitCard(limitCard)
        setLimitCard(newLimit)
    }

    return (
        <div>
            <div className="slider-title">
                <h3 className="clr-green alg-txt-c">MORE SHOWS</h3>
            </div>

            <div className="row">
            {SliderData.map((slides, index) => {
                return(

                    <div key={index} className="mt-2 mr-2">
                    <div className="ac mt-2">
                        {index === limitCard[index] &&
                                // console.log(limitCard[index])
                                <GlobalCard 
                                    image={slides.image} 
                                    title={slides.title} 
                                    date={slides.date} 
                                    place={slides.place} 
                                />
                            }
                    </div>
                    </div>
                )
            })}            
            </div>

            <div className="justify-content-center row mt-5">
                <button onClick={setLimittoAll} className="ac btn btn-ticket clr-white">
                    Show More Events
                </button>
            </div>

        </div>
    )
}

export default EventsCards;