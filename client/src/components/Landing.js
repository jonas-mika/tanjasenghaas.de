import Slider from './image-slider/Slider';
import ArrowNavigation from './generics/ArrowNavigation';

const arrowStyles = {
    marginTop: '100px',
};

const Landing = () => {
    return (
        <div className="Landing">
            <div className="text main-container">
                <h1>GUTES DESIGN LEBT</h1>
                <p>
                    Immer von einer Haltung. Es macht sich unsichtbar, es lässt
                    Dinge weg. Und doch – braucht es am Ende Details, die
                    Bildern und Texten eine Visualität und Typographie
                    verleihen. So wird Gestaltung lebendig. Mit Neugier,
                    Ästhetik und Stilsicherheit helfe ich auch Ihnen gerne bei
                    der Gestaltung und Konzeption in den Bereichen Editorial
                    Design, Corporate Design, Print und Webdesign.
                </p>
                <ArrowNavigation
                    style={arrowStyles}
                    component={'projekte'}
                    direction={'down'}
                />
                <p className="scroll-down-text">Scroll Down</p>
            </div>
            <Slider showArrows={false} />
        </div>
    );
};

export default Landing;
