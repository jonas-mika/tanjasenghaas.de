import { Link } from 'react-router-dom';

const ProjectPage = ({ project }) => {
    return (
        <div className="ProjectPage">
            <div className="container">
                <div className="image">
                    <img
                        src={`/assets/images/${project.images[0].name
                            .slice(0, -5)
                            .toLowerCase()}/${project.images[0].name}`}
                        alt={project.name}
                    />
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
