import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { deviceWidth,  fontFamily } from "../../../theme/theme";
import PropTypes from 'prop-types';
export default class WatchResult extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.countdown}</Text>
        <Text style={styles.text}>{this.props.result}</Text>
      </View>
    );
  }
}
WatchResult.propTypes = {
  countdown: PropTypes.number,
  result: PropTypes.string
}
WatchResult.defaultProps = {
  countdown: 0,
  result: ''
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    width: deviceWidth,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  text: {
    fontFamily: fontFamily.splash,
    fontSize: 50,
    width: deviceWidth,
    textAlign: "center",
    justifyContent: "center"
  }
});
