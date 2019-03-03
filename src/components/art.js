import React, { Component } from "react";
import Image from "gatsby-image";
import VisibilitySensor from "react-visibility-sensor";

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
      <div style={{ height: "100%" }}>
        <VisibilitySensor onChange={this.onChange}>
          {this.props.image && (
            <Image
              fluid={this.props.image}
              className="art"
              style={this.props.imageStyle}
            />
          )}
        </VisibilitySensor>
        <div className="message" style={this.props.messageStyle}>
          {this.props.message}
        </div>
      </div>
    );
  }
}

export default Art;
