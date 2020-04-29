import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { TouchableOpacity } from "../common/TouchableOpacity";
import Colors from "../../utils/Colors";

export default class SliderBtn extends Component {
  render({ onPress, btnStyle, txtStyle } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, btnStyle]}>
          <Text style={[styles.text, txtStyle]}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: Dimensions.get("window").width - 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: Colors.primary,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
