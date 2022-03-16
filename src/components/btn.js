import { Link } from "react-router-dom";

function Button(props) {
  return (
    <>
      <button className={props.Cstyle}>
        <Link to={"#"}>{props.text}</Link>
      </button>
    </>
  );
}

export default Button;
