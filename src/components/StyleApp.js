import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class StyleApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={{ color: "red" }}> just red </Text>
        <Text style={styles.bigblue}> just bigblue </Text>
        <Text style={[styles.bigblue, styles.red]}> bigblue, then red </Text>
        <Text style={[styles.red, styles.bigblue]}> red, then bigblue </Text>
        <Text style={[styles.bigblue, this.props.style]}>customized Style</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
