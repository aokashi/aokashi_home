import React from "react"
import PropTypes from "prop-types"

/**
 * Bulma の menu は ul にクラス menu-list を渡すことが普通だが、ここでは ul 要素にクラスを渡すことができないので div 要素に渡す形となっている。
 *     もし想定した表示になっていない場合は、下記ページで変更が無いか確認しておくこと。
 * @see https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
 */
const TableOfContents = ({ body }) => {
  if (!body.items) {
    return null;
  }
  return (
    <aside className="menu">
      <p className="menu-label">目次</p>
      <div className="menu-list">
        <ul>
          {body.items.map((item, index) => (
            <li key={index}><a href={item.url}>{item.title}</a></li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

/**
 * プロパティ body は MDXRenderer で使用するオブジェクトです。
 */
TableOfContents.propTypes = {
  body: PropTypes.object,
}

export default TableOfContents
