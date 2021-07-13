import Header from '../components/header/Header';
import Landing from '../components/Landing';
import ProjectGallery from '../components/ProjectGallery';
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
            <ProjectGallery projects={projects} />
            <Philosophy />
            <CustomerFeedback />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Main;
