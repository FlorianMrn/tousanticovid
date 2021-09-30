import { AiOutlineClose, AiFillHome, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Menu = () => {

    return (
        <aside className="absolute left-4 top-4 z-50">
            <button className="rounded-full bg-blue p-2 text-white shadow mb-4"><AiOutlineClose /></button>
            <div className="bg-grey-light rounded shadow py-8 px-8">
                <button className="block py-4 font-marianne"><AiFillHome className="inline text-blue mr-2" size={24}/>Accueil</button>
                <button className="block py-4 font-marianne"><AiFillPlusCircle className="inline text-blue mr-2" size={24}/>Ajouter un article</button>
                <button className="block py-4 font-marianne"><AiFillMinusCircle className="inline text-blue mr-2" size={24}/>Déconnexion</button>
            </div>
        </aside>
    )
};

export default Menu;