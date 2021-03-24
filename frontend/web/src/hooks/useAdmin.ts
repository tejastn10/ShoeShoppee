import { useSelector } from "react-redux";
import { AdminState } from "../store/@types";
import { ApplicationState } from "../store/store";

export const useAdmin = () => {
  const adminState = useSelector<ApplicationState, AdminState>(
    (state) => state.admin
  );

  return { adminState };
};
