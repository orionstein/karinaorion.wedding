import Helmet from 'react-helmet'
import { div, header, p, title } from  'react-hyperscript-helpers';
import { hyper } from './lib/hyper'
import logo from './logo.svg';
import './App.css';

const hHelmet = hyper(Helmet)

function App() {
  return (
    div('.App', [
      hHelmet({title: 'Karina and Orion Wedding!!!'}),
      header('.App-header', [
        p('Karina and Orion WEDDING AAAH')
      ])
    ])
  )
}

export default hyper(App);
