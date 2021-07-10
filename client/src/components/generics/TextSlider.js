import { useState } from 'react';

const TextSlider = ({ texts, delay }) => {
    return (
        <div className="TextSlider">
            <div className="container">
                {texts.map((text, index) => {
                    return <h4 key={index}>{text}</h4>;
                })}
            </div>
        </div>
    );
};

export default TextSlider;
