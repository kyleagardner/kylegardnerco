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
  flex-direction: column;
`

const ButtonHome = styled(Link)`
  text-decoration: none;
  max-width: 200px;
  text-align: center;
  letter-spacing: 0.2px;
  background-color: #1ebfb5;
  padding: 0.7rem 2rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  margin-top: 2.5rem;

  &:hover {
    background-color: #149890;
  }
`

const NotFoundPage = () => (
  <Layout>
    <FullWidthWrapper>
      <SEO title="404: Not found" />
      <h2>This page does not exist!</h2>
      <ButtonHome to="/">Go Home</ButtonHome>
    </FullWidthWrapper>
  </Layout>
)

export default NotFoundPage
