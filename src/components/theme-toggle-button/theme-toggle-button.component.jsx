import { useTheme } from '../../context/theme-context';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}
        style={{
            background:"none",
            border:"none",
            cursor:"pointer",
            height:"33px",
            width:"33px"
        }}
    >
      {theme === 'light' ? 
      <MdDarkMode 
        style={{
          height:"33px",
          width:"33px",
          color: 'rgba(24, 36, 58, 0.8)'
        }}
      /> 
      : 
        <MdLightMode 
            style={{
              height:"33px",
              width:"33px",
              color:"white"
            }}
        />}
    </button>
  );
};

export default ThemeToggle;