import React from 'react'
import { Link } from 'gatsby'

import styles from './Sidebar.module.sass'

const MaterialSidebar = () => (
  <>
    <ul>
      <li>
        <Link to="/material/" activeClassName={styles.isActive}>素材トップ</Link>
      </li>
      <li>
        <Link to="/material/wwa/" activeClassName={styles.isActive}>WWA素材</Link>
      </li>
      <li>
        <Link to="/material/icon/" activeClassName={styles.isActive}>アイコン素材</Link>
      </li>
      <li>
        <Link to="/material/tkool_mv" activeClassName={styles.isActive}>ツクールMV</Link>
      </li>
    </ul>
  </>
)

export default MaterialSidebar
