import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
                  this.props.currentPage === p && style.selectedPage
                }`}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.usersData.map((u) => {
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
                          this.props.follow(u.id);
                        }}
                        className={`${style.btn_followed} ${style.btn_follow}`}
                      >
                        Follow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.unfollow(u.id);
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
  }
}

export default Users;
