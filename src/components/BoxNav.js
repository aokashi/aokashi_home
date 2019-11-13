import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

const BoxNav = ({ navItems }) => (
  <div className="card-footer">
    {
      navItems.map((navItem, navIndex) => (
        <Link href={navItem.link} className="card-footer-item" key={navIndex}>{navItem.name}</Link>
      ))
    }
  </div>
)

BoxNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  )
}

export default BoxNav
