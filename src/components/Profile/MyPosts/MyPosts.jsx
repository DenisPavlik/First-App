import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div className={s.post}>New post</div>
      <textarea></textarea>
      <button>Send</button>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> 
      </div>
    </div>
  );
};

export default MyPosts;
