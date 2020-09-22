import React from "react";
import { Text } from "react-native";

export default function Greeting(props) {
  return <Text>안녕, {props.name}</Text>;
}
