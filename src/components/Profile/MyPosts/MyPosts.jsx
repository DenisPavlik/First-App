import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostFormRedux from "./PostForm";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likes={p.likes} image={p.image} />
  ));

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };
  console.log("Render Yo");
  return (
    <div className={s.posts__block}>
      <h3>My posts</h3>
      <div>
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
