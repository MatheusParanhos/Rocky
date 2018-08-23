import {
  StackNavigator,
  SwitchNavigator,
  TabNavigator
} from "react-navigation";
import React from "react";
import PlayScreen from "./src/rocky/screens/PlayScreen";
import WatchScreen from "./src/rocky/screens/WatchScreen";
import Splash from "./src/rocky/screens/SplashScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const AppStack = TabNavigator(
  {
    Play: {
      screen: PlayScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Play") {
            iconName = `logo-game-controller-a`;
          }
          return <Ionicons name={iconName} size={30} color={tintColor} />;
        },
        header: null
      })
    },
    Watch: {
      screen: WatchScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Watch") {
            iconName = `tv`;
          }
          return <FontAwesome5 name={iconName} size={30} color={tintColor} />;
        },
        header: null
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white",
        borderTopColor: "transparent"
      }
    }
  }
);

export const Navigation = SwitchNavigator(
  {
    Splash: Splash,
    App: AppStack
  },
  {
    initialRouteName: "Splash"
  }
);
