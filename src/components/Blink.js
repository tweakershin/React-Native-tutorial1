import React, { Component, useState } from "react";
import { Text } from "react-native";

// class형 컴포넌트
export default class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showText: true,
    };

    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 2000);
  }

  render() {
    let display = this.state.showText ? this.props.text : "";
    return <Text>{display}</Text>;
  }
}

export function BlinkF(props) {
  const [showText, setShowText] = useState(true);

  function sample() {
    setInterval(() => {
      setShowText((showText) => !showText);
    }, 2000);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 2000);

    // component unmount
    return () => clearInterval(interval);
  }, []);

  let display = showText ? props.text : "";

  return <Text>{display}</Text>;
}
