import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30, marginBottom: 10}}>Button Component</Text>
      <MyButton />
    </View>
  );
};

export default App;
