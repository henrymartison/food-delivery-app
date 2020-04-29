import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Table extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Table</Text>
      </View>
    );
  }
}
export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
