import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

import Text from "../components/common/CustomText";
import { gs } from "../utils/styles";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import Button from "../components/common/button";
import Colors from "../utils/Colors";

const Circle = ({ children }) => <View style={styles.circle}>{children}</View>;

const toppings = [{ name: "sauce", icon: "" }];

class DetailScreen extends Component {
  render() {
    const { getParam } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1, padding: 9, backgroundColor: "white" }}>
          <View style={styles.imageContainer}>
            {/* <Image style={...gs.imageFill} source={{uri: param}} /> */}
          </View>

          <View style={styles.content}>
            <View
              style={{
                ...gs.rowBetween,
                flex: 1,
                width: "100%",
                marginTop: 6
              }}
            >
              <View
                style={{
                  ...gs.row,
                  flex: 1,
                  justifyContent: "center"
                }}
              >
                <Text type="bold" style={{ fontSize: 18 }}>
                  $9.75
                </Text>
                <Text type="medium" style={styles.lineThru}>
                  $12.75
                </Text>
              </View>
              <Button transparent style={{}}>
                <Feather name="star" size={20} color="#ccc" />
              </Button>
            </View>
            <Text style={styles.itemName}>Cheese burger</Text>

            <View style={{ ...gs.row }}>
              <Button transparent>
                <SimpleLineIcons name="minus" size={27} color={Colors.accent} />
              </Button>
              <View style={styles.countContainer}>
                <Text style={{ color: "white" }}>0</Text>
              </View>
              <Button transparent>
                <SimpleLineIcons name="plus" size={27} color={Colors.accent} />
              </Button>
            </View>

            <View style={styles.toppings}>
              <Text style={{ textAlign: "center" }}>Toppings</Text>
              <View style={{ ...gs.row, alignSelf: "center" }}>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
              </View>

              <View style={styles.contentFooterContainer}></View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button
            style={styles.mainButton}
            onPress={() => this.props.navigation.navigate("ConfirmationPage")}
          >
            <Text type="medium" style={styles.mainButtonText}>
              $3.00 | Add to cart
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "white"
  },
  imageContainer: {
    height: 230,
    backgroundColor: "#e2e2e2",
    borderRadius: 4
  },
  content: {
    alignItems: "center",
    flex: 1
  },
  countContainer: {
    height: 27,
    width: 27,
    borderRadius: 27 / 2,
    backgroundColor: Colors.primary,
    margin: 15,
    ...gs.center
  },
  circle: {
    backgroundColor: "#e2e2e2",
    height: 58,
    width: 58,
    borderRadius: 58 / 2,
    margin: 8,
    ...gs.center
  },
  contentFooterContainer: {
    // height: 77,
    flex: 1,
    backgroundColor: Colors.bgColor,
    width: Dimensions.get("window").width
  },
  footer: {
    height: 80,
    backgroundColor: "white",
    ...gs.center
  },
  mainButton: {
    backgroundColor: Colors.primary,
    height: "60%",
    width: "90%",
    borderRadius: 5
  },
  mainButtonText: {
    color: "white",
    letterSpacing: 1
  },
  lineThru: {
    color: Colors.primary,
    fontSize: 16,
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: Colors.primary,
    marginLeft: 5
  },
  itemName: {
    fontSize: 26,
    letterSpacing: 0.5,
    textTransform: "capitalize",
    marginTop: 7
  }
});
