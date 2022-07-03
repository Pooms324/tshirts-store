import { useState } from "react";
import TShirt from "./TShirt";
import "./TShirts.css";
import FilterSection from "./FilterSection";
import SearchBar from "../uiElements/SearchBar";
import ButtonWithIcon from "../uiElements/ButtonWithIcons";
import { NavLink } from "react-router-dom";
const TShirts = (props) => {
  const [productFilter, setProductFilter] = useState(null);
  const [showFilterSection, setShowFilterSection] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [userSearchedValue, setUserSearchedValue] = useState("");

  let sectionClass = "filter_section_mobile";
  if (showFilterSection) {
    sectionClass = "filter_section_mobile open";
  }

  const filterValueHandler = (userSelectedFilter) => {
    setProductFilter(userSelectedFilter);
    setUserSearchedValue("");
  };

  const inputValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const openFilterSection = () => {
    setShowFilterSection((prev) => !prev);
  };

  const closeFilterSection = () => {
    setShowFilterSection(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setUserSearchedValue(enteredValue);
    setEnteredValue(() => "");
  };
  const products = props.tshirts
    .filter((tshirt) => {
      if (userSearchedValue !== "") {
        return tshirt.name
          .toLowerCase()
          .includes(userSearchedValue.toLowerCase());
      }

      if (productFilter) {
        if (productFilter.toLowerCase() === "all products") {
          return tshirt;
        } else if (productFilter.toLowerCase() === tshirt.color.toLowerCase()) {
          return tshirt;
        } else if (
          productFilter.toLowerCase() === tshirt.gender.toLowerCase()
        ) {
          return tshirt;
        } else if (productFilter.toLowerCase() === tshirt.type.toLowerCase()) {
          return tshirt;
        } else if (productFilter.match(250)) {
          const priceValue = productFilter.match(250);
          return +priceValue[0] >= tshirt.price;
        } else if (productFilter.match(251) && productFilter.match(450)) {
          const priceValue1 = productFilter.match(251);
          const priceValue2 = productFilter.match(450);
          return (
            +priceValue1[0] <= tshirt.price && +priceValue2[0] >= tshirt.price
          );
        } else if (productFilter.match(450)) {
          const priceValue = productFilter.match(450);
          return +priceValue[0] <= tshirt.price;
        }
      } else {
        return tshirt;
      }
      return 0;
    })
    .map((tshirt) => (
      <TShirt
        key={tshirt.id}
        name={tshirt.name}
        id={tshirt.id}
        currency={tshirt.currency}
        imageURL={tshirt.imageURL}
        price={tshirt.price}
        quantityLimit={tshirt.quantity}
      />
    ));
  return (
    <>
      <div className="search_section">
        <form onSubmit={submitHandler}>
          <SearchBar onEntered={inputValueHandler} value={enteredValue} />
        </form>
        <ButtonWithIcon
          imageAddress="https://www.freeiconspng.com/thumbs/filter-icon/filter-icon-0.png"
          btnClass="filter_btn"
          iconClass="filter_icon"
          click={openFilterSection}
        />
        <div className={sectionClass}>
          <FilterSection
            onClose={closeFilterSection}
            onFilter={filterValueHandler}
          />
        </div>
      </div>

      <div className="products_and_filter_section">
        {products.length !== 0 && (
          <div className="side_bar">
            <FilterSection onFilter={filterValueHandler} />
          </div>
        )}
        <div className="products_section">
          {products.length === 0 ? (
            <div className="error_text_card">
              <p className="err_text">No products found</p>
              <NavLink to="/" className="nav_link">
                <button className="back">Back</button>
              </NavLink>
            </div>
          ) : (
            products
          )}
        </div>
      </div>
    </>
  );
};

export default TShirts;
