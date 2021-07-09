import Slider from './slider/Slider';

const Landing = () => {
    return (
        <div className="Landing">
            <div className="text">
                <h1 className="landing-header">GUTES DESIGN</h1>
                <h1 className="landing-header">LEBT</h1>
                <div className="paragraph">
                    <p>
                        Immer von einer Haltung. Es macht sich unsichtbar, es
                        lässt Dinge weg. Und doch – braucht es am Ende Details,
                        die Bildern und Texten eine Visualität und Typographie
                        verleihen. So wird Gestaltung lebendig.
                    </p>
                    <p>
                        Mit Neugier, Ästhetik und Stilsicherheit helfe ich auch
                        Ihnen gerne bei der Gestaltung und Konzeption in den
                        Bereichen Editorial Design, Corporate Design, Print und
                        Webdesign.
                    </p>
                </div>
            </div>
            <Slider showArrows={false} />
        </div>
    );
};

export default Landing;
