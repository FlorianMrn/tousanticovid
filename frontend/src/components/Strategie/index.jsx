
import { FaCheck, FaStar } from "react-icons/fa";
import infog_vaccins_professionnels from '../../assets/images/infog_vaccins_professionnels.png';
import infog_vaccins_particuliers from '../../assets/images/infog_vaccins_particuliers.png';
import infog_rappel from '../../assets/images/infog_rappel.png';

const Strategie = () => {

    const showpdf = (directory) => {
        window.open(directory);
    };

    return (
        <section className="w-full pt-32 px-2 md:px-4 max-w-screen-lg m-auto">
            <header className="pb-8">
                <h1 className="font-marianne text-title text-black">La stratégie vaccinale en un coup d'oeil</h1>
            </header>
            <main className="flex justify-center flex-wrap">
                <div className="text-left w-full pb-4 text-blue">
                    <h2 className="text-subheader pb-2">Trois objectifs</h2>
                    <ul className="text-grey font-marianne">
                        <li><FaCheck className="inline mr-2 text-blue-info"/>Faire baisser la mortalité et les formes graves</li>
                        <li><FaCheck className="inline mr-2 text-blue-info"/>Protéger les soignants et le système de soins</li>
                        <li><FaCheck className="inline mr-2 text-blue-info"/>Garantir la sécurité des vaccins et de la vaccination</li>
                    </ul>
                </div>
                <div className="text-left w-full pb-4  text-blue">
                    <h2 className="text-subheader pb-2">Trois Principes</h2>
                    <ul className="text-grey font-marianne">
                        <li><FaStar className="inline mr-2 text-blue-info"/>Non obligatoire</li>
                        <li><FaStar className="inline mr-2 text-blue-info"/>Gratuité</li>
                        <li><FaStar className="inline mr-2 text-blue-info"/>Haute sécurité</li>
                    </ul>
                </div>
                <div className="w-full pb-4 bg-blue-info p-4 mt-4">
                    <h3 className="font-marianne text-subheader pb-4 text-white">Vaccination accessible à tous</h3>
                    <p className="font-marianne text-secondaryBody pb-4 text-white text-justify">Suivant les recommandations vaccinales émises par la Haute autorité de santé dans ses avis du 27 novembre 2020 et du 2 février 2021, une priorisation des publics éligibles avait été mise en place au début de la campagne de vaccination.
                    L’âge de la personne est le facteur de risque de développer une forme grave de Covid-19 le plus important, la Haute autorité de santé recommandait donc de prioriser les populations cibles vaccinales en fonction de différentes classes d’âge et selon les facteurs d’exposition au virus (ex : vie en collectivité, professionnels du secteur de la santé…).
                    Par ailleurs, à tranche d’âge égale, les personnes souffrant de comorbidités associées à un risque de développer une forme grave de Covid-19 devaient être vaccinées en premier.</p>
                </div>
                <div className="w-full pb-4 bg-blue-info p-4 mt-4">
                    <h3 className="font-marianne text-subheader pb-4 text-white">À compter du 1er septembre une campagne de rappel est mise en place</h3>
                    <p className="font-marianne text-secondaryBody pb-4 text-white text-justify">Pour stimuler le système immunitaire des plus vulnérables. Les personnes concernées par ce rappel sont : <br /><br />
                        - les résidents d’EHPAD et d’USLD,<br />
                        - les personnes de 65 ans et plus vivant à domicile,<br />
                        - les personnes souffrant de comorbidité(s),<br />
                        - les personnes atteintes de pathologies à haut risque de forme grave,<br />
                        - les personnes ayant été vaccinées avec le vaccin Janssen.<br /><br />
                    Il convient d’attendre un délai de 6 mois entre la dernière dose reçue, complétant le schéma vaccinal initial, et cette dose de rappel. Ce délai est réduit à 4 semaines pour les personnes ayant reçu une dose de vaccin Janssen.</p>
                </div>
            </main>
            <aside className="flex justify-center flex-wrap">
                <div className="w-full">
                    <div className="w-full h-12 md:h-36 overflow-hidden">
                        <img src={infog_vaccins_particuliers} className="w-full object-cover object-top" alt="professionnels"></img>
                    </div>
                    <a rel="noreferrer noopener" className="font-marianne block pl-2 py-2 text-body uppercase text-blue mx-2 md:mx-6 lg:mx-8 border-blue border border-box hover:bg-blue hover:text-white font-bold" href={infog_vaccins_particuliers} target="_blank">Découvrir</a>
                </div>
                <div className="w-full">
                    <div className="w-full h-12 md:h-36 overflow-hidden">
                        <img src={infog_vaccins_professionnels} className="w-full object-cover object-top"  alt="professionnels"></img>
                    </div>
                    <a rel="noreferrer noopener" className="font-marianne block pl-2 py-2 text-body uppercase text-blue mx-2 md:mx-6 lg:mx-8 border-blue border border-box hover:bg-blue hover:text-white font-bold" href={infog_vaccins_professionnels} target="_blank">Découvrir</a>
                </div>
                <div className="w-full">
                    <div className="w-full h-12 md:h-36 overflow-hidden">
                        <img src={infog_rappel} className="w-full object-cover object-top"  alt="rappel"></img>
                    </div>
                    <a rel="noreferrer noopener" className="font-marianne block pl-2 py-2 text-body uppercase text-blue mx-2 md:mx-6 lg:mx-8 border-blue border border-box hover:bg-blue hover:text-white font-bold" href={infog_rappel} target="_blank">Découvrir</a>
                </div>
            </aside>
        </section>
    )
};

export default Strategie;