import React from "react"
//import { userProps, userDefaultProps } from "utils/reused-proptypes"

class Home extends React.Component {
  render() {
    return(
      <div className="Home">
        <div className="Home__title">Holas mundo</div>
        <div className="Home__content">

        </div>          
      </div>
    )
  }
}

Home.propTypes = {
  //user: userProps
}

Home.defaultProps = {
  //user: userDefaultProps
}

export default Home
