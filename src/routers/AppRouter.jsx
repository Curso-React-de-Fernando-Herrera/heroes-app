import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginScreen from 'pages/Login/LoginScreen'
import DashboardRoute from './DashboardRoute'

const AppRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route
            exact
            path="/login"
            component={ LoginScreen }
          />

          <Route
            path="/"
            component={ DashboardRoute }
          />
          
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default AppRouters
