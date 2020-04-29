import React, { Component } from "react";
import { Text } from "react-native";
import Colors from "../../utils/Colors";

class CustomText extends Component {
  setFontType = type => {
    switch (type) {
      case "black":
        return "cereal-black";

      case "bold":
        return "cereal-bold";

      case "book":
        return "cereal-book";

      case "extra-bold":
        return "cereal-extra-bold";

      case "light":
        return "cereal-light";

      case "medium":
        return "cereal-medium";

      default:
        return "cereal-book";
    }
  };
  render() {
    const font = this.setFontType(this.props.type ? this.props.type : "normal");
    const style = [
      { fontFamily: font, color: Colors.defBlack },
      this.props.style || {}
    ];
    const allProps = Object.assign({}, this.props, { style: style });
    return <Text {...allProps}>{this.props.children}</Text>;
  }
}
export default CustomText;
