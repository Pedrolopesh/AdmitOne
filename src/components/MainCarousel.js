import React, { useState } from 'react';
import { SliderData } from '../assets/images/sliderData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/all';

const CarouselBanner = (props) =>{
    const [ currentImage, setCurrentImage ] = useState(0)
    const length = props.slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }
    
    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }

    console.log(currentImage)

    if(!Array.isArray(props.slides) || props.slides.length <= 0){
        return null;
    }

    return(
        <div className="slider mt-4 container ac">
            <div className="d-flex">
                <div className="d-flex ac">
                    <div className="container-arrow icon-color-main">
                        <IoIosArrowBack className="left-arrow arrow" onClick={prevSlide}/>
                    </div>
                        <div className="slick-list">
                            <div className="">

                            {SliderData.map((slide, index) => {
                                return (
                                    <div key={index}className={index === currentImage ? 'slide active' : 'slide'}>
                                        <a href={slide.link}>
                                            {index === currentImage && (
                                                <img key={index} src={slide.image} alt="images" className="image-slider"/>
                                                )}
                                        </a>
                                    </div>
                                )
                            })}

                            </div>
                        </div>
                    <div className="container-arrow icon-color-main">
                        <IoIosArrowForward className="rigth-arrow arrow" onClick={nextSlide}/>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default CarouselBanner