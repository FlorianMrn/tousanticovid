import { useState, useEffect } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getArticles, getTimeReading, getDiffHoursAndDays } from "../../../services/articles";
import { handleCarrousel } from "./utilities/services";
import SingleActualite from './SingleActualite';


const Actualites = () => {

    const [searchActualite, setSearchActualite] = useState("");
    const [articles, setArticles] = useState([]);
    const [carrousel, setCarrousel] = useState({
        start : 0,
        end: 4,
    });
    const [displayActualite, setDisplayActualite] = useState({
        display : false,
        actu : {}
    });

    useEffect(() => {
        getArticles(setArticles);
    }, []);

    const handleChange = (e) => {
        setSearchActualite(e.target.value);
    };

    const handleDisplayActualite = (actu) => {

        actu.timeReading = getTimeReading(actu.text);
        setDisplayActualite(prevState => ({
            display : true,
            actu : actu 
        }));
    };

    const closeDisplayActualite = () => {
        setDisplayActualite(prevState => ({
            ...prevState,
            display : false,
        }));
    };

    const filteredArticles = articles.filter((a) => {

        if (searchActualite) {
            return a.text.toLowerCase().includes(searchActualite.toLowerCase()) ||
                a.title.toLowerCase().includes(searchActualite.toLowerCase()) && a.published === true;
        }

        return a.published === true;
    });

    const handleCarr = (event) => {

        handleCarrousel(event, carrousel, articles, setCarrousel);

    };

    console.log(carrousel.end ,  filteredArticles.length)

    return (
        <section className="w-full min-h-screen flex flex-wrap justify-center md:justify-around items-center lg:flex-col">
            {(displayActualite && !displayActualite.display) &&
                <>
                    <div className="p-4 relative w-80 ">
                        <input type="text" 
                            placeholder="Rechercher.." 
                            value={searchActualite} 
                            className="pl-12 p-2 my-4 h-12 w-full block max-w-screen-sm ring-2 ring-blue-inactif bloc focus:outline-none focus:ring-blue" 
                            onChange={handleChange}
                        />
                        <div className="bg-white h-8 flex top-10 left-4 items-center justify-center px-2 absolute" >
                            <FiSearch className="bg-white" size={24}/>
                        </div>
                    </div>
                    <div style={{maxHeight: "900px"}}className="w-full lg:w-3/4 mx-auto px-8 md:px-12 h-full relative flex justify-center">
                        <button onClick={handleCarr} className={`absolute z-50 left-0 top-1/2 transform -translate-y-1/2 ${carrousel.start === 0  ? "text-blue-inactif disabled" : "text-blue"}`}>
                            <FiChevronLeft id="left" size={40} />
                        </button>
                        <button onClick={handleCarr} className={`absolute z-50 right-0 top-1/2 transform -translate-y-1/2 ${carrousel.end === filteredArticles.length + 1  ? "text-blue-inactif disabled" : "text-blue"}`}>
                            <FiChevronRight id="right" size={40} />
                        </button>
                        <div className="grid grid-cols-2 grid-rows-2 gap-8 auto-rows-fr grid-flow-row border-block flex-1">
                            {articles.length > 0 && filteredArticles.slice(carrousel.start, carrousel.end).map((article, index) => (
                                <div key={index} style={{minHeight: "250px", maxHeight: "300px"}} className="bg-white shadow-2xl rounded relative cursor-pointer" onClick={() => handleDisplayActualite(article)}>
                                    <img style={{maxHeight: "40%"}}src={article.imageFile} alt="Article" className=" w-full object-cover rounded-t"/>
                                    <div className="p-2 w-full">
                                        <h2 className="font-marianne text-button md:text-subheader font-bold break-words">{article.title}</h2>
                                        <p className="absolute bottom-2 font-marianne text-tinyText md:text-body italic">{getDiffHoursAndDays(article.created)} - {getTimeReading(article.text)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
            {displayActualite.display &&
                <SingleActualite actualite={displayActualite.actu} closeDisplayActualite={closeDisplayActualite} autresActualités={filteredArticles.slice(0, 5)} handleDisplayActualite={handleDisplayActualite}/>
            }
        </section>
    )
};

export default Actualites;