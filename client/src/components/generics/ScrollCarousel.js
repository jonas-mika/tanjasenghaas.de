import { useState, useEffect, useRef } from 'react';
import { useSpring, animated, to } from 'react-spring';
import Sticky from 'react-sticky-el';
import useWindowScroll from '@react-hook/window-scroll';
import useScrollWidth from './useScrollWidth';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ScrollCarousel = ({ children }) => {
    const refHeight = useRef(null); // ref to carousel element
    const refTransform = useRef(null); // ref to transform box element

    const scrollY = useWindowScroll(60); // current y-scroll pos
    const top = refHeight.current ? refHeight.current.offsetTop : 0; // top of scroll carousel element

    // get width of transform box (used as height val for carousel element)
    const { scrollWidth } = useScrollWidth(refTransform);
    const elHeight = scrollWidth * 1.05;

    // define useSpring hook with object st, xy, initially set to 0
    const [{ scrollX }, setScrollX] = useSpring(() => ({
        scrollX: 0,
    }));

    // on every change of y (on scroll) set st to scroll Y
    useEffect(() => {
        setScrollX({ scrollX: scrollY });
    }, [scrollY, setScrollX]);

    const interpTransform = to([scrollX], (o) => {
        // curr scroll x on container (negative if above top, above elHeight if scrolled past)
        const x = -(top - o);

        // start animation when current scroll position is top of scroll container
        if (x < 0) {
            return `translate3d(0, 0, 0)`; // default transform x val
        }

        // stop animation when at end of scroll carousel
        else if (x > elHeight + window.innerHeight) {
            // element is not in view, currently below it.
            return `translate3d(${elHeight}, 0, 0)`;
        } else {
            return `translate3d(${-x}px, 0, 0)`;
        }
    });

    const [withinContainer, setWithinContainer] = useState(false);

    const listenToScroll = () => {
        const x = -(top - scrollY);

        if (x > elHeight - window.innerHeight) {
            setWithinContainer(false);
        } else {
            setWithinContainer(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => {
            window.removeEventListener('scroll', listenToScroll);
        };
    });

    return (
        <div
            //onMouseMove={onMouseMove}
            className="ScrollCarousel"
            ref={refHeight}
            style={{
                height: elHeight,
                opacity: withinContainer ? 1 : 0,
                transition: '.2s ease',
            }}
        >
            <Sticky style={{ position: !withinContainer && 'relative' }}>
                <div
                    className="sticky-box"
                    style={{ position: !withinContainer && 'relative' }}
                >
                    <animated.div
                        style={{ transform: interpTransform }}
                        className="transform-box"
                        ref={refTransform}
                    >
                        {children}
                    </animated.div>
                    <AnchorLink className="skip" href={`#philosophie`}>
                        SKIP
                    </AnchorLink>
                </div>
            </Sticky>
        </div>
    );
};

export default ScrollCarousel;
