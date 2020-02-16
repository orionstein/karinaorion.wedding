import { render } from 'react-snapshot'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hyper } from 'lib/hyper'
import Meta from 'app/meta/Meta'

import Layout from './app/core/layout'

import './index.scss'
import App from './App'
import Home from './app/home/home'
import Wedding from './app/wedding/wedding'
import * as serviceWorker from './serviceWorker'

const hRouter = hyper(Router)

render(
  hRouter([
    Meta(),
    Layout({
      path: '/',
      exact: true,
      component: Home,
    }),
    Layout({
      path: '/wedding',
      component: Wedding,
    }),
  ]),
  document.getElementById('root'),
)

serviceWorker.register()
