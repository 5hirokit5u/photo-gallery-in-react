/* eslint-disable react/prop-types */
import "./intro-slider-controls.styles.css";

const SliderControls = ({ nextSlide, prevSlide }) => {
    return (
        <div className="slider-controls">
            <button className="prev" onClick={prevSlide}>←</button>
            <button className="next" onClick={nextSlide}>⟶</button>
        </div>
    );
};

export default SliderControls;