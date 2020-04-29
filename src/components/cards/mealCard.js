import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../common/CustomText";
import { gs } from "../../utils/styles";
import Button from "../common/button";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import { TouchableOpacity } from "../common/TouchableOpacity";

class MealCard extends Component {
  render({ onPress, name, newPrice, oldPrice, img, style } = this.props) {
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: img }}
            style={{ ...gs.imageFill }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginLeft: 13
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ ...gs.rowBetween }}>
              <Text type="medium" style={styles.name}>
                {name}
              </Text>
              <Button transparent>
                <Feather name="star" size={20} color="#ccc" />
              </Button>
            </View>
            <View style={{ ...gs.row, marginTop: 5 }}>
              <Text style={styles.newPrice}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(newPrice)}
              </Text>
              <Text style={styles.oldPrice}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(oldPrice)}
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Button transparent>
              <SimpleLineIcons name="minus" size={20} color={Colors.accent} />
            </Button>
            <View style={styles.countContainer}>
              <Text style={{ color: "white" }}>0</Text>
            </View>
            <Button transparent>
              <SimpleLineIcons name="plus" size={20} color={Colors.accent} />
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default MealCard;

const styles = StyleSheet.create({
  container: {
    minHeight: 110,
    backgroundColor: "white",
    ...gs.row,
    alignItems: "flex-start",
    padding: 8,
    borderRadius: 4
  },
  imageContainer: {
    height: 100,
    width: 100,
    backgroundColor: "#e2e2e2"
  },
  name: {
    textTransform: "capitalize",
    fontSize: 16
  },
  newPrice: {
    color: "grey"
  },
  oldPrice: {
    color: Colors.primary,
    textDecorationColor: Colors.primary,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    marginLeft: 5
  },
  footer: {
    ...gs.row,
    alignSelf: "flex-end"
  },
  countContainer: {
    height: 19,
    width: 19,
    borderRadius: 19 / 2,
    backgroundColor: Colors.primary,
    margin: 5,
    ...gs.center
  }
});
