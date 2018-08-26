import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Proptypes from "prop-types";
import { PersistContext } from "./PersistContext";

export const UserContext = React.createContext({
  user: "",
  setUser: () => {}
});
const initialState = {
  user: ""
};
export default class UserProvider extends Component {
  constructor() {
    super();
    // this.persistContext = new PersistContext("UserContext", initialState);
    //this.state = this.persistContext.getState();
    this.state = {
      user: AsyncStorage.getItem("UserContext")
    };
    //this.state = this.getState();
  }
  componentDidMount() {
    // this.setState({user:'baraka'})
     this.getState();
  }
  componentDidUpdate() {
    this.persistState({ ...this.state });
    //  console.log(this.state.user)
  }
  getState() {
    AsyncStorage.getItem("UserContext").then(response => this.setState({user:response}));
  }
  persistState(state) {
    const stateJson = JSON.stringify(state);
    AsyncStorage.setItem("UserContext", stateJson);
     AsyncStorage.getItem("UserContext").then(response => console.log(response));
  }
  handleUserChange(user) {
    this.setState({ user });
  }
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          setUser: user => {
            this.handleUserChange(user);
          }
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
