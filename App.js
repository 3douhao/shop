import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'

const Hats = () => {
  return (
    <div>
      <Link to='/'>HomePage</Link>
      <h1>this is hats page</h1>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hats} />
      </Switch>
    )
  }
}

export default App
