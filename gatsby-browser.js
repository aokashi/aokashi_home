/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import './src/styles/base.sass'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  // トップへ戻るボタンで使用
  faArrowUp,
  // 目次で使用
  faList
} from '@fortawesome/free-solid-svg-icons'
import 'prismjs/themes/prism-tomorrow.css'

library.add(fab, faArrowUp, faList)
