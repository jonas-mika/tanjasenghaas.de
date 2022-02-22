import * as Icons from 'react-icons/all';
import { motion } from 'framer-motion';

const InfoContainers = ({ data, showLinks }) => {
    return (
        <div className="InfoContainers main-container">
            {data.map((data, index) => {
                const Icon = Icons[data.icon];
                return (
                    <div key={index} className="column">
                        <div className="column-content">
                            <div className="icon-container">
                                <div className="blob"></div>
                                {data.icon && <Icon className="content-icon" />}
                            </div>
                            <h3 className="unselectable">{data.title}</h3>
                            <h4 className="unselectable">{data.text}</h4>
                        </div>
                        {showLinks && (
                            <h6 href="/" className="read-more">
                                Read More
                            </h6>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default InfoContainers;
