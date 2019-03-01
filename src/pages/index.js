import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "react-emotion";

import Art from "../components/art";
import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets";
import "../styles/global.css";

const Image = styled(Img)`
  height: 100%;
  width: 100%;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "white"
    };
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  changeBackgroundColor(color) {
    this.setState({ backgroundColor: color });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          position: "fixed",
          margin: gutter.default,
          overflow: "scroll",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
      >
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
        <Image fluid={this.props.data.ellie.childImageSharp.fluid} />
        <Art
          image={this.props.data.connor.childImageSharp.fluid}
          frameColor="#01579b80"
          changeBackgroundColor={this.changeBackgroundColor}
        />
      </div>
    );
  }
}

export default Index;

export const data = graphql`
  query {
    ellie: file(relativePath: { regex: "/ellie/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    connor: file(relativePath: { regex: "/connor/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
