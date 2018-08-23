import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "../../shared/components/Button";
export default class WatchContainer extends Component {
  constructor(props) {
    super(props);
    // Initialize states
    this.state = {
      userChoice: "",
      computerChoice: "",
      result: "",
      countdown: ""
    };
  }
  JokenPo() {
    // Reinitialize state
    this.setState({
      result: ""
    });
    // Initialize variables
    let result = "";
    let Jade = "";
    let Jack = "";
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        Jade = "rock";
        break;
      case 1:
        Jade = "paper";
        break;
      case 2:
        Jade = "scissors";
        break;
    }

    const randomNumber2 = Math.floor(Math.random() * 3);

    switch (randomNumber2) {
      case 0:
        Jack = "rock";
        break;
      case 1:
        Jack = "paper";
        break;
      case 2:
        Jack = "scissors";
        break;
    }
    // Initialize Countdown
    this.setState({
      countdown: 3
    });

    startCountdown = () => {
      this.handleClock = setInterval(() => {
        decrementClock();
      }, 1000);
    };

    decrementClock = () => {
      if (this.state.countdown === 1) clearInterval(this.handleClock);
      this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      if (this.state.countdown === 0) this.setState({ countdown: "" });
    };

    // Start Countdown
    startCountdown();

    // Compare answers
    let compare = function(Jack, Jade) {
      if (Jack === Jade) {
        result = "draw";
      } else if (Jack === "scissors" && Jade === "paper") {
        result = "Jack won";
      } else if (Jack === "rock" && Jade === "scissors") {
        result = "Jack won";
      } else if (Jack === "paper" && Jade === "rock") {
        result = "Jack won";
      } else {
        result = "Jade won";
      }
    };
    // Call compare function
    compare(Jack, Jade);

    // Set state of result
    this.countdown = setTimeout(() => {
      this.setState({
        Jade,
        Jack,
        result
      });
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.result}</Text>
        <Text>{this.state.countdown}</Text>
        <Button
          title={"Rock"}
          onPress={() => {
            this.JokenPo();
          }}
        />
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
  }
});
