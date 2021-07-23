import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const TransformBox = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    transition: 1s ease;
`;

const SlideWrapper = styled.div`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
`;

const img_styles = {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
};

const Slide = ({ image }) => {
    return (
        <SlideWrapper>
            <img src={image} style={img_styles}></img>
        </SlideWrapper>
    );
};

const ImageSlider = ({ images, delay }) => {
    const [curr, setCurr] = useState(0);
    const [slides, setSlides] = useState(images);

    const addSlide = () => {
        return slides.concat(slides[curr]);
    };

    useEffect(() => {
        const nextSlide = () => {
            setSlides(addSlide());
            setCurr(curr + 1);
        };
        const timer = setInterval(nextSlide, delay);
        return () => clearInterval(timer);
    }, [curr]);

    const computeTransform = () => {
        return -100 * curr;
    };

    return (
        <Wrapper>
            <TransformBox
                style={{ transform: `translateX(${computeTransform()}%)` }}
            >
                {slides.map((img) => {
                    return <Slide key={img} image={img}></Slide>;
                })}
            </TransformBox>
        </Wrapper>
    );
};

ImageSlider.defaultProps = {
    images: [],
    delay: 5000,
};

export default ImageSlider;
