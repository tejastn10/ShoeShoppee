import { useSelector } from "react-redux";
import { AuthState } from "../store/@types";
import { ApplicationState } from "../store/store";

export const useAuth = () => {
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );

  return { authState };
};
