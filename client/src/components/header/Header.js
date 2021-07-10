import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="Header main-container">
            <div className="logo">
                <div className="header">
                    <h2>Tanja Senghaas Designs</h2>
                </div>
                <div className="subheader">
                    <h4>Creative Direction | Magazinentwicklung</h4>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;
