import { useState, useEffect } from "react";
import centersData from '../../assets/others/centres-vaccination.json';
import { FaMapMarkerAlt, FaBuilding, FaPhoneAlt, FaSyringe} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import citiesData from '../../assets/others/cities.json';
import * as geolib from 'geolib';


const Vaccination = ({ cityChoice }) => {

    const [km, setKm] = useState("5");
    const [searchCity, setSearchCity] = useState(cityChoice.hasOwnProperty("name") ? cityChoice.name + " " + cityChoice.zip_code : "");
    const [displayChoiceCities, setDisplayChoiceCities] = useState(false);
    const [cityChoose, setCityChoose] = useState(cityChoice ? cityChoice : {});
    const [filteredCenters, setFilteredCenters] = useState([]);
    const centers = centersData.features;
    const cities = citiesData;
    const vaccins = ['Pfizer-BioNTech', 'Moderna'];

    useEffect(() => {

        const filterCentersByKm = () => {
    
            let centersFiltered = [];
    
            if (cityChoose.hasOwnProperty("name")) {
                centers.forEach((center) => {
    
                    const distance = geolib.getDistance({lat: cityChoose.gps_lat, longitude:  cityChoose.gps_lng},{lat: center.properties.lat_coor1, longitude: center.properties.long_coor1});
        
                    if (distance / 1000 <= parseInt(km) + 1) {
                        centersFiltered.push({...center, distance: Math.floor(distance/1000)});
                    }
        
                })
               
                centersFiltered.map((center, index) => {

                    if (!center.properties.rdv_tel) {
                        return false;
                    }

                    return center.properties.rdv_tel.startsWith('+') ? center.properties.rdv_tel.split(" ").join("") : center.properties.rdv_tel = "" + center.properties.rdv_tel.split(" ").join("");
                })
                centersFiltered.sort((a, b) => a.distance - b.distance);
                return setFilteredCenters(centersFiltered);
            }
    
            return setFilteredCenters(centersFiltered);
            
        };

        filterCentersByKm();

    }, [centers, cityChoose, km, cityChoice]);

    const handleChangeKm = (e) => {
        const { value } = e.target;
        setKm(value)
    };

    const handleChangeCity = (e) => {
        setDisplayChoiceCities(true);
        const { value } = e.target;
        setSearchCity(value);
    };
    
    const handleDataCity = (city) =>{
        setSearchCity(city.name + " " + city.zip_code)
        setCityChoose(city);
        setDisplayChoiceCities(false);
    };

    const URL = (name) => {
        window.open(`https://maps.google.com/?q=${name}`, '_blank');
    }
    
    const getRange = () => {

        const lastDigit = km.slice(-1);
        const kmParse = parseInt(km);

        if (kmParse - 3 > 0 && kmParse < 10) {
            return kmParse - 2;
        }

        if (kmParse - 3 > 0 && kmParse < 20) {
            return kmParse - 1;
        }

        if (kmParse - 3 > 0 && kmParse < 30) {
            return lastDigit === "5" ? 28 : kmParse
        }

        if (kmParse - 3 > 0 && kmParse < 40) {
            return lastDigit === "5" ? 44 : 36
        }
        
        if (kmParse - 3 > 0 && kmParse < 50) {
            return lastDigit === "5" ? 56 : 48
        }

        if (kmParse - 3 > 0 && kmParse >= 50) {
            return 56
        }
        return 0;
    };
    
    const filteredCities = cities.filter((citie) => {
        return citie.slug.includes(searchCity.toLowerCase()) || 
        (citie.zip_code && citie.zip_code.includes(searchCity))
           
    }).slice(0, 20);

    return (
        <main style={{minHeight: "calc(100vh - 316px)"}} className={`max-w-screen-xl m-auto relative w-full ${cityChoose.hasOwnProperty("name") ? "bg-drapeau bg-cover" : ""}`}>
            <header className={`w-full h-auto pt-32  ${!cityChoose.hasOwnProperty("name") ? "bg-drapeau bg-cover" : ""}`}>
                <div className="flex justify-center items-center flex-col bg-black bg-opacity-30 w-full p-2">
                    <h1 className="font-marianne text-headline text-white py-2">Vaccinez-vous</h1>
                    <h2 className="font-marianne text-quote italic text-white py-2">Trouvez le centre de vaccination le plus proche de chez vous.</h2>
                    <div className="relative w-full py-4 text-center">
                        <div>
                            <input type="text" 
                                placeholder="Ville ou code postal" 
                                value={searchCity} 
                                className="pl-12 p-2 h-12 w-full max-w-screen-sm font-marianne focus:outline-none focus:ring-4 focus:ring-blue" 
                                onChange={handleChangeCity}
                            />
                            <div className="bg-white h-12 flex items-center justify-center px-2 absolute top-4 left-0 md:left-8 lg:left-80" >
                                <FiMapPin className="bg-white" size={24}/>
                            </div>
                            {displayChoiceCities && 
                                <ul className="absolute -bottom-40 w-72 p-2 h-40 bg-white rounded block overflow-y-scroll z-50 shadow-lg border">
                                    {filteredCities.length > 0 ? 
                                        filteredCities.map((citie, index) => (
                                            <li key={index} className="py-2 border-b border-grey font-marianne cursor-pointer hover:bg-blue hover:text-white" onClick={() => handleDataCity(citie)}>{citie.name} {citie.zip_code}</li>
                                        ))
                                        : <p>Aucune ville trouvée</p>
                                    }   
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="relative pb-4 text-center">
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="50" 
                            value={km} 
                            onChange={handleChangeKm}
                            step="5"
                            className="mb-4 w-72 m-auto"
                        />
                        <label className="float-left align-top right-full -top-0 absolute text-button lg:text-body hidden lg:block lg:mr-4 font-marianne text-white inline-block whitespace-nowrap" forhtml="output">Distance :</label>
                        <output id="output" forhtml="typeinp" className={`font-marianne text-white text-body absolute bottom-0 inline-block left-${getRange()}`}>{km} km</output>
                    </div>
                </div>
            </header>
            <aside className="flex flex-wrap text-center justify-center py-8 lg:py-16 px-2 lg:px-4 bg-transparent">
                {!cityChoose.hasOwnProperty("name") &&
                    <p className="w-full font-marianne">Indiquez une ville ou un code postal dans la barre de recherche pour afficher les centres de vaccinations accessibles</p>
                }
                {filteredCenters.length > 0 && centers && filteredCenters.map((center, index) => (
                    <div style={{maxWidth : "300px"}} className="h-48 w-full rounded shadow bg-white border-blue border m-2" key={index}>
                        <ul className="h-full flex flex-col justify-start text-left">
                            <li className="flex justify-around items-center block border-b border-blue p-2 cursor-pointer hover:shadow hover:bg-blue hover:text-white" onClick={() => URL(center.properties.structure_rais+center.properties.adr_voie+center.properties.structure_cp)}>
                                <div className="mr-5 ml-2">
                                    <FaMapMarkerAlt className="text-blue-info" size={24}/>
                                    <p className="font-marianne text-tinyText text-center py-1 font-bold">{center.distance} km</p>
                                </div>
                                <div className="inline">
                                    <p className="font-marianne text-button font-bold">{center.properties.structure_rais}</p>
                                    <p className="font-marianne text-button font-bold">{center.properties.adr_voie}, {center.properties.structure_cp} {center.properties.structure_com}</p>
                                </div>
                            </li>
                            <li className="font-marianne text-button block border-b border-blue p-2  cursor-pointer  hover:shadow hover:bg-blue hover:text-white font-bold">
                                <a rel="noreferrer noopener" href={`tel:${center.properties.rdv_tel ? center.properties.rdv_tel : ""}`}>
                                    <FaPhoneAlt size={24} className="text-blue-info inline mr-5 ml-2"/>{center.properties.rdv_tel ? center.properties.rdv_tel : "N.C"}
                                </a>
                            </li>
                            <li className="font-marianne text-button block border-b border-blue p-2 font-bold">
                                <FaBuilding size={24} className="text-blue-info inline mr-5 ml-2"/>{center.properties.centre_type !== null ? center.properties.centre_type[0] : "Autre"}
                            </li>
                            <li className="font-marianne text-button block p-2 font-bold">
                                <FaSyringe size={24} className="text-blue-info inline  mr-5 ml-2"/>{vaccins[Math.floor(Math.random() * vaccins.length)]}
                            </li>
                        </ul>
                    </div>
                ))}
                {(filteredCenters.length <= 0 && cityChoose.hasOwnProperty("name")) && <p className="w-full font-marianne text-white bg-black bg-opacity-40">Aucun centre de vaccination accessible dans la limite des kilomètres indiqués</p>}
            </aside>
        </main>
    )
};

export default Vaccination;