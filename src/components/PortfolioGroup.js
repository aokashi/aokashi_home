import React from "react"
import PropTypes from "prop-types"

/**
 * 親要素が PortfolioList の場合にスタイルシートを付与したいため、CSSはPortfolioListと共用
 */
import styles from "./PortfolioList.module.sass"

const PortfolioGroup = ({ name, descriptionTitle, description, children }) => (
  <div className={styles.group}>
    {name &&
      <div className="columns has-text-dark is-variable is-0-mobile is-5-tablet block">

        <div className="column is-half is-size-4">{name}</div>

        {description &&
          <div className="column is-half">
            {descriptionTitle &&
              <div className="has-text-weight-bold">{descriptionTitle}</div>
            }
            {description.split("\n").map((line, lineIndex) =>
              <p key={lineIndex}>{line}</p>
            )}
          </div>
        }

      </div>
    }

    <div className="columns is-multiline is-variable is-0-mobile is-5-tablet">
      {children}
    </div>
  </div>
)

PortfolioGroup.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

export default PortfolioGroup
