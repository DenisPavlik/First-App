import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/valodators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          type="text"
          placeholder="Enter your post"
          name="newPostText"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Send Post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "postAddForm" })(PostForm);

export default AddPostFormRedux;
