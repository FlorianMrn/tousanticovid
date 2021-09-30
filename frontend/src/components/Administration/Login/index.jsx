import { useState } from "react";
import { authenticate } from "../../../services/auth.js";

const Login = () => {

    const [ data, setData ] = useState({
        numero : null,
        password : ""
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData(prevState => ({
            ...prevState,
            [name] : value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate(data);
    };

    return (
        <main className="w-full max-w-screen-sm m-auto bg-grey-light rounded shadow-lg px-4 py-8 mt-8 mb-28">
            <h1 className="font-marianne text-title text-black font-bold text-center">Connectez-vous à votre espace</h1>
            <form className="text-center" onSubmit={handleSubmit} autoComplete="off">
                <input onChange={handleChange} autoComplete="off" required type="text" value={data.numero} name="numero" placeholder="Numero d'agent" className="font-marianne block my-4 py-2 px-4 bg-white outline-none border-blue border shadow w-full focus:outline-none focus:ring-4 focus:ring-blue"/>
                <input onChange={handleChange} autoComplete="off" required type="password" value={data.password} name="password" placeholder="Mot de passe" className="font-marianne block my-4 py-2 px-4 bg-white outline-none border-blue border shadow w-full focus:outline-none focus:ring-4 focus:ring-blue"/>
                <button onClick={handleSubmit} className="font-marianne text-placeholder font-bold bg-blue rounded shadow text-white px-2 py-4 my-4">Se connecter</button>
            </form>
        </main>
    )
};

export default Login;