import React from "react";
import { View } from "react-native";
import Greeting from "./Greeting";

export default function GreetingGroup(props) {
  return (
    <View>
      {props.nameArr.map((elem, index) => {
        return <Greeting name={elem} />;
      })}
      {/* <Greeting name="신윤수" />
      <Greeting name="고원희" />
      <Greeting name="연소희" />
      <Greeting name="한수지" /> */}
    </View>
  );
}
