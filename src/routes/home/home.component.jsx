
import { useState, useEffect } from "react";

import About from "../about/about.component";
import LogoAnimation from "../../components/intro-logo-animation/intro-logo-animation.component";

import './home.styles.css'

const Home = () => {
    const [showAnimation, setShowAnimation] = useState(true);
    
    useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 2500); // Animation lasts 3s
    return () => clearTimeout(timer);
    }, []);

  return (
    <div>
        <div className={`home-container ${showAnimation ? "fade-in" : "slide-in"}`}>
            {showAnimation ? <LogoAnimation /> : <About />}
        </div>
    </div>
  );
}

export default Home;
