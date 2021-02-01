import React, { Fragment, useEffect, useState } from 'react';
import GlobalCard from './GlobalCard';
import { CardsData } from '../assets/images/cardsImagesData';

const EventsCards = (props) => {
    const [cardsToShow, setCardsToShow] = useState(6);

    //FUNCTION TO SHOW MORE ITEMS AT CARD
    function showMoreItems(){
        setCardsToShow(cardsToShow + 6)
    }

    return (
        <div>
            <div className="slider-title">
                <h3 className="clr-green alg-txt-c">MORE SHOWS</h3>
            </div>

            <div className="row event-card-grid">
            {CardsData.map((slides, index) => (
                <Fragment key={index}>
                    {index < cardsToShow && 
                        <div className="mt-2">
                            <div className="ac mt-2">
                                
                                <GlobalCard 
                                    image={slides.image} 
                                    title={slides.title} 
                                    date={slides.date} 
                                    place={slides.place} 
                                />
                                
                            </div>
                        </div>
                    }
                </Fragment>

            ))}            
            </div>

            {cardsToShow < CardsData.length &&

                <div className="justify-content-center row mt-5">
                    <button onClick={showMoreItems} className="ac btn btn-ticket clr-white">
                        Show More Events
                    </button>
                </div>
            }

        </div>
    )
}

export default EventsCards;