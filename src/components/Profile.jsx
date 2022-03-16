import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg"
          alt="sea"
        />
      </div>
      <div>ava + discription</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
