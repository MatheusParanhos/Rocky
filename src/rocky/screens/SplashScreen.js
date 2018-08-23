import React, { Component } from "react";
import { Text, View, StyleSheet, TimerMixin } from "react-native";
import { withNavigation } from "react-navigation";
import { colors, fontFamily, fontSize } from '../../theme/theme'
export class Splash extends Component {
  componentDidMount() {
    console.log(this.props);
    this.navigateToApp();
  }
  navigateToApp() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate("App");
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Rocky! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  text: { 
    fontSize: 100, 
    fontFamily: "SignatraDEMO",
    color: colors.primary
  }
});

export default Splash;
