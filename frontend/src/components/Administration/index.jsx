import Login from "./Login";
import Admin from "./Admin";
import { Route, Switch } from 'react-router-dom';

const Vaccination = () => {

    return (
        <section className="remative w-full pt-32 px-2">
            <Switch>
                <Route exact path="/administration" component={Login} />
                <Route path="/administration/admin" component={Admin} />
            </Switch>
        </section>
    )
};

export default Vaccination;