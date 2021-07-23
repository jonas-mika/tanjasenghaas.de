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
                        {projects.map((project) => {
                            return (
                                <div
                                    key={project.name.toLowerCase()}
                                    className="box"
                                >
                                    <img
                                        src={`/assets/images/${project.name
                                            .toLowerCase()
                                            .replace(' ', '-')}/${
                                            project.images[0].name
                                        }.webp`}
                                        alt={project.images[0].name}
                                        className="img"
                                    />
                                    <h4>{project.name.toUpperCase()}</h4>
                                    <Link
                                        to={`/projects/${project.name
                                            .toLowerCase()
                                            .replace(' ', '-')}`}
                                        className="carousel-link"
                                    >
                                        Read More.
                                    </Link>
                                </div>
                            );
                        })}
                    </ScrollCarousel>
                </div>
            </div>
        </div>
    );
};

export default Projects;
