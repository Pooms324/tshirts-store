import { NavLink } from "react-router-dom";
import "./Error404Page.css";
import Button from "./Button";
const Error404Page = () => {
  return (
    <div className="centered">
      <b className="text404">Page Not Found</b>

      <NavLink className="nav__link" to="/tshirts">
        <Button className="back">Back to home page</Button>
      </NavLink>
    </div>
  );
};

export default Error404Page;
