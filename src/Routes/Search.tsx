import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get;
  console.log(keyword);

  return null;
}

export default Search;
