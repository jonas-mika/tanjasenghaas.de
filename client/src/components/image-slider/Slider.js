import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';

const Slider = ({ showArrows }) => {
    const [current, setCurrent] = useState(0);
    const [delay, setDelay] = useState(5000);
    const length = SliderData.length;

    useEffect(() => {
        setTimeout(() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, delay);
        return () => {};
    }, [current]);

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setDelay(5000);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setDelay(5000);
    };

    return (
        <div className="Slider">
            {showArrows && (
                <FaArrowAltCircleLeft
                    className="arrow left"
                    onClick={prevSlide}
                />
            )}
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.url} alt={slide.alt} />
                        )}
                    </div>
                );
            })}
            {showArrows && (
                <FaArrowAltCircleRight
                    className="arrow right"
                    onClick={nextSlide}
                />
            )}
        </div>
    );
};

export default Slider;
