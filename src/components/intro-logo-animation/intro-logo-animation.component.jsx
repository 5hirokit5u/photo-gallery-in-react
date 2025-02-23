/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './intro-logo-animation.styles.css'

const LogoAnimation = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // After the video duration, trigger fade-out
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out effect
    }, 1500); // Duration of logo animation (adjust based on video length)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // When fadeOut is true, start fading out
    if (fadeOut) {
      // Wait until fade-out transition is completed before calling onComplete
      const fadeOutDuration = 2; // Duration of the fade-out
      const fadeOutTimer = setTimeout(() => {
        setAnimationFinished(true); // Mark animation as finished
      }, fadeOutDuration * 500); // Convert seconds to milliseconds

      return () => clearTimeout(fadeOutTimer);
    }
  }, [fadeOut]);

  useEffect(() => {
    if (animationFinished && onComplete) {
      onComplete(); // Trigger onComplete callback after fade-out is done
    }
  }, [animationFinished, onComplete]);

  return (
    <div className="logo-container">
        <motion.div
            initial={{ opacity: 0 }} // Start with logo invisible
            animate={{ opacity: fadeOut ? 0 : 1 }} // Fade out if fadeOut is true, else fade in
            transition={{ opacity: { duration: 1 } }} // Duration for fade-out
            className="video-container"
        >
            <video
                src="/src/assets/kitsu_animation_intro.mp4"
                autoPlay
                muted
                playsInline
                style={{ width: "450px", height: "auto" }}
                className="logo-video"
            />
        </motion.div>
    </div>
  );
};


export default LogoAnimation;