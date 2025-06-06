import React, { useState, useEffect, useCallback } from 'react';
import sliderImg1 from '../../../assets/images/slider/slider-1.jpeg';
import sliderImg2 from '../../../assets/images/slider/slider-2.png';
import sliderImg3 from '../../../assets/images/slider/slider-3.png';
import './Slider.scss';

export const Slider = () => {
    let sliderBackground = [ sliderImg1 , sliderImg2 , sliderImg3];

    const [index, setIndex] = useState(0);

    const slideNext = useCallback(() => {
        setIndex((prevIndex) => (prevIndex === sliderBackground.length - 1 ? 0 : prevIndex + 1));
    }, [sliderBackground.length]);

    const slidePrevious = () => {
        index===0? setIndex(sliderBackground.length -1): setIndex(index - 1);
    }

    const slidePagination = (idx) => {
        setIndex(idx);
    }

    useEffect(() => {
        const intervalId = setInterval(slideNext, 5000);
        return () => clearInterval(intervalId);
    }, [slideNext]);


    return (
        <div className="slider" style={{ backgroundImage: `url(${sliderBackground[index]})`}}>
            <div className="right-left-btns">
                <svg 
                    id="left-btn" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi left-btn"  
                    viewBox="0 0 16 16" 
                    onClick={slidePrevious}>
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                </svg>
                <svg 
                    id="right-btn" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi right-btn" 
                    viewBox="0 0 16 16" 
                    onClick={slideNext}
                >
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                </svg>
            </div>

            <div className="paginations">
                {sliderBackground.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={idx === index ? 'pagination active' : 'pagination'}
                        onClick={() => slidePagination(idx)}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};
