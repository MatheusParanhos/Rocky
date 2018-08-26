import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { deviceWidth } from "../../../theme/theme";
import Buttons from "../components/Buttons";
import Result from "../components/Result";
import PlayAgain from "../components/PlayAgain";
export default class PlayContainer extends Component {
  constructor(props) {
    super(props);
    // Initialize states
    this.state = {
      userChoice: "",
      computerChoice: "",
      result: "",
      countdown: null,
      isPlaying: false,
      firstTime: true
    };
  }

  /**
   * Reset previous state
   * @param {string} userChoice
   */
  resetState(userChoice) {
    // Reinitialize state
    this.setState(
      {
        result: "",
        userChoice: "",
        computerChoice: "",
        isPlaying: true
      },
      () => this.generateComputerChoice(userChoice)
    );
  }
  /**
   * Generate computer choice function
   * @param {string} userChoice
   */
  generateComputerChoice(userChoice) {
    // Initialize variables
    let computerChoice = "";

    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        computerChoice = "rock";
        break;
      case 1:
        computerChoice = "paper";
        break;
      case 2:
        computerChoice = "scissors";
        break;
    }
    this.jokenPo(userChoice, computerChoice);
  }
  /**
   * Joken Po function
   * @param {string} userChoice
   * @param {string} computerChoice
   * 
   * Here we define a constraint that will dictate rules for the winner
     This way we can achieve the so called 'extensibility' of code,
     becoming easier to scale into more/different set of rules
   */
  jokenPo(userChoice, computerChoice) {
    let constraint = { paper: "rock", scissors: "paper", rock: "scissors" };
    if (userChoice === constraint[computerChoice]) {
      result = "Oh no, you lost!";
    } else {
      result = "Nice, you won!!";
    }
    if (computerChoice === userChoice) {
      result = "Fair enough, it's a draw!";
    }
    // Call setCountdown function
    this.setCountDown(userChoice, computerChoice, result);
  }

  /**
   * Set Countdown
   * @param {string} userChoice
   * @param {string} computerChoice
   * @param {string} result
   */
  setCountDown(userChoice, computerChoice, result) {
    // Initialize Countdown
    this.setState(
      {
        countdown: 3
      },
      () => this.countdownAndShowResults(userChoice, computerChoice, result)
    );
  }

  countdownAndShowResults(userChoice, computerChoice, result) {
    /**
     * Timer Functions
     * @param
     */
    startCountdown = () => {
      this.handleClock = setInterval(() => {
        decrementClock();
      }, 1000);
    };
    // Start Countdown
    startCountdown();

    // Decrement clock states to avoid unwanted behaviours
    decrementClock = () => {
      if (this.state.countdown === 1) clearInterval(this.handleClock);
      this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      if (this.state.countdown === 0) this.setState({ countdown: null });
      if (this.state.countdown < 0) this.setState({ countdown: null });
    };

    // Set state of result
    this.countdown = setTimeout(() => {
      this.setState({
        userChoice,
        computerChoice,
        result,
        isPlaying: false,
        firstTime: false
      });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.bottom}>
          <Result
            computerChoice={this.state.computerChoice}
            userChoice={this.state.userChoice}
            countdown={this.state.countdown}
            result={this.state.result}
          />
          {this.state.firstTime === false &&
            this.state.isPlaying === false && <PlayAgain />}
          {this.state.isPlaying === false && (
            <Buttons
              {...this.props}
              onScissorsPress={() => {
                this.resetState("scissors");
              }}
              onPaperPress={() => {
                this.resetState("paper");
              }}
              onRockPress={() => {
                this.resetState("rock");
              }}
            />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "white"
  },
  top: {
    flex: 1
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
