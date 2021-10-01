import { deleteArticle } from "../../../../services/articles";

const Modal = ({ article, setShowModal, setArticles }) => {

    const handleSuppr = () => {
        deleteArticle(article.id);
        setArticles(prevstate => prevstate.filter((a) => a.id !== article.id));
        setShowModal();
    };
    
    return (
        <div style={{maxWidth: "250px"}}className="border fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-white py-4 px-4 rounded shadow">
            <p className="font-marianne">Etes-vous sûr de vouloir supprimer l'article : <strong>{article.title} ?</strong></p>
            <div className="w-full flex justify-around my-4">
                <button onClick={handleSuppr} className="font-mariannce py-2 px-4 bg-green-success text-white rounded shadow">Oui</button>
                <button onClick={setShowModal} className="font-mariannce py-2 px-3 border-red border text-red rounded shadow">Non</button>
            </div>
        </div>
    )
};

export default Modal;