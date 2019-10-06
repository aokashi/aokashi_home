import React from 'react'
import { graphql } from "gatsby"
import Layout from '../layouts/index-layout'

import './index-page.sass'
import Link from '../components/Link'
import SEO from "../components/seo"
import Icon from '../images/aokashi-icon.png'

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <nav className="index-nav columns">
        {
          frontmatter.nav_items.map((navItem, navIndex) => getNavLink(navItem, navIndex))
        }
      </nav>
      <section className="aboutme">
        <h2 className="aboutme__title">{frontmatter.aboutme.heading}</h2>
        <div className="aboutme__introduction">
          <div className="aboutme__icon">
            <img src={Icon} alt="Aokashi"/>
          </div>
          <div className="aboutme__description">
            <div className="aboutme__socials socials">
              <a className="socials__item socials__item--twitter" href={`https://twitter.com/${frontmatter.aboutme.socials.twitter}`}>@{frontmatter.aboutme.socials.twitter}</a>
              <a className="socials__item socials__item--github" href={`https://github.com/${frontmatter.aboutme.socials.github}`}>{frontmatter.aboutme.socials.github}</a>
            </div>
            <p>{frontmatter.aboutme.description}</p>
          </div>
        </div>
        <div className="aboutme__extra">
          <section className="aboutme__likes">
            <h3>好きなもの</h3>
            {
              frontmatter.aboutme.items.likes.map((item, index) => (
                <section key={index}>
                  <h4>{item.name}</h4>
                  <p>{item.text}</p>
                </section>
              ))
            }
          </section>
          <section className="aboutme__environments">
            <h3>使用環境</h3>
            {
              frontmatter.aboutme.items.environments.map((item, index) => (
                <section key={index}>
                  <h4>{item.name}</h4>
                  <p>{item.text}</p>
                </section>
              ))
            }
          </section>
        </div>
        <p>{frontmatter.aboutme.extra}</p>
      </section>
    </Layout>
  )
}

const getNavLink = (navItem, navIndex) => {
  const itemStyle = {
    backgroundColor: navItem.color
  }
  
  return (
    <div className="index-nav__item nav-item column" key={navIndex}>
      <Link
        href={navItem.link}
        className="nav-item__link"
        style={itemStyle}
      >
        {
          navItem.icon &&
            <img src={navItem.icon} alt="" className="nav-item__icon" />
        }
        <span className="nav-item__text">{navItem.name}</span>
      </Link>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark( frontmatter: { template: { eq: "index-page" } }) {
      frontmatter {
        title
        nav_items {
          name
          link
          icon
          color
        }
        aboutme {
          heading
          description
          socials {
            twitter
            github
          }
          items {
            likes {
              name
              text
            }
            environments {
              name
              text
            }
          }
          extra
        }
      }
    }
  }
`

export default IndexPageTemplate
