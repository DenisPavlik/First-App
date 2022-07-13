import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                      onClick={() => {
                        axios
                          .delete(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {
                              withCredentials: true,
                              headers: {
                                "API-KEY":
                                  "123c49a4-1a62-4d48-9b52-3e9f278ebb82",
                              },
                            }
                          )
                          .then((response) => {
                            if (response.data.resultCode == 0) {
                              props.unfollow(u.id);
                            }
                          });
                      }}
                      className={`${style.btn_followed} ${style.btn_unfollow}`}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        axios
                          .post(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {},
                            {
                              withCredentials: true,
                              headers: {
                                "API-KEY":
                                  "123c49a4-1a62-4d48-9b52-3e9f278ebb82",
                              },
                            }
                          )
                          .then((response) => {
                            if (response.data.resultCode == 0) {
                              props.follow(u.id);
                            }
                          });
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
