import {
    TiSocialLinkedinCircular,
    TiSocialFacebookCircular,
    TiSocialGithubCircular,
} from 'react-icons/ti';

const Footer = () => {
    return (
        <div className="Footer main-container">
            <div className="links">
                <a
                    href="https://www.facebook.com/tanja.senghaas"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TiSocialFacebookCircular className="icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/tanja-senghaas-thomsen-1b224371/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TiSocialLinkedinCircular className="icon" />
                </a>
                <a
                    href="https://github.com/jonas-mika/tanjasenghaas.de"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TiSocialGithubCircular className="icon" />
                </a>
            </div>
            <h4>&copy; Tanja Senghaas Designs 2021</h4>
            <div className="links">
                <a href="/">
                    <p>Impressum</p>
                </a>
                <a href="/">
                    <p>AGBs</p>
                </a>
                <a href="/">
                    <p>Rechtliches</p>
                </a>
            </div>
        </div>
    );
};

export default Footer;
