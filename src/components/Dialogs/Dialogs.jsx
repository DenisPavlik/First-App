import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));

  let messageElement = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsElement}</div>
      <div>
        <div className={s.messages}>{messageElement}</div>
        <div>
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
