import s from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://cdns-images.dzcdn.net/images/artist/4099da261a61666f58bb3598f0c4c37f/500x500.jpg"
          alt="ava"
        />
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
