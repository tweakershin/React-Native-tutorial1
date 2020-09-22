import React, { Component } from "react";
import { View, Image, Text } from "react-native";

const pic = {
  uri:
    "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
};

// export default class Bananas extends Component {
export default class Bananas extends React.Component {
  render() {
    return (
      <View>
        {/* 웹의 이미지 */}
        {/* <Image source={pic} style={{ width: 193, height: 110 }} /> */}

        {/* Static 이미지 */}
        <Image
          source={require("../../assets/splash.png")}
          style={{ width: 193, height: 110 }}
        />

        {/* <Text>이건 바나나 설명이에요.</Text> */}
        <Text>{this.props.desc}</Text>
      </View>
    );
  }
}
