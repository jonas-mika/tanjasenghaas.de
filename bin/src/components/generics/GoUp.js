import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const GoUp = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 1000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    return (
        <>
            {showButton && (
                <div
                    className="GoUp"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <IoIosArrowUp id="icon" />
                </div>
            )}
        </>
    );
};

export default GoUp;
