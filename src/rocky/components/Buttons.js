import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors, fontFamiliy } from "../../theme/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Scissors from "./ScissorsButton";
import Paper from "./PaperButton";
import Rock from "./RockButton";
export default class Buttons extends Component {
  render() {
    return (
      <View style={styles.buttonsContainer}>
        
        <View style={styles.bottom}>
          <Rock onPress={this.props.onRockPress}/>
        </View>
        <View style={styles.top}>
          <Paper onPress={this.props.onPaperPress}/>
          <Scissors onPress={this.props.onScissorsPress}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonsContainer: {
    height: 300,
    width: '100%',
   //  backgroundColor: colors.gray,

   // borderRadius: 25,
   flexDirection:'column'
  },
  top: {
      flex:1,
    height: 100,
    width: deviceWidth / 2,
    flexDirection: "row",
    // backgroundColor: "yellow"
  },
  bottom: {
      flex:1,
    height: 100,
    width: deviceWidth,
   // backgroundColor: "orange",
    alignItems:'center',
    justifyContent:'center',
  }
});
