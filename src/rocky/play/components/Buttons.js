import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { deviceWidth } from "../../../theme/theme";

import PropTypes from "prop-types";
import Scissors from "./ScissorsButton";
import Paper from "./PaperButton";
import Rock from "./RockButton";
export default class Buttons extends Component {
  render() {
    return (
      <View style={styles.buttonsContainer}>
        {/* <View style={styles.bottom}>
          
        </View> */}
        <View style={styles.bottom}>
          <Rock onPress={this.props.onRockPress} />
          <Paper onPress={this.props.onPaperPress} />
          <Scissors onPress={this.props.onScissorsPress} />
        </View>
      </View>
    );
  }
}
Buttons.propTypes = {
  onRockPress: PropTypes.func.isRequired,
  onPaperPress: PropTypes.func.isRequired,
  onScissorsPress: PropTypes.func.isRequired,
  userChoice: PropTypes.string,
  computerChoice: PropTypes.string,
  timer: PropTypes.number
};
Buttons.defaultProps = {
  timer: 0,
  result: "",
  userChoice: "",
  computerChoice: "",
  onRockPress: () => {},
  onPaperPress: () => {},
  onScissorsPress: () => {}
};
const styles = StyleSheet.create({
  buttonsContainer: {
    height: 300,
    width: "100%",
    //  backgroundColor: colors.gray,

    // borderRadius: 25,
    flexDirection: "column"
  },
  bottom: {
    flex: 1,
    height: 100,
    width: deviceWidth,
    flexDirection: "row",
    // backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
