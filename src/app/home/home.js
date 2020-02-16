import { div, header, p, span, img } from 'react-hyperscript-helpers'
import OKImg from '../images/karinaorion.jpg'

function Home() {
  return div('.home', [
    div('Wowee!'),
    img({ src: OKImg, width: 400, height: 400 }),
  ])
}

export default Home
