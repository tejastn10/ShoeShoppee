import { useSelector } from "react-redux";
import { OrderState } from "../store/@types";
import { ApplicationState } from "../store/store";

export const useOrder = () => {
  const orderState = useSelector<ApplicationState, OrderState>(
    (state) => state.orders
  );

  return { orderState };
};
