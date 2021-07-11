import ImageSlider from './image-slider/ImageSlider';
import ArrowNavigation from './generics/ArrowNavigation';
import { GoProject } from 'react-icons/go';

const Projects = ({ images }) => {
    return (
        <div id="projekte" className="Projects main-container component">
            <ArrowNavigation component={'header'} direction={'up'} />
            <div>
                <div className="component-header">
                    <GoProject className="component-icon" />
                    <h1 className="component-title">Projekte</h1>
                    <p className="component-subtitle">
                        Sehen Sie hier durch einige ausgewählte Projekte.
                    </p>
                </div>
                <div className="component-content">
                    <ImageSlider images={images} />
                </div>
            </div>
            <ArrowNavigation component={'philosophie'} direction={'down'} />
        </div>
    );
};

export default Projects;
