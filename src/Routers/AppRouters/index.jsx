import { Route, Router, Switch, Redirect } from 'wouter'

import LoginPage from 'Pages/LoginPage'
import PagesRouters from 'Routers/PagesRouters'

const AppRouters = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/login"
          component={ LoginPage }
        />
        <Route
          exact
          path="/:page/:hero?"
          component={ PagesRouters }
        />
        <Redirect to="/marvel"/>
      </Switch>
    </Router>
  )
}

export default AppRouters
