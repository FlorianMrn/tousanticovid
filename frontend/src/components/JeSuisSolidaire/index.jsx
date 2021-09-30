import worldImmunization from '../../assets/images/world-immunization.png';
import { FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from 'react';


const JeSuisSolidaire = () => {

    const [openForm, setOpenForm] = useState(false);
    const [data, setData] = useState({
        nom: "",
        prenom: "",
        email: "",
        ville: "",
        cp: ""
    })

    const handleOpen = () => {
        setOpenForm(prevState => !prevState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setData(prevState => ({
            ...prevState,
            [name] : value
        }))
    };

    return (
        <section className="relative w-full pt-32 px-2 md:px-4 max-w-screen-lg m-auto lg:flex lg:justify-between">
            <div className="lg:hidden fixed w-full block bottom-0 left-0 z-20 text-center">
                <button onClick={handleOpen} className="font-marianne text-subheader rounded font-bold bg-blue shadow text-white px-2 py-6 w-11/12 m-auto mb-2">Signer cette pétition</button>
            </div>
            <main className="w-full">
                <img src={worldImmunization} alt="Enfants joyeux" className="pb-8"/>
                <div>
                    <p className="font-marianne text-subheader pb-2">400 000 ont signé. Prochain objectif : 500 000 !</p>
                    <div style={{backgroundSize: '400%'}} className="h-4 w-full rounded bg-gradient-to-r from-blue via-white to-red animate-gradientx"></div>
                    <ul className="py-2">
                        <li className="font-marianne text-grey text-button pb-2 italic">
                            <FaUser size={18} className="inline mr-2"/>Claudine a signé la pétition il y a 18 minutes
                        </li>
                        <li className="font-marianne text-grey text-button pb-2 italic">
                            <FaUser size={18} className="inline mr-2"/>Claudine a signé la pétition il y a 18 minutes
                        </li>
                    </ul>
                    <div className="w-full h-0.5 bg-grey"></div>
                </div>
                <div className="py-2 text-center relative">
                    <h1 className="font-marianne text-subheader text-grey pb-4 text-left">Pour continuer à soutenir la vaccination contre le Covid 19 et montrer votre soutien à cette à cette action, nous vous proposons de signer une pétition !</h1>
                    <h3 className="font-marianne font-bold pb-2 text-left">Comment ?</h3>
                    <p className="font-marianne pb-4  text-left">En signant cette pétition nous allons pouvoir démontrer au plus grand nombre, que beaucoup de français sont partisans du vaccin et comprennent son utilité.</p>
                    <h3 className="font-marianne font-bold pb-2 text-left">Pourquoi la vaccination est importante ?</h3>
                    <p className="font-marianne pb-4 text-left">En plus de son impact positif sur la santé de l'enfant, lorsque les taux de vaccination sont élevés, nous savons que l'ensemble de la communauté est protégée. « Élargir l’accès à la vaccination est essentiel pour la réalisation des Objectifs de développement durable et ceux de la cible du triple milliard de l’OMS.</p>
                    <p className="font-marianne text-body font-bold text-left">N'hésitez plus et signez cette pétition pour montrer votre solidarité à la vaccination</p>
                    {openForm && 
                        <div className="absolute z-40 -bottom-5 w-full h-screen bg-blue-info px-8 py-4 pt-16 md:pt-44 right-100">
                            <AiOutlineClose onClick={handleOpen} className="absolute top-4 md:top-24 right-4 text-white" size={28}/>
                            <h2 className="font-marianne text-subheader mb-8 text-center font-bold text-white">Confirmez votre signature</h2>
                            <form className="text-center" autoComplete="off">
                                <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.nom} name="nom" placeholder="Nom" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                                <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.prenom} name="prenom" placeholder="Prénom" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                                <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.email} name="email" placeholder="Email" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                                <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.ville} name="ville" placeholder="Ville" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                                <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.cp} name="cp" placeholder="Code postal" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                                <button className="font-marianne text-placeholder font-bold bg-blue rounded shadow text-white px-2 py-4 my-4">Signer cette pétition</button>
                            </form>
                        </div>
                    }
                </div>
            </main>
            <div style={{maxWidth: "400px", maxHeight: "500px"}}className="hidden lg:inline-block w-full h-screen bg-blue-info px-8 py-8 mx-4">
                <h2 className="font-marianne text-subheader mb-8 text-center font-bold text-white">Confirmez votre signature</h2>
                <form className="text-center" autoComplete="off">
                    <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.nom} name="nom" placeholder="Nom" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                    <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.prenom} name="prenom" placeholder="Prénom" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                    <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.email} name="email" placeholder="Email" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                    <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.ville} name="ville" placeholder="Ville" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                    <input onChange={handleChange} required autoComplete="new-password" type="text" value={data.cp} name="cp" placeholder="Code postal" className="font-marianne block my-4 py-2 px-4 outline-none border-blue border shadow w-full focus:ring-4 focus:ring-blue"/>
                    <button className="font-marianne text-button font-bold bg-blue rounded shadow text-white px-2 py-4 my-4">Signer cette pétition</button>
                </form>
            </div>
            <aside>
            </aside>
        </section>
    )
};

export default JeSuisSolidaire