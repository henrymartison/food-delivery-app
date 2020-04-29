import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../common/CustomText";
import { gs } from "../../utils/styles";
import Button from "../common/button";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

const CartItemCard = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            }}
            style={{ ...gs.imageFill, borderRadius: 2 }}
            resizeMode="cover"
          />
        </View>

        <View style={{ ...gs.rowBetween, flex: 1, paddingLeft: 10 }}>
          <View>
            <Text type="bold" style={styles.name}>
              American cheese burger
            </Text>
            <Text type="" style={[styles.name, { color: "grey" }]}>
              Burger
            </Text>
          </View>
          <Text>$20.79</Text>
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
  );
};
export default CartItemCard;

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: 100,
    backgroundColor: "white",
    margin: 10,
    marginBottom: 0,
    padding: 8,
    borderRadius: 4
  },
  cardContainer: {
    ...gs.row,
    alignItems: "flex-start"
  },
  imageContainer: {
    height: 90,
    width: 90,
    backgroundColor: "#e2e2e2"
  },
  name: {
    textTransform: "capitalize",
    fontSize: 16
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
