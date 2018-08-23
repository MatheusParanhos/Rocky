import React, { Component } from 'react'
import { Text, View, StyleSheet, TimerMixin } from 'react-native'
import { withNavigation } from "react-navigation";

export class Splash extends Component {
    componentDidMount() {
        this.navigateToApp()
    }
    navigateToApp(){
        this.timer = setTimeout(() => {
            this.props.navigation.navigate("App");
          }, 2000);
    }
  render() {
    return (
      <View style={styles.container}>
        <Text> Splash </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'white'
    }
  });

  export default withNavigation(Splash)