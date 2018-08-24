import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { deviceWidth, colors, fontFamiliy } from "../../theme/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Jack from './Jack'
import Jade from './Jade'

export default class JackJane extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Jack jackChoice={this.props.jackChoice}/>
        <Jade jadeChoice={this.props.jadeChoice}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: .8,
    width:deviceWidth,
  //  backgroundColor: "blue",
    flexDirection:'row'
  },
  imageContainer: {
    width: 150,
    height: 150
  }
});
