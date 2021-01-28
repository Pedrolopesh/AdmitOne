import React, {useState, useEffect} from 'react'

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AnnounceTop = () => {

    const [announcesData, setAnnouncesData] = useState([])

    useEffect(() => {

        const announcesData = [
            { link:'https://admitone.com/events/ferris-and-sylvester-vancouver-6682428', content:'FERRIS & SYLVESTER', date:'September 11th 2021'},
            { link:'https://admitone.com/events/orchestral-rendition-of-daft-punk-6505354', content:'An Orchestral Rendition of Daft Punk', date:'September 18th 2021'},
            { link:'https://admitone.com/events/steve-hofstetter-6457048', content:'Steve Hofstetter - "The Dark Stuff" Com...', date:'July 4th 2021'},
            { link:'https://admitone.com/events/tanya-tucker-vancouver-2021', content:'Tanya Tucker - CMT Next Women of Countr...', date:'October 10th 2021'},
            { link:'https://admitone.com/events/bobby-bazini-vancouver-2021', content:'Bobby Bazini', date:'March 23rd 2021'},
            { link:'https://admitone.com/events/sibling-rivalry-vogue-2021', content:'Sibling Rivalry starring Bob & Monet', date:'March 30th 2021'},
            { link:'https://admitone.com/events/tommy-emmanuel-vancouver-2020', content:'Tommy Emmanuel', date:'December 4th 2021'},
            { link:'https://admitone.com/events/russell-howard-vancouver-2021', content:'RUSSELL HOWARD', date:'May 15th 2021'},
            { link:'https://admitone.com/events/russell-howard-vancouver2-2021', content:'RUSSELL HOWARD', date:'May 15th 2021'},
            { link:'https://admitone.com/events/girls-gotta-eat-vancouver-2020', content:'Girls Gotta Eat', date:'July 11th 2021'},

        ]

        setAnnouncesData(announcesData)
  
    }, [])

    
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return(

        <div className="mt-2 mb-1">
            <Slider {...settings}>
                {announcesData.map((announcements, index) => (
                    
                    <div key={index} className="mr-2 d-flex">
                        <div className="mr-2 announces-container">
                            <span className="">
                                <a href={announcements.link} className="clr-white font_2"> {announcements.content} </a> 
                                <span className="clr-pink font_2 font-w-700"> {announcements.date} </span>
                            </span>
                        </div>
                    </div>
                    
                ))}
            </Slider>
        </div>
    )
}

export default AnnounceTop;