import Header from '../components/header/Header';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Philosophy from '../components/Philosophy';
import CustomerFeedback from '../components/CustomerFeedback';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Main = ({ projects }) => {
    return (
        <div classname="MainPage">
            <Header />
            <Landing projects={projects} />
            <Projects projects={projects} />
            <Philosophy />
            <CustomerFeedback />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Main;
