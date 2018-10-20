import React from "react"
import { userProps } from "utils/reused-proptypes"

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
            {
              user.following.nodes.map(userFollow => {
                return(
                  <div className="User__content__following__item" key={userFollow.id}>
                    <div className="User__content__following__item__avatar">
                      <img src={userFollow.avatarUrl} alt={`avatar ${userFollow.name}`} />
                    </div>
                    <div className="User__content__following__item__name">
                      <a href={`${userFollow.url}`}>{userFollow.login}</a>
                    </div>
                  </div>
                )
              })
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
