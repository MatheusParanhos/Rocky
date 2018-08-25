import React, { Component } from "react";
import { Text, View } from "react-native";
import { deviceWidth, colors, fontFamily } from "../../../theme/theme";

export default class PlayAgain extends Component {
  render() {
    return (
        <View
        style={{
          width: deviceWidth,
          height: 50,
          alignItems: "center",
          marginTop: 30
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.splash,
            fontSize: 35,
            color: colors.primary
          }}
        >
          Play again?
        </Text>
      </View>
    );
  }
}


