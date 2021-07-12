import ImageSlider from './image-slider/ImageSlider';
import ArrowNavigation from './generics/ArrowNavigation';
import { GoProject } from 'react-icons/go';
import ScrollCarousel from './generics/ScrollCarousel';

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
                    <ScrollCarousel>
                        <div className="wrapper">
                            <div className="box">
                                <img
                                    src="https://picsum.photos/720/540/?image=88"
                                    alt=""
                                    className="img"
                                />
                            </div>
                            <div className="box box--narrower">
                                <img
                                    src="https://picsum.photos/720/540/?image=512"
                                    alt=""
                                    className="img"
                                />
                            </div>
                            {/* <div className="box">
          <img src="https://picsum.photos/720/540/?image=435" alt="" className="img" />
        </div> */}
                            {/* <div className="box box--narrower">
          <img src="https://picsum.photos/720/540/?image=840" alt="" className="img" />
        </div> */}
                            <div className="box">
                                <img
                                    src="https://picsum.photos/720/540/?image=472"
                                    alt=""
                                    className="img"
                                />
                            </div>
                        </div>
                    </ScrollCarousel>
                </div>
            </div>
            <ArrowNavigation component={'philosophie'} direction={'down'} />
        </div>
    );
};

export default Projects;
