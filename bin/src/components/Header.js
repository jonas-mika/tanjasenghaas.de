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
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'unset';
    }

    if (windowWidth > 1200) {
        return (
            <div className="Navbar">
                <div className="menu">
                    {links.map((link, index) => {
                        return (
                            <div key={index} className="link">
                                <AnchorLink
                                    className="a unselectable"
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setMenuActive(false)}
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
                        {links.map((link, index) => {
                            return (
                                <div key={index} className="link">
                                    <AnchorLink
                                        className="a unselectable"
                                        href={`#${link.toLowerCase()}`}
                                        onClick={() => setMenuActive(false)}
                                    >
                                        {link}
                                    </AnchorLink>
                                </div>
                            );
                        })}
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
                    {title.split('').map((letter, index) => {
                        if (letter === ' ') {
                            return (
                                <h2 key={index} style={{ padding: '0 3px' }}>
                                    {' '}
                                </h2>
                            );
                        }
                        return <h2 key={index}>{letter}</h2>;
                    })}
                </div>
                <div className="row unselectable">
                    {subtitle.split('').map((letter, index) => {
                        if (letter === ' ') {
                            return (
                                <h4 key={index} style={{ padding: '0 3px' }}>
                                    {' '}
                                </h4>
                            );
                        }
                        return <h4 key={index}>{letter}</h4>;
                    })}
                </div>
            </div>
            <Navbar links={links} />
        </div>
    );
};

export default Header;
