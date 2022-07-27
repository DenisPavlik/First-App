import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogsData,
    messages: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
