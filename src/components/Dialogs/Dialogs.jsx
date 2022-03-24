import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + "" + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

let dialogsData = [
  { id: "1", name: "Masha" },
  { id: "2", name: "Artem" },
  { id: "3", name: "Lena" },
  { id: "4", name: "Oleg" },
  { id: "5", name: "Sveta" },
  { id: "6", name: "Denys" },
];

let messageData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How is you IT course?" },
  { id: "3", message: "Yo" },
  { id: "4", message: "Yo" },
  { id: "5", message: "Yo" },
];

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
        <Message message={messageData[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
