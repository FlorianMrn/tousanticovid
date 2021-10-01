import { getArticles } from "../../../../services/articles";
import { useState, useEffect } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from '../Modal';

const Gestion = ({ handleModifiedArticle }) => {

    const [articles, setArticles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [articleSuppr, SetArticleSuppr] = useState({})

    useEffect(() => {
        getArticles(setArticles);
    }, []); 

    const handleModal = () => {
        setShowModal(prevState => !prevState);
    };

    const handleSuppr = (art) => {
        SetArticleSuppr(art);
        handleModal();
    };

    const handleModifs = (article) => {
        handleModifiedArticle(article)
    };

    const tableHeader = ["Titre de l'article", "Date de publication", "Date de modification", "Statut", "Modifier", "Supprimer"]

    return (
        <main style={{maxHeight: "650px"}}className="w-full max-w-screen h-full box-border overflow-scroll">
            {showModal && <Modal article={articleSuppr} setShowModal={handleModal} setArticles={setArticles}/>}
            <div style={{width: "950px"}} className="overflow-x-scroll relative w-full bg-grey-light rounded px-4 py-4 m-0 lg:m-auto">
                <h2 className="text-center font-marianne text-title pb-4">Liste des articles </h2>
                <div className="flex justify-between pb-4 text-right">
                    {tableHeader.map((h, index) => (
                        <p key={index} className="pr-4 font-marianne text-body">{h}</p>
                    ))}
                </div>
                {articles && articles.map((art, index) =>(
                    <div key={index} className="py-4">
                        <div className="h-0.5 w-full bg-grey"></div>
                        <div className="w-full flex justify-between text-center items-center py-2">
                            <p className="w-1/6 font-marianne text-secondaryBody text-left">{art.title}</p>
                            <p className="text-left w-1/6 font-marianne text-secondaryBody">{art.created.split(" ")[0]}</p>
                            <p className="text-left w-1/6 font-marianne text-secondaryBody">{art.modified.slice(0, 10).split("-").reverse().join("/")}</p>
                            <p className={`text-left w-1/4 font-marianne text-secondaryBody ${art.published ? "text-green-success" : "text-orange"}`}>
                                {art.published ? "Publié" : "Non publié"}
                            </p>
                            <Link to="/administration/modifier" onClick={() => handleModifs(art)} className="text-left relative text-blue"><FaPencilAlt className="mr-2 absolute right-32 -top-2"/></Link>
                            <button onClick={() => handleSuppr(art)} className="text-left relative text-blue"><FaTrash className="mr-2 absolute right-6 -top-2"/></button>
                        </div>
                    </div>
                ))}
                
            </div>
        </main>
    )
};

export default Gestion;