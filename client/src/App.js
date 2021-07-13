// react imports
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favicon from 'react-favicon';
import Main from './pages/Main';
import ProjectPage from './pages/ProjectPage';

// scss styling
import './styles/index.scss';

// global config settings
import data from './assets/website-data.json';

// get
const title = data.title;
const favicon = data.favicon_url;
const projects = data.projects;

console.log(projects.length);

function App() {
    // set document title on every reload
    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <Router>
            <div className="App">
                <Favicon url={favicon} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <Main projects={projects} />}
                    />
                    {projects.map((project) => {
                        console.log(project.name.toLowerCase());
                        return (
                            <Route
                                path={`/projects/${project.name
                                    .toLowerCase()
                                    .replace(' ', '-')}`}
                                component={() => (
                                    <ProjectPage project={project} />
                                )}
                            />
                        );
                    })}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
