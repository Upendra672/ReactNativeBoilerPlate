/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Button} from 'react-native';

const MusicApp = () => {
  const navigation = useNavigation();
  const goToSongs = () => {
    navigation.navigate('SongLists' as never);
  };
  return (
    <View>
      <Text>Music App</Text>
      <TouchableOpacity>
        <Button title="GoToSongs" onPress={goToSongs} />
      </TouchableOpacity>
    </View>
  );
};

export default MusicApp;
