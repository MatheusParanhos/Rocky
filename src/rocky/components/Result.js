import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors, fontFamily } from "../../theme/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class Result extends Component {
  renderIcon = () => {
    if (this.props.choice === 'scissors') {
        return (
          <FontAwesome
            name={`hand-${this.props.choice}-o`}
            size={50}
            color={colors.primary}
            style={{ transform: [{ rotate: "270deg" }] }}
          />
        );
      }
    if (this.props.choice==='rock' || this.props.choice==='paper') {
      return (
        <FontAwesome
          name={`hand-${this.props.choice}-o`}
          size={50}
          color={colors.primary}
          style={{ transform: [{ rotate: "180deg" }] }}
        />
      );
    }
    
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>{this.renderIcon()}</View>
        <Text style={styles.text}>{this.props.timer}</Text>
        <Text style={styles.text}>{this.props.result}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.lightGray,
    borderRadius: 25
  },
  text: {
    fontFamily:fontFamily.splash,
    fontSize: 50
  }
});
