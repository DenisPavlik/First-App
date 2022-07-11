import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import lookighForAJobYes from "./../../../assets/images/lookighForAJobYes.png";
import lookighForAJobNo from "./../../../assets/images/lookighForAJobNo.png";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.content__image}>
        <img
          src="https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg"
          alt="sea"
        />
      </div>
      <div className={s.discription_block}>
        <div>
          <img src={props.profile.photos.large} alt="ava" />
        </div>
        <div>Discription: {props.profile.aboutMe}</div>
        <div>Full name: {props.profile.fullName}</div>
        <div className={style.lookighForAJob}>
          Looking for a job:
          <img
            src={
              !props.profile.lookighForAJob
                ? lookighForAJobYes
                : lookighForAJobNo
            }
            alt="Error"
          />
        </div>
        <div>
          Looking for a job description:
          {props.profile.lookingForAJobDescription}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
