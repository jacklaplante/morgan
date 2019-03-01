import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import VisibilitySensor from "react-visibility-sensor";

const Image = styled(Img)`
  width: 30%;
  margin: 10%;
`;

class Art extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    if (isVisible) {
      console.log("YES");
      this.props.changeBackgroundColor(this.props.frameColor);
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.frameColor }}>
        <VisibilitySensor onChange={this.onChange}>
          {this.props.image && <Image fluid={this.props.image} />}
        </VisibilitySensor>
      </div>
    );
  }
}

// const Art = ({ image, frameColor, changeBackgroundColor }) => (
//   <div style={{ backgroundColor: frameColor }}>
//     <VisibilitySensor onChange={onChange}>
//       {image && <Image fluid={image} />}
//     </VisibilitySensor>
//   </div>
// );

export default Art;
