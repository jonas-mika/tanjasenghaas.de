import InfoContainers from './generics/InfoContainers';
import ArrowNavigation from './generics/ArrowNavigation';

import { GiMeshNetwork } from 'react-icons/gi';

const data = [
    {
        icon: 'SiAdobeindesign',
        title: 'Branding',
        text: 'Entwicklung von Logos. Corporate Design. Webauftritt',
        link_text: 'Read More',
    },
    {
        icon: 'SiAdobeindesign',
        title: 'Workshops',
        text: 'Vorträge und workshops rund um das Thema Gestaltung und Magazinentwicklung. Online und Offline.',
        link_text: 'Read More',
    },
    {
        icon: 'SiAdobeindesign',
        title: 'Branding',
        text: 'Neuentwicklung und Überarbeitung von Magazinen, Broschüren und White Papers.',
        link_text: 'Read More',
    },
    {
        icon: 'SiAdobeindesign',
        title: 'Branding',
        text: 'Beratung zu grafischen und den damit relevanten organisatorischen Fragen in ihrem Unternehmen',
        link_text: 'Read More',
    },
];

const Services = () => {
    return (
        <div id="services" className="Services main-container component">
            <div>
                <div className="component-header">
                    <GiMeshNetwork className="component-icon" />
                    <h1 className="component-title">Dienstleistungen</h1>
                </div>
                <div className="component-content">
                    <InfoContainers data={data} />
                </div>
            </div>
        </div>
    );
};

export default Services;
