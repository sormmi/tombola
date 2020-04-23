import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import styled from "styled-components"

const BackgroundSection = ({ className, theme, title, description }) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        placeholderImage: file(relativePath: { eq: "dices.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data => {
      const imageData = data.placeholderImage.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {(!!title || !!description) &&
          <div>
            {!!title &&
              <h2>{title}</h2>
            }
            {!!description &&
              <p>{description}</p>
            }
          </div>
          }
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: white;
  position: relative;
  
  height: ${props => props.theme.height};
  
  div {
    position: absolute;
    top: 25%;
    width: 60%;
    margin: 0 0 0 20%;
    background: rgba(0, 0, 0, 0.25);
    padding: 0px;
    
    @media only screen and (min-width: 768px){
      width: 40%;
      margin: 0 0 0 30%;
    }
    
    h2 {
      color: white;
      font-size: 1.8rem;
      padding: 20px;
    }
  }
`

export default StyledBackgroundSection
