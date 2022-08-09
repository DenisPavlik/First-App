import React from "react";
import { Field, reduxForm } from "redux-form";

const PostForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          type="text"
          placeholder="Enter your post"
          name="newPostText"
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