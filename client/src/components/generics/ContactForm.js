import { useForm } from 'react-hook-form';

const ContactForm = ({ img, img_alt, email, phone, maps_link }) => {
    /*const [name, setName] = useState('Name');
    const [mail, setMail] = useState('Mail');
    const [message, setMessage] = useState('Schreiben Sie hier...');

    const handleChange = (type, e) => {
        if (type === 'name') {
            setName(e.target.value);
        } else if (type === 'mail') {
            setMail(e.target.value);
        } else {
            setMessage(e.target.value);
        }
    }; */

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="ContactForm">
            <div className="wrapper">
                <div className="contact-image">
                    <img src={img} alt={img_alt} />
                </div>
                <div className="contact-form">
                    <h3>Schreiben Sie mir eine Nachricht!</h3>
                    <div className="contact-links">
                        <a
                            href={`mailto:${email}`}
                            onClick={() => console.log(email)}
                        >
                            tanja.senghaas@web.de
                        </a>
                        <a
                            href={maps_link}
                            target="_blank"
                            onClick={() => console.log('link to google')}
                        >
                            Horandstieg 30, 22559 HH
                        </a>
                        <a
                            href={`tel:${phone}`}
                            target="_blank"
                            onClick={() => console.log('+49 151 22543476')}
                        >
                            +49 151 22543476
                        </a>
                    </div>
                    <form
                        className="contact-inputs"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="row">
                            <input
                                {...register('name', { required: true })}
                                placeholder="Name"
                            />
                            <div className="line"></div>
                        </div>
                        <div className="row">
                            <input
                                {...register('mail', { required: true })}
                                placeholder="Mail"
                            />
                            <div className="line"></div>
                        </div>
                        <div className="row">
                            <textarea
                                name="message"
                                {...register('message')}
                                placeholder="Schreiben Sie mir..."
                            />
                            <div className="line"></div>
                        </div>
                        <input id="submit" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
