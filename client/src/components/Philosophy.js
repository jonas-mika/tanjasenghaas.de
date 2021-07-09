import { ImQuotesLeft } from 'react-icons/im';
import { SiAdobeindesign } from 'react-icons/si';

const Philosophy = () => {
    return (
        <div className="Philosophy main-container component">
            <div className="header">
                <ImQuotesLeft className="icon" />
                <h1>Meine Philosophie</h1>
                <p>
                    Als diplomierte Grafikdesignerin arbeite ich seit mehr als
                    20 Jahrenin verantwortlichen Positionen als Art- und Kreativ
                    Direktorin. Seit vielen Jahren entwickle und designe ich
                    Magazine für verschiedene Verlage und Unternehmen und
                    erarbeite neue visuelle Konzepte.
                </p>
            </div>
            <div className="container">
                <div className="column">
                    <div className="main">
                        <SiAdobeindesign className="icon" />
                        <h3>Editorial Design</h3>
                        <p>
                            Rhythmus – Charakter – leichtes Erfassen komplexer
                            Zusammenhänge. <br></br>Durch den Blick auf das
                            große Ganze unterstützt und bestimmt das Visuelle
                            den Inhalt und prägt wie nebenbei das gesamte
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
                            Stilbewusstsein <br></br> Komplexität <br></br> hohe
                            Qualität und deren Kontrolle
                        </h4>
                        <p>
                            Die kreative Umsetzung und Begleitung aller
                            Produktionsvorgänge fußt auf einer künstlerischen
                            Verantwortung.
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
                            Materialität.<br></br> Deren Komposition lässt
                            gedankliche Zusammenhänge in visuell erfahrbarem
                            Kontext entstehen und erlebbar machen.
                        </p>
                    </div>
                    <a href="/">Read More.</a>
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
