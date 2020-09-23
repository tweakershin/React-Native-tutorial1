import React, { Component } from "react";
import { Text, View } from "react-native";

export default class LayoutFirst extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "black" }} />
        <View style={{ flex: 3, backgroundColor: "blue" }} />
      </View>
    );
  }
}
