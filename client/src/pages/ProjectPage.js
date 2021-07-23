import { Link } from 'react-router-dom';
import ImageSlider from '../components/generics/ImageSlider';

const ProjectPage = ({ project }) => {
    const project_imgs = project.images.map(
        (image) => `/assets/images/${image.name.slice(0, -5)}/${image.name}`
    );

    return (
        <div className="ProjectPage">
            <div className="container">
                <div className="image-slider">
                    <ImageSlider images={project_imgs} />
                </div>
                <div className="content">
                    <div className="header">
                        <h1>{project.name}</h1>
                        <h4>{project.date}</h4>
                        <p>{project.description})</p>
                    </div>
                    <Link to="/">
                        <button className="button">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
