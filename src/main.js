import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/app'

import './styles/global.scss'

const appContainer = document.getElementById('app-container')
let renderDebugPanel = function() {}

if (process.env.NODE_ENV == 'development') {
  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react')

  renderDebugPanel = function(store) {
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    )
  }
}

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App message='Yoo'/>
    </Provider>
    {renderDebugPanel(store)}
  </div>
  , appContainer)
