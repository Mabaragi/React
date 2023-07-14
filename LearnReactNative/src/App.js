// 앱의 메인 페이지
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SingUp';
import HomeScreen from './pages/Home/HomeScreen';

const Stack = createNativeStackNavigator(); // 스택 네비게이터(상단 네비게이션바)
const Tab = createBottomTabNavigator(); // 하단 네비게이터

const App = () => {
  return (
    // 처음 볼 페이지를 initialRouteName 으로 정함.
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator> */}
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={style.full}>
    //  <Login />
    // </View>
  );
};

const style = StyleSheet.create({
  full: {
    flex: 1,
    // backgroundColor: 'green',
  },
});

export default App;
