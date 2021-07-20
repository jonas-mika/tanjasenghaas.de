import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from './Header';

import { IoIosArrowDown } from 'react-icons/io';

const Landing = ({ header_data }) => {
    const { title, subtitle, links } = header_data;

    return (
        <div className="Landing">
            <Header title={title} subtitle={subtitle} links={links} />
            <div className="hero main-container">
                <h1>GUTES DESIGN LEBT</h1>
                <h3>
                    immer von einer Haltung. Es macht sich unsichtbar, es lässt
                    Dinge weg. Und doch – braucht es am Ende Details, die
                    Bildern und Texten eine Visualität und Typographie
                    verleihen. So wird Gestaltung lebendig. Mit Neugier,
                    Ästhetik und Stilsicherheit helfe ich auch Ihnen gerne bei
                    der Gestaltung und Konzeption in den Bereichen Editorial
                    Design, Corporate Design, Print und Webdesign.
                </h3>
                <div className="scroll-down-container">
                    <AnchorLink href={`#projekte`} className="icon">
                        <IoIosArrowDown className="icon" />
                    </AnchorLink>
                </div>
            </div>
        </div>
    );
};

export default Landing;
