import React from "react";
import { View, Text, TextInput } from "react-native";

export default class BaseTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <View style={{ padding: 10, width: "80%" }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "100%",
          }}
          placeholder="값을 입력해주세요."
          onChangeText={(text) => {
            console.log(text);
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <Text>입력된 글: {this.state.text}</Text>
      </View>
    );
  }
}

export function BaseTextInputF() {
  const [text, setText] = React.useState("");
  return (
    <View style={{ padding: 10, width: "80%" }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "100%",
        }}
        placeholder="값을 입력해주세요."
        onChangeText={(text) => {
          setText(text);
        }}
        value={text}
      />
      <Text>입력된 글: {text}</Text>
    </View>
  );
}
