import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postData = [
  {
    id: "1",
    message: "Hi, how ary you?",
    likes: "15",
    image:
      "https://cdns-images.dzcdn.net/images/artist/4099da261a61666f58bb3598f0c4c37f/500x500.jpg",
  },
  {
    id: "2",
    message: "It`s my first post",
    likes: "15",
    image:
      "https://pbs.twimg.com/profile_images/1119181254002466818/wkr0oSKZ_400x400.jpg",
  },
];

const MyPosts = () => {
  return (
    <div className={s.posts__block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post
          message={postData[0].message}
          likes={postData[0].likes}
          image={postData[0].image}
        />
        <Post
          message={postData[1].message}
          likes={postData[1].likes}
          image={postData[1].image}
        />
      </div>
    </div>
  );
};

export default MyPosts;
