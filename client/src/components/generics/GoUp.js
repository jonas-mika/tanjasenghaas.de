import { IoIosArrowUp } from 'react-icons/io';

const GoUp = () => {
    return (
        <div
            className="GoUp icon"
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
        >
            <IoIosArrowUp id="icon" />
        </div>
    );
};

export default GoUp;
