import React from "react";
import Profile from "./Profile";
import { withRouter } from "../../hoc/withRouter";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      // profileId = 23489;
      profileId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(profileId);
    this.props.getStatus(profileId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
