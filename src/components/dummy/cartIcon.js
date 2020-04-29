import React, { Component } from "react";
import { View, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

import Colors from "../../utils/Colors";
import { TouchableOpacity } from "../common/TouchableOpacity";
import { gs } from "../../utils/styles";

class CartIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Cart")}>
        <View
          style={{
            padding: 5,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              position: "absolute",
              height: 11,
              width: 11,
              borderRadius: 11 / 2,
              backgroundColor: Colors.accent,
              right: 2,
              bottom: 18,
              zIndex: 2000,
              ...gs.center
            }}
          />
          <View>
            <SimpleLineIcons name="basket" color={Colors.defBlack} size={22} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(CartIcon);
