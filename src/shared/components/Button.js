import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors, deviceHeight } from "../../theme/theme";
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
    position:'absolute',
    top:deviceHeight - 200,
    left: 0,
    height: 60,
    width: deviceWidth ,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  text:{
    color: colors.white,
    fontWeight:'800'
  }
});
