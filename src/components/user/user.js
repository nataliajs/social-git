import React from "react"
import { userProps } from "utils/reused-proptypes"

import FollowingUser from "components/followingUser/followingUser.container"

class User extends React.Component {
  render() {
    const user = this.props.user
    return(
      <div className="User">
        <div className="User__content">
          <div className="User__content__info">
            <div className="User__content__info__avatar">
              <img src={user.avatarUrl} alt={`avatar ${user.name}`} />
            </div>
            <div className="User__content__info__name">{user.login}</div>
          </div>
          <div className="User__content__following">
            <div className="User__content__following__title">Your friends</div>
            <div className="User__content__following__users">
            {
              user.following.edges.map(followingUser => {
                return(
                  <FollowingUser followingUser={followingUser.node} key={followingUser.node.id}/>
                )
              })
            }      
            </div>      
            {
              user.following.totalCount > user.following.edges.length?
                (<div className="User__content__following__more" onClick={this.props.getMoreFollowingUsers}> 
                  >> more
                </div>)
              : ""
            }            
          </div>
        </div>          
      </div>
    )
  }
}

User.propTypes = {
  user: userProps
}

export default User
