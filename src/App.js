import Helmet from 'react-helmet'
import { div, header, p, title } from 'react-hyperscript-helpers'
import { hyper } from 'lib/hyper'
import Meta from 'app/meta/Meta'
import { Link } from 'react-router-dom'
import './App.scss'

const hLink = hyper(Link)

function App() {
  return div('.App', [
    Meta(),
    header('.App-header', [p('Karina and Orion <3')]),
    hLink({
      to: '/foo',
    }, ['foo']),
  ])
}

export default hyper(App)
