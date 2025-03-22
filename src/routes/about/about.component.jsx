import { useNavigate } from "react-router";
import { useLanguage } from "../../context/language-context";
import "./about.styles.css";

const About = () => {
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    navigate("/japan/photogallery");
  };

  return (
    <div className="about-container">
      <div className="about-sections">
        {/* English Section */}
        <div className="about-section">
          <button className="language-button" onClick={() => handleLanguageSelect("en")}>
            English
          </button>
        </div>

        {/* Slovak Section */}
        <div className="about-section">
          <button className="language-button" onClick={() => handleLanguageSelect("sk")}>
            Slovenčina
          </button>
        </div>

        {/* Bulgarian Section */}
        <div className="about-section">
          <button className="language-button" onClick={() => handleLanguageSelect("bg")}>
            български
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
