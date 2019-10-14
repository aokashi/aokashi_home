import React from 'react'
import { Link } from 'gatsby'

// TODO: page-layout のスタイルシートからクラス名が利用できないか考えておく
const MaterialSidebar = () => (
  <>
    <ul>
      <li>
        <Link to="/material/" activeStyle={{ fontWeight: 'bold' }}>素材トップ</Link>
      </li>
      <li>
        <Link to="/material/wwa/" activeStyle={{ fontWeight: 'bold' }}>WWA素材</Link>
      </li>
      <li>
        <Link to="/material/icon/" activeStyle={{ fontWeight: 'bold' }}>アイコン素材</Link>
      </li>
      <li>
        <Link to="/material/tkool_mv" activeStyle={{ fontWeight: 'bold' }}>ツクールMV</Link>
      </li>
    </ul>
  </>
)

export default MaterialSidebar
