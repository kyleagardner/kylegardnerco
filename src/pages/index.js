import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const FullWidthWrapper = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  background: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <FullWidthWrapper>
      <InnerContainer>
        <SEO title="Home" />
        <h1>hello</h1>
        <Link to="/resume/">Go to page 2</Link>
      </InnerContainer>
    </FullWidthWrapper>
  </Layout>
)

export default IndexPage
