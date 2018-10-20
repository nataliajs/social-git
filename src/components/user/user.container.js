import React from "react"
import { connect } from "react-redux"
import store from "store"
import { getUser } from "actions/user-actions"
import { userProps } from "utils/reused-proptypes"
import { WAITING, LOADING } from "utils/network-states"

import User from "./user"
import Loading from "components/loading/loading"

class UserContainer extends React.Component {
  componentWillMount(){
    store.dispatch(getUser(this.props.match.params.userName));
  }
  render() {
    return(
        <div>
          { this.props.networkState === LOADING || this.props.networkState === WAITING || !this.props.user.id?
            <Loading />
            :<User 
              user={this.props.user}
            />
          }
        </div>
    )
  }
}

UserContainer.propTypes = {
  user: userProps
}

const mapStateToProps = function(_store) {
  return {
    user: _store.userState.user,
    networkState: _store.userState.networkState
  }
}
export default connect(mapStateToProps)(UserContainer)
