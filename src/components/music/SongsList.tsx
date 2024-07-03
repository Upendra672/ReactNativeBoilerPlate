import {View, Text, FlatList} from 'react-native';
import React from 'react';

export default function SongsList() {
  return (
    <View>
      <Text>SongsList</Text>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
    </View>
  );
}
