/* eslint-disable react/prop-types */
import slides from '../../data/slides.json'
import './dashboard-country-filter.styles.css'

const CountryFilter = ({ selectedCountry, onSelect, language }) => {
    const countries = Object.keys(slides.en)
    
    return (
        <div className="filter-container"
        >
            <div className='country-filter-bar'>
            <select 
                value={selectedCountry} 
                onChange={(e) => onSelect(e.target.value)}
            >
                {countries.map((country) => (
                    <option key={country} value={country}>
                        {slides[language][country]}
                    </option>
                ))}
            </select>
        </div>
        </div>
        
    )
  }

  export default CountryFilter 