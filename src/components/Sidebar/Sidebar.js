import React from 'react'
import PropTypes from 'prop-types'

import styles from './Sidebar.module.sass'

const Sidebar = ({ children }) => (
  <aside className={`${styles.sidebar} column is-narrow`}>
    {children}
  </aside>
)

Sidebar.propTypes = {
  children: PropTypes.node
}

export default Sidebar
