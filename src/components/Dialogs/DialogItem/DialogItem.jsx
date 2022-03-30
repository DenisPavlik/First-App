import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + "" + s.active}>
      <NavLink to={path} className={s.dialog__person}>
        <img src={props.ava} alt="ava"></img>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
