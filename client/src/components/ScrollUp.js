import React from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const ScrollUp = () => {
    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="ScrollUp">
            <IoIosArrowDropupCircle className="icon" onClick={scrollUp} />
        </div>
    );
};

export default ScrollUp;
