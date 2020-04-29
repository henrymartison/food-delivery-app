import React, { Component } from "react";
import { View, StatusBar, StyleSheet, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

import AppContainer from "./src/navigation/routes";
import { gs } from "./src/utils/styles";

class App extends Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "cereal-black": require("./src/assets/fonts/cereal-airbnb-font-master/AirbnbCereal-Black.ttf"),
      "cereal-bold": require("./src/assets/fonts/cereal-airbnb-font-master/AirbnbCereal-Bold.ttf"),
      "cereal-book": require("./src/assets/fonts/cereal-airbnb-font-master/AirbnbCereal-Book.ttf"),
      "cereal-extra-bold": require("./src/assets/fonts/cereal-airbnb-font-master/AirbnbCereal-ExtraBold.ttf"),
      "cereal-light": require("./src/assets/fonts/cereal-airbnb-font-master/AirbnbCereal-Light.ttf"),
      "cereal-medium": require("./src/assets/fonts/cereal-airbnb-font-master/AirbnbCereal-Medium.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {this.state.fontLoaded ? (
          <AppContainer />
        ) : (
          <ActivityIndicator style={[gs.center, { flex: 1 }]} />
        )}
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
