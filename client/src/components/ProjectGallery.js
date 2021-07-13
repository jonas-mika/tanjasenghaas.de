import { GoProject } from 'react-icons/go';
import ScrollCarousel from './generics/ScrollCarousel';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
    console.log('received', projects);
    return (
        <div id="projekte" className="Projects main-container component">
            <div>
                <div className="component-header">
                    <GoProject className="component-icon" />
                    <h1 className="component-title">Projekte</h1>
                    <p className="component-subtitle"></p>
                </div>
                <div className="component-content">
                    <ScrollCarousel>
                        {projects.map((project) =>
                            project.images.map((img) => {
                                return (
                                    <Link
                                        className="box"
                                        to={`/projects/${img.name
                                            .slice(0, -5)
                                            .toLowerCase()}`}
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
                                        <h5>{img.description}</h5>
                                    </Link>
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
