import { Route } from 'react-router-dom'
import { hyper } from 'lib/hyper'
import Header from './header'
import Footer from './footer'
import { div, header, p, title } from 'react-hyperscript-helpers'
import './layout.scss'

const hRoute = hyper(Route)

const DefaultLayout = ({ component: Component, ...rest }) => {
  const hComponent = hyper(Component)
  return hRoute({
    ...rest,
    render: (matchProps) =>
      div([
        Header(matchProps),
        div('.section.main', [
          div('.container', [
            hComponent({
              ...matchProps,
            }),
          ]),
        ]),
        Footer(),
      ]),
  })
}

export default DefaultLayout
