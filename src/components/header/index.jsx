import React from 'react'
import { Link } from 'gatsby'
import { ThemeSwitch } from '../theme-switch'

import './index.scss'

export const Header = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    isRoot && (
      <h1 className="home-header">
        <Link to={`/`} className="link">
          {title}
          <ThemeSwitch />
        </Link>
      </h1>
    )
  )
}
