import React from "react"
//import { movieProps, movieDefaultProps } from "utils/reused-proptypes"

class User extends React.Component {
  render() {
    return(
      <div className="Movie">
        <div className="Movie__title">Holas mundo</div>
        <div className="Movie__player">

        </div>          
      </div>
    )
  }
}

User.propTypes = {
  //user: movieProps
}

User.defaultProps = {
  //user: movieDefaultProps
}

export default User
