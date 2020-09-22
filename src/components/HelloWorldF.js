import React from "react";
import { View, Text } from "react-native";

export default function HelloWorldF(props) {
  return (
    <View style={{ backgroundColor: "green" }}>
      <Text style={{ color: props.color, fontSize: 40, fontStyle: "italic" }}>
        Hello World
      </Text>
    </View>
  );
}
