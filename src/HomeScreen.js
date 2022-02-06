import React from 'react';
import {StyleSheet, View,Image, Text, Button} from 'react-native';
import safeway from '../assets/safeway-logo.png';
export default function HomeScreen({navigation}) {
  return (
    <View style = {styles.container} >
      <Image style={{width: 400, height: 400}}  
      source={{uri: safeway}}/>
      <Button
              title='Start Sharing Location'
              color="#B994FF"
              onPress= {() => {navigation.navigate('MapScreen')}}
            />
      <View style={styles.space} />
      <Button
              title='Add Trusted Contacts'
              color="#B994FF"
              onPress= {() => {navigation.navigate('ContactScreen')}}
            />
      <View style={styles.space} />
      <Button
              title='Call Authorities'
              color="#FF4444"
              onPress= {() => {navigation.navigate('CallingScreen')}}
            />
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
    height: 10,
  },
});
