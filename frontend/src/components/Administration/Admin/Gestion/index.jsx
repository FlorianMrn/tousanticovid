import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Gestion = () => {

    const tableHeader = ["Titre de l'article", "Date de publication", "Date de modification", "Statut", "Modifier", "Supprimer"]

    return (
        <main className="w-full max-w-screen box-border overflow-x-scroll">
            <div style={{width: "950px"}} className="overflow-x-scroll relative w-full bg-grey-light rounded px-4 py-4 m-0 lg:m-auto">
                <h2 className="text-center font-marianne text-title pb-4">Liste des articles </h2>
                <div className="flex justify-between pb-4 text-right">
                    {tableHeader.map((h, index) => (
                        <p className="pr-4 font-marianne text-body">{h}</p>
                    ))}
                </div>
                <div className="py-4">
                    <div className="h-0.5 w-full bg-grey"></div>
                    <div className="w-full flex justify-between text-center items-center py-2">
                        <p className="w-1/6 font-marianne text-secondaryBody text-left">Covid-19 : l'ex-ministre de la 
                        Santé Agnès Buzyn mise en 
                        examen pour "mise en danger de 
                        la vie d'autrui"</p>
                        <p className="text-left w-1/6 font-marianne text-secondaryBody">12/05/2016</p>
                        <p className="text-left w-1/6 font-marianne text-secondaryBody">12/05/2016</p>
                        <p className="text-left w-1/4 font-marianne text-secondaryBody">Publié</p>
                        <button className="text-left relative text-blue"><FaPencilAlt className="mr-2 absolute right-32 -top-2"/></button>
                        <button className="text-left relative text-blue"><FaTrash className="mr-2 absolute right-6 -top-2"/></button>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Gestion;