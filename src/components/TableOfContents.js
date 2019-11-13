import React from "react"
import PropTypes from "prop-types"

/**
 * Bulma の menu は ul にクラス menu-list を渡すことが普通だが、ここでは ul 要素にクラスを渡すことができないので div 要素に渡す形となっている。
 *     もし想定した表示になっていない場合は、下記ページで変更が無いか確認しておくこと。
 * @see https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
 */
const TableOfContents = ({ html }) => (
  <aside className="menu">
    <p className="menu-label">目次</p>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="menu-list"
    />
  </aside>
)

/**
 * プロパティ html はHTML形式の文字列。取り扱いには注意すること!!
 */
TableOfContents.propTypes = {
  html: PropTypes.string,
}

export default TableOfContents
