import { useSelector } from "react-redux";
import { CartState } from "../store/@types";
import { ApplicationState } from "../store/store";

export const useCart = () => {
  const cartState = useSelector<ApplicationState, CartState>(
    (state) => state.cart
  );

  return { cartState };
};
