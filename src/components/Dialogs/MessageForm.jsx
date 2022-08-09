import React from "react";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          type="text"
          name="newMessageText"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send Message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default AddMessageFormRedux;