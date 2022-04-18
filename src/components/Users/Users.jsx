import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
  let getUsers = () => {
    if (props.usersData.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.usersData.map((u) => {
        return (
          <div key={u.id} className={style.users__wrap}>
            <div className={style.users}>
              <div className={style.users__follow}>
                <div className={style.users__img}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="photography"
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        props.follow(u.id);
                      }}
                      className={`${style.btn_followed} ${style.btn_follow}`}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                      className={`${style.btn_followed} ${style.btn_unfollow}`}
                    >
                      Unfollow
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
