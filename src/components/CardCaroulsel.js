import React, { useState } from 'react';
import { SliderData } from '../assets/images/sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index}className={index === currentImage ? 'slide active' : 'slide'}>
                            {index === currentImage && (
                                <img key={index} src={slide.image} alt="images" className="image-slider"/>
                            )}
                        </div>
                    )
                })}               
            <FaArrowAltCircleRight className="rigth-arrow" onClick={nextSlide}/>
        </section>
    )
}

export default CarouselBanner