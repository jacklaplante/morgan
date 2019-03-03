import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import VisibilitySensor from "react-visibility-sensor";

const Image = styled(Img)`
  width: 35%;
  margin: 7% 5%;
  display: inline-block;
  float: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

class Art extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    if (isVisible) {
      this.props.changeBackgroundColor(this.props.frameColor);
    }
  }

  render() {
    return (
      <div>
        <VisibilitySensor onChange={this.onChange}>
          {this.props.image && <Image fluid={this.props.image} />}
        </VisibilitySensor>
        <div className="message">{this.props.message}</div>
      </div>
    );
  }
}

export default Art;
