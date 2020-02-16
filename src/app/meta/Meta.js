import Helmet from 'react-helmet'
import { hyper } from 'lib/hyper'
import { title } from 'react-hyperscript-helpers'

const hHelmet = hyper(Helmet)

export default () => hHelmet([title('Karina and Orion Wedding!')])
