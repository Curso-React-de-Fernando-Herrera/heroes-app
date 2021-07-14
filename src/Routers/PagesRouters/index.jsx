import { Router, Switch, Route, Redirect } from 'wouter'

import Navbar from 'Components/Navbar'

import MarvelPage from 'Pages/Marvel'
import SingleHeroPage from 'Pages/SingleHeroPage'
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
              path="/hero/:hero"
              component={ SingleHeroPage }
            />
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
              path="/search/:nameHero?"
              component={ SearchPage }
            />
            <Redirect to="/marvel"/>
          </Switch>
        </ContainerPage>
      
      </AppBlock>
    </Router>
  )
}

export default PagesRouters
