/* eslint-disable react/prop-types */
import './dots-nav.styles.css'

const Dots = ({ currentIndex, setCurrentIndex, totalSlides}) => {
    return (
        <div className="dots">
            {Array.from({length: totalSlides}).map((_, index) => (
                <span
                    key={index}
                    className={index === currentIndex ? "dot active" : "dot"}
                    onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
    )
}

export default Dots