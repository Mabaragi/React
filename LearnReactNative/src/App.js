import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <View style={style.full}>
      <Login />
    </View>
  );
};

const style = StyleSheet.create({
  full: {
    flex: 1,
    // backgroundColor: 'green',
  },
});

export default App;
