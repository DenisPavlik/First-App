import Preloader from "../../common/preloader/Preloader";
import lookighForAJobYes from "./../../../assets/images/lookighForAJobYes.png";
import lookighForAJobNo from "./../../../assets/images/lookighForAJobNo.png";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
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
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
