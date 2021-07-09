import { useState, useEffect } from 'react';
import Slider from './slider/Slider';
import { IoIosArrowDown } from 'react-icons/io';

const Landing = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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
        window.scrollTo({ top: windowHeight, behavior: 'smooth' });
    };

    return (
        <div className="Landing">
            <div className="text">
                <h1 className="landing-header">GUTES DESIGN</h1>
                <h1 className="landing-header">LEBT</h1>
                <div className="paragraph">
                    <p>
                        Immer von einer Haltung. Es macht sich unsichtbar, es
                        lässt Dinge weg. Und doch – braucht es am Ende Details,
                        die Bildern und Texten eine Visualität und Typographie
                        verleihen. So wird Gestaltung lebendig.
                    </p>
                    <p>
                        Mit Neugier, Ästhetik und Stilsicherheit helfe ich auch
                        Ihnen gerne bei der Gestaltung und Konzeption in den
                        Bereichen Editorial Design, Corporate Design, Print und
                        Webdesign.
                    </p>
                </div>
            </div>
            <Slider showArrows={false} />
            <IoIosArrowDown className="icon" onClick={scrollDown} />
        </div>
    );
};

export default Landing;
