import { Route, Router, Switch } from 'wouter'

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
          path="/"
          component={ PagesRouters }
        />
        <Route><h1>No encontrado</h1></Route>
      </Switch>
    </Router>
  )
}

export default AppRouters
