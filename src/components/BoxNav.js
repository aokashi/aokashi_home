import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Link from "./Link"

const BoxNav = ({ navItems }) => (
  <div className="card-footer">
    {navItems.map((navItem, navIndex) => (
        <Link href={navItem.link} className="card-footer-item" key={navIndex}>
          {navItem.fa &&
            <span className="icon">
              <FontAwesomeIcon icon={["fab", navItem.fa]} />
            </span>
          }
          {navItem.name}
        </Link>
    ))}
  </div>
)

BoxNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string,
      fa: PropTypes.string,
    })
  )
}

export default BoxNav
