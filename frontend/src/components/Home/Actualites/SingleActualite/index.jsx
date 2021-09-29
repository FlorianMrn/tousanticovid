import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { FaArrowLeft } from "react-icons/fa";


const SingleActualite = ({ actualite, closeDisplayActualite, autresActualités, handleDisplayActualite }) => {

    const spaceText = actualite.text.split("SPLITEDTEXT");
    
    return (
        <main style={{width: "100%", maxWidth:"800px"}} className="py-4 h-full relative px-4">
            <button onClick={closeDisplayActualite} className="block my-4 text-blue"><FaArrowLeft /></button>
            <h2 className="font-marianne text-subheader lg:text-title font-bold mb-4">{actualite.title}</h2>
            <img src={actualite.imageFile} alt="actualité" className="mb-4"/>
            <p className="mb-4 font-marianne text-button italic text-blue-info">Publié le {actualite.created} - {actualite.timeReading}</p>
            {actualite.videoFile && <div className="mb-4"><ReactPlayer url={actualite.videoFile} width="100%" controls={true} playIcon={true}/></div>}
            {spaceText.map((textSplited, index) => (
                <p key={index} className="font-marianne text-body text-justify mb-4">{textSplited}</p>
            ))}
            <aside className="absolute top-20 -right-52 border-grey border-l-2 w-48 pl-4 hidden xl:block">
                <h3 className="font-marianne text-subheader text-black mb-4">Autres actualités</h3>
                <ul>
                    {autresActualités.map((autre, index) => (
                        <li onClick={() => handleDisplayActualite(autre)} className="py-2 text-justify font-marianne text-secondaryBody text-grey cursor-pointer" key={index}><h4>{autre.title}</h4></li>
                    ))}
                </ul>
            </aside>
        </main>
    )
};

export default SingleActualite;