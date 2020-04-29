import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { TouchableOpacity } from "./TouchableOpacity";
import Colors from "../../utils/Colors";
import { gs } from "../../utils/styles";

const Button = ({ children, transparent = true, style, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        backgroundColor: transparent ? "transparent" : null,
        ...gs.center
      },
      style
    ]}
  >
    {children}
  </TouchableOpacity>
);
export default Button;
