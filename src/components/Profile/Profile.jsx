import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={s.content__image}>
        <img
          src="https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg"
          alt="sea"
        />
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
