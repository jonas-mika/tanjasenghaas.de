import { IoMdPhotos } from 'react-icons/io';
import ScrollCarousel from './generics/ScrollCarousel';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
    return (
        <div id="projekte" className="Projects main-container component">
            <div>
                <div className="component-header">
                    <IoMdPhotos className="component-icon" />
                    <h1 className="component-title">Projekte</h1>
                    <p className="component-subtitle"></p>
                </div>
                <div className="component-content">
                    <ScrollCarousel>
                        {projects.map((project) =>
                            project.images.map((img) => {
                                return (
                                    <div
                                        key={img.name.slice(0, -4)}
                                        className="box"
                                    >
                                        <img
                                            src={`/assets/images/${img.name.slice(
                                                0,
                                                -5
                                            )}/${img.name}`}
                                            alt={img.name}
                                            className="img"
                                        />
                                        <h4>
                                            {img.name
                                                .slice(0, -5)
                                                .toUpperCase()}
                                        </h4>
                                        <Link
                                            to={`/projects/${img.name
                                                .slice(0, -5)
                                                .toLowerCase()}`}
                                            className="carousel-link"
                                        >
                                            Read More.
                                        </Link>
                                    </div>
                                );
                            })
                        )}
                    </ScrollCarousel>
                </div>
            </div>
        </div>
    );
};

export default Projects;
