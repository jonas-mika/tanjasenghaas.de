import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ArrowNavigation = ({ component, direction, style }) => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    /*
    useEffect(() => {
        const getWindowHeight = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener('resize', getWindowHeight);
        return () => {
            window.removeEventListener('resize', getWindowHeight);
        };
    });

    const scrollDown = () => {
        window.scrollTo({ top: id * windowHeight, behavior: 'smooth' });
    };

    const scrollUp = () => {
        console.log('scroll up');
        console.log(id);
        console.log((id - 1) * windowHeight);
        window.scrollTo({ top: (id - 2) * windowHeight, behavior: 'smooth' });
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
	*/

    if (direction === 'up') {
        return (
            <div className="ScrollUp" style={style}>
                <AnchorLink href={`#${component}`}>
                    <IoIosArrowUp className="icon scroll-up" />
                </AnchorLink>
            </div>
        );
    } else if (direction === 'down') {
        return (
            <div className="ScrollDown" style={style}>
                <AnchorLink href={`#${component}`}>
                    <IoIosArrowDown className="icon scroll-down" />
                </AnchorLink>
            </div>
        );
    } else {
        return <div>Something went wrong.</div>;
    }
};

export default ArrowNavigation;
