import React, { Component } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import VisibilitySensor from "react-visibility-sensor";

import Art from "../components/art";
import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets";
import "../styles/global.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: "white",
        padding: gutter.default
      }
    };
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeToIndex = this.changeToIndex.bind(this);
  }

  changeToIndex(isVisible) {
    if (isVisible) {
      this.changeBackgroundColor("white");
    }
  }

  changeBackgroundColor(color) {
    this.setState(prevState => ({
      style: {
        ...prevState.style,
        backgroundColor: color
      }
    }));
  }

  render() {
    return (
      <div className="background" style={this.state.style}>
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
        <VisibilitySensor onChange={this.changeToIndex}>
          <Image
            fluid={this.props.data.ellie.childImageSharp.fluid}
            style={{ height: "100%", width: "100%" }}
          />
        </VisibilitySensor>
        <Art
          image={this.props.data.connor.childImageSharp.fluid}
          message="Art is my way of exploring and celebrating the mysteries I see in the world around me"
          frameColor="#01579b80"
          imageStyle={{
            width: "35%",
            margin: "7% 5%",
            float: "left"
          }}
          messageStyle={{
            margin: "25% 9% 0",
            width: "30%",
            color: "#312222",
            fontSize: "24pt",
            lineHeight: "40pt"
          }}
          changeBackgroundColor={this.changeBackgroundColor}
        />
        <Art
          image={this.props.data.flowers.childImageSharp.fluid}
          message="I love learning about an object, person or landscape intimately by studying them in paint"
          frameColor="#81819a"
          imageStyle={{
            width: "60%",
            margin: "8% 6%",
            float: "right"
          }}
          messageStyle={{
            margin: "22% 0 0 7%",
            width: "20%",
            color: "rgb(230, 215, 182)",
            fontSize: "20pt",
            lineHeight: "35pt"
          }}
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
    flowers: file(relativePath: { regex: "/flowers/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
