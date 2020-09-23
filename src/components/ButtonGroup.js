import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "신윤수",
    };
  }
  onPressButton() {
    alert("button 클릭2");
  }
  alertStateName() {
    alert(this.state.name);
  }

  render() {
    return (
      <View>
        <Button onPress={() => alert("버튼 클릭 1")} title="버튼1" />
        <Button onPress={this.onPressButton} title="버튼2" />
        <Button onPress={this.alertStateName.bind(this)} title="버튼3" />
        <Button onPress={() => alert(this.state.name)} title="버튼4" />
      </View>
    );
  }
}
