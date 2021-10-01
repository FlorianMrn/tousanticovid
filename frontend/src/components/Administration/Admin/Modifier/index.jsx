import { useEffect, useState } from "react";

const Modifier = ({ article }) => {

    const [articleData, setArticleData] = useState({});

    useEffect(() => {
        setArticleData(article);
    }, []);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setArticleData(prevState => ({
            ...prevState,
            [name] : value
        }));
    };

    const paragraphes = articleData.text.split("SPLITEDTEXT");

    return (
        <main style={{maxHeight: "650px"}}className="w-full max-w-screen h-full box-border overflow-scroll">
            <label htmlFor="title">Titre : </label>
            <input id="title" type="text" value={articleData.text} onChange={handleChange} name="title"/>
            {paragraphes && paragraphes.map((par, index) => (
                <>
                    <label htmlFor={`paragraphe ${index + 1}`}>Paragraphe {index + 1} : </label>
                    <input id={`paragraphe ${index + 1}`} type="text" value={par} onChange={handleChange} name={`paragraphe`}/>
                </>
            ))}
            <img src={articleData.image} alt="header" />
        </main>
    )
};

export default Modifier;