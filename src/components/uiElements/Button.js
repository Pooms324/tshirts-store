import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={props.className}
      disabled={props.isdisabled}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};
export default Button;
