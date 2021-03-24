import { useSelector } from "react-redux";
import { ProductDetailsState } from "../store/@types";
import { ApplicationState } from "../store/store";

export const useProductDetail = () => {
  const productState = useSelector<ApplicationState, ProductDetailsState>(
    (state) => state.productDetails
  );

  return { productState };
};
