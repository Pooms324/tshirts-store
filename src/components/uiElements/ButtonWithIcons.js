import "./ButtonWithIcon.css";

const ButtonWithIcon = (props) => {
  return (
    <button onClick={props.click} className={props.btnClass}>
      <img
        src={props.imageAddress}
        alt="button icon"
        className={props.iconClass}
      />
    </button>
  );
};

export default ButtonWithIcon;
