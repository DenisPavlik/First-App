import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / 1000); //props.pageSize

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={`${style.pageChooser} ${
                props.currentPage === p && style.selectedPage
              }`}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.usersData.map((u) => {
        return (
          <div key={u.id} className={style.users__wrap}>
            <div className={style.users}>
              <div className={style.users__follow}>
                <div className={style.users__img}>
                  <NavLink to={"/profile/" + u.id}>
                    <img
                      src={u.photos.small != null ? u.photos.small : userPhoto}
                      alt="photography"
                    />
                  </NavLink>
                </div>
                <div>
                  {u.followed ? (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                      className={`${style.btn_followed} ${style.btn_unfollow}`}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {
                        props.follow(u.id);
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
                  <div className={style.about__fullname}>{u.name}</div>
                  <div className={style.about__status}>{u.status}</div>
                </div>
                <div className={style.info__location}>
                  <div className={style.location__city}>
                    {"u.location.city"},
                  </div>
                  <div className={style.location__country}>
                    {"u.location.country"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
