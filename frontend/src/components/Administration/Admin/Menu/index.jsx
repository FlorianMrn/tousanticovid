import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiFillHome, AiFillPlusCircle, AiFillMinusCircle, AiOutlineMenu } from "react-icons/ai";

const Menu = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(prevState => !prevState);
    };

    const handleDeco = () => {
        console.log('déconexion');
    };

    return (
        <aside className="absolute left-4 top-4 z-40">
            <button onClick={handleOpen} className="rounded-full bg-blue p-2 text-white shadow mb-4">{!open ? <AiOutlineMenu /> : <AiOutlineClose />}</button>
            {open && 
                <div className="bg-grey-light rounded shadow py-8 px-8">
                    <Link to="/administration/admin" className="block py-4 font-marianne hover:text-white"><AiFillHome className="inline text-blue mr-2 align-top" size={24}/>Accueil</Link>
                    <Link to="/administration/ajouter-un-article" className="block py-4 font-marianne hover:text-white"><AiFillPlusCircle className="inline text-blue mr-2 align-top" size={24}/>Ajouter un article</Link>
                    <button onClick={handleDeco} className="block py-4 font-marianne hover:text-white"><AiFillMinusCircle className="inline text-blue mr-2 align-top" size={24}/>Déconnexion</button>
                </div>
            }
        </aside>
    )
};

export default Menu;