import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/page-layout"
import SEO from "../components/seo"
import WarningNote from "../components/Note/WarningNote"
import InfoNote from "../components/Note/InfoNote"
import DangerNote from "../components/Note/DangerNote"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <WarningNote>
      <p>Warning!</p>
    </WarningNote>
    <InfoNote>
      <p>Info!</p>
    </InfoNote>
    <DangerNote>
      <p>ERROR in ./src/components/DangerNote.js Module not found: Error: Can't resolve './DangerNote.module.sass' in '/mnt/c/Users/aokashi/GitHub/aokashi_home/src/components'</p>
    </DangerNote>
  </Layout>
)

export default SecondPage
