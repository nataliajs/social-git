import React from "react"
import { userProps } from "utils/reused-proptypes"
import Proptypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FollowingUser extends React.Component {
  render() {
    return(
      <div className="FollowingUser">
        <div className="FollowingUser__header">
          <div className="FollowingUser__header__info">
            <div className="FollowingUser__header__info__avatar">
              <img src={this.props.followingUser.avatarUrl} alt={`avatar ${this.props.followingUser.name}`} />
            </div>
            <div className="FollowingUser__header__info__name">
              <a href={`${this.props.followingUser.url}`}>{this.props.followingUser.login}</a>
            </div>
          </div>
          <div className="FollowingUser__header__arrow" onClick={this.props.showInformation}>
          {
            this.props.isShow?
            <FontAwesomeIcon icon={["fas","angle-down"]} size="2x"/>
            :<FontAwesomeIcon icon={["fas","angle-up"]} size="2x"/>
          }
          </div>
        </div>
          {
            this.props.isShow?
            <div className="FollowingUser__content">
            
            </div>
            :""
          }
      </div>
    )
  }
}

FollowingUser.propTypes = {
  followingUser: userProps,
  showInformation: Proptypes.func
}
export default FollowingUser
