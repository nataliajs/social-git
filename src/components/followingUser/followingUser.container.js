import React from "react"
import { connect } from "react-redux"
import { userProps } from "utils/reused-proptypes"

import FollowingUser from "./followingUser"

class FollowingUserContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  showInformation = ()=>{
    this.setState({
      ...this.state,
      isShow: !this.state.isShow
    })
  }

  getCommonRepositories = ()=>{

  }

  getCommonOrganizations = ()=>{
    const organizations = _.filter(this.props.user.organizations.nodes, org=>{
      return _.findIndex(this.props.followingUser.organizations.nodes, followOrg=>{
        return followOrg.id===org.id
      }) >= 0
    });
    return organizations
  }

  getCommonRepositories = ()=>{
    const userRepositories = [...this.props.user.repositories.nodes, ...this.props.user.repositoriesContributedTo.nodes];
    const followingUserRepositories = [...this.props.followingUser.repositories.nodes, ...this.props.followingUser.repositoriesContributedTo.nodes];
    const commonRepositories = _.filter(userRepositories, repo=>{
      return _.findIndex(followingUserRepositories, followRepo=>{
        return followRepo.id===repo.id
      }) >= 0
    });
    return commonRepositories;
  }

  render() {
    return(
        <div>
          <FollowingUser 
            {...this.state}
            commonOrganizations = {this.getCommonOrganizations()}
            commonRepositories = {this.getCommonRepositories()}
            followingUser={this.props.followingUser}
            showInformation={this.showInformation}
            />
        </div>
    )
  }
}

FollowingUserContainer.propTypes = {
  followingUser: userProps,
  user: userProps
}

const mapStateToProps = function(_store) {
  return {
    user: _store.userState.user
  }
}
export default connect(mapStateToProps)(FollowingUserContainer)
