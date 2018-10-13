import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faGhost } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import HomeContainer from "components/home/home.container"

library.add(faPlay, faGhost, faGithub);

const MainLayout = () => (
  <div className="main-layout">
    <header className="Header">
      <Link to="/" className="Header__first"/>
      <div className="Header__content">
      <div className="Header__content__text">
      <FontAwesomeIcon icon={["fab","github"]} width="50" height="50"/>
      </div>
      </div>
    </header>
    <span className="main-layout__vertical-col" />
    <main>      
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Redirect to="/" />
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