import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "green" }}>
        <Text style={{ color: "red", fontSize: 40, fontStyle: "italic" }}>
          Hello World
        </Text>
      </View>
    );
  }
}
