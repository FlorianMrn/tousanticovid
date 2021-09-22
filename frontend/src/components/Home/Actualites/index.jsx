import { useState, useEffect } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getArticles } from "../../../services/articles";

const Actualites = () => {

    const [searchActualite, setSearchActualite] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
    }, []);

    const handleChange = (e) => {
        setSearchActualite(e.target.value);
    };

    return (
        <section className="w-full h-screen flex flex-wrap justify-center lg:justify-between items-center">
            <form className="py-4 relative ">
                <input type="text" 
                    placeholder="Rechercher.." 
                    value={searchActualite} 
                    className="pl-12 p-2 h-12 w-80 ring-2 ring-blue-inactif focus:outline-none focus:ring-blue" 
                    onChange={handleChange}
                />
                <div className="bg-white h-12 flex top-4 items-center justify-center px-2 absolute" >
                    <FiSearch className="bg-white" size={24}/>
                </div>
            </form>
            <div className="max-w-screen-xl w-full h-3/4 bg-black relative px-8">
                <FiChevronLeft className="absolute left-0 inset-y-1/2" size={40}/>
                <FiChevronRight className="absolute right-0 inset-y-1/2" size={40}/>
                <div className="w-full h-full">

                </div>
            </div>
        </section>
    )
};

export default Actualites