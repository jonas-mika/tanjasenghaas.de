// react imports
import { useEffect } from 'react';
import Main from './pages/Main';

// scss styling
import './styles/index.scss';

// global config settings
import config from './config.json';

function App() {
    // set document title on every reload
    useEffect(() => {
        document.title = config.title;
    }, []);

    return (
        <div className="App">
            <Main />
        </div>
    );
}

export default App;
