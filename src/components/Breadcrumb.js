import React from "react"
import { Link } from "gatsby"

const Breadcrumb = ({ path }) => {
  const pathItems = path.split("/")
  const breadCrumbItems = pathItems.reduce((currentBreadCrumbs, currentPathName, currentPageIndex) => {
    if (currentPathName === "") {
      return currentBreadCrumbs;
    }
    return currentBreadCrumbs.concat([{
      path: pathItems.slice(0, currentPageIndex + 1).join("/"),
      text: currentPathName.substring(0, 1).toUpperCase() + currentPathName.substring(1),
    }])
  }, [])

  return (
    <nav className="breadcrumb is-centered">
      <ul>
        {breadCrumbItems.map(item => (
          <li key={item.path}><Link to={item.path}>{item.text}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
