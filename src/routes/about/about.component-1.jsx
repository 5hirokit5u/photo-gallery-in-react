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
          <p className="about-text">
            {`This website is a personal React project showcasing a photo gallery from my travels in Japan and other countries.
            Each picture has a description, offering a glimpse into my experiences.
            There's still much to add: a sign-in page, interactive features, and more information.
            Some content is incomplete, and many more photos and videos will be uploaded.
            Right now, it's just a front-end version, but I plan to integrate a database in the future.
            This is just the first version, testing things out.`}
          </p>
          <button className="language-button" onClick={() => handleLanguageSelect("en")}>
            English
          </button>
        </div>

        {/* Slovak Section */}
        <div className="about-section">
          <p className="about-text">
            {`Táto webová stránka je môj osobný React projekt, kde prezentujem galériu fotografií z mojich ciest po Japonsku a ďalších krajinách.
            Každá fotografia je doplnená popisom, ktorý ponúka pohľad na moje zážitky.
            Ešte mám veľa plánov na rozšírenie stránky, vrátane prihlasovacej stránky, interaktívnych funkcií a podrobnejších informácií.
            Niektorý obsah ešte nie je úplne dokončený a v budúcnosti pribudne mnoho ďalších fotografií aj videí.
            Momentálne ide len o front-end verziu, ale neskôr plánujem pridať databázu.
            Toto je prvá verzia – skúšobná fáza.`}
          </p>
          <button className="language-button" onClick={() => handleLanguageSelect("sk")}>
            Slovenčina
          </button>
        </div>

        {/* Bulgarian Section */}
        <div className="about-section">
          <p className="about-text">
            {`Този уебсайт е мой личен React проект, в който представям фото галерия от пътуванията си в Япония и други държави.
            Всяка снимка е придружена от описание, което дава представа за моите преживявания.
            Все още има много неща, които искам да добавя, като страница за влизане, интерактивни функции и по-подробна информация.
            Някои части от съдържанието не са напълно завършени, а в бъдеще ще бъдат добавени още снимки и видеа.
            В момента сайтът е само фронт-енд версия, но възнамерявам да интегрирам база данни.
            Това е само първата версия – експериментален етап.`}
          </p>
          <button className="language-button" onClick={() => handleLanguageSelect("bg")}>
            български
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
