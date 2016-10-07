import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'
import App from './app'

const mountPoint = document.getElementById('app')

render(<AppContainer><App/></AppContainer>, mountPoint)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default
    render(<AppContainer><NewApp/></AppContainer>, mountPoint)
  })
}
