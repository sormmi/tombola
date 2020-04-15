import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

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
              <small>{description}</small>
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
    top: 30%;
    left: 50%;
    width: 50%;
    margin: 0 0 0 -25%;
    background: rgba(0, 0, 0, 0.25);
    padding: 30px;
  }
`
export default StyledBackgroundSection
