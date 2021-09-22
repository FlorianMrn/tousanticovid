import { useState } from "react";
import { FiMapPin, FiChevronDown } from "react-icons/fi";
import cities from '../../../assets/others/cities.json';
import headerImage from '../../../assets/images/headerImage.svg';

const Header = ({ handleCityChoice }) => {

    const [searchCity, setSearchCity] = useState("");

    const handleChange = (e) => {
        setSearchCity(e.target.value);
    };

    const filteredCities = cities.filter((citie) => citie.slug.includes(searchCity.toLowerCase()) || (citie.zip_code && citie.zip_code.includes(searchCity))).slice(0, 4);

    return (
        <header className="relative h-screen w-full bg-drapeauMob lg:bg-drapeau bg-cover flex items-center justify-center lg:justify-around">
            <div className="pl-4 bg-black lg:bg-transparent bg-opacity-25">
                <h1 className="font-marianne text-headline text-white py-2">Vaccinez-vous</h1>
                <h2 className="font-marianne text-quote italic text-white py-2">Trouvez le centre de vaccination le plus proche de chez vous.</h2>
                <form className="py-4 flex flex-wrap items-center w-full relative">
                    <input type="text" 
                        placeholder="Indiquez votre ville ou code postal" 
                        value={searchCity} 
                        className="pl-12 p-2 h-12 w-96 font-marianne focus:outline-none focus:ring-4 focus:ring-blue" 
                        onChange={handleChange}
                    />
                    <div className="bg-white h-12 flex items-center justify-center px-2 absolute" >
                        <FiMapPin className="bg-white" size={24}/>
                    </div>
                    {searchCity && 
                        <ul className="absolute -bottom-36 w-72 p-2 h-36 bg-white rounded block">
                            {filteredCities.length > 0 ? 
                            
                            filteredCities.map((citie, index) => (
                                <li key={index} className="pb-1 border-b border-black font-marianne" onClick={() => handleCityChoice(citie)}>{citie.name} {citie.zip_code}</li>
                            ))
                            : <p>Aucune ville trouvée</p>}   
                        </ul>
                    }
                </form>
            </div>
            <img src={headerImage} alt="prise de rdv" className="hidden lg:block"/>
            <button className="absolute bottom-4 text-button font-marianne text-white uppercase">Actualités <FiChevronDown className="m-auto" size={16}/></button>
        </header>
    )
};

export default Header;