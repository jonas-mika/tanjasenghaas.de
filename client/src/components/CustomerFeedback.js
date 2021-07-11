import ArrowNavigation from './generics/ArrowNavigation';
import QuoteSlider from './generics/QuoteSlider';
import { ImBubble } from 'react-icons/im';

const quotes = [
    {
        quote: 'Kreativ und organisiert – Tanja hat diese seltene Kombination! Sie kann sich nicht nur hervorragend in Zeitgeistthemen eindenken und die passende, eigenständige und neue Optik dazu erfinden, sie ist einfach ein großartiger Sparringspartner, um Ideen weiterzuentwickeln und komplexe Formate  zu strukturieren. Tanja taucht in jedes Thema komplett ein, bleibt dran, bis die Optik wirklich sitzt – es ist dieses ‚Ein kleines Stück weiter gehen als üblich‘, das Tanja auszeichnet und jeden ihrer Entwürfe so außergewöhnlich macht.',
        author: 'Sinja Schütte',
        position: 'Chefredakteurin Living at Home, Landlust, Hygge, Molly',
        company: 'Deutsche Medien Manufaktur',
    },
    {
        quote: 'Wer eine ungemein kreative und meinungsstarke Sparringspartnerin sucht, ist bei Tanja genau richtig. Ich hatte das Vergnügen, gemeinsam mit ihr,ihrem Team und der GEOkompakt-Redaktion das optische und inhaltliche Konzept für das Magazin „Wohllebens Welt“ zu entwickeln.Wir hatten intern daran schon viele Monate lang gearbeitet, ohne aber wirklich voranzukommen – erst Tanjas sowohl visueller als auch inhaltlicher Input brachte uns auf den richtigen Weg,und so entstand ein Magazin mit einer einzigartigen Bildsprache.',
        author: 'Michael Schaper',
        position: 'Chefredakteur Geo Wissen',
        company: 'Gruner + Jahr',
    },
    {
        quote: 'Für mich gehört Tanja Senghaas zu den großen Talenten der Magazingestaltung. Und das seit mehreren Jahrzehnten. Inhaltliches Einfühlungsvermögen, eine große visuelle Kraft, handwerkliche Präzision und Geschwindigkeit zeichnen sie aus. Tanja verliert nie die Nerven, behält auch unter größtem Stress ihre gute Laune. Aber was besonders wichtig ist: Die unbedingte Leidenschaft für das Sujet, ob nun Special Interest, Lifestyle-Magazin, Illustrierte oder Corporate Media – stets bestimmen Phantasie und Innovation ihre Arbeit. Tanja ahnt schon heute, was morgen cool sein wird.',
        author: 'Prof. Dr. Thomas Garms',
        position: 'Head of Editorial Team',
        company: 'Jahreszeiten Verlag Hamburg',
    },
    {
        quote: 'Tanja Senghaas hat mit viel Gespür das Logo für unsere Praxis entworfen. Die Zusammenarbeit war sehr inspirierend und unkompliziert. Wir sind sehr glücklich mit unserem neuen Erscheinungsbild und können Frau Senghaas nur empfehlen!',
        author: 'Kristin Nowak',
        position: 'Chefärztin',
        company: 'Neurologische Praxis Kristin Nowak',
    },
    {
        quote: 'Ich durfte mit Tanja tolle Projekte machen und vermisse sowohl Tanja als auch die Projekte. Ich würde mit Tanja auch Deppen-Projekte machen, einfach um wieder mit ihr arbeiten zu dürfen. Vier Worte: Sie. Hat. Es. Drauf.',
        author: 'York Pijahn',
        position: 'Gründer und Partner',
        company: 'Narrative Impact',
    },
];

const CustomerFeedback = () => {
    return (
        <div id="kunden" className="CustomerFeedback main-container component">
            <ArrowNavigation id={4} direction={'up'} />
            <div>
                <div className="component-header">
                    <ImBubble className="component-icon" />
                    <h1 className="component-title">Kundenfeedback</h1>
                </div>
                <div className="component-content">
                    <QuoteSlider quotes={quotes} showNavigation={false} />
                </div>
            </div>
            <ArrowNavigation id={4} direction={'down'} />
        </div>
    );
};

export default CustomerFeedback;
