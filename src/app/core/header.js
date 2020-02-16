import { Route, Link } from 'react-router-dom'
import { hyper } from 'lib/hyper'
import { memo } from 'lib/memo'
import Meta from 'app/meta/Meta'
import { div, img, span, header, p, title, ul, li, a } from 'react-hyperscript-helpers'

import './header.scss'
import heartIcon from './heart.svg'

const hLink = hyper(Link)

const tabs = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/wedding',
    name: 'Wedding',
  },
  {
    to: '/hotel',
    name: 'Hotel',
  },
  {
    to: '/photos',
    name: 'Photos',
  },
  {
    to: 'https://www.zola.com/registry/karina-orion',
    name: 'Registry',
    isExternalLink: true,
  },
  {
    to: '/rsvp',
    name: 'RSVP',
  },
]

const matchesRoute = ({ match }, to) => match && match.path === to

const renderTabs = (matchProps) => {
  return tabs.map((tab) =>
    li(
      {
        className: matchesRoute(matchProps, tab.to) && 'is-active',
      },
      [
        tab.isExternalLink
          ? a(
              {
                href: tab.to,
                target: '_blank',
              },
              [tab.name],
            )
          : hLink(
              {
                to: tab.to,
              },
              [tab.name],
            ),
      ],
    ),
  )
}

const Header = memo((matchProps) => {
  console.log('matchProps', matchProps)

  return header('.hero', [
    div('.hero-body', [
      div('.container', [p('.title.weddingTitle', [
        img({
          src: heartIcon,
        }),
        span('Karina and Orion'),
        img({
          src: heartIcon,
        }),
      ])]),
    ]),
    div('.container', [div('.tabs.is-centered', [ul(renderTabs(matchProps[0]))])]),
  ])
})

export default Header
