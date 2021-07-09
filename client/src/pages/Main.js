import Header from '../components/Header';
import Landing from '../components/Landing';
import Philosophy from '../components/Philosophy';
import ScrollUp from '../components/ScrollUp';

const main = () => {
    return (
        <div classname="mainpage">
            <ScrollUp />
            <Header />
            <Landing />
            <Philosophy />
        </div>
    );
};

export default main;
