import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Hotel from './screens/Hotel'
import HomeScreen from './screens/HomeScreen'
import TravelCity from './screens/TravelCity'
import Time from './screens/TravelTime'

export default class App extends React.Component {
  render() {
    return(
    <View style={styles.container}>
    <AppContainer/>
    </View>);
  }
}

const Switch=createSwitchNavigator(
  {
    HomeScreen:HomeScreen,
    Hotel:Hotel,
    TravelCity:TravelCity,
    Time:Time
  }
);
const AppContainer =createAppContainer(Switch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});


