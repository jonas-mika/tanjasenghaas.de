import Header from '../components/header/Header';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Philosophy from '../components/Philosophy';
import CustomerFeedback from '../components/CustomerFeedback';

import { SliderData } from '../components/image-slider/SliderData';

const main = () => {
    return (
        <div classname="mainpage">
            <Header />
            <Landing />
            <Projects images={SliderData} />
            <Philosophy />
            <CustomerFeedback />
        </div>
    );
};

export default main;
