import { LogIn } from "../components/auth/LogIn";
import { Register } from "../components/auth/Register";
import { Landing } from "../components/Landing";
import { Search } from "../containers/Search";

export const Routes = () => {
  return (
    <>
      <LogIn />
      <Register />
      <Landing />
      <Search />
    </>
  );
};
