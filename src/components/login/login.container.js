import React from "react"
import { connect } from "react-redux"
import store from "store"
import { getUser } from "actions/user-actions"

import { ERROR, LOADING } from "utils/network-states"
import { EMPTY_USER_ERROR, INVALID_USER_ERROR, NETWORK_ERROR } from "utils/constants"

import Loading from "components/loading/loading"
import Login from "components/login/login"

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      validationError: false
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.userNotFound !== this.props.userNotFound){
      const error = this.props.userNotFound? INVALID_USER_ERROR: false;
      this.setState({
        ...this.state,
        login: event.target.value,
        validationError: error
      });
    }
    if(prevProps.networkState !== this.props.networkState && this.props.networkState === ERROR){
      this.setState({
        ...this.state,
        validationError: NETWORK_ERROR
      });
    }
  }

  _handleChange = (event) => {
    this.setState({
      ...this.state,
      login: event.target.value,
      validationError: false
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.login.length===0){
      this.setState({
        ...this.state,
        validationError: EMPTY_USER_ERROR
      });
      return;
    }
    store.dispatch(getUser(this.state.login));
  }

  render() {
    return(
        <div>
          { this.props.networkState === LOADING ?
            <Loading />
            : 
            <Login 
              {...this.state}
              handleChange={this._handleChange}
              handleSubmit={this._handleSubmit}
            />
          }
        </div>
    )
  }
}

LoginContainer.propTypes = {
  //user: userProps
}

LoginContainer.defaultProps = {
  //user: userDefaultProps
}

const mapStateToProps = function(_store) {
  return {
    user: _store.userState.user,
    userNotFound: _store.userState.userNotFound,
    networkState: _store.userState.networkState
  }
}
export default connect(mapStateToProps)(LoginContainer)
