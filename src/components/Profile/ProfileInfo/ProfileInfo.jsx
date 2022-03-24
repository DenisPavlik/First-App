import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content__image}>
        <img
          src="https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg"
          alt="sea"
        />
      </div>
      <div className={s.discription_block}>ava + discription</div>
    </div>
  );
};

export default ProfileInfo;
