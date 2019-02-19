import React from "react";
import Img from "gatsby-image";
import styled from "react-emotion";

import { rhythm } from "../utils/typography";
import { colors } from "../utils/presets";
import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets";

const Container = styled(`div`)`
  position: fixed;
  margin: ${gutter.default};
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Image = styled(Img)``;

const Main = styled(`main`)``;

const Layout = ({ children, image, imageTitle, imageBackgroundColor }) => (
  <Container>
    {image && (
      <Image
        fluid={image}
        backgroundColor={imageBackgroundColor ? imageBackgroundColor : false}
        title={imageTitle}
      />
    )}
    <Main>
      {children}
      <h2>Documentation & related links</h2>
      <ul>
        <li>
          See the
          {` `}
          <a href="https://www.gatsbyjs.org/packages/gatsby-image/">
            <code>gatsby-image</code> project README
          </a>
          {` `} for documentation on using the plugin
        </li>
        <li>
          Read the docs on
          {` `}“
          <a href="https://www.gatsbyjs.org/docs/using-gatsby-image/">
            Using gatsby-image to prevent image bloat
          </a>
          ”
        </li>
        <li>
          View the <code>gatsby-transformer-sharp</code> example at
          {` `}
          <a href="https://image-processing.gatsbyjs.org/">
            <code>image-processing.gatsbyjs.org</code>
          </a>
        </li>
      </ul>
    </Main>
  </Container>
);

export default Layout;
