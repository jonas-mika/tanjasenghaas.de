import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (menuActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    if (windowWidth > 1200) {
        return (
            <div className="Navbar">
                <div className="navbar-regular">
                    <div className="link">
                        <AnchorLink className="a" href="#projekte">
                            Projekte
                        </AnchorLink>
                    </div>
                    <div className="link">
                        <AnchorLink className="a" href="#philosophie">
                            Philosophie
                        </AnchorLink>
                    </div>
                    <div className="link">
                        <AnchorLink className="a" href="#kunden">
                            Kunden
                        </AnchorLink>
                    </div>
                    <div className="link">
                        <AnchorLink className="a" href="#services">
                            Services
                        </AnchorLink>
                    </div>
                    <div className="link">
                        <AnchorLink className="a" href="#kontakt">
                            Kontakt
                        </AnchorLink>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="Navbar">
                <div
                    className="burger-icon"
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                <div
                    className="menu-overlay"
                    style={
                        menuActive
                            ? { transform: 'translate(0%)' }
                            : { transform: 'translate(100%)' }
                    }
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <div className="menu">
                        <div className="link">
                            <AnchorLink className="a" href="#projekte">
                                Projekte
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink className="a" href="#philosophie">
                                Philosophie
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink className="a" href="#kunden">
                                Kunden
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink className="a" href="#services">
                                Services
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink className="a" href="#kontakt">
                                Kontakt
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;
