import React from 'react'

import { Route, Switch } from 'react-router-dom'

import DCScreen from 'pages/DC/DCScreen'
import MarvelScreen from 'pages/Marvel/MarvelScreen'
import HomeScreen from 'pages/Home/HomeScreen'
import ErrorPage from 'pages/404ErrorPage/404ErrorPage'

import Header from 'components/Header/Header'

const DashboardRoute = () => {
  return (
    <>
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
          path="/"
          component={ HomeScreen }
        />
        <Route
          component={ ErrorPage }
        />
      </Switch>
    </>
  )
}

export default DashboardRoute
