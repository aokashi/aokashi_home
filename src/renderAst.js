import React from 'react'
import rehypeReact from 'rehype-react'

import WarningNote from './components/Note/WarningNote.js'
import InfoNote from './components/Note/InfoNote.js'
import DangerNote from './components/Note/DangerNote.js'
import AboutNote from './components/Note/AboutNote.js'
import LinkButton from './components/LinkButton.js'

/**
 * markdown ファイル内で使用したいコンポーネントがあれば下記の配列に記述してください。
 *     このファイルは markdown で記述した内容を HTML の AST を通じて React のコンポーネントに変換するシステムになります。
 *     左に名前、右にコンポーネントそのものを記述しますが、名前に大文字は使用できません。
 */
const availableComponents = {
  'warning-note': WarningNote,
  'info-note': InfoNote,
  'danger-note': DangerNote,
  'about-note': AboutNote,
  'link-button': LinkButton,
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: availableComponents,
}).Compiler

export default renderAst
