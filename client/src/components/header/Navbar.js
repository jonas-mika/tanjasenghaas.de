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

    if (windowWidth > 1200) {
        return (
            <div className="Navbar">
                <div className="navbar-regular">
                    <AnchorLink href="#projekte">Projekte</AnchorLink>
                    <AnchorLink href="#philosophie">Philosophie</AnchorLink>
                    <AnchorLink href="#kunden">Kunden</AnchorLink>
                    <AnchorLink href="#services">Services</AnchorLink>
                    <AnchorLink href="#kontakt">Kontakt</AnchorLink>
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
                {console.log(menuActive)}
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
                        <AnchorLink href="#projekte">Projekte</AnchorLink>
                        <AnchorLink href="#philosophie">Philosophie</AnchorLink>
                        <AnchorLink href="#kunden">Kunden</AnchorLink>
                        <AnchorLink href="#services">Services</AnchorLink>
                        <AnchorLink href="#kontakt">Kontakt</AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;
