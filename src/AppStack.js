import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {mapDispatchToProps, mapStateToProps} from './Commons/Constants';

import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import MapScreen from './MapScreen';
import AuthoritiesScreen from './AuthoritiesScreen';

export default connect(mapStateToProps, mapDispatchToProps)(AppStack);

function AppStack() {
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='HomeScreen'>
        <MainStack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={settings.noHeader}
        />
        <MainStack.Screen
          name='ContactScreen'
          component={ContactScreen}
          options={settings.noTitle}
        />
        <MainStack.Screen
          name='MapScreen'
          component={MapScreen}
          options={settings.noTitle}
        />
        <MainStack.Screen
          name='CallingScreen'
          component={AuthoritiesScreen}
          options={settings.noTitle}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const settings = {
  noTitle: {
    title: '',
  },
  noHeader: {
    headerShown: false,
    animationEnabled: false,
  },

  //   hasHeader: {
  //     title: '',
  //     animationEnabled: false,
  //     headerStyle: {
  //       backgroundColor: 'white',
  //       elevation: 0,
  //       shadowOpacity: 0,
  //       borderBottomWidth: 0,
  //     },
  //   },

  //   noHeaderAnimated: {
  //     title: '',
  //     headerShown: false,
  //     animationEnabled: true,
  //   },

  //   hasHeaderAnimated: {
  //     title: '',
  //     animationEnabled: true,
  //     headerStyle: {
  //       backgroundColor: 'white',
  //       elevation: 0,
  //       shadowOpacity: 0,
  //       borderBottomWidth: 0,
  //     },
  //   },
};
