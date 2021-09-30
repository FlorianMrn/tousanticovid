import { useState } from "react";
import { FiMapPin, FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
import cities from '../../../assets/others/cities.json';
import headerImage from '../../../assets/images/headerImage.svg';

const Header = ({ handleCityChoice }) => {

    const [searchCity, setSearchCity] = useState("");
    const [displayChoiceCities, setDisplayChoiceCities] = useState(false)

    const handleChange = (e) => {
        setDisplayChoiceCities(true);
        setSearchCity(e.target.value);
    };

    const handleSubmit = (city) => {
        setSearchCity(city.name + " " + city.zip_code)
        handleCityChoice(city);
        setDisplayChoiceCities(false);
    };

    const filteredCities = cities.filter((citie) => citie.slug.includes(searchCity.toLowerCase()) || (citie.zip_code && citie.zip_code.includes(searchCity))).slice(0, 10);

    return (
        <header className="relative h-screen w-full bg-drapeauMob lg:bg-drapeau bg-cover flex items-center justify-center lg:justify-around">
            <div className="px-4 bg-black lg:bg-transparent bg-opacity-25">
                <h1 className="font-marianne text-headline text-white py-2">Vaccinez-vous</h1>
                <h2 className="block font-marianne text-quote italic text-white py-2 break-words">Trouvez le centre de vaccination le plus proche de chez vous.</h2>
                <form className="py-4 flex items-center w-full relative border-block">
                    <input type="text" 
                        placeholder="Ville ou code postal" 
                        value={searchCity} 
                        className="pl-12 p-2 h-12 w-full max-w-7xl font-marianne focus:outline-none focus:ring-4 focus:ring-blue" 
                        onChange={handleChange}
                    />
                    <div className="bg-white h-12 flex items-center justify-center px-2 absolute" >
                        <FiMapPin className="bg-white" size={24}/>
                    </div>
                    {displayChoiceCities && 
                        <ul className="absolute -bottom-40 w-72 p-2 h-40 bg-white rounded block overflow-y-scroll z-50">
                            {filteredCities.length > 0 ? 
                            
                            filteredCities.map((citie, index) => (
                                <Link key={index} to="/vaccination">
                                    <li  className="py-2 border-b border-grey font-marianne cursor-pointer" onClick={() => handleSubmit(citie)}>{citie.name} {citie.zip_code}</li>
                                </Link>
                            ))
                            : <p>Aucune ville trouvée</p>}   
                        </ul>
                    }
                </form>
            </div>
            <img src={headerImage} style={{maxWidth: "500px"}}alt="prise de rdv" className="hidden lg:block w-full max-w-screen-sm"/>
            <button className="absolute bottom-4 text-button font-marianne text-white uppercase">Actualités <FiChevronDown className="m-auto" size={16}/></button>
        </header>
    )
};

export default Header;