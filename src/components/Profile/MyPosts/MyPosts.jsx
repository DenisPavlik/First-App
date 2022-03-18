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
        <Post message='Hi, how ary you?' likes='15' image='https://cdns-images.dzcdn.net/images/artist/4099da261a61666f58bb3598f0c4c37f/500x500.jpg'/>
        <Post message='It`s my first post' likes='28'  image='https://pbs.twimg.com/profile_images/1119181254002466818/wkr0oSKZ_400x400.jpg'/>
      </div>
    </div>
  );
};

export default MyPosts;
