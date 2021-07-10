import { ImQuotesLeft } from 'react-icons/im';
import { SiAdobeindesign } from 'react-icons/si';
import TextSlider from './generics/TextSlider';
import ArrowNavigation from './generics/ArrowNavigation';

const Philosophy = () => {
    return (
        <div className="Philosophy main-container component">
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
                    <div className="container">
                        <div className="column">
                            <div className="main">
                                <SiAdobeindesign className="icon" />
                                <h3>Editorial Design</h3>
                                <TextSlider
                                    texts={[
                                        'Rhythmus',
                                        'Charakter',
                                        'Komplexität greifbar machen',
                                    ]}
                                />
                                <p>
                                    Durch den Blick auf das große Ganze
                                    unterstützt und bestimmt das Visuelle den
                                    Inhalt und prägt wie nebenbei das gesamte
                                    Erscheinungsbild.
                                </p>
                            </div>
                            <a href="/">Read More.</a>
                        </div>
                        <div className="column">
                            <div className="main">
                                <SiAdobeindesign className="icon" />
                                <h3>Artdirektion</h3>
                                <h4>
                                    Stilbewusstsein <br></br> Komplexität{' '}
                                    <br></br> hohe Qualität und deren Kontrolle
                                </h4>
                                <p>
                                    Die kreative Umsetzung und Begleitung aller
                                    Produktionsvorgänge fußt auf einer
                                    künstlerischen Verantwortung.
                                </p>
                            </div>
                            <a href="/">Read More.</a>
                        </div>
                        <div className="column">
                            <div className="main">
                                <SiAdobeindesign className="icon" />
                                <h3>Grafikdesign</h3>
                                <p>
                                    Typographie – Bildsprache – Farbenvielfalt –
                                    Materialität.<br></br> Deren Komposition
                                    lässt gedankliche Zusammenhänge in visuell
                                    erfahrbarem Kontext entstehen und erlebbar
                                    machen.
                                </p>
                            </div>
                            <a href="/">Read More.</a>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowNavigation id={3} direction={'down'} />
        </div>
    );
};

export default Philosophy;
