import React from "react"
import { connect } from "react-redux"

import User from "./user"

class UserContainer extends React.Component {
  render() {
    return(
        <div>
          <User />
        </div>
    )
  }
}

UserContainer.propTypes = {
  //user: userProps
}

const mapStateToProps = function(_store) {
  return {
    user: _store.userState.user,
    networkState: _store.userState.networkState
  }
}
export default connect(mapStateToProps)(UserContainer)
