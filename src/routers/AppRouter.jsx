import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DCScreen from 'pages/DC/DCScreen'
import LoginScreen from 'pages/Login/LoginScreen'
import MarvelScreen from 'pages/Marvel/MarvelScreen'
import ErrorPage from 'pages/404ErrorPage/404ErrorPage'

import Header from 'components/Header/Header'

const AppRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/marvel"
            component={ MarvelScreen }
          />
          <Route
            exact
            path="/dc"
            component={ DCScreen }
          />
          <Route
            exact
            path="/login"
            component={ LoginScreen }
          />
          <Route
            component={ ErrorPage }
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default AppRouters
