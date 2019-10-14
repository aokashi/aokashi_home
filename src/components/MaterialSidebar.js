import React from 'react'
import { Link } from 'gatsby'

const MaterialSidebar = () => (
  <>
    <ul>
      <li>
        <Link to="/material/">素材トップ</Link>
      </li>
      <li>
        <Link to="/material/wwa/">WWA素材</Link>
      </li>
      <li>
        <Link to="/material/icon/">アイコン素材</Link>
      </li>
      <li>
        <Link to="/material/tkool_mv">ツクールMV</Link>
      </li>
    </ul>
  </>
)

export default MaterialSidebar
