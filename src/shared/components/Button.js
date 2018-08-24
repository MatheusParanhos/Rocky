import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors } from "../../theme/theme";
import PropTypes from 'prop-types'

export class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.text}> {this.props.title} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
Button.propTypes ={
  onPress: PropTypes.func.isRequired
}
Button.defaultProps = {
  onPress: () => {}
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: deviceWidth / 1.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  text:{
   // fontFamily: fontFamily.primary,
    color: colors.white,
    fontWeight:'800'
  }
});
