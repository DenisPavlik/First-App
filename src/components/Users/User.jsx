import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = (props) => {
  return (
          <div className={style.users__wrap}>
            <div className={style.users}>
              <div className={style.users__follow}>
                <div className={style.users__img}>
                  <NavLink to={"/profile/" + props.user.id}>
                    <img
                      src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                      alt="photography"
                    />
                  </NavLink>
                </div>
                <div>
                  {props.user.followed ? (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === props.user.id
                      )}
                      onClick={() => {
                        props.unfollow(props.user.id);
                      }}
                      className={`${style.btn_followed} ${style.btn_unfollow}`}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === props.user.id
                      )}
                      onClick={() => {
                        props.follow(props.user.id);
                      }}
                      className={`${style.btn_followed} ${style.btn_follow}`}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div className={style.users__info}>
                <div className={style.info__about}>
                  <div className={style.about__fullname}>{props.user.name}</div>
                  <div className={style.about__status}>{props.user.status}</div>
                </div>
                <div className={style.info__location}>
                  <div className={style.location__city}>
                    {"user.location.city"},
                  </div>
                  <div className={style.location__country}>
                    {"user.location.country"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

export default User;
