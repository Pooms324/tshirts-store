import "./Input.css";
const Input = (props) => {
  const inputType =
    props.element === "select" ? (
      <label className="rad-label">
        <input
          onClick={props.onClick}
          onChange={props.onSeleted}
          id={props.id}
          {...props.input}
          className="rad-input"
        />
        <div className="rad-design"></div>
        <div className="rad-text">{props.option}</div>
      </label>
    ) : (
      <input
        placeholder="search"
        className="search_input"
        onChange={props.onEntered}
        {...props.input}
      />
    );
  return <>{inputType}</>;
};
export default Input;
