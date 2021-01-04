import { Route, Switch } from "react-router-dom";

import { LogIn } from "../components/auth/LogIn";
import { Register } from "../components/auth/Register";
import { Landing } from "../components/Landing";
import { Search } from "../containers/Search";

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search/*" component={Search} />
      </Switch>
    </>
  );
};
