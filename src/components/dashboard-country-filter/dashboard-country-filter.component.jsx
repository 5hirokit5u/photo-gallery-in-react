/* eslint-disable react/prop-types */

import './dashboard-country-filter.styles.css'

const CountryFilter = ({ selectedCountry, onSelect }) => {
    const countries = ["Japan", "New Zealand", "Canada", "Europe", "World"]
    
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
                        {country}
                    </option>
                ))}
            </select>
        </div>
        </div>
        
    )
  }

  export default CountryFilter 