import { useEffect, useRef } from 'react';
import { useSpring, animated, to } from 'react-spring';
import useWindowScroll from '@react-hook/window-scroll';
import useScrollWidth from './useScrollWidth';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ScrollCarousel = ({ children }) => {
    const refHeight = useRef(null);
    const refTransform = useRef(null);

    const { scrollWidth } = useScrollWidth(refTransform);

    // logging values to, DEBUG
    useEffect(() => {
        console.log('ScrollY: ', scrollY);
        console.log('Top: ', top);
        console.log('Width: ', width);
        console.log('elHeight: ', elHeight);
    });

    // current y scroll position (updates at 60fps using external hook)
    const scrollY = useWindowScroll(500);

    // get top and height of carousel object
    const top = refHeight.current ? refHeight.current.offsetTop : 0;
    const width = refHeight.current ? refHeight.current.offsetWidth : 0;

    // get width of
    const elHeight = scrollWidth; // scroll away when final viewport width is 0.05 done

    // define useSpring hook with object st, xy, initially set to 0, and [0, 0], can be modified using set() handler
    const [{ scrollX, xy }, setScrollX] = useSpring(() => ({
        scrollX: 0,
        xy: [0, 0],
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
        if (x > elHeight) {
            // element is not in view, currently below it.
            return `translate3d(${elHeight}, 0, 0)`;
        }

        // else animate as usual
        return `translate3d(${-x}px, 0, 0)`;
    });

    /*const onMouseMove = useCallback(
        ({ clientX: x, clientY: y }) =>
            set({
                xy: [x - window.innerWidth / 2, y - window.innerHeight / 2],
            }),
        []
    );*/

    return (
        <div
            //onMouseMove={onMouseMove}
            className="ScrollCarousel"
            ref={refHeight}
            style={{ height: elHeight }}
        >
            <div className="sticky-box">
                <animated.div
                    style={{ transform: interpTransform }}
                    className="transform-box"
                    ref={refTransform}
                >
                    {children}
                </animated.div>
                <AnchorLink className="skip a" href={`#philosophie`}>
                    SKIP
                </AnchorLink>
            </div>
        </div>
    );
};

export default ScrollCarousel;
