import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shoppage'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    )
  }
}

export default App
