import { useSelector } from "react-redux";
import { ProductListState } from "../store/@types";
import { ApplicationState } from "../store/store";

export const useProductList = () => {
  const productList = useSelector<ApplicationState, ProductListState>(
    (state) => state.productList
  );

  return { productList };
};
