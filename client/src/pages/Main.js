import Header from '../components/header/Header';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Philosophy from '../components/Philosophy';
import CustomerFeedback from '../components/CustomerFeedback';
import Services from '../components/Services';
import Contact from '../components/Contact';

import { SliderData } from '../components/image-slider/SliderData';

const Main = () => {
    return (
        <div classname="MainPage">
            <Header />
            <Landing />
            <Projects images={SliderData} />
            <Philosophy />
            <CustomerFeedback />
            <Services />
            <Contact />
        </div>
    );
};

export default Main;
