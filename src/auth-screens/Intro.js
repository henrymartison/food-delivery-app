import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Text from "../components/common/CustomText";
import Swiper from "../components/dummy/swiper";
import Colors from "../utils/Colors";

const Screen = props => {
  return (
    <View style={[styles.slide, { backgroundColor: "#fff" }]}>
      <Image style={styles.img} source={props.img} resizeMode="contain" />
      <Text style={styles.header}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const screenProps = [
  {
    icon: require("../assets/swiper-images/store.png"),
    heading: "Discover branches",
    desc: "Find the nearest branch in your neighborhood"
  },
  {
    icon: require("../assets/swiper-images/cooking.png"),
    heading: "Choose your meal",
    desc: "Explore our food and select your favorites"
  },
  {
    icon: require("../assets/swiper-images/table.png"),
    heading: "Book your table",
    desc: "Reserve a table or more for your guests"
  }
];

export default class Intro extends Component {
  render() {
    return (
      <Swiper>
        {screenProps.map(screen => {
          return (
            <Screen
              key={screen.heading}
              img={screen.icon}
              title={screen.heading}
              text={screen.desc}
            />
          );
        })}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    color: Colors.primary,
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 15
  },
  text: {
    color: "#000",
    fontSize: 18,
    marginHorizontal: 20,
    textAlign: "center"
  },
  img: {
    height: 300,
    width: 300
  }
});
