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

  render() {
    return(
        <div>
          <FollowingUser 
            {...this.state}
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
