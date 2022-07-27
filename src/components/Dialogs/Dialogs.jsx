import React from "react";
import { Navigate } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} ava={d.ava} />
  ));
  let messageElement = props.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsElement}</div>
      <div>
        <div className={s.messages}>{messageElement}</div>
        <div>
          <textarea
            ref={newMessageElement}
            placeholder="Enter new message"
            value={props.newMessageText}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
