import Menu from "./Menu";
import { Route, Switch} from 'react-router-dom';
import Gestion from "./Gestion";
import Modifier from "./Modifier";

const Admin = () => {

    return (
        <section className="relative w-full pt-16 px-2">
            <Menu />
            <Switch>
                <Route exact path="/administration/admin">
                    <Gestion />
                </Route>
                <Route path="/administration/modifier">
                    <Modifier />
                </Route>
            </Switch>
        </section>
    )
};

export default Admin;