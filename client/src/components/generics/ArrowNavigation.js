import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ArrowNavigation = ({ component, direction, style }) => {
    if (direction === 'up') {
        return (
            <div className="ScrollUp" style={style}>
                <AnchorLink href={`#${component}`}>
                    <IoIosArrowUp className="icon" />
                </AnchorLink>
            </div>
        );
    } else if (direction === 'down') {
        return (
            <div className="ScrollDown" style={style}>
                <AnchorLink href={`#${component}`}>
                    <IoIosArrowDown className="icon" />
                </AnchorLink>
            </div>
        );
    } else {
        return <div>Something went wrong.</div>;
    }
};

export default ArrowNavigation;
