import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Slide = ({ image, alt }) => {
    return (
        <div className="Slide" style={{ position: 'relative' }}>
            <img src={image} alt={alt} />
        </div>
    );
};

const ImageSlider = ({ images }) => {
    return (
        <div className="ImageSlider">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="wrapper">
                    {images.map((image, index) => {
                        return (
                            <Slide
                                key={index}
                                image={image.url}
                                alt={image.alt}
                            ></Slide>
                        );
                    })}
                </div>
                <div className="arrows">
                    <MdKeyboardArrowLeft className="left-arrow" />
                    <MdKeyboardArrowRight className="right-arrow" />
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
