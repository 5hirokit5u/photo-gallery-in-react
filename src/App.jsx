import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/theme-context';

// import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Dashboard from "./components/dashboard/dashboard.component";

import "./main.css";
import { LanguageProvider } from "./context/language-context";

const App = () => {

  return (

      <LanguageProvider>
        <ThemeProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<Navigation />}>
              <Route path='/:country/photogallery' element={<Dashboard />}/>
              {/* <Route path='/:country/mapview' element={<Dashboard />}/> */}
            </Route>
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
  );
};

export default App;
