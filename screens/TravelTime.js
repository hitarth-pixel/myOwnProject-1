import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';

import { Card } from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
var bestTimeToVisit= null;
let Travel_Info = require('../Travel_Info.json');

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.navigation.getParam('city'),
      country: this.props.navigation.getParam('country'),
    };
    this.getCityInfo();
  }
  getCityInfo = () => {
    Travel_Info.forEach((doc) => {
      if (doc.country === this.state.country && doc.city === this.state.city) {
        bestTimeToVisit = doc.bestTimeToVisit;
      }
    });
  };
  render() {
    return (
      <SafeAreaProvider>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={styles.bgImage}>
          <ScrollView>
            <View style={styles.container}>
              
              <Text style={styles.text}>TRAVELLER INFO</Text>
              <Card
                style={{
                  backgroundColor: 'red',
                  borderRadius: 30,
                  marginTop: 60,
                  height: 500,
                }}>
                <Text style={styles.buttonText}>Best Time To Visit</Text>
                
          <Text style={styles.timeTest}>Suitable Timing of This Place to Visit is {bestTimeToVisit}</Text>
                
                
              </Card>
              <View style={styles.buttonStyleContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('TravelCity')}>
                  <IonIcons
                    name="play-back"
                    color="yellow"
                    size={RFValue(25)}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                  <IonIcons
                    name="arrow-redo"
                    color="yellow"
                    size={RFValue(25)}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button3}
                  onPress={() => {
                    this.props.navigation.navigate('HomeScreen');
                  }}>
                  <IonIcons name="search" color="yellow" size={RFValue(20)} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button3}
                  onPress={() => {
                    this.props.navigation.navigate('Hotel');
                  }}>
                  <IonIcons name="bed" color="yellow" size={RFValue(20)} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button3}
                  onPress={() => {
                    this.props.navigation.navigate('TravelCity');
                  }}>
                  <IonIcons name="airplane" color="yellow" size={RFValue(20)} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button3}
                  onPress={() => {
                    this.props.navigation.navigate('Time');
                  }}>
                  <IonIcons name="time" color="yellow" size={RFValue(20)} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  button: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 40,
    width: 50,
    marginLeft: 10,
    backgroundColor: 'green',
  },
  button2: {
    height: 35,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 30,
    width: 50,
    marginLeft: 20,
    backgroundColor: 'green',
  },
  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
  },

  buttonText: {
    color: 'yellow',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  button3: {
    height: 35,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 30,
    width: 50,
    marginLeft: 10,
    backgroundColor: 'green',
  },
  text: {
    marginTop: 8,
    marginLeft: 5,
    backgroundColor: 'red',
    color: 'yellow',
    alignItems: 'center',
    width: 370,
    height: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  timeTest:{
    textAlign:"center",
    fontSize:RFValue(30),
    borderWidth:10,
    fontWeight:'bold',
    color:'yellow',
    borderColor:'green',
    borderStyle:'dashed',
    backgroundColor:"green",
    marginTop:150
  }
});
