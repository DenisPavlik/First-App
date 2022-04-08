import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        let onMessageChange = (text) => {
          let action = updateNewMessageTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <Dialogs
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            dialogs={state.dialogsData}
            messages={state.messagesData}
            newMessageText={state.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
