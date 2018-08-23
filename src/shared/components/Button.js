import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors, fontFamiliy } from "../../theme/theme";

export class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: colors.white }}> {this.props.title} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: deviceWidth / 1.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  }
});
