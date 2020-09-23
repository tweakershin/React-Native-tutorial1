import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <Text style={[styles.defaultHeader, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  defaultHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
