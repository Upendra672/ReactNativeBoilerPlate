/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';

const DashboardScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Go to Music App"
        onPress={() => navigation.navigate('IndividualAppEntry')}
      />
      <Button
        title="Go to Book Reader App"
        onPress={() => navigation.navigate('BookReaderApp')}
      />
      <Button
        title="Go to Alarm App"
        onPress={() => navigation.navigate('AlarmApp')}
      />
    </View>
  );
};

export default DashboardScreen;
