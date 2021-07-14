import { useState, useEffect } from 'react';
import { RiArrowDropLeftFill, RiArrowDropRightFill } from 'react-icons/ri';

const QuoteSlider = ({
    delay,
    quotes,
    showDots,
    showNavigation,
    autoScroll,
}) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === quotes.length - 1 ? 0 : current + 1);
        };

        if (autoScroll) {
            const timer = setInterval(nextSlide, delay);
            return () => clearInterval(timer);
        }
    }, [current]);

    const computeTransform = () => {
        return -100 * current;
    };

    const nextSlide = () => {
        setCurrent(current === quotes.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? quotes.length - 1 : current - 1);
    };

    const goToSlide = (id) => {
        setCurrent(id);
    };

    return (
        <div className="QuoteSlider">
            <div className="wrapper">
                {showNavigation && (
                    <RiArrowDropLeftFill className="icon" onClick={prevSlide} />
                )}
                <div className="slides">
                    <div
                        className="slides-row"
                        style={{
                            transform: `translate(${computeTransform()}%)`,
                        }}
                    >
                        {quotes.map((quote, index) => {
                            return (
                                <div className="slide" key={index}>
                                    <p>{quote.quote}</p>
                                    <h4>{quote.author}</h4>
                                    <h5>{quote.position}</h5>
                                    <h5>{quote.company}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {showNavigation && (
                    <RiArrowDropRightFill
                        className="icon"
                        onClick={nextSlide}
                    />
                )}
            </div>
            {showDots && (
                <div className="dots">
                    {quotes.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    current === index
                                        ? 'dot icon active'
                                        : 'dot icon'
                                }
                                onClick={() => {
                                    goToSlide(index);
                                }}
                            ></div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

QuoteSlider.defaultProps = {
    delay: 5000,
    showDots: true,
    showNavigation: true,
    autoScroll: false,
};

export default QuoteSlider;
