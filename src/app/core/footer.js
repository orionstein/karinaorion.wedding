import { Route } from 'react-router-dom'
import { hyper } from 'lib/hyper'
import Meta from 'app/meta/Meta'
import { div, header, p, title } from 'react-hyperscript-helpers'

import './footer.scss'

const Header = () => div('.section.footer', [div('.container', [p('footer')])])

export default Header
