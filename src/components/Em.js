import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Em extends Component {
  render() {
    return (
      <Text style={{ fontWeight: "bold", color: "red" }}>
        {this.props.children}
      </Text>
    );
  }
}
