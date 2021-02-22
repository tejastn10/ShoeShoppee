import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Input, message } from "antd";

import { searchProductRequest } from "../../store/actions/actions";

const { Search } = Input;

export const SearchBox = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onSearch = (value: string) => {
    if (value) {
      const keyword = value.trim();
      dispatch(searchProductRequest({ keyword }));
      history.push(`/search/${keyword}`);
    } else {
      message.warning("Searchfield empty");
      history.push(`/search`);
    }
  };

  return (
    <Search
      className="search"
      allowClear
      placeholder="Search your favourite shoes"
      enterButton
      onSearch={(value) => onSearch(value)}
    />
  );
};
