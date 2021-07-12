import { Router, Switch, Route } from 'wouter'

import HomePage from 'Pages/HomePage'
import Navbar from 'Components/Navbar'

import { AppBlock } from './styles'

const PagesRouters = () => {
  return (
    <Router>
      <AppBlock>

        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            component={ HomePage }
            />
        </Switch>
      
      </AppBlock>
    </Router>
  )
}

export default PagesRouters
