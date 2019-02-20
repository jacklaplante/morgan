import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "react-emotion";

import Art from "../components/art";
import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets";
import "../styles/global.css";

const Container = styled(`div`)`
  position: fixed;
  margin: ${gutter.default};
  overflow: scroll;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Image = styled(Img)`
  height: 100%;
  width: 100%;
`;

const Index = ({ data, location }) => (
  <Container>
    <link
      href="https://fonts.googleapis.com/css?family=Martel:200"
      rel="stylesheet"
    />
    <div className="title">
      <p style={{ height: "8rem" }}>Morgan</p>
      <hr />
      <p style={{ height: "7.5rem" }}>Lisa</p>
      <hr />
      <p>LaPlante</p>
    </div>
    <Image fluid={data.coverImage.childImageSharp.fluid} />
    <Art />
  </Container>
);

export default Index;

export const data = graphql`
  query {
    coverImage: file(relativePath: { regex: "/ellie/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
