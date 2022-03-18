import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img
          src={props.image}
          alt="ava"
        />
        {props.message}
        <div>
          <span>{props.likes} &#10084;</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
