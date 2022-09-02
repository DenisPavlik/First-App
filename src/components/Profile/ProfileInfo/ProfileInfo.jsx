import Preloader from "../../common/preloader/Preloader";
import lookighForAJobYes from "./../../../assets/images/lookighForAJobYes.png";
import lookighForAJobNo from "./../../../assets/images/lookighForAJobNo.png";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={style.content__image}>
        <img
          src="https://stoqk.com/wp-content/uploads/2017/03/Sea-Beach-Wallpaper-HD.jpg"
          alt="sea"
        />
      </div>
      <div className={style.discription_block}>
        <div>
          <img src={props.profile.photos.large || userPhoto} alt="ava" className={style.mainPhoto}/>
          {props.isOvner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
