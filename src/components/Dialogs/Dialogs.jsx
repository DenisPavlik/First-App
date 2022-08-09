import React from "react";
import { Navigate } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageFormRedux from "./MessageForm";


const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} ava={d.ava} />
  ));
  let messageElement = props.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageText)
  }

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsElement}</div>
      <div>
        <div className={s.messages}>{messageElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
