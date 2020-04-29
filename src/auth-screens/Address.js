import React, { Component } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";

import Text from "../components/common/CustomText";
import Logo from "../components/dummy/logo";
import { gs } from "../utils/styles";
import Colors from "../utils/Colors";
import {
  Ionicons,
  Feather,
  EvilIcons,
  FontAwesome,
  Entypo
} from "@expo/vector-icons";
import Button from "../components/common/button";

class Address extends Component {
  static navigationOption = { title: "Discover Location" };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="interactive"
          style={{ flex: 1 }}
        >
          <View style={styles.header}>
            <Logo />
            <Text style={styles.headingText}>Add Location Info?</Text>
            <Text style={styles.headingSubText}>
              Please complete your address info and proceed
            </Text>
          </View>

          <View style={styles.content}>
            <View style={{ ...gs.row, marginTop: 20 }}>
              <View style={styles.profileContainer}>
                <FontAwesome name="user" size={43} color="#b0b2b6" />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text numOfLines={1} style={{ fontSize: 18 }}>
                  John Smith
                </Text>
                <Text numOfLines={1} style={{ color: Colors.primary }}>
                  johnsmith@example.com
                </Text>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text>Address</Text>
              <Entypo name="location-pin" color={Colors.accent} size={20} />
            </View>

            <Button
              style={styles.mainBtn}
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Text type="medium" style={{ color: "#fff", fontSize: 17 }}>
                Save and continue
              </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    ...gs.center,
    paddingTop: 20
  },
  headingText: {
    ...gs.headingText
  },
  headingSubText: {
    ...gs.headingSubText,
    width: "80%"
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10
  },
  profileContainer: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#dadbdd",
    ...gs.center
  },
  inputContainer: {
    backgroundColor: "white",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 50,
    shadowColor: "grey",
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    ...gs.rowBetween
  },
  mainBtn: {
    backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 4,
    marginTop: 20
  }
});
