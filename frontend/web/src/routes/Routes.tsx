import { Route, Switch } from "react-router-dom";

import { LogIn } from "../containers/auth/LogIn";
import { Register } from "../containers/auth/Register";
import { Profile } from "../containers/Profile";

import { Landing } from "../components/Landing";
import { Search } from "../containers/Search";
import { Product } from "../containers/Product";
import { Cart } from "../containers/Cart";
import { Checkout } from "../containers/Checkout";
import { OrderDetails } from "../containers/OrderDetails";
import { Admin } from "../containers/admin/Admin";

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/search" component={Search} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders/:id" component={OrderDetails} />
        <Route path="/adminpanel" component={Admin} />
      </Switch>
    </>
  );
};
