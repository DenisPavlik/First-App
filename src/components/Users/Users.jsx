import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  if (props.usersData.length === 0) {
    props.setUsers([
      {
        id: "1",
        fullname: "Denys",
        followed: false,
        status: "Working in rainy weather...",
        location: { city: "Kharkiv", country: "Ukraine" },
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjX4xY4hHG3RXO0vy-1Bm26lwdRztqLI0-w&usqp=CAU",
      },
      {
        id: "2",
        fullname: "Mary",
        followed: true,
        status: "Bride of a gineus",
        location: { city: "Krivoi Rog", country: "Ukraine" },
        photoUrl: "https://pic.sport.ua/images/news/0/12/155/orig_511003.jpg",
      },
      {
        id: "3",
        fullname: "Yaroslav",
        followed: false,
        status: "Playing css with Mr.Pavlyk ;)",
        location: { city: "Kiev", country: "Ukraine" },
        photoUrl:
          "https://www.meme-arsenal.com/memes/711af119a0b64e4fba31419abdddbb9e.jpg",
      },
    ]);
  }

  return (
    <div>
      {props.usersData.map((u) => {
        return (
          <div key={u.id} className={style.users__wrap}>
            <div className={style.users}>
              <div className={style.users__follow}>
                <div className={style.users__img}>
                  <img src={u.photoUrl} alt="photography" />
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
                  <div className={style.about__fullname}>{u.fullname}</div>
                  <div className={style.about__status}>{u.status}</div>
                </div>
                <div className={style.info__location}>
                  <div className={style.location__city}>{u.location.city},</div>
                  <div className={style.location__country}>
                    {u.location.country}
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
