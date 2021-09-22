import { useState } from 'react';
import logo_republique from '../../assets/logos/republique-francaise-logo.svg';
import { MdDehaze, MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const [open, setOpen] = useState(false);
    
    const handleDisplayMenu = () => {
        setOpen(prevState => !prevState);
    };

    const links = [
        {
            name : "ACCUEIL",
            to : "/"
        },
        {
            name : "VACCINATION",
            to : "/vaccination"
        },
        {
            name : "FOIRE AUX INFOS",
            to : "/faq"
        },
        {
            name : "STRATEGIE VACCINALE",
            to : "/strategie-vaccinale"
        },
        {
            name : "JE SUIS SOLIDAIRE",
            to : "/je-suis-solidaire"
        },
    ];

    return (
        <section className={`absolute z-50 w-full shadow-lg ${!open ? "" : "h-full"}`}>
            <div style={{height : "116px"}} className="bg-white flex justify-between  items-center py-2 px-4">
                <img src={logo_republique} alt="république française" className="w-24"/>
                <div className="block lg:hidden">{!open ? <MdDehaze size={24} onClick={handleDisplayMenu}/> : <button onClick={handleDisplayMenu} className="flex items-center">Fermer <MdClose /></button>}</div>
                <div className="lg:block hidden">
                    <ul className="flex">
                        {links.map((l, index) => (
                            <li key={index} className="pb-6 mr-4"><NavLink exact className="text-blue pb-1 font-marianne" activeStyle={{borderBottom: '1px solid #0762C8'}}to={l.to}>{l.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </div>
            {open && 
                <div className="p-8 bg-white h-full">
                    <ul>
                        {links.map((l, index) => (
                            <li key={index} className="pb-6"><NavLink exact className="text-blue pb-1 font-marianne" onClick={handleDisplayMenu} activeStyle={{borderBottom: '1px solid #0762C8'}}to={l.to}>{l.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
            }
        </section>
    )
};

export default Nav;