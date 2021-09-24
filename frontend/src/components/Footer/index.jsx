import logo_republique from '../../assets/logos/republique-francaise-logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer style={{height : "250px"}} className="w-full mt-16">
            <div className="w-full h-3/4 bg-blue-info">
                <div className="w-full px-8 max-w-screen-lg h-full flex m-auto justify-between items-center">
                    <img src={logo_republique} alt="République" className="h-2/4"/>
                    <ul>
                        <a className="block font-marianne text-white py-1" rel="noopener noreferrer" href="/" target="_blank">legifrance.gouv.fr</a>
                        <a className="block font-marianne text-white py-1"  rel="noopener noreferrer" href="/" target="_blank">gouvernement.fr</a>
                        <a className="block font-marianne text-white py-1"  rel="noopener noreferrer" href="/" target="_blank">servicepublic.fr</a>
                        <a className="block font-marianne text-white py-1"  rel="noopener noreferrer" href="/" target="_blank">data.gouv.fr</a>
                    </ul>
                </div>
            </div>
            <div className="w-full h-1/4 bg-blue ">
                <div className="w-full md:p-8 max-w-screen-lg h-full flex m-auto justify-center items-center">
                    <ul className="w-auto h-full flex justify-between items-center">
                        <Link to="/" className="font-marianne text-button text-white p-1">Mentions légales</Link>
                        <Link to="/" className="font-marianne text-button text-white p-1" >Conditions générales d'utilisation</Link>
                        <Link to="/" className="font-marianne text-button text-white p-1" >Gestion des cookies</Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default Footer;