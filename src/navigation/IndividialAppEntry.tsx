/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MusicApp from '../screens/MusicApp';
import SongsList from '../components/music/SongsList';

const Stack = createStackNavigator();

const IndividualAppEntry = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MusicApp">
        <Stack.Screen name="MusicApp" component={MusicApp} />
        <Stack.Screen name="SongLists" component={SongsList} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IndividualAppEntry;
