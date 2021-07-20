import Header from '../components/Header';
import Landing from '../components/Landing';
import Projekte from '../components/Projekte';
import Philosophie from '../components/Philosophie';
import Kunden from '../components/Kunden';
import Services from '../components/Services';
import Kontakt from '../components/Kontakt';
import Footer from '../components/Footer';
import GoUp from '../components/generics/GoUp';

const Main = ({ data }) => {
    return (
        <div className="Main">
            <Landing
                header_data={{
                    title: 'Tanja Senghaas Designs',
                    subtitle: 'Creative Direction | Magazinentwicklung',
                    links: [
                        'Projekte',
                        'Philosophie',
                        'Kunden',
                        'Services',
                        'Kontakt',
                    ],
                }}
            />
            <Projekte projects={data.projects} />
            <Philosophie />
            <Kunden quotes={data.quotes} />
            <Services />
            <Kontakt />
            <Footer />
            <GoUp />
        </div>
    );
};

export default Main;
