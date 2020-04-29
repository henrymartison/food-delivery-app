import React from "react";
import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const gs = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  headingText: {
    fontSize: 23,
    color: Colors.defBlack,
    marginTop: 5
  },
  headingSubText: {
    color: "grey",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5
  },
  box_shadow: {
    shadowColor: "black",
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  imageFill: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  },
  block_button: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: 40,
    borderRadius: 4,
    marginTop: 10
  }
});
