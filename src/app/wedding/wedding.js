import { div, a, header, p } from 'react-hyperscript-helpers'

import './wedding.scss'

const GMAP_WEDDING_URL = 'https://www.google.com/maps/place/Whitetail+Golf+Resort/@39.7441512,-77.9625303,11.5z/data=!4m5!3m4!1s0x89c989fc4d66c20f:0x987bf9e01e8269ce!8m2!3d39.764699!4d-77.921149'

const Wedding = () => 
  div([
    div('.wedding', 'Our wedding is at!'),
    a('.gmap_wedding', {
      href: GMAP_WEDDING_URL,
      target: '_blank',
    }, [' ']),
  ])

export default Wedding

