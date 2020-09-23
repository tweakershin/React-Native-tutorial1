import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default class MyButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.defaultBtnStyle}>
          <Text style={styles.defaultBtnText}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultBtnStyle: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
  },
  defaultBtnText: {
    color: "white",
    fontWeight: "bold",
  },
});
