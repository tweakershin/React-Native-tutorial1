import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SizedBox(props) {
  return (
    <View>
      <View style={{ width: 50, height: 50, backgroundColor: "blue" }}>
        <Text>50x50</Text>
      </View>
      <View
        style={{ width: 100, height: 100, backgroundColor: "black" }}
      ></View>
      <View style={{ width: 150, height: 150, backgroundColor: "red" }}></View>
    </View>
  );
}
