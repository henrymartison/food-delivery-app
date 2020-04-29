import React, { Component } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";

import Text from "../components/common/CustomText";
import Logo from "../components/dummy/logo";
import { gs } from "../utils/styles";
import Colors from "../utils/Colors";
import { Ionicons, Feather, EvilIcons } from "@expo/vector-icons";
import Button from "../components/common/button";

const Circle = ({ children }) => <View style={styles.circle}>{children}</View>;

class Login extends Component {
  state = {
    email: "",
    password: "",
    passwordVisible: true
  };

  _togglePasswordVisibility = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };
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
            <Text style={styles.headingText}>Welcome!</Text>
            <Text style={styles.headingSubText}>
              Enter your registered phone or email to continue login
            </Text>
          </View>

          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone number or email address"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <Ionicons
                name="ios-phone-portrait"
                color={Colors.accent}
                size={23}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={this.state.passwordVisible}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
              <Button transparent onPress={this._togglePasswordVisibility}>
                <Feather
                  name={this.state.passwordVisible ? "eye-off" : "eye"}
                  color={Colors.accent}
                  size={18}
                />
              </Button>
            </View>

            <View style={{ ...gs.row, marginTop: 20 }}>
              <Ionicons
                name="ios-checkmark-circle"
                size={20}
                color={Colors.accent}
              />
              <Text style={{ marginLeft: 14 }}>Remember password</Text>
            </View>

            <Button style={styles.mainBtn}>
              <Text type="medium" style={{ color: "#fff", fontSize: 17 }}>
                Continue
              </Text>
            </Button>

            <Text style={{ marginTop: 30, textAlign: "center", fontSize: 16 }}>
              Or with
            </Text>

            <View
              style={{ ...gs.row, justifyContent: "center", marginTop: 14 }}
            >
              <Circle>
                <EvilIcons name="sc-facebook" color="#0070ff" size={30} />
              </Circle>
              <Circle>
                <EvilIcons name="sc-google-plus" color="red" size={30} />
              </Circle>
              <Circle>
                <EvilIcons name="sc-twitter" color="#82d8ea" size={30} />
              </Circle>
            </View>

            <View style={{ ...gs.center, margin: 14 }}>
              <Text>Don't have access to your registered phone number?</Text>
              <Button transparent>
                <Text type="bold" style={{ color: Colors.primary }}>
                  CONTACT US
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>

        <Button
          style={styles.secondaryBtn}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ color: "white", fontSize: 13 }}>
            Not a member yet?{" "}
            <Text type="medium" style={{ color: "white", fontSize: 16 }}>
              REGISTER
            </Text>
          </Text>
        </Button>
      </View>
    );
  }
}
export default Login;

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
    width: "75%"
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10
  },
  inputContainer: {
    backgroundColor: "white",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: "grey",
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    ...gs.rowBetween
  },
  input: {
    flex: 1,
    marginRight: 18,
    fontSize: 16,
    fontFamily: "cereal-book"
  },
  mainBtn: {
    backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 4,
    marginTop: 10
  },
  secondaryBtn: {
    height: 36,
    backgroundColor: Colors.primary
  },
  circle: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    margin: 8,
    ...gs.box_shadow,
    ...gs.center
  }
});
