import { useSelector } from "react-redux";
import { UserProfileState } from "../store/@types";
import { ApplicationState } from "../store/store";

export const useProfile = () => {
  const profileState = useSelector<ApplicationState, UserProfileState>(
    (state) => state.userProfile
  );

  return { profileState };
};
