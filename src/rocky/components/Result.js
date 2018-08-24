import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors, fontFamily } from "../../theme/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

export default class Result extends Component {
  renderIcon = () => {
    if (this.props.computerChoice === "scissors") {
      return (
        <FontAwesome
          name={`hand-${this.props.computerChoice}-o`}
          size={50}
          color={colors.primary}
          style={{ transform: [{ rotate: "270deg" }] }}
        />
      );
    }
    if (
      this.props.computerChoice === "rock" ||
      this.props.computerChoice === "paper"
    ) {
      return (
        <FontAwesome
          name={`hand-${this.props.computerChoice}-o`}
          size={50}
          color={colors.primary}
          style={{ transform: [{ rotate: "180deg" }] }}
        />
      );
    }
  };
  renderChoice = () => {
    if (this.props.userChoice === "scissors") {
      return (
        <FontAwesome
          name={`hand-${this.props.userChoice}-o`}
          size={50}
          color={colors.primary}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      );
    }
    if (this.props.userChoice === "rock" || this.props.userChoice === "paper") {
      return (
        <FontAwesome
          name={`hand-${this.props.userChoice}-o`}
          size={50}
          color={colors.primary}
        />
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>{this.renderIcon()}</View>
        <Text style={styles.text}>{this.props.countdown}</Text>
        <Text style={styles.text}>{this.props.result}</Text>
        <View
          style={styles.choiceContainer}
        >
          {this.renderChoice()}
        </View>
      </View>
    );
  }
}
Result.propTypes = {
  countdown: PropTypes.number,
  result: PropTypes.string,
  userChoice: PropTypes.string,
  computerChoice: PropTypes.string
};
Result.defaultProps = {
  countdown: 0,
  result: "",
  userChoice: "",
  computerChoice: ""
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  },
  text: {
    fontFamily: fontFamily.splash,
    fontSize: 50
  },
  iconContainer: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  choiceContainer:{
    height: 100,
    width: 100,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});
