import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';

import { Card } from 'react-native-paper';
//let Temp_Hotels = require('../Hotels.json');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      city: '',
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={styles.bgImage}>
          <View style={styles.container}>
            <Card
              style={{
                backgroundColor: 'red',
                borderRadius: 30,
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                width: 100,
                height: 90,
                marginTop: 100,
              }}>
              <Ionicons name="globe" color="yellow" size={RFValue(50)} />
            </Card>
            <Card
              style={{
                backgroundColor: 'red',
                borderRadius: 30,
                marginTop: 50,
              }}>
              <Text style={styles.title}>TRAVEL TELLER</Text>
            </Card>
            
              <TextInput
                style={styles.textInput1}
                placeholder=" COUNTRY WISH TO VISIT..."
                placeholderTextColor="yellow"
                onChangeText={(text) => {
                  this.setState({ country: text });
                }}
              />
              
              <TextInput
                style={styles.textInput2}
                placeholder="CITY WISH TO VISIT..."
                placeholderTextColor="yellow"
                onChangeText={(text) => {
                  this.setState({ city: text });
                }}
              />
            

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (this.state.country === '' && this.state.city === '') {
                  return ToastAndroid.show(
                    'PLEASE ENTER DETAILS',
                    ToastAndroid.SHORT
                  );
                } else if (this.state.country === '') {
                  return ToastAndroid.show(
                    'PLEASE ENTER COUNTRY',
                    ToastAndroid.SHORT
                  );
                } else if (this.state.city === '') {
                  return ToastAndroid.show(
                    'PLEASE ENTER CITY',
                    ToastAndroid.SHORT
                  );
                } else if (this.state.city && this.state.country) {
                  let country=this.state.country
                  let city = this.state.city
                  this.props.navigation.navigate('Hotel',{country:country,city:city});
                }
              }}>
              <Text style={styles.buttonText}>PRESS TO GO NEXT</Text>
            </TouchableOpacity>
          </View>
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
  title: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
  },
  textInput1: {
    marginTop: 80,
    marginLeft:70,
    backgroundColor: 'red',
    color: 'yellow',
    borderRadius: 20,
    width: 250,
    height: 40,
    textAlign: 'center',
  },
  textInput2: {
    marginTop: 80,
    marginLeft:70,
    backgroundColor: 'red',
    color: 'yellow',
    borderRadius: 20,
    width: 250,
    height: 40,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 40,
    width: 150,
    marginLeft: 100,
    marginTop: 100,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'yellow',
    textAlign: 'center',

    fontSize: 17,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
