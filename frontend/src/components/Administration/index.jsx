import Login from "./Login";
import Admin from "./Admin";
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from "../PrivateRoute";

const Vaccination = () => {

    return (
        <section className="remative w-full pt-32 px-2">
            <Switch>
                <Route exact path="/administration" component={Login} />
                <PrivateRoute path="/administration/admin" >
                    <Admin />
                </PrivateRoute>
            </Switch>
        </section>
    )
};

export default Vaccination;