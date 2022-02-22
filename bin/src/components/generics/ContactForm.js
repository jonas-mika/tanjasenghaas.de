import { useState } from 'react';
import { useForm } from 'react-hook-form';
import twilio from '../../twilio.json';
import axios from 'axios';
import qs from 'qs';

const ContactForm = ({ img, img_alt, email, phone, maps_link }) => {
    const [sentMessage, setSentMessage] = useState(false);

    const { accountSid, authToken, outNumber, inNumber } = twilio;

    const sendMessage = async (sid, token, message, from, to) => {
        await axios.post(
            'https://api.twilio.com/2010-04-01/Accounts/' +
                sid +
                '/Messages.json',
            qs.stringify({
                Body: message,
                From: from,
                To: to,
            }),
            {
                auth: {
                    username: sid,
                    password: token,
                },
            }
        );
    };

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        // send message
        const message = `\n\nNEUE NACHRICHT\n--------------\nName: ${data.name}\nMail: ${data.mail}\n\n${data.message}
		`;
        sendMessage(accountSid, authToken, message, outNumber, inNumber);
        console.log('sent message');

        // reset input values
        reset({ name: '', mail: '', message: '' });
        // show confirmation
        setSentMessage(true);
        const timeId = setTimeout(() => {
            setSentMessage(false);
        }, 5000);
        return () => {
            clearTimeout(timeId);
        };
    };

    return (
        <div className="ContactForm">
            <div className="wrapper">
                <div className="contact-image">
                    <img src={img} alt={img_alt} />
                </div>
                <div className="contact-form">
                    <h3>Ich freue mich über ihre Nachricht!</h3>
                    <div className="contact-links">
                        <a href={`mailto:${email}`}>tanja.senghaas@web.de</a>
                        <a href={maps_link} target="noopener">
                            Horandstieg 30, 22559 HH
                        </a>
                        <a href={`tel:${phone}`} target="noopener">
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
                        <input
                            id="submit"
                            type="submit"
                            style={{ zIndex: 1 }}
                        />
                        {sentMessage && (
                            <p className="user-message">
                                Danke für ihre Nachricht. Ich melde mich so
                                schnell wie möglich!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
