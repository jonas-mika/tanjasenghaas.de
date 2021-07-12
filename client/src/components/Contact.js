import ContactForm from './generics/ContactForm';
import ArrowNavigation from './generics/ArrowNavigation';

import { AiOutlineMail } from 'react-icons/ai';
import tanja from '../assets/tanja2.jpg';

const Contact = () => {
    return (
        <div id="kontakt" className="Contact main-container component">
            <ArrowNavigation component={'services'} direction="up" />
            <div className="component-header">
                <AiOutlineMail className="component-icon" />
                <h1 className="component-title">Contact</h1>
            </div>
            <div className="component-content">
                <ContactForm
                    img={tanja}
                    alt={'tanja_portrait'}
                    email={'tanja.senghaas@web.de'}
                    phone={'+49 151 22543476'}
                    maps_link={
                        'https://www.google.com/maps/place/Horandstieg+30,+22559+Hamburg,+Germany/@53.5725334,9.7440649,17z/data=!3m1!4b1!4m5!3m4!1s0x47b182443d0d0855:0x69b61617b923fb05!8m2!3d53.5725334!4d9.7462536'
                    }
                />
            </div>
        </div>
    );
};

export default Contact;
