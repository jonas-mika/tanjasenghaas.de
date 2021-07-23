// react imports
import { useEffect } from 'react';
// import { isMobile } from 'react-device-detect';
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

function App() {
    // set document title on every reload
    useEffect(() => {
        document.title = title;
    }, []);

    /*
    useEffect(() => {
        const handleScrollY = () => {
            window.scroll(0, window.pageYOffset);
        };
        window.addEventListener('scroll', handleScrollY, false);

        return () => window.removeEventListener('scroll', handleScrollY, false);
    });
	*/

    useEffect(() => {
        const classes = document.body.classList;
        let timer = 0;

        const stopTransition = () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            } else classes.add('stop-transitions');

            timer = setTimeout(() => {
                classes.remove('stop-transitions');
                timer = null;
            }, 100);
        };
        window.addEventListener('resize', stopTransition);
        return () => window.removeEventListener('resize', stopTransition);
    }, []);

    return (
        <Router>
            <div className="App">
                <Favicon url={favicon} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <Main data={data} />}
                    />
                    {projects.map((project) => {
                        return (
                            <Route
                                key={project.name.toLowerCase()}
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
