import React, { PureComponent } from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../components/common/CustomText";
import { gs } from "../utils/styles";
import Button from "../components/common/button";
import Colors from "../utils/Colors";

class ConfirmationPage extends PureComponent {
  static navigationOptions = { headerShown: false };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.imageBackground}>
          <Image
            source={require("../assets/icons/cart.png")}
            style={{ height: 300, width: 300 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1, alignItems: "center", marginTop: 25 }}>
          <Text type="bold" style={{ fontSize: 26 }}>
            Success!
          </Text>
          <Text type="medium" style={{ color: "grey", marginTop: 4 }}>
            Items added to cart
          </Text>
        </View>

        <View style={{ marginBottom: 25 }}>
          <Button
            style={{ ...gs.block_button, backgroundColor: Colors.bgColor }}
            onPress={() => navigate("Menu")}
          >
            <Text type="medium" style={{ fontSize: 16, color: "grey" }}>
              Back to Menu
            </Text>
          </Button>
          <Button
            style={{ ...gs.block_button }}
            onPress={() => navigate("Cart")}
          >
            <Text type="medium" style={{ fontSize: 16, color: "white" }}>
              Go to Cart
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
export default ConfirmationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ...gs.center,
    backgroundColor: "white",
    paddingHorizontal: 14
    // justifyContent: "space-between"
  },
  imageBackground: {
    // backgroundColor: "orange",
    height: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 40
  }
});
