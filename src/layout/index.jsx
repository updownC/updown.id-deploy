import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${0} ${rhythm(3 / 4)}`,
        }}
      >
        <Top title={title} location={location} rootPath={rootPath} />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
