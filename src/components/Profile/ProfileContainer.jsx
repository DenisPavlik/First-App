import React from "react";
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params.profileId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
