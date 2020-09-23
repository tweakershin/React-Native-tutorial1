import React, { Component } from "react";
import { Text, View } from "react-native";

export default class LayoutSecond extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: "100%", flexDirection: "column" }}>
        <View style={{ backgroundColor: "red", flex: 1 }}></View>
        <View style={{ flex: 6, flexDirection: "row" }}>
          <View style={{ backgroundColor: "green", flex: 1 }}></View>
          <View style={{ flex: 3, flexDirection: "column" }}>
            <View style={{ flex: 2 }}></View>
            <View style={{ flex: 3, backgroundColor: "blue" }}></View>
          </View>
        </View>
      </View>
    );
  }
}
