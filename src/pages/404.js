import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const FullWidthWrapper = styled.div`
  background-color: #f4f4f4;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #022c2a;
`

const NotFoundPage = () => (
  <Layout>
    <FullWidthWrapper>
      <SEO title="404: Not found" />
      <h2>This page does not exist!</h2>
      <Link to="/">Go Home</Link>
    </FullWidthWrapper>
  </Layout>
)

export default NotFoundPage
