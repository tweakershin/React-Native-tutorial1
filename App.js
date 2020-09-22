import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HelloWorld from "./src/components/HelloWorld";
import HelloWorldF from "./src/components/HelloWorldF";
import Bananas from "./src/components/Bananas";

import sample1, { sample2 } from "./src/ImportTest";
import GreetingGroup from "./src/components/GreetingGroup";
import BlinkApp from "./src/components/BlinkApp";

const s1 = {
  k1: "v1",
  k2: "v2",
};

const { k1, k2 } = s1;

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HelloWorld /> */}
      {/* <HelloWorldF color="black" /> */}
      {/* <Bananas desc="이건 바나나 사진 입니다." /> */}
      {/* <GreetingGroup
        nameArr={["신윤수", "고원희", "신정수", "연소희", "김철수", "김현준"]}
      /> */}
      <BlinkApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
