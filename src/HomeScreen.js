import React from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';

import safeway from '../assets/safeway-logo.png';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={{width: 400, height: 400}} source={safeway} />

      <View style={styles.space} />
      <View style={styles.buttonPurple}>
        <Button
          title='Start Sharing Location'
          color='white'
          onPress={() => {
            navigation.navigate('MapScreen');
          }}
        />
      </View>
      <View style={styles.buttonPurple}>
        <Button
          title='Add Trusted Contacts'
          color='white'
          onPress={() => {
            navigation.navigate('ContactScreen');
          }}
        />
      </View>
      <View style={styles.buttonRed}>
        <Button
          title='Call Authorities'
          color='white'
          onPress={() => {
            navigation.navigate('CallingScreen');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Add your own styles here
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    height: 20,
  },
  buttonPurple: {
    backgroundColor: '#B994FF',
    width: '70%',
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },
  buttonRed: {
    margin: 5,
    backgroundColor: '#FF4444',
    width: '70%',
    padding: 5,
    borderRadius: 10,
  },
});
