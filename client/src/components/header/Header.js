import Navbar from './Navbar';

const Header = () => {
    return (
        <div id="header" className="Header main-container">
            <div className="logo">
                <div className="header unselectable">
                    <h2>Tanja Senghaas Designs</h2>
                </div>
                <div className="subheader unselectable">
                    <h4>Creative Direction | Magazinentwicklung</h4>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;
