// React
import { FC } from "react";
import { Route, Switch } from "react-router-dom";

// Auth
import { LogIn } from "../containers/auth/LogIn";
import { Register } from "../containers/auth/Register";
import { Profile } from "../containers/auth/Profile";

// Admin
import { Admin } from "../containers/admin/Admin";

// Cart
import { Cart } from "../containers/cart/Cart";
import { Checkout } from "../containers/cart/Checkout";
import { OrderDetails } from "../containers/cart/OrderDetails";

// Product
import { Search } from "../containers/product/Search";
import { Product } from "../containers/product/Product";

// Custom Component
import { Landing } from "../components/Landing";

export const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/search/:keyword?" component={Search} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders/:id" component={OrderDetails} />
        <Route path="/adminpanel" component={Admin} />
      </Switch>
    </>
  );
};
