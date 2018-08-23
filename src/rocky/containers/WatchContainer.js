import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "../../shared/components/Button";
export default class WatchContainer extends Component {
  constructor(props) {
    super(props);
    // Initialize states
    this.state = {
      JackChoice: "",
      JadeChoice: "",
      result: "",
      countdown: ""
    };
  }
  JokenPo() {
    // Reinitialize state
    this.setState({
      result: "",
      JackChoice: "",
      JadeChoice: ""
    });
    // Initialize variables
    let result = "";
    let JadeChoice = "";
    let JackChoice = "";
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        JadeChoice = "rock";
        break;
      case 1:
        JadeChoice = "paper";
        break;
      case 2:
        JadeChoice = "scissors";
        break;
    }

    const randomNumber2 = Math.floor(Math.random() * 3);

    switch (randomNumber2) {
      case 0:
        JackChoice = "rock";
        break;
      case 1:
        JackChoice = "paper";
        break;
      case 2:
        JackChoice = "scissors";
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
    let compare = function(JackChoice, JadeChoice) {
      if (JackChoice === JadeChoice) {
        result = "draw";
      } else if (JackChoice === "scissors" && JadeChoice === "paper") {
        result = "Jack won";
      } else if (JackChoice === "rock" && JadeChoice === "scissors") {
        result = "Jack won";
      } else if (JackChoice === "paper" && JadeChoice === "rock") {
        result = "Jack won";
      } else {
        result = "Jade won";
      }
    };
    // Call compare function
    compare(JackChoice, JadeChoice);

    // Set state of result
    this.countdown = setTimeout(() => {
      this.setState({
        JadeChoice,
        JackChoice,
        result
      });
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.result}</Text>
        <Text>{this.state.JackChoice} {this.state.JadeChoice}</Text>
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
