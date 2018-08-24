import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { deviceWidth, colors, fontFamiliy } from "../../theme/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class Jade extends Component {
    renderIcon = () => {
        if (this.props.jadeChoice === 'scissors') {
            return (
              <FontAwesome
                name={`hand-scissors-o`}
                size={50}
                color={colors.primary}
               // style={{ transform: [{ rotate: "0deg" }] }}
              />
            );
          }
        if (this.props.jadeChoice==='rock' || this.props.jadeChoice==='paper') {
          return (
            <FontAwesome
              name={`hand-${this.props.jadeChoice}-o`}
              size={50}
              color={colors.primary}
              style={{ transform: [{ rotate: "-90deg" }] }}
            />
          );
        }
        
      };
  render() {
    return (
      <View style={styles.container}>
      {this.renderIcon()}
        <Image
          resizeMode={"contain"}
          source={require("../medias/Jade.png")}
          style={styles.imageContainer}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "red",
   flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  imageContainer: {
    width: 150,
    height: 150
  }
});
