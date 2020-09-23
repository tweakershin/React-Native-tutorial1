import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HelloWorld from "./src/components/HelloWorld";
import HelloWorldF from "./src/components/HelloWorldF";
import Bananas from "./src/components/Bananas";

import sample1, { sample2 } from "./src/ImportTest";
import GreetingGroup from "./src/components/GreetingGroup";
import BlinkApp from "./src/components/BlinkApp";
import StyleApp from "./src/components/StyleApp";
import SizedBox from "./src/components/SizedBox";
import FlexDimensionsBasis from "./src/components/FlexDimensionsBasis";
import LayoutFirst from "./src/components/LayoutFirst";
import LayoutSecond from "./src/components/LayoutSecond";
import Em from "./src/components/Em";
import Header from "./src/components/Header";
import BaseTextInput, { BaseTextInputF } from "./src/components/BaseTextInput";
import ButtonGroup from "./src/components/ButtonGroup";
import MyButton from "./src/components/MyButton";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HelloWorld /> */}
      {/* <HelloWorldF color="black" /> */}
      {/* <Bananas desc="이건 바나나 사진 입니다." /> */}
      {/* <GreetingGroup
        nameArr={["신윤수", "고원희", "신정수", "연소희", "김철수", "김현준"]}
      /> */}
      {/* <BlinkApp /> */}
      {/* <StyleApp style={{ fontSize: 50, color: "green" }} /> */}
      {/* <SizedBox /> */}
      {/* <FlexDimensionsBasis /> */}
      {/* <LayoutSecond /> */}
      {/* <Em children="Em태그입니다." />
      <Em>Em태그 입니다.</Em> */}
      {/* <Header style={{ color: "blue", fontSize: 20 }}>헤더 태그</Header> */}
      <MyButton onPress={() => alert("app에서 호출")} title="버튼 테스트" />
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
