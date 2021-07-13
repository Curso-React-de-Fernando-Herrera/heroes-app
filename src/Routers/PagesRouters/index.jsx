import { Router, Switch, Route, Redirect } from 'wouter'

import HomePage from 'Pages/HomePage'
import Navbar from 'Components/Navbar'

import MarvelPage from 'Pages/Marvel'
import DCPage from 'Pages/DCPage'
import SearchPage from 'Pages/SearchPage'

import { AppBlock, ContainerPage } from './styles'

const PagesRouters = () => {
  return (
    <Router>
      <AppBlock>

        <Navbar />
        <ContainerPage>
          <Switch>
            <Route
              exact
              path="/marvel"
              component={ MarvelPage }
            />
            <Route
              exact
              path="/dc"
              component={ DCPage }
            />
            <Route
              exact
              path="/search"
              component={ SearchPage }
            />
            <Route
              exact
              path="/"
              component={ HomePage }
            />
            <Redirect to="/"/>
          </Switch>
        </ContainerPage>
      
      </AppBlock>
    </Router>
  )
}

export default PagesRouters
