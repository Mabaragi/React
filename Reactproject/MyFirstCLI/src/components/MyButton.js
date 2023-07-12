import React from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';

const MyButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => alert('click')}>
      <Text style={{fontSize: 24}}>My button</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
