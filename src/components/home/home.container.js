import React from "react"
import { connect } from "react-redux"
import store from "store"
import { getUser } from "actions/user-actions"

import { WAITING, LOADING } from "utils/network-states"

import Loading from "../loading/loading"
import Home from "./home"

class HomeContainer extends React.Component {

  componentWillMount(){
    store.dispatch(getUser());
  }

  render() {
    return(
        <div>
          { this.props.networkState === WAITING || this.props.networkState === LOADING ?
            <Loading />
            : <Home />
          }
        </div>
    )
  }
}

HomeContainer.propTypes = {
  //user: userProps
}

HomeContainer.defaultProps = {
  //user: userDefaultProps
}

const mapStateToProps = function(_store) {
  return {
    //user: _store.usersState.user,
    networkState: _store.userState.networkState
  }
}
export default connect(mapStateToProps)(HomeContainer)
