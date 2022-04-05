import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));

  let messageElement = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsElement}</div>
      <div>
        <div className={s.messages}>{messageElement}</div>
        <div>
          <textarea
            ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
