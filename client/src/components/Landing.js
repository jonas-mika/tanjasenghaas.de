import Slider from './image-slider/Slider';
import ArrowNavigation from './generics/ArrowNavigation';

const Landing = ({ projects }) => {
    const all_images = projects.map((project) => project.images).flat();

    return (
        <div className="Landing">
            <div className="text main-container">
                <h1>GUTES DESIGN LEBT</h1>
                <h3>
                    immer von einer Haltung. Es macht sich unsichtbar, es lässt
                    Dinge weg. Und doch – braucht es am Ende Details, die
                    Bildern und Texten eine Visualität und Typographie
                    verleihen. So wird Gestaltung lebendig. Mit Neugier,
                    Ästhetik und Stilsicherheit helfe ich auch Ihnen gerne bei
                    der Gestaltung und Konzeption in den Bereichen Editorial
                    Design, Corporate Design, Print und Webdesign.
                </h3>
                <div className="scroll-down">
                    <ArrowNavigation
                        component={'projekte'}
                        direction={'down'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
