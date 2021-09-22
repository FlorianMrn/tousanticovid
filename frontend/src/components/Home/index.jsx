import Header from "./Header";
import Actualites from "./Actualites";

const Home = ({ handleCityChoice }) => {

    return (
        <div >
            <Header handleCityChoice={handleCityChoice}/>
            <Actualites />
        </div>
    )
};

export default Home;