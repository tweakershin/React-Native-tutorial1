import React from "react";
import { View } from "react-native";

import Blink, { BlinkF } from "./Blink";

export default class BlinkApp extends React.Component {
  render() {
    return (
      <View>
        {/* <Blink text="이 앱은" />
        <Blink text="2초에 한 번" />
        <Blink text="상태가 변경됩니다." /> */}
        <BlinkF text="이 앱은" />
        <BlinkF text="2초에 한 번" />
        <BlinkF text="상태가 변경됩니다." />
      </View>
    );
  }
}
