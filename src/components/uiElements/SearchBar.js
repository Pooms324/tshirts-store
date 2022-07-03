import Input from "./Input";
import "./SearchBar.css";
import ButtonWithIcon from "./ButtonWithIcons";
const SearchBar = (props) => {
  return (
    <div className="search_bar">
      <Input
        onEntered={props.onEntered}
        value={props.value}
        element="search"
        input={{ type: "search", name: "search-engine" }}
      />
      <ButtonWithIcon
        btnClass="search_btn"
        imageAddress="https://cdn.icon-icons.com/icons2/2551/PNG/512/search_icon_152764.png"
        iconClass="search_icon"
      />
    </div>
  );
};
export default SearchBar;
