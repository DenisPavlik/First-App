import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messageElement = state.messagesData.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageText = state.newMessageText;

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsElement}</div>
      <div>
        <div className={s.messages}>{messageElement}</div>
        <div>
          <textarea
            ref={newMessageElement}
            placeholder="Enter new message"
            value={newMessageText}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
