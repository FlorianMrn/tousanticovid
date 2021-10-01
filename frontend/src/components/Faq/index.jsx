import infosData from '../../assets/others/infos.json';

const Faq = () => {

    const infos = infosData;

    return (
        <section className="w-full max-w-screen-xl min-h-screen bg-white pt-40 px-4 m-auto">
            <h1 className="font-marianne text-title pb-8">Vaccins et vaccination : qu’est-ce que la vaccination ?</h1>
            <main className="w-full flex justify-between items-center flex-wrap">
                {infos && infos.map((info, index) => (
                    <div key={index} style={{width: "100%", maxWidth: "360px", height: "300px"}} className="px-2 lg:px-4 py-4 lg:py-12 mb-4 lg:mb-8">
                        <h2 className="font-marianne text-body mb-4 text-black">{info.title}</h2>
                        <div className="flex justify-between w-full">
                            <span className="font-marianne text-secondaryBody uppercase text-green-success">{info.label}</span>
                            <p className="font-marianne text-secondaryBody pl-2 text-grey text-justify w-4/5">{info.text}</p>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    )
};

export default Faq;