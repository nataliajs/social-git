import React from "react"
import { userProps } from "utils/reused-proptypes"
import Proptypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FollowingUser extends React.Component {
  _renderCommonContent = (items, label)=>{
    return(
      items.length>0?
        (<div className="FollowingUser__content__common-items__wrapper">
          <div className="FollowingUser__content__common-items__title">{label}</div>
          <div className="FollowingUser__content__common-items__info">
            {
              items.map(item=>{
                return(
                  <div className="FollowingUser__content__common-items__info__name" key={item.id}>
                    <a href={item.url? item.url: item.homePageUrl}>{item.name}</a>
                  </div>
                )
              })
            }
          </div>
        </div>)
        :""
    )
  }

  render() {
    const hasSomethingInCommon = this.props.commonOrganizations.length>0
      && this.props.commonRepositories>0;
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
              <div className="FollowingUser__content__title">
                { hasSomethingInCommon? "You have in common": "You don't have nothing in common :(" }
              </div>
              <div className="FollowingUser__content__common-items">
                
                { this._renderCommonContent( this.props.commonOrganizations, "Organizations") }

                { this._renderCommonContent( this.props.commonRepositories, "Repositories") }

              </div>
            </div>
            :""
          }
      </div>
    )
  }
}

FollowingUser.propTypes = {
  followingUser: userProps,
  showInformation: Proptypes.func,
  commonOrganizations: Proptypes.array,
  commonRepositories: Proptypes.array
}
export default FollowingUser
