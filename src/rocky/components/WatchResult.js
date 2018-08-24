import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { deviceWidth, colors, fontFamily } from "../../theme/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
const styles = StyleSheet.create({
  container: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    width: deviceWidth,
  //  backgroundColor: "blue",
    justifyContent:'flex-end',
    alignItems:'center',
    // flexDirection: "row"
  },
  text:{
      fontFamily:fontFamily.splash,
      fontSize:50,
      width:deviceWidth,
      textAlign:'center',
      justifyContent:'center',
     // backgroundColor:'red',

  }
});
