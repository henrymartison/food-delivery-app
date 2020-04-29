import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../common/CustomText";
import Colors from "../../utils/Colors";
import { gs } from "../../utils/styles";

const Logo = props => (
  <View style={styles.container}>
    <View style={styles.dot} />
    <Text type="bold" style={styles.text}>
      R
    </Text>
  </View>
);
export default Logo;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: Colors.primary,
    borderRadius: 80 / 2,
    ...gs.center
  },
  text: {
    color: "white",
    fontSize: 60
  },
  dot: {
    height: 13,
    width: 13,
    borderRadius: 13 / 2,
    backgroundColor: Colors.accent,
    position: "absolute",
    top: 0,
    left: 10
  }
});
