import Input from "../uiElements/Input";
const filterData = {
  all: [{ category: "all", name: "all products" }],
  color: [
    { category: "color", name: "red" },
    { category: "color", name: "green" },
    { category: "color", name: "blue" },
  ],
  gender: [
    { category: "gender", name: "men" },
    { category: "gender", name: "women" },
  ],
  price: [
    { category: "price", name: "0-Rs.250", minAmt: 0, maxAmt: 250 },
    { category: "price", name: "Rs.251-450", minAmt: 251, maxAmt: 450 },
    { category: "price", name: "Rs.450", minAmt: 450 },
  ],
  type: [
    { category: "type", name: "polo" },
    { category: "type", name: "hoodie" },
    { category: "type", name: "basic" },
  ],
};

const FilterSection = (props) => {
  const getFilterValue = (event) => {
    props.onFilter(event.target.id);
  };

  const categoryAndOptionWrapper = (category, options) => {
    const categoryLabel = <label className="category_label">{category}</label>;
    const optionsInput = options.map((option) => (
      <Input
        element="select"
        onClick={props.onClose}
        onSeleted={getFilterValue}
        id={option.name}
        key={option.name}
        option={option.name}
        input={{ type: "radio", name: "rad" }}
      />
    ));
    return (
      <div key={category}>
        {categoryLabel}
        {optionsInput}
      </div>
    );
  };
  let jsx = [];
  const categoryByOption = () => {
    let wrapper;
    for (let [category, options] of Object.entries(filterData)) {
      wrapper = categoryAndOptionWrapper(category, options);
      jsx.push(wrapper);
    }
  };
  categoryByOption();
  const finalData = jsx.map((ele) => ele);
  return <>{finalData}</>;
};

export default FilterSection;
