import ProjectPage from '../components/ProjectPage';
import { Route, Switch } from 'react-router-dom';

const Project = ({ projects }) => {
    return (
        <div className="Projects">
            <ProjectPage project={projects[0]} />
        </div>
    );
};

export default Project;
