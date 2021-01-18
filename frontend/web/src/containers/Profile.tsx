import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { ApplicationState } from "../store/store";
import { AuthState, UserProfileState } from "../store/@types";
import { message } from "antd";
import { getUserProfileRequest } from "../store/actions/actions";

export const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );
  const profileState = useSelector<ApplicationState, UserProfileState>(
    (state) => state.userProfile
  );

  const { auth } = authState;
  const { errors, profile } = profileState;

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
    }
  }, [errors.results]);

  useEffect(() => {
    if (!auth) {
      history.push("/login");
    } else {
      if (!profile) {
        // TODO: Get profile by id
        dispatch(getUserProfileRequest());
      }
    }
  }, [history, auth, dispatch, profile]);

  return <div>Profile</div>;
};
