import { RiArrowDropLeftFill, RiArrowDropRightFill } from 'react-icons/ri';
import { useState, useEffect } from 'react';

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
];

const QuoteSlider = () => {
    const [current, setCurrent] = useState(0);
    const delay = 3000;

    useEffect(() => {
        setTimeout(nextSlide, delay);
        return () => {};
    });

    const computeTransform = () => {
        return -100 * current;
    };

    const nextSlide = () => {
        setCurrent(current === quotes.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? quotes.length - 1 : current - 1);
    };

    const goToSlide = (id) => {
        setCurrent(id);
    };

    return (
        <div className="QuoteSlider">
            <div className="wrapper">
                <RiArrowDropLeftFill className="icon" onClick={prevSlide} />
                <div className="slides">
                    <div
                        className="slides-row"
                        style={{
                            transform: `translate(${computeTransform()}%)`,
                        }}
                    >
                        {quotes.map((quote, index) => {
                            return (
                                <div className="slide" key={index}>
                                    <p>{quote.quote}</p>
                                    <h4>{quote.author}</h4>
                                    <h5>{quote.position}</h5>
                                    <h5>{quote.company}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <RiArrowDropRightFill className="icon" onClick={nextSlide} />
            </div>
            <div className="dots">
                {quotes.map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                current === index
                                    ? 'dot icon active'
                                    : 'dot icon'
                            }
                            onClick={() => {
                                goToSlide(index);
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuoteSlider;
