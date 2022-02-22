import InfoContainers from './generics/InfoContainers';

import { RiComputerFill } from 'react-icons/ri';

const Services = ({ services }) => {
    return (
        <div id="services" className="Services main-container component">
            <div>
                <div className="component-header">
                    <RiComputerFill className="component-icon" />
                    <h1 className="component-title">Leistungen</h1>
                </div>
                <div className="component-content">
                    <InfoContainers data={services} />
                </div>
            </div>
        </div>
    );
};

export default Services;
