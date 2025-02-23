import { Outlet, Link } from "react-router"

import './navigation.styles.css'
import ThemeToggle from "../../components/theme-toggle-button/theme-toggle-button.component"
import { useTheme } from "../../context/theme-context"

const Navigation = () => {

    const { theme } = useTheme();

    return (
        <>
            <div 
                className='navigation'
                style={{
                    borderBottom: theme === 'dark' ? '1px solid var(--border)' : '1px solid var(--border)' 
                }}    
            >
                <div className='nav-links-container'>
                    <Link 
                        className='nav-link home' 
                        to='/'
                        style={{
                            textShadow: theme === 'dark' ? '0 0 5px rgba(255,255,255,1)' : '0 0 5px rgba(24, 36, 58, 0.5)'
                        }}
                    >
                        5HIROKIT5U
                    </Link>
                    {/* <CountryFilter selectedCountry={selectCountry} onSelect={onSelect}/> */}
                    {/* <Link className='nav-link' to='/'>
                        ABOUT
                    </Link>
                    <Link className='nav-link' to='/'>
                        SIGN IN
                    </Link> */}
                    {/* <div className="main-filter-buttons">
                        <button>Language</button>
                    </div> */}
                    <div className="nav-search-and-toggle-theme">
                        {/* <input type="search" placeholder="Find a place" /> */}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
      
    )
  }

  export default Navigation 