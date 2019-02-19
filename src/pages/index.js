import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "react-emotion";
import { FaGithub } from "react-icons/fa";

import Layout from "../components/layout";
import { colors } from "../utils/presets";
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

const Title = styled(`div`)`
  position: absolute;
  top: 10rem;
  left: 9rem;
  z-index: 1;
  font-size: 5rem;
  color: oldlace;
  text-align: center;
`;

const Image = styled(Img)`
  height: 100%;
  width: 100%;
`;

const Index = ({ data, location }) => (
  <Container>
    <Title>
      Morgan
      <hr />
      Lisa
      <hr />
      LaPlante
    </Title>
    <Image fluid={data.coverImage.childImageSharp.fluid} />
    <p>MORE CONTENT</p>
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
