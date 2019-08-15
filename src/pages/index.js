import React from "react"
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

const InnerContainer = styled.div`
  display: grid;
  background-color: white;
  margin: 3rem 1rem;
  padding: 4rem;
  max-width: 740px;
  grid-template-rows: auto;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    margin: 2rem 1rem;
  }
`

const HomeHeader = styled.div`
  justify-self: start;
  padding: 2rem 1rem 0 1rem;
  grid-column: 1/7;
  grid-row: 1/2;

  h3 {
    font-weight: 700;
  }
`

const HomeLocation = styled.div`
  justify-self: end;
  padding: 2rem 1rem 0 1rem;
  grid-column: 4/7;
  grid-row: 1/2;
  font-weight: 700;
`

const HomeBody = styled.div`
  justify-self: start;
  align-self: center;
  grid-column: 1/7;
  grid-row: 2/3;
  padding: 1rem 1rem 0 1rem;
  line-height: 150%;
  margin-bottom: 0.5rem;

  h1 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }
`

const CTAContainer = styled.div`
  grid-column: 1/7;
  grid-row: 3/4;
  padding: 1rem 1rem 0 1rem;
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MainCTA = styled.a`
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

  &:hover {
    background-color: #149890;
  }
`

const Subtitle = styled.h6`
  padding: 0.7rem 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #c4cfce;
  text-transform: uppercase;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0 0 0;
  }
`

const SocialContainer = styled.div`
  grid-column: 1/7;
  grid-row: 4/5;
  padding: 2rem 1rem 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.2px;
  color: #022c2a;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 0.25rem;
  font-size: 0.95rem;
  margin-right: 5px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;

  img {
    width: 20px;
    height: auto;
    display: block;
  }

  p {
    padding-left: 5px;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FullWidthWrapper>
      <InnerContainer>
        <HomeHeader>
          <h3>
            I'm Kyle Gardner{" "}
            <span role="img" aria-labelledby="emoji-dancing man">
              🕺🏻
            </span>
          </h3>
        </HomeHeader>
        <HomeLocation>
          <p>
            <span role="img" aria-labelledby="emoji-sun">
              ☀️
            </span>
            &nbsp;Newport&nbsp;Beach,&nbsp;CA
          </p>
        </HomeLocation>
        <HomeBody>
          <h1>
            A product manager & designer who connects humans with digital
            experiences by creating quality, on-brand designs.
          </h1>
        </HomeBody>
        <CTAContainer>
          <MainCTA href="mailto:kyle.gardner92@gmail.com">Email Me</MainCTA>
          <Subtitle>or find me online at a link below</Subtitle>
        </CTAContainer>
        <SocialContainer>
          <SocialLink href="https://www.linkedin.com/in/kyleagardner/">
            <img
              alt="linkedin-social"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
            />
            <p>LinkedIn</p>
          </SocialLink>
          <SocialLink href="https://dribbble.com/gardner">
            <img
              alt="dribbble-social"
              src="https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg"
            />
            <p>Dribbble</p>
          </SocialLink>
          <SocialLink href="https://open.spotify.com/user/kyleagardner?si=fsHo0HgZQRudddj07Y_t2g">
            <img
              alt="spotify-social"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
            />
            <p>Spotify</p>
          </SocialLink>
          <SocialLink href="https://twitter.com/kyleagardner">
            <img
              alt="twitter-social"
              src="http://www.transparentpng.com/thumb/twitter/pin-twitter-logo-png-images-22.png"
            />
            <p>Twitter</p>
          </SocialLink>
        </SocialContainer>
      </InnerContainer>
    </FullWidthWrapper>
  </Layout>
)

export default IndexPage
