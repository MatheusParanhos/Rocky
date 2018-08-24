import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors, fontFamiliy } from "../../theme/theme";
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
export default class Rock extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome name={'hand-rock-o'} size={50} color={colors.primary}/>
        </View>
      </TouchableOpacity>
    );
  }
}
Rock.PropTypes = {
  onPress: PropTypes.func.isRequired
}
Rock.defaultProps ={
  onPress: () => {}
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: deviceWidth / 2,
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: colors.primary,
    borderRadius:25
  }
});
