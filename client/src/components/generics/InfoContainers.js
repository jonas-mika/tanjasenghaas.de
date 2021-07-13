import blob_blue from '../../assets/icons/blob_blue.svg';
import blob_orange from '../../assets/icons/blob_orange.svg';
import * as Icons from 'react-icons/si';

const blobs = [blob_blue, blob_orange];

const InfoContainers = ({ data }) => {
    return (
        <div className="InfoContainers main-container">
            {data.map((data, index) => {
                const Icon = Icons[data.icon];
                return (
                    <div className="column">
                        <img
                            className="blob"
                            src={blobs[index % blobs.length]}
                            alt="blob"
                        />
                        <div className="column-content">
                            <Icon className="content-icon" />
                            <h3>{data.title}</h3>
                            <h4>{data.text}</h4>
                        </div>
                        <h6 href="/" className="read-more">
                            Read More
                        </h6>
                    </div>
                );
            })}
        </div>
    );
};

export default InfoContainers;