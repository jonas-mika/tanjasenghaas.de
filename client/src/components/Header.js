import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = ({ links }) => {
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
    }

    if (windowWidth > 1200) {
        return (
            <div className="Navbar">
                <div className="navbar-regular">
                    {links.map((link) => {
                        return (
                            <div className="link">
                                <AnchorLink
                                    className="a unselectable"
                                    href={`#${link.toLowerCase()}`}
                                >
                                    {link}
                                </AnchorLink>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div className="Navbar">
                <div
                    className={menuActive ? 'burger-icon open' : 'burger-icon'}
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
                >
                    <div className="menu">
                        <div className="link">
                            <AnchorLink
                                className="a unselectable"
                                href="#projekte"
                            >
                                Projekte
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink
                                className="a unselectable"
                                href="#philosophie"
                            >
                                Philosophie
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink
                                className="a unselectable"
                                href="#kunden"
                            >
                                Kunden
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink
                                className="a unselectable"
                                href="#services"
                            >
                                Services
                            </AnchorLink>
                        </div>
                        <div className="link">
                            <AnchorLink
                                className="a unselectable"
                                href="#kontakt"
                            >
                                Kontakt
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const Header = ({ title, subtitle, links }) => {
    return (
        <div id="Header" className="Header main-container">
            <div className="logo">
                <div className="row unselectable">
                    {title.split('').map((letter) => {
                        if (letter === ' ') {
                            return <h2 style={{ padding: '0 3px' }}> </h2>;
                        }
                        return <h2>{letter}</h2>;
                    })}
                </div>
                <div className="row unselectable">
                    {subtitle.split('').map((letter) => {
                        if (letter === ' ') {
                            return <h4 style={{ padding: '0 3px' }}> </h4>;
                        }
                        return <h4>{letter}</h4>;
                    })}
                </div>
            </div>
            <Navbar links={links} />
        </div>
    );
};

export default Header;
