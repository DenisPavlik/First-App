import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.postsData.map((p) => (
    <Post message={p.message} likes={p.likes} image={p.image} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <div className={s.posts__block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
