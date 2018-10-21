import React from "react"
import { ERROR } from 'utils/network-states'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { Link } from "react-router-dom"
import store from "store"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import LoginContainer from "components/login/login.container"
import UserContainer from "components/user/user.container"

library.add(faGithub, faAngleUp, faAngleDown);

const MainLayout = () => (
  <div className="main-layout">
    <header className="Header">
      <Link to="/login" className="Header__first"/>
      <div className="Header__content">
      <div className="Header__content__title">
        <div className="Header__content__title__icon">
          <FontAwesomeIcon icon={["fab","github"]} size="2x"/>
        </div>
      </div>
      </div>
    </header>
    <span className="main-layout__vertical-col" />
    <main>            
      <Switch>
        <Route path="/login" exact component={LoginContainer} />
        <Route path="/user/:userName" render={ props=>(          
            store.getState().userState.networkState === ERROR || store.getState().userState.userNotFound ?
            (<Redirect to="/login"/>)
            : <UserContainer {...props}/>
          )} />
        <Redirect to="/login" />
      </Switch>
    </main>
  </div>
)

const App = () => (
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
)

export default App