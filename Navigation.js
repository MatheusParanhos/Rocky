import {
  StackNavigator,
  SwitchNavigator,
  TabNavigator
} from "react-navigation";
import React from "react";
import PlayScreen from './src/rocky/screens/PlayScreen';
import WatchScreen from './src/rocky/screens/WatchScreen';
import Splash from './src/rocky/screens/SplashScreen';

const AppStack = TabNavigator (
    {
        Play: {
            screen: PlayScreen
        },
        Watch:{
            screen: WatchScreen
        }
    }
)

export const Navigation = SwitchNavigator(
    {
      Splash: Splash,
      App: AppStack
    },
    {
      initialRouteName: "Splash"
    }
  );