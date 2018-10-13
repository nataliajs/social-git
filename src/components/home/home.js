import React from "react"

import LoginContainer from "components/login/login.container"

class Home extends React.Component {
  render() {
    return(
      <div className="Home">
        <div className="Home__content">
          <div className="Home__title">Social github</div>
          <LoginContainer />
        </div>          
      </div>
    )
  }
}

export default Home
