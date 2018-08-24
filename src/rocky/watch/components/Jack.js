import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../../../theme/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

export default class Jack extends Component {
  renderIcon = () => {
    if (this.props.jackChoice === "scissors") {
      return (
        <FontAwesome
          name={`hand-scissors-o`}
          size={35}
          color={colors.primary}
          style={{ transform: [{ rotate: "180deg" }] }}
        />
      );
    }
    if (this.props.jackChoice === "rock" || this.props.jackChoice === "paper") {
      return (
        <FontAwesome
          name={`hand-${this.props.jackChoice}-o`}
          size={35}
          color={colors.primary}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={"contain"}
          source={require("../../medias/Jack.png")}
          style={styles.imageContainer}
        />
        {this.renderIcon()}
      </View>
    );
  }
}
Jack.propTypes = {
  jackChoice: PropTypes.string.isRequired
};
Jack.defaultProps = {
  jackChoice: ""
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  imageContainer: {
    width: 150,
    height: 150
  }
});
