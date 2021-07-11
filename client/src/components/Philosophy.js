import { ImQuotesLeft } from 'react-icons/im';
import { SiAdobeindesign } from 'react-icons/si';
import ArrowNavigation from './generics/ArrowNavigation';
import InfoContainers from './generics/InfoContainers';

const philosophy_data = [
    {
        icon: 'SiAdobeindesign',
        title: 'Editorial Design',
        text: 'Durch den Blick auf das große Ganze unterstützt und bestimmt das Visuelle den Inhalt und prägt wie nebenbei das gesamte Erscheinungsbild.',
        link_text: 'Read More',
    },
    {
        icon: 'SiAdobephotoshop',
        title: 'Artdirektion',
        text: 'Die kreative Umsetzung und Begleitung aller Produktionsvorgänge fußt auf einer künstlerischen Verantwortung.',
        link_text: 'Read More',
    },
    {
        icon: 'SiAdobelightroomcc',
        title: 'Grafikdesign',
        text: 'Deren Komposition lässt gedankliche Zusammenhänge in visuell erfahrbarem Kontext entstehen und erlebbar machen.',
        link_text: 'Read More',
    },
];

const Philosophy = () => {
    return (
        <div id="philosophie" className="Philosophy main-container component">
            <ArrowNavigation id={3} direction={'up'} />
            <div>
                <div className="component-header">
                    <ImQuotesLeft className="component-icon" />
                    <h1 className="component-title">Meine Philosophie</h1>
                    <p className="component-subtitle">
                        Als diplomierte Grafikdesignerin arbeite ich seit mehr
                        als 20 Jahrenin verantwortlichen Positionen als Art- und
                        Kreativ Direktorin. Seit vielen Jahren entwickle und
                        designe ich Magazine für verschiedene Verlage und
                        Unternehmen und erarbeite neue visuelle Konzepte.
                    </p>
                </div>
                <div className="component-content">
                    <InfoContainers data={philosophy_data} />
                </div>
            </div>
            <ArrowNavigation id={3} direction={'down'} />
        </div>
    );
};

export default Philosophy;
