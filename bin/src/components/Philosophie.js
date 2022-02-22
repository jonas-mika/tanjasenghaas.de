import { ImQuotesLeft } from 'react-icons/im';
import InfoContainers from './generics/InfoContainers';

const Philosophy = ({ philosophy_data }) => {
    return (
        <div id="philosophie" className="Philosophy main-container component">
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
        </div>
    );
};

export default Philosophy;
