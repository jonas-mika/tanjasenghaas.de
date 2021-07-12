// react imports
import { useEffect } from 'react';
import Favicon from 'react-favicon';
import Main from './pages/Main';

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
        <div className="App">
            <Favicon url={favicon} />
            <Main projects={projects} />
        </div>
    );
}

export default App;
