import Menu from "./Menu";
import { Route, Switch } from 'react-router-dom';
import Gestion from "./Gestion";

const Admin = () => {

    return (
        <section className="relative w-full pt-32 px-2">
            <Menu />
            <Switch>
                <Route path="/administration/admin" component={Gestion} />
            </Switch>
        </section>
    )
};

export default Admin;